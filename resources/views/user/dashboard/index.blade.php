@extends('user.master')
@section('panel-content')
    <div class="main-panel__content__dashboard">
        <div class="row row--custom">
            <div class="card-total-wrapper col--custom col-6 col-lg-3">
                <div class="card-total">
                    <div class="card-total__header">
                        <i class="card-total__header__icon fa fa-home" aria-hidden="true"></i>
                    </div>
                    <div class="card-total__body">
                        <p class="card-total__body__number">14</p>
                        <p class="card-total__body__title">phòng trống</p>
                    </div>
                </div>
            </div>
            <div class="card-total-wrapper col--custom col-6 col-lg-3">
                <div class="card-total">
                    <div class="card-total__header">
                        <i class="card-total__header__icon fa fa-home" aria-hidden="true"></i>
                    </div>
                    <div class="card-total__body">
                        <p class="card-total__body__number">321</p>
                        <p class="card-total__body__title">phòng sắp trả</p>
                    </div>
                </div>
            </div>
            <div class="card-total-wrapper col--custom col-6 col-lg-3">
                <div class="card-total">
                    <div class="card-total__header">
                        <i class="card-total__header__icon fa fa-home" aria-hidden="true"></i>
                    </div>
                    <div class="card-total__body">
                        <p class="card-total__body__number">4</p>
                        <p class="card-total__body__title">phòng trống</p>
                    </div>
                </div>
            </div>
            <div class="card-total-wrapper col--custom col-6 col-lg-3">
                <div class="card-total">
                    <div class="card-total__header">
                        <i class="card-total__header__icon fa fa-home" aria-hidden="true"></i>
                    </div>
                    <div class="card-total__body">
                        <p class="card-total__body__number">4</p>
                        <p class="card-total__body__title">phòng trống</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-6 custom-col-sm-break">
                <x-main-card custom-classess="dashboard-issue-report" has-header="1">
                    <x-slot name="title">báo cáo vấn đề</x-slot>

                </x-main-card>
            </div>
        </div>
    </div>
@endsection
