<section id="global" class="{{ $block->classes }} global">
  <div class="global__container container">
    <h2 class="global__title title">{{ $title }}</h2>
    <div class="global__row flex">

      <div class="global__col">
        <h3 class="global__col-title">{{ the_field( 'branches_title' ) }}</h3>
        @if (have_rows( 'branches' ))
        @php $i = 0; @endphp
        <ul class="global__langs">
          @while(have_rows( 'branches' )) @php the_row(); $i++; @endphp
          <li class="global__lang flex">
            <a href="{{ the_sub_field( 'branch_link' ) }}" class="global__link flex">
              <svg class="global__icon" width="65px" height="44px"><use xlink:href="{{ svg_sprite_paths() }}#lang-{{ $i }}"></use></svg>
              <div class="global__lang-title">{{ the_sub_field( 'branch' ) }}</div>
            </a>
          </li>
          @endwhile
        </ul>
        @endif
      </div>


      <div class="global__col">

        <h3 class="global__col-title">{{ the_field( 'view_on_audible_title' ) }}</h3>

        @if (have_rows( 'view_on_audible' ) )
          @php $c = 3; @endphp
        <ul class="global__langs">
          @while(have_rows( 'view_on_audible' )) @php the_row(); $c++; @endphp
            @php
              $icon = get_sub_field( 'icon' );
            @endphp
          <li class="global__lang flex">
            <a href="{{ the_sub_field( 'link' ) }}" class="global__link flex">
              {!! wp_get_attachment_image( $icon, 'full', '', ['class' => 'global__icon'] ) !!}
              <div class="global__lang-title">{{ the_sub_field( 'lang' ) }}</div>
            </a>
          </li>

          @endwhile
        </ul>
        @endif
      </div>

    </div>
  </div>
</section>
