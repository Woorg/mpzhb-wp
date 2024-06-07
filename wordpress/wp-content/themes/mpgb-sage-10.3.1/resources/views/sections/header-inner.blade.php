<header class="header header_inner">
  <div class="header__container container">
    <div class="header__top flex">
      <a class="header__logo logo" href="{{ home_url('/') }}">
        <svg class="logo__icon" width="79px" height="67px">
          <use xlink:href="{{ svg_sprite_paths() }}#logo"></use>
        </svg>
      </a>
      @if (has_nav_menu('menu-1'))
        <nav class="nav header__nav">
          <button class="nav__trigger">
            <svg class="nav__icon_open" width="22px" height="22px">
              <use xlink:href="{{ svg_sprite_paths() }}#menu-icon"></use>
            </svg>

            <svg class="nav__icon_close" width="23px" height="23px">
              <use xlink:href="{{ svg_sprite_paths()  }}#menu-close"></use>
            </svg>
          </button>

          @if(has_nav_menu('menu-1'))
            {!! wp_nav_menu([
                'theme_location' => 'menu-1',
                'menu_class' => 'nav__list flex',
              ]) !!}
          @endif
        </nav>
      @endif
    </div>
  </div>
</header>
