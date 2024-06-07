@extends('layouts.app-inner')

@section('content')
  {{--  @include('partials.page-header')--}}
<div class="articles container">
  @if (! have_posts())
    <x-alert type="warning">
      <h1>{!! __('Sorry, but the page you are trying to view does not exist.', 'sage') !!}</h1>
    </x-alert>

    {!! get_search_form(false) !!}

  @endif

  </div>
@endsection
