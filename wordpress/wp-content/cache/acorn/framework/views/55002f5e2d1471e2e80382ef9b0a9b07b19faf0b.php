<div class="page__bottom">
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__row flex">
        <div class="footer__col">
          <a class="footer__logo logo logo_second" href="<?php echo e(home_url('/')); ?>">
            <svg class="logo__icon" width="189px" height="67px">
              <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#logo-w"></use>
            </svg>
          </a>
        </div>
        <div class="footer__col">
          <?php if( has_nav_menu('menu-2') ): ?>
            <nav class="footer__nav nav-sec">
              <?php echo wp_nav_menu([
                  'theme_location' => 'menu-2',
                  'menu_class' => 'nav-sec__list flex',
              ]); ?>

            </nav>
          <?php endif; ?>
        </div>

        <div class="footer__col">
          <?php if( has_nav_menu('menu-3') ): ?>
            <nav class="footer__nav-sec nav-sec nav-sec_second">
              <?php echo wp_nav_menu([
                  'theme_location' => 'menu-3',
                  'menu_class' => 'nav-sec__list',
              ]); ?>

            </nav>
          <?php endif; ?>

        </div>
      </div>
      <small class="footer__copyright">@ 2010 - <?php echo e(date('Y')); ?> <?php echo e(bloginfo('name')); ?></small>

    </div>
  </footer>
</div>

<?php
    $cookie_text = get_field( 'cookie_text', 'option');
    $use_of_cookies_link = get_field('use_of_cookies_link', 'option');
?>

<div id="cookie" class="cookies page__cookies">
  <div class="cookies__container container flex">
    <div class="cookies__text">
      <?php echo $cookie_text; ?>

      <?php if($use_of_cookies_link): ?>
        <a class="cookies__link" href="<?php echo e($use_of_cookies_link); ?>">use of cookies</a>
      <?php endif; ?>
    </div>
    <button class="cookies__close">
      <svg class="cookies__close-icon" width="13px" height="13px">
        <use xlink:href="<?php echo e(svg_sprite_paths()); ?>#close-icon"></use>
      </svg>
    </button>
  </div>
</div>
<?php /**PATH /var/www/mpzhb/wordpress/wp-content/themes/mpgb-sage-10.3.1/resources/views/sections/footer.blade.php ENDPATH**/ ?>