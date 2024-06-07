<footer class="footer">
	<div class="footer__body">
		<div class="container footer__in my_f1">
			<div class="row">
				<div class="col-md-3 col-sm-3 footer__col">
					<nav class="footer__nav nav nav_second">
						<div class="nav__title">Продукция</div>

						<?php
							wp_nav_menu( array(
								'theme_location'  => 'menu-7',
								'menu_id' => '',
								'container' => '',
								'menu_class' => 'nav__list'
							) );
						?>

					</nav>
				</div>
				<div class="col-md-3 col-sm-3 footer__col">
					<nav class="footer__nav nav nav_second">
						<div class="nav__title">Услуги</div>

						<?php
							wp_nav_menu( array(
								'theme_location'  => 'menu-8',
								'menu_id' => '',
								'container' => '',
								'menu_class' => 'nav__list'
							) );
						?>

					</nav>
				</div>
				<div class="col-md-3 col-sm-3 footer__col">
					<nav class="footer__nav nav nav_second">
						<div class="nav__title">Компания</div>

						<?php
							wp_nav_menu( array(
								'theme_location'  => 'menu-9',
								'menu_id' => '',
								'container' => '',
								'menu_class' => 'nav__list'
							) );
						?>

					</nav>
				</div>
				<div class="col-md-3 col-sm-3 footer__col">
					<nav class="footer__nav nav nav_second">
						<div class="nav__title">Новости</div>
						<ul class="nav__list">

						<?php
							$q_news = new WP_Query('post_type=news&posts_per_page=4&orderby=date&order=ASC');

						?>
						<?php if ( $q_news->have_posts() ) : while ( $q_news->have_posts() ) : $q_news->the_post(); ?>

							<li class="nav__item">
								<div class="nav__item-date"><?php the_time('d.m.y'); ?></div>
								<a href="<?php the_permalink(); ?>" class="nav__link"><?php the_title(); ?></a>
							</li>

						<?php endwhile; wp_reset_query(); endif; ?>

						</ul>
					</nav>
				</div>
			</div>
		</div>

		<div class="container footer__in my_f2">
                        <?php
							$phone = get_field('gs__phone', 'option');
							$worktime = get_field('gs__worktime', 'option');
							$email = get_field('gs__email', 'option');
							$pricelist = get_field('gs__pricelist', 'option');
						?>

						<div class="col-lg-6 col-md-12 header__top-right my_footer">


						<?php if($email) : ?>
							<a href="#popup-2" class="header__bid open-popup">
								<svg class="header__bid-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_mail"></use></svg>
								<span>Отправить заявку</span>
							</a>
						<?php endif; ?>
						<?php if($pricelist) : ?>
							<a href="<?php echo $pricelist; ?>" class="header__download open-popup">
								<svg class="header__download-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_download"></use></svg>
								<span>Скачать прайс-лист</span>
							</a>
						<?php endif; ?>

							<a href="#popup-3" class="header__tender open-popup">
								<svg class="header__tender-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_chart"></use></svg>
								<span>Пригласить в тендер</span>
							</a>
						</div>
		</div>
	</div>
	<div class="footer__bottom">
		<div class="container footer__in">
			<!-- <div class="footer__copyright">Разработка и продвижение сайта -
				<a href="#">Диаграмма</a>
			</div> -->
		</div>
	</div>
</footer>
<aside class="form form_fourth mfp-hide" id="popup">

	<h2 class="form__title">Заявка на расчет</h2>
	<div class="form__w">
        <?php echo do_shortcode('[contact-form-7 id="728" title="ЗАЯВКА НА РАСЧЕТ"]'); ?>
		<?php // $formShortcode = get_field('form_shortcode'); ?>

		<?php //if ($formShortcode): ?>
			<?php // echo do_shortcode($formShortcode); ?>
		<?php //endif; ?>
	</div>
</aside>
<aside class="form form_fourth mfp-hide" id="popup-2">
	<h2 class="form__title">Заявка на расчет</h2>
	<div class="form__w">
		<?php echo do_shortcode('[contact-form-7 id="728" title="ЗАЯВКА НА РАСЧЕТ"]'); ?>

	</div>
</aside>
<aside class="form form_five mfp-hide" id="popup-3">
	<h2 class="form__title">Пригласить в тендер</h2>
	<div class="form__w">
		<?php echo do_shortcode('[contact-form-7 id="729" title="Пригласить в тендер"]'); ?>
	</div>
</aside>



<?php wp_footer(); ?>

<?php if (is_page( array(417, 'kontakty', 'Контакты') )) : ?>
	<?php $mapObject = get_field('map'); ?>
	<?php if ($mapObject): ?>

		<script>
			ymaps.ready(init);
			var myMap;
			var myPlacemark;

			function init()
			{

				myMap = new ymaps.Map("map",
				{
					center: [<?php echo $mapObject; ?>],
					zoom: 17,
					controls: ["zoomControl"]
				});

				myPlacemark = new ymaps.Placemark([<?php echo $mapObject; ?>],
				{
					iconCaption: ''

				},
				{
					preset: 'islands#blueCircleDotIconWithCaption'

				});

				myMap.geoObjects.add(myPlacemark);
				myMap.behaviors.disable('scrollZoom');

			}

		</script>
	<?php endif; ?>


<?php endif; ?>



</body>
</html>
