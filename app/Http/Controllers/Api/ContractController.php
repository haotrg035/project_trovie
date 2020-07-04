<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\BaseController;
use App\Models\Contract;
use App\Models\Host;
use App\Models\Room;
use App\Models\User;
use App\Repositories\Interfaces\ContractEloquentRepositoryInterface;
use Illuminate\Http\Request;

class ContractController extends BaseController
{
    /**
     * @var ContractEloquentRepositoryInterface
     */
    private $repository;

    public function __construct(ContractEloquentRepositoryInterface $repository)
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
        $result = $this->repository->createContract($request->all());
        return $this->returnResponse($result['data'], 'create', $result['data'], $result['error']);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Contract $contract
     * @return \Illuminate\Http\Response
     */
    public function show(Contract $contract)
    {
        $result = $this->repository->getContract($contract->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function getContractsOwnUser(Request $request, User $user)
    {

    }

    public function getContractsByHost(Request $request, Host $host)
    {
        $this->checkViewAuth($host);
        $result = $this->repository->getAllByHost($host->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function getContractsByRoom(Request $request, Room $room)
    {
        $this->checkViewAuth($room);
        $result = $this->repository->getAllByRoom($room->id);
        return $this->returnResponse($result, 'show', $result);
    }

    public function renewContract(Request $request, Contract $contract)
    {
        $this->checkUpdateAuth($contract);
        $result = $this->repository->renewContract($contract->id, $request->expired_at);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }

    public function cancel(Request $request)
    {
        $result = $this->repository->cancelContract($request->id);
        return $this->returnResponse($result['data'], 'update', $result['data'], $result['error']);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Contract $contract
     * @return \Illuminate\Http\Response
     */
    public function edit(Contract $contract)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Contract $contract
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contract $contract)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Contract $contract
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contract $contract)
    {
        //
    }

    /**
     * @inheritDoc
     */
    protected function viewName()
    {
        return 'Hợp Đồng';
    }
}
