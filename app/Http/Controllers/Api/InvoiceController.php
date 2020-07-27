<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\Host;
use App\Models\Invoice;
use App\Models\Room;
use App\Repositories\Interfaces\InvoiceEloquentRepositoryInterface;
use Illuminate\Http\Request;

class InvoiceController extends BaseController
{
    /**
     * @var InvoiceEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(InvoiceEloquentRepositoryInterface $repository)
    {
        parent::__construct();

        $this->repository = $repository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $result = $this->repository->createInvoice($request->all());
        return $this->returnResponse($result['data'], 'create', $result['data'], $result['error']);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Invoice $invoice
     * @return \Illuminate\Http\Response
     */
    public function show(Invoice $invoice)
    {
        $result = $this->repository->find($invoice->id, [
            'details',
            'room' => function($q) {
                return $q->withTrashed()->get();
            }
        ]);
        return $this->returnResponse($result, 'show', $result);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Invoice $invoice
     * @return \Illuminate\Http\Response
     */
    public function edit(Invoice $invoice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Invoice $invoice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Invoice $invoice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Invoice $invoice
     * @return \Illuminate\Http\Response
     */
    public function destroy(Invoice $invoice)
    {
        //
    }

    protected function viewName()
    {
        return 'Hóa Đơn';
    }

    public function getAllByHost(Request $request, Host $host)
    {
        $result = $this->repository->getAllByHost($host->id);
        return $this->returnResponse($result['data'], 'show', $result['data'], $result['error']);
    }

    public function getAllByRoom(Request $request, Room $room)
    {
        $result = $this->repository->getAllByRoom($room->id);
        return $this->returnResponse($result['data'], 'show', $result['data'], $result['error']);
    }

    public function paidInvoice(Request $request, Invoice $invoice)
    {
        $result = $this->repository->paidInvoice($invoice->id);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }

    public function cancelInvoice(Request $request, Invoice $invoice)
    {
        $result = $this->repository->cancelInvoice($invoice->id);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }
}
