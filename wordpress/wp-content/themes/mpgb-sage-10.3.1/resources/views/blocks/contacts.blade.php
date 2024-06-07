<section id="contacts" class="{{ $block->classes }} contacts">
  <div class="contacts__container container">
    <h2 class="contacts__title title">{{ the_field( 'title' ) }}</h2>
    {{ do_shortcode(the_field( 'form' )) }}
  </div>
</section>

