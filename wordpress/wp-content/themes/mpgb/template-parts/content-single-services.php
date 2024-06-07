<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>

<h1 class="main__title"><?php the_title(); ?></h1>

<div class="service">
	<div class="service__tabs tabs">
		<?php if( have_rows('service__tabs') ): ?>

		<?php
			$s_inc_1 = 0;
			$s_inc_2 = 0;
		?>

		<ul class="tabs__nav service__tabs-nav">
			<?php while( have_rows('service__tabs') ): the_row(); $s_inc_1++; ?>

				<?php

				$serviceTabName = get_sub_field('service__tab_name');
				$class = $s_inc_1 == 1 ? "tabs__item tabs__item_active" : "tabs__item ";

				?>
				<li class="<?php echo $class; ?>">
					<a href="#tab-<?php echo $s_inc_1; ?>" class="tabs__link">
						<?php if ($serviceTabName): echo $serviceTabName; endif; ?>
					</a>
				</li>

			<?php endwhile; wp_reset_query(); ?>

		</ul>

		<?php while( have_rows('service__tabs') ): the_row(); $s_inc_2++; ?>

			<?php

			$serviceTabContent = get_sub_field('service__tab_content');
			$class_2 = $s_inc_2 == 1 ? "tabs__tab tabs__tab_active" : "tabs__tab ";

			$servFormAuto = get_field('service_form_auto');
			$servFormRailway = get_field('service_form_railway');

			$serviceImage_1 = get_field('service_calculation_image_1'); // Изображение полувагона
			$serviceImage_2 = get_field('service_calculation_image_2'); // Изображение платформы

			$serviceLink_1 = get_field('service_calculation_link_1'); // Ссылка на расчет ж/д тарифа полувагона
			$serviceLink_2 = get_field('service_calculation_link_2'); // Ссылка на расчет ж/д тарифа платформы

			$serviceText_1 = get_field('service_calculation_text_1'); // Расчет ж/д тарифа текст полувагона
			$serviceText_2 = get_field('service_calculation_text_2'); // Расчет ж/д тарифа текст платформы

			$serviceSpecs_1 = get_field('service_characteristic'); // Характеристики полувагона
			$serviceSpecs_2 = get_field('service_characteristic_second'); // Характеристики платформы

			$serviceCalcTitle_1 =  get_field('service_calculation_title_1'); // Заголовок полувагона
			$serviceCalcTitle_2 =  get_field('service_calculation_title_2'); //Заголовок платформы

			?>
            <?php
                $c = get_the_content();
                $check_c_class = (count($c) > 0) ? 'top_0' : '';
            ?>

			<div id="tab-<?php echo $s_inc_2; ?>" class="<?php echo $class_2; ?>">
				<div class="service__row row">
					<?php if ( $s_inc_2 == 1 ): ?>
						<div class="service__col col-md-8">
                            <div class="service__text">
                                <?php echo $c; ?>
                            </div>
							<?php if ($serviceTabContent): echo $serviceTabContent; endif; ?>
						</div>
					<?php endif ?>

					<?php if ( $s_inc_2 == 2 ): ?>
						<div class="service__col col-md-8">
							<div class="service__row">
								<?php if ($serviceCalcTitle_1): ?>
								<h2 class="service__subtitle"><?php echo $serviceCalcTitle_1; ?></h2>
								<?php endif; ?>

								<?php if ($serviceImage_1): ?>
								<div class="service__type">
									<div class="service__type-img">
										<?php echo wp_get_attachment_image($serviceImage_1, 'full'); ?>
									</div>
									<div class="service__type-w">
										<?php if ($serviceLink_1): ?>

										<a href="<?php echo $serviceLink_1['url']; ?>" target="_blank" class="service__type-title"><?php echo $serviceLink_1['title']; ?></a>

										<?php endif; ?>

										<div class="service__type-text">
											<?php if ($serviceText_1): echo $serviceText_1; endif; ?>
										</div>
									</div>
								</div>
								<?php endif; ?>

								<?php if ($serviceSpecs_1): ?>
								<div class="service__specs">
									<?php echo $serviceSpecs_1; ?>
								</div>
								<?php endif; ?>

								<?php if ($serviceCalcTitle_2): ?>
								<h2 class="service__subtitle"><?php echo $serviceCalcTitle_2; ?></h2>
								<?php endif; ?>

								<?php if ($serviceImage_2): ?>

								<div class="service__type">
									<div class="service__type-img">
										<?php echo wp_get_attachment_image($serviceImage_2, 'full'); ?>
									</div>
									<div class="service__type-w">
										<?php if ($serviceLink_2): ?>

										<a href="<?php echo $serviceLink_2['url']; ?>" target="_blank" class="service__type-title"><?php echo $serviceLink_2['title']; ?></a>

										<?php endif; ?>

										<div class="service__type-text">
											<?php if ($serviceText_2): echo $serviceText_2; endif; ?>
										</div>
									</div>
								</div>
								<?php endif; ?>

								<?php if ($serviceSpecs_1): ?>
								<div class="service__specs">
									<?php echo $serviceSpecs_1; ?>
								</div>
								<?php endif; ?>

								<?php if( have_rows('service_requisites') ): ?>
								<div class="service__requisites">
									<h2 class="service__requisites-title">Железнодорожные реквизиты</h2>
									<ul class="service__requisites-list">
									<?php while( have_rows('service_requisites') ): the_row(); ?>
										<?php $servReqVal = get_sub_field('service_requisites_val'); ?>
										<li class="service__requisites-item"><?php if ($servReqVal): echo $servReqVal; endif; ?></li>
									<?php endwhile; wp_reset_query(); ?>
									</ul>
								</div>
								<?php endif; ?>

							</div> <!-- end row -->
						</div>
					<?php endif ?>

					<?php if ($s_inc_2 == 1) : ?>
					<div class="service__col service__col_form col-md-4 <?php echo $check_c_class; ?>">

						<?php if ($servFormAuto): ?>
						<aside class="form service__form">
							<h2 class="form__title"><?php if ($servFormAuto['service_form_auto_title']): echo $servFormAuto['service_form_auto_title']; endif; ?></h2>
							<div class="form__w">
								<?php if ($servFormAuto['service_form_auto_shortcode']): ?>

								<?php echo do_shortcode($servFormAuto['service_form_auto_shortcode']); ?>

								<?php endif; ?>
							</div>
						</aside>
						<?php endif ?>
					</div>
					<?php endif ?>

					<?php if ($s_inc_2 == 2) : ?>
					<div class="service__col service__col_form col-md-4">
						<?php if ($servFormRailway): ?>
						<aside class="form service__form">
							<h2 class="form__title"><?php if ($servFormRailway['service_form_railway_title']): echo $servFormRailway['service_form_railway_title']; endif; ?></h2>
							<div class="form__w">
								<?php if ($servFormRailway['service_form_railway_shortcode']): ?>

								<?php echo do_shortcode($servFormRailway['service_form_railway_shortcode']); ?>

								<?php endif; ?>
							</div>
						</aside>
						<?php endif ?>
					</div>
					<?php endif ?>

				</div>
			</div>

			<?php endwhile; wp_reset_query(); ?>


	<?php endif; ?>
	</div>
</div>
<!-- end service -->

