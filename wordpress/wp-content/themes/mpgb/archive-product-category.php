<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

get_header(); ?>


	<div class="breadcrumbs">
		<div class="container breadcrumbs__in">
			<?php
				if ( function_exists('yoast_breadcrumb') ) {
					yoast_breadcrumb('','');
				}
			?>
		</div>
	</div>

	<main class="main">
		<div class="catalog">
			<div class="container catalog__in">

			<?php
			if ( have_posts() ) : ?>

				<h1 class="catalog__title"><?php single_cat_title(); ?> 666</h1>
				<?php
					the_archive_description( '<div class="catalog__desc">', '</div>' );
				?>

				<ul class="catalog__list row">

				<?php
				/* Start the Loop */
				// while ( have_posts() ) : the_post(); ?>

				<?php

					$parentid = get_queried_object_id();

					$args = array(
						'parent' => $parentid,
						'taxonomy' => 'product-category',
						'hide_empty'=> 0

					);

					$terms = get_terms($args);

					if($terms): ?>
						<?php foreach ($terms as $term){ ?>
							<li class="catalog__item col-md-3">

								<a href="<?php echo esc_url( get_term_link( $term->term_id ) ); ?>" class="catalog__link">
									<?php $taxImage = get_field('tax_image', $term); ?>
									<figure class="catalog__image">
										<?php echo wp_get_attachment_image( $taxImage, 'full' ); ?>
									</figure>
									<div class="catalog__item-title"><?php echo $term->name; ?>
										<span>(<?php echo $term->count; ?>)</span>
									</div>
								</a>

							</li>

						<?php } ?>

				<?php endif; ?>


				<?php//  get_template_part( 'template-parts/content', 'product-category' ); ?>


				<?php // endwhile; wp_reset_query(); ?>

				</ul>

				<?php // the_posts_navigation();

				// else :

				get_template_part( 'template-parts/content', 'none' ); ?>


				<?php endif; ?>

			</div><!-- #catalog-in -->
		</div><!-- #catalog -->
	</main><!-- #main -->





<section class="advantages advantages_third">
		<div class="advantages__in container">
			<ul class="advantages__list row">
				<li class="advantages__item advantages__item_first col-md-4">
					<div class="advantages__icon-w">
						<div class="advantages__icon"></div>
					</div>
					<div class="advantages__item-w">
						<div class="advantages__item-title">современное оборудование</div>
						<div class="advantages__item-text">В 2010 - 2012 годах на предприятии проведена полная модернизация производственного оборудования.</div>
					</div>
				</li>
				<li class="advantages__item advantages__item_second col-md-4">
					<div class="advantages__icon-w">
						<svg class="advantages__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_advantages-2"></use></svg>
					</div>
					<div class="advantages__item-w">
						<div class="advantages__item-title">сжатые сроки производства</div>
						<div class="advantages__item-text">Мощности завода позволяют справляться практически с любыми объемами производства без задержек и очередей.</div>
					</div>
				</li>
				<li class="advantages__item advantages__item_third col-md-4">
					<div class="advantages__icon-w">
						<div class="advantages__icon"></div>
					</div>
					<div class="advantages__item-w">
						<div class="advantages__item-title">гибкое ценообразование</div>
						<div class="advantages__item-text">Мы готовы идти навстречу клиентам в вопросах ценообразования.</div>
					</div>
				</li>
			</ul>
		</div>
	</section><!-- #advantages -->



<?php
get_footer();
