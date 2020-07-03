<!-- Modal -->
<div class="modal fade" id="modal-create" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <x-main-card has-header="1">
                <x-slot name="title">
                    <div class="d-flex justify-content-between w-100">
                        THÊM MENU
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </x-slot>
                <form action="{{route('admin.menu.store')}}" method="POST">
                    @csrf
                    <div class="row row--custom">
                        <div class="col-12 col--custom">
                            <div class="form-group">
                                <label for="title">Tiêu Đề: </label>
                                <input type="text" class="form-control trovie-input"
                                       name="title" id="title" placeholder="Tiêu đề menu"
                                       value="" autocomplete="off" required>
                            </div>
                            <div class="form-group">
                                <label for="type">Loại: </label>
                                <select class="form-control trovie-input" name="type" id="type" required>
                                    <option value="1">Đường dẫn</option>
                                    <option value="2">Khu vực</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="url">Link: </label>
                                <input type="text" class="form-control trovie-input"
                                       name="url" id="url" placeholder="Đường dẫn menu"
                                       value="" autocomplete="off" required>
                            </div>
                        </div>
                        <div class="col-12 col--custom text-right mb-0">
                            <button class="btn btn-base">
                                <i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;LƯU
                            </button>
                        </div>
                    </div>
                </form>
            </x-main-card>
        </div>
    </div>
</div>
