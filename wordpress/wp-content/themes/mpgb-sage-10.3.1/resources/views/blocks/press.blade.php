<section id="press-room" class="{{ $block->classes }} press">
  <div class="press__container container">
    <h2 class="press__title title">{{ $title }}</h2>
    <div class="press__slider-w">
      @php
        $args = array(
          'posts_per_page' => 9,
          'cat' => '1',
          'order' => 'desc',
          'orderby' => 'date',
            'no_found_rows'          => true,
            'cache_results'          => true,
//          'update_post_term_cache' => true,
//          'update_post_meta_cache' => true,
        );
        $query = new WP_Query( $args );
      @endphp

      @if ( $query->have_posts() )
        <div class="press__slider">
          @while ( $query->have_posts() )
            @php $query->the_post();  @endphp
            <div class="press__slide">
              <div class="press__slide-w">
                <div class="press__date">{{ get_post_time( 'd/m/Y' ) }}</div>
                <div class="press__slide-title">
                  <a class="press__link" href="{{ the_permalink() }}">{{ the_title() }}</a>
                </div>
                <div class="press__text">{{ $query->post->post_excerpt }}</div>
                <a class="press__more" href="{{ the_permalink() }}">See more</a>
              </div>
            </div>
          @endwhile
        </div>
      @endif @php wp_reset_postdata() @endphp

      <button class="press__arrow press__arrow_back">
        <svg class="press__arrow-icon" width="46px" height="46px">
          <use xlink:href="{{ svg_sprite_paths() }}#arrow"></use>
        </svg>
      </button>

      <button class="press__arrow press__arrow_next">
        <svg class="press__arrow-icon" width="46px" height="46px">
          <use xlink:href="{{ svg_sprite_paths() }}#arrow"></use>
        </svg>
      </button>

    </div>
  </div>
</section>

