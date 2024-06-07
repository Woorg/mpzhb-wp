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
</div><!-- #breadcrumbs -->

	<main class="main">
		<?php
		if ( have_posts() ) : ?>

			<?php
			/* Start the Loop */
			// while ( have_posts() ) : the_post();

			$term = get_term_by( 'slug', get_query_var( 'term' ), get_query_var( 'taxonomy' ) );
			$cat_level = get_cat_lvl($term->term_id, get_query_var( 'taxonomy' ));
			switch ($cat_level) {
				case 0:
				break;
				case 1:
					get_template_part( 'template-parts/content', 'news' );
				break;
			}

			?>


		<?php else :  ?>

		<?php get_template_part( 'template-parts/content', 'none' ); ?>

		<?php endif; ?>



	</main><!-- #main -->



<?php
get_footer();
