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
                <table class="table">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên Đơn vị</th>
                        <th style="width: 25%"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cái</td>
                        <td>
                            <button class="btn-edit-unit btn btn-warning rounded">
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                            <button class="btn-edit-unit btn btn-danger rounded">
                                <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <form action="" class="unit-form">
                    <input type="hidden" name="process-mode" value="create">
                    
                </form>
            </x-main-card>
        </div>
    </div>
</div>
