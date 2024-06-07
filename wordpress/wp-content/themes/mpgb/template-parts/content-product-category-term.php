<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>

<div class="catalog catalog_sub">
	<div class="container catalog__in">


<h1 class="catalog__title"><?php single_cat_title(); ?></h1>
<?php
	the_archive_description( '<div class="catalog__desc">', '</div>' );
?>

<?php

	$parentid = get_queried_object_id();

	$args = array(
		'parent' => $parentid,
		'taxonomy' => 'product-category',
		'hide_empty'=> 0
	);

	$terms = get_terms($args); ?>


	<div class="catalog__nav">
		<?php echo do_shortcode('[facetwp facet="categories"]'); ?>
	</div>

	<ul class="catalog__list row facetwp-template">

	<?php while ( have_posts() ) : the_post(); ?>

		<?php $prodPrice = get_field('product__price'); ?>
		<li class="catalog__item col-md-3">
			<a href="<?php the_permalink(); ?>" class="catalog__link">
				<figure class="catalog__image">
					<?php the_post_thumbnail( 'full' ) ?>
				</figure>
				<div class="catalog__item-title"><?php the_title(); ?></div>
				<div class="catalog__item-price"><?php if($prodPrice): echo $prodPrice; endif; ?></div>
			</a>
		</li>
	<?php endwhile; wp_reset_query(); ?>

	</ul>

	<?php echo do_shortcode('[facetwp pager="false"]'); ?>

	</div><!-- #catalog-in -->
</div><!-- #catalog -->


<?php if ( ! is_active_sidebar( 'sidebar-2' ) ) {
	return;
}
?>

<?php dynamic_sidebar( 'sidebar-2' ); ?>
