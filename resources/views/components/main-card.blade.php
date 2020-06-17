<div {{$attributes->merge(['class'=> "main-card ".$customClasses])}} {{$attributes}}>
    @if($hasHeader)
        <div class="main-card__header {{$headerClass}}">
            @isset($title)
                <div class="main-card__header__title w-100">{{$title}}</div>
            @endisset
            {{$headerContent ?? ''}}
        </div>
    @endif
    <div class="main-card__body {{$bodyClass}}">
        {{$slot}}
    </div>
</div>
