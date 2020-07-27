<?php


namespace App\Repositories;

use App\Helper\TrovieHelper;
use App\Models\Invoice;
use App\Models\Host;
use App\Models\Room;
use App\Repositories\Interfaces\InvoiceEloquentRepositoryInterface;

class InvoiceRepository extends EloquentRepository implements InvoiceEloquentRepositoryInterface
{
    public function getModel()
    {
        return Invoice::class;
    }

    public function getAllByRoom($ids)
    {
        $rooms = [];
        $result = ['data' => false, 'error' => ''];
        if (!is_array($ids)) {
            $ids = [$ids];
        }
        try {
            $roomRepository = new RoomRepository();
            $rooms = $roomRepository->_model->withTrashed()->with(['invoices'])->whereIn('id', $ids)->get()->toArray();
        } catch (\Exception $e) {
            \Log::error('get invoices failed, Error: ' . $e->getMessage());
        }
        if ($rooms) {
            foreach ($rooms as $room) {
                if (!empty($room['invoices'])) {
                    foreach ($room['invoices'] as $invoice) {
                        $result['data'][] = [
                            'id' => $invoice['id'],
                            'name' => $room['name'],
                            'total_amount' => $invoice['total_amount'],
                            'state' => $invoice['state'],
                            'created_at' => $invoice['created_at'],
                            'updated_at' => $invoice['updated_at'],
                        ];
                    }
                }
            }
            return $result;
        }
        $result['error'] = 'Không tìm thấy hóa đơn nào.';
        return $result;
    }

    public function getAllByHost($id)
    {
        $roomRepository = new RoomRepository();
        $list_room_id = TrovieHelper::convertAssocIdArrayToValueIdArray(
            $roomRepository->_model->withTrashed()->where('host_id', $id)->get('id')->toArray(),
            'id'
        );
        return $this->getAllByRoom($list_room_id);
    }

    public function getDetail($id)
    {
        return $this->find($id, ['parties', 'room_detail']);
    }

    public function paidInvoice($id)
    {
        $result = ['data' => false, 'error' => ''];
        if ($this->find($id)->state !== config('app.invoice_state.pending')) {
            $result['error'] = 'Phiếu thu này đã được thanh toán hoặc bị hủy!';
            return $result;
        }
        if ($this->update($id, ['updated_at' => time(), 'state' => config('app.invoice_state.paid')])) {
            $result['data'] = $id;
        }
        return $result;
    }

    public function cancelInvoice($id)
    {
        $result = ['data' => false, 'error' => ''];
        if ($this->find($id)->state !== config('app.invoice_state.pending')) {
            $result['error'] = 'Phiếu thu này đã được thanh toán hoặc bị hủy!';
            return $result;
        }
        if ($this->update($id, ['updated_at' => time(), 'state' => config('app.invoice_state.cancel')])) {
            $result['data'] = $id;
        }
        return $result;
    }

    public function createInvoice($attributes)
    {
        $result = ['data' => false, 'error' => ''];
        $invoice_keys = ['room_id', 'total_amount', 'created_at', 'updated_at'];
        $invoice_info = [];
        foreach ($attributes as $key => $value) {
            if (in_array($key, $invoice_keys)) {
                if (in_array($key, ['created_at', 'updated_at'])) {
                    $invoice_info[$key] = TrovieHelper::convertDateFormat($value);
                } else {
                    $invoice_info[$key] = $value;
                }
            }
        }
        $result['data'] = $this->create($invoice_info);
        if ($result['data']) {
            \DB::table('invoice_details')->insert(
                array_map(function ($value) use ($result) {
                    return array_merge($value, ['invoice_id' => $result['data']->id]);
                }, $attributes['details'])
            );
        }
        return $result;
    }
}
