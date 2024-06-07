<section id="mission" class="{{ $block->classes }} mission">
  <div class="mission__container container">
    <div class="mission__w">
      <h2 class="mission__title title">{{ the_field( 'title' ) }}</h2>
      <div class="mission__text wysiwyg">
        {{ the_field( 'text' ) }}
      </div>
    </div>
  </div>

  @php
    $image_mob_w = wp_get_attachment_image_url(get_field( 'image_mob_w' ), 'full');
    $image_tablet_w = wp_get_attachment_image_url(get_field( 'image_tablet_w' ), 'full');
    $image_desktop_w = wp_get_attachment_image_url(get_field( 'image_desktop_w' ), 'full');
    $image_mob_j = wp_get_attachment_image_url(get_field( 'image_mob_j' ), 'full');
    $image_tablet_j = wp_get_attachment_image_url(get_field( 'image_tablet_j' ), 'full');
    $image_desktop_j = wp_get_attachment_image_url(get_field( 'image_desktop_j' ), 'full');
  @endphp

  <picture class="mission__bg">
    <source type="image/webp" media="(min-width:1200px)" data-srcset="{{ $image_desktop_w }}">
    <source type="image/webp" media="(min-width:600px)" data-srcset="{{ $image_tablet_w }}">
    <source type="image/webp" media="(min-width:300px)" data-srcset="{{ $image_mob_w }}">

    <source type="image/jpeg" media="(min-width:1200px)" data-srcset="{{ $image_desktop_j }}">
    <source type="image/jpeg" media="(min-width:600px)" data-srcset="{{ $image_tablet_j }}">
    <source type="image/jpeg" media="(min-width:300px)" data-srcset="{{ $image_mob_j }}">

    <img class="lazy" data-srcset="{{ $image_mob_j }} 300w, {{ $image_tablet_j }} 600w {{ $image_desktop_j }} 1200w"
         alt="">
  </picture>

</section>

