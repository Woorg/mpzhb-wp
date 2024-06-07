<?php
/**
 * The template for displaying single
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
	<section class="main__in container">

			<?php while ( have_posts() ) : the_post();


				get_template_part( 'template-parts/content', 'single-services' );


			endwhile; // End of the loop.
			?>

	</section>
</main>
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
