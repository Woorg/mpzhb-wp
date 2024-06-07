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
		<?php if( have_rows('service_man__tabs') ): ?>

		<?php
			$s_inc_1 = 0;
			$s_inc_2 = 0;
		?>

		<ul class="tabs__nav service__tabs-nav">
			<?php while( have_rows('service_man__tabs') ): the_row(); $s_inc_1++; ?>

				<?php

				$serviceTabName = get_sub_field('service_man__tab_name');
				$class = $s_inc_1 == 1 ? "tabs__item tabs__item_active" : "tabs__item ";

				?>
				<li class="<?php echo $class; ?>">
					<a href="#tab-<?php echo $s_inc_1; ?>" class="tabs__link">
						<?php if ($serviceTabName): echo $serviceTabName; endif; ?>
					</a>
				</li>

			<?php endwhile; wp_reset_query(); ?>

		</ul>
		<div class="service__text">
			<?php the_content(); ?>
		</div>

		<?php while( have_rows('service_man__tabs') ): the_row(); $s_inc_2++; ?>

			<?php

			$serviceTabContent = get_sub_field('service_man__tab_content');
			$class_2 = $s_inc_2 == 1 ? "tabs__tab tabs__tab_active" : "tabs__tab ";

			$servManGalleryTitle = get_field('service_man_gallery_title');
			$servManGallery = get_field('service_man_gallery');

			$servFormMan = get_field('service_form_manufacture');
			?>

			<div id="tab-<?php echo $s_inc_2; ?>" class="<?php echo $class_2; ?>">
				<div class="service__row row">
					<?php if ( $s_inc_2 == 1 ): ?>
						<div class="service__col col-md-8">
							<div class="service__row">
								<div class="service__text">
								<?php if ($serviceTabContent): echo $serviceTabContent; endif; ?>
								</div>
							</div>

							<div class="service__row">
								<?php if ($servManGallery): ?>

								<h2 class="service__subtitle"><?php if ($servManGalleryTitle): echo $servManGalleryTitle; endif; ?></h2>

								<ul class="examples">
									<?php foreach ($servManGallery as $serv_gallery) : ?>

									<li class="examples__item">
										<a href="<?php echo $serv_gallery['url']; ?>" style="background-image: url('<?php echo $serv_gallery['sizes']['medium']; ?>');"
										 title="<?php echo $serv_gallery['title']; ?>" class="examples__link">
											<div class="examples__w">
												<div class="examples__icon"></div>
												<div class="examples__text"><?php echo $serv_gallery['title']; ?></div>
											</div>
										</a>
									</li>
									<?php endforeach; ?>
								</ul>
								<?php endif ?>
							</div>
						</div>
					<?php endif ?>

					<?php if ( $s_inc_2 == 2 ): ?>
						<div class="service__col col-md-8">

							<?php if ($serviceTabContent): echo $serviceTabContent; endif; ?>

						</div>
					<?php endif ?>




				</div>
			</div>

			<?php endwhile; wp_reset_query(); ?>

			<div class="service__col service__col_form col-md-4 stupid_form">

				<?php if ($servFormMan): ?>
				<aside class="form service__form">
					<h2 class="form__title"><?php echo $servFormMan['service_form_manufacture_title']; ?></h2>
					<div class="form__w">
						<?php if ($servFormMan['service_form_manufacture_shortcode']): ?>

						<?php echo do_shortcode($servFormMan['service_form_manufacture_shortcode']); ?>

						<?php endif; ?>
					</div>
				</aside>
				<?php endif; ?>
			</div>


	<?php endif; ?>
