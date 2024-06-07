<section id="books" class="{{ $block->classes }} books">
  <div class="books__container container">
    @if( $title )
      <h2 class="books__title title">{{ $title }}</h2>
    @endif
    @if( $title )
      <div class="books__text">{!! $text !!}</div>
    @endif

    <div class="books__categories flex">
      @foreach($books_cats as $item)
        @php
          $rgba       = $item['rgba'];
          $bg_color = $item['bg_color'];
          $image_webp = wp_get_attachment_image_url($item['image_webp'], 'full');
          $image_jpg  = wp_get_attachment_image_url($item['image_jpg'], 'full');
          $cat_title = $item['cat_title'];
          $cat_desc = $item['cat_desc'];
        @endphp

        <div class="books__category">
          <div class="books__gradient"
               style="background-color: {{ $rgba }}; background-image: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 91%);"></div>
          <picture class="books__picture">
            <source data-srcset="{{ $image_webp }}" type="image/webp">
            <img class="lazy" src="{{ $image_jpg }}" alt="">
          </picture>
          <div class="books__banner" style="background-color: {{ $bg_color }};">
            <div class="books__banner-title">{{ $cat_title }}</div>
            <div class="books__banner-text">{{ $cat_desc }}</div>
            <svg class="books__banner-badge" width="153" height="20" viewBox="0 0 153 20" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M-49 -289V-0.717712L32.5066 -0.830383C33.8102 -0.830383 35.1021 -0.830353 36.394 -0.717712C53.6468 0.148865 68.9617 7.08148 76.2433 17.4111L77.5 19.1963L78.7567 17.4111C86.0383 7.07285 101.341 0.183533 118.606 -0.717712C119.886 -0.787048 121.19 -0.830383 122.493 -0.830383L538 -0.717712V-289H-49Z"
                fill="{{ $bg_color }}"/>
            </svg>
          </div>
          <div class="books__cat-w">
            <div class="books__cat-title books__cat-title_horizontal">{{ $cat_title }}</div>
            <div class="books__cat-title books__cat-title_vertical">{{ $cat_title }}</div>
          </div>
        </div>
      @endforeach
    </div>
  </div>
</section>

