<div class="modal fade"
     id="unit-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-md" role="document">
        <div class="modal-content border-0">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        THÊM TIỆN ÍCH
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <form action="{{route('user.unit.create')}}" class="form-inline justify-content-between py-3">
                    @csrf
                    <div class="form-group">
                        <label for="">Tên đơn vị</label>
                        <input type="text" class="form-control ml-3" name="name">
                    </div>
                    <button class="btn btn-base">
                        <i class="fa fa-floppy-o" aria-hidden="true"></i> THÊM
                    </button>
                </form>
                <table class="table">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Đơn vị</th>
                        <th style="width: 25%"></th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($data['units'] as $key => $unit)
                        <tr data-id="{{$unit['id']}}"
                            data-update-url="{{route('api.user.unit.update',$unit['id'])}}"
                            data-delete-url="{{route('api.user.unit.delete',$unit['id'])}}">
                            <td>{{$key+1}}</td>
                            <td>
                                <input class="form-control" readonly type="text" name="name" value="{{$unit['name']}}"
                                       data-old="{{$unit['name']}}">
                            </td>
                            <td>
                                <button class="btn-edit-unit btn btn-warning rounded btn-edit"
                                        data-id="{{$unit['id']}}"
                                        data-state="edit">
                                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                </button>
                                <button class="btn-edit-unit btn btn-danger rounded btn-delete"
                                        data-id="{{$unit['id']}}" data-state="delete">
                                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
                <form action="" class="unit-form">
                    <input type="hidden" name="process-mode" value="create">

                </form>
            </x-main-card>
        </div>
    </div>
</div>
