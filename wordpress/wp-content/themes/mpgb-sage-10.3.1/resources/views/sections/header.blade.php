<header class="header">
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
          {!! wp_nav_menu(
            ['theme_location' => 'menu-1',
            'menu_id' => '',
            'container' => '',
            'menu_class' => 'nav__list flex',
            'before' => '',
            'after' => '',
            'link_before' => '',
            'link_after' => '']) !!}
        </nav>
      @endif
    </div>

    <div class="header__body">
      <h1 class="header__title"><span>International  publishing house</span>Thousands of stories<span>Hear yours</span>
      </h1>

      <dl class="header__stats">
        <div class="header__stats-item">
          <dt class="header__stats-term">700+</dt>
          <dd class="header__stats-desc"> titles in the catalogue</dd>
        </div>
        <div class="header__stats-item">
          <dt class="header__stats-term">17000+</dt>
          <dd class="header__stats-desc">reviews at Audible</dd>
        </div>
      </dl>

    </div>

  </div>

  @php
    $slider = get_field('slider');
  @endphp

  @if ( $slider )
    <div class="header__slider">
      @foreach( $slider as $slide)
        <div class="header__slider-item">
          @php
            $mob_webp = wp_get_attachment_image_url($slide['mob_webp'], 'full');
            $tablet_webp = wp_get_attachment_image_url($slide['tablet_webp'], 'full');
            $desktop_webp = wp_get_attachment_image_url($slide['desktop_webp'], 'full');
            $mob_jpg = wp_get_attachment_image_url($slide['mob_jpeg'], 'full');
            $tablet_jpg = wp_get_attachment_image_url($slide['mob_jpeg'], 'full');
            $desktop_jpg = wp_get_attachment_image_url($slide['desktop_jpg'], 'full');
          @endphp

          <picture class="header__slider-image">
            <source type="image/webp" media="(min-width:1200px)" data-srcset="{{ $desktop_webp }}">
            <source type="image/webp" media="(min-width:600px)" data-srcset="{{ $tablet_webp }}">
            <source type="image/webp" media="(min-width:300px)" data-srcset="{{ $mob_webp }}">
            <source type="image/jpeg" media="(min-width:1200px)" data-srcset="{{ $desktop_jpg }}">
            <source type="image/jpeg" media="(min-width:600px)" data-srcset="{{ $tablet_jpg }}">
            <source type="image/jpeg" media="(min-width:300px)" data-srcset="{{ $mob_jpg }}">
            <img class="lazy"
                 data-srcset="{{ $mob_jpg }} 300w, {{ $tablet_jpg }} 600w, {{ $desktop_jpg }} 1200w"
                 alt="">
          </picture>
        </div>
      @endforeach
    </div>
  @endif
</header>

