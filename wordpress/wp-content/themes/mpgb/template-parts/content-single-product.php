<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>


<h1 class="card__title"><?php the_title(); ?></h1>
	<div class="card__row row">
		<?php
			$prodGallery = get_field('product__gallery');
		?>

		<div class="card__col col-md-4">

			<div class="card__slider-w">
			<?php if ($prodGallery) : ?>
				<ul class="card__slider">
					<?php foreach ($prodGallery as $prod) : ?>
					<li class="card__slider-item">
						<a href="<?php echo $prod['url'] ?>" class="card__slider-link" title="<?php echo $prod['caption'] ?>">
							<div class="card__slider-image">
								<?php echo wp_get_attachment_image( $prod['ID'], 'full' ); ?>
							</div>
						</a>
					</li>
					<?php endforeach; ?>

				</ul>
				<ul class="card__thumbs">
					<?php foreach ($prodGallery as $prod) : ?>
					<li class="card__thumbs-item">
						<div class="card__thumbs-img">
							<?php echo wp_get_attachment_image( $prod['ID'], 'thumbnail' ); ?>
						</div>
					</li>
					<?php endforeach; ?>

				</ul>
			<?php endif; ?>
			</div>

			<?php
				$discountPrice = get_field('discount_price');
				$discountQuant = get_field('discount_quant');
			?>


			<?php if( have_rows('discount_links') ): ?>

			<div class="discount card__discount">
				<div class="discount__title">Скидки!</div>

				<?php while( have_rows('discount_links') ): the_row(); ?>

					<?php $discountLink = get_sub_field('discount_link'); ?>
					<a href="<?php echo $discountLink['url']; ?>" class="discount__item"><?php echo $discountLink['title']; ?></a>

				<?php endwhile; wp_reset_query(); ?>

				<div class="discount__price"><?php if ($discountPrice): echo $discountPrice; endif; ?></div>
				<div class="discount__note"><?php if ($discountQuant): echo $discountQuant; endif; ?></div>
			</div>

			<?php endif; ?>
		</div>
		<div class="card__col col-md-8">


			<?php if( have_rows('product__tabs') ): ?>

			<?php
				$s_inc_1 = 0;
				$s_inc_2 = 0;

			?>
			<div class="card__tabs tabs">
				<ul class="tabs__nav card__tabs-nav">

				<?php while( have_rows('product__tabs') ): the_row(); $s_inc_1++; ?>

					<?php

					$prodTabName = get_sub_field('product__tab_name');
					$class = $s_inc_1 == 1 ? "tabs__item tabs__item_active" : "tabs__item ";

					?>
					<li class="<?php echo $class; ?>">
						<a href="#tab-<?php echo $s_inc_1; ?>" class="tabs__link">
							<?php if ($prodTabName): echo $prodTabName; endif; ?>
						</a>
					</li>

				<?php endwhile; wp_reset_query(); ?>

				</ul>

				<?php while( have_rows('product__tabs') ): the_row(); $s_inc_2++; ?>

					<?php

					$prodTabContent = get_sub_field('product__tab_content');
					$class_2 = $s_inc_2 == 1 ? "tabs__tab tabs__tab_active" : "tabs__tab ";
					$prodDownload = get_field('product__download');

                    $check_file = get_field('product__download', get_the_ID());
					?>

					<div id="tab-<?php echo $s_inc_2; ?>" class="<?php echo $class_2; ?>">

						<div class="card__text">
							<?php if ($prodTabContent): echo $prodTabContent; endif; ?>
						</div>

						<div class="card__actions" data-id="<?php echo get_the_ID(); ?>">
							<a href="#print" class="card__print">
								<svg class="card__print-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_print"></use></svg>
							</a>
                            <?php if ($check_file) { ?>
							<a href="<?php if ($check_file): echo $check_file; endif; ?>" class="card__download" download>
								<svg class="card__download-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_download"></use></svg>
							</a>
                            <?php } ?>
							<a href="#popup" class="card__button button open-popup">Отправить заявку</a>
						</div>
					</div>

				<?php endwhile; wp_reset_query(); ?>

			</div>

			<?php endif; ?>
		</div>
	</div><!-- #card row -->


