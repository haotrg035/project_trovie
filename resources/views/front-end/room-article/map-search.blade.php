@extends('front-end.master')
@section('style')

@endsection
@section('body')
    <section class="section-map">
        <div class="row">
            <div class="col-lg-3">
                <div class="map-filters">

                </div>
            </div>
            <div class="col-lg-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, repellendus,
                totam. Accusantium aut delectus dolor eveniet fugit id ipsam iste minima minus molestiae, nobis quas
                quis, quisquam reiciendis totam, voluptatibus.
            </div>
        </div>
    </section>
@endsection
@section('script')
    <script src="{{asset('/frontend/js/mapSearch/mapSearch.js')}}"></script>
@endsection
