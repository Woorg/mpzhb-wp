<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>

<div class="catalog">
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

	$terms = get_terms($args);

	if($terms): ?>
		<ul class="catalog__list row">
		<?php foreach ($terms  as $term){ ?>
			<li class="catalog__item col-md-3">
				<a href="<?php echo esc_url( get_term_link( $term ) ); ?>" class="catalog__link">
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
		</ul>

	<?php else : ?>
	

	<?php endif; ?>
	
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
