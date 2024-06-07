<?php
/**
 * The template for displaying search results pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
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
	<section class="main__in container">

		<?php
		if ( have_posts() ) : ?>

			<h1 class="main__title"><?php printf( esc_html__( 'Результат поиска: %s', 'mpgb' ), '<span>' . get_search_query() . '</span>' );
				?></h1>
			<div class="article">
				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();

					/**
					 * Run the loop for the search to output the results.
					 * If you want to overload this in a child theme then include a file
					 * called content-search.php and that will be used instead.
					 */
					get_template_part( 'template-parts/content', 'search' );

				endwhile; ?>

			</div>

			<?php echo wp_bootstrap_pagination(); ?>

			<?php //the_posts_navigation(); ?>



		<?php else :

			get_template_part( 'template-parts/content', 'search-none' );

		endif; ?>

	</section>
</main>


<?php
get_footer();
