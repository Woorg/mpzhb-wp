@include('sections.header')

  <main id="main" class="page__inner">
    @yield('content')
  </main>“

  @hasSection('sidebar')
    <aside class="sidebar">
      @yield('sidebar')
    </aside>
  @endif

@include('sections.footer')
