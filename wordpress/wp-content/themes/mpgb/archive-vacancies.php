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
				bcn_display();
				/*if ( function_exists('yoast_breadcrumb') ) {
					yoast_breadcrumb('','');
				}*/
			?>
		</div>
	</div>

	<main class="main">
		<?php
		if ( have_posts() ) : ?>

			<?php get_template_part( 'template-parts/content', 'vacancies' ); ?>

		<?php else :  ?>

		<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>


	</main><!-- #main -->




<?php
get_footer();
