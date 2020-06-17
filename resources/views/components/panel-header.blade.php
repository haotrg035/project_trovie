<div class="panel-content__header">
    @if(!empty($panelTitle))
        <h5 class="panel-content__header__title">{{$panelTitle}}</h5>
    @endif
    <div class="panel-content__header__content">
        {{$slot}}
    </div>
</div>
