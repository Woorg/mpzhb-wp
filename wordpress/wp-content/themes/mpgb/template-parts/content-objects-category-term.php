<?php

/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>
<h2>!!!</h2>

<section class="main__in container">
	<h1 class="main__title"><?php post_type_archive_title(); ?></h1>
</section>

<?php
	$parentid = get_queried_object_id();

	$args = array(
		'parent' => $parentid,
		'taxonomy' => 'objects-category',
		'hide_empty'=> 0
	);

	$terms = get_terms($args);

$cat_args = array(
	'show_option_all'    => '',
	'show_option_none'   => __('No categories'),
	'orderby'            => 'name',
	'order'              => 'ASC',
	'show_last_update'   => 0,
	'style'              => 'list',
	'show_count'         => 0,
	'hide_empty'         => 1,
	'use_desc_for_title' => 1,
	'child_of'           => 0,
	'feed'               => '',
	'feed_type'          => '',
	'feed_image'         => '',
	'exclude'            => '',
	'exclude_tree'       => '',
	'include'            => '',
	'hierarchical'       => true,
	'title_li'           => '',
	'number'             => NULL,
	'echo'               => 1,
	'depth'              => 0,
	'current_category'   => 0,
	'pad_counts'         => 0,
	'taxonomy'           => 'objects-category',
	'walker'             => 'Walker_Category',
	'hide_title_if_empty' => false,
	'separator'          => ' | ',
);

echo '<ul>';
	wp_list_categories( $cat_args );
echo '</ul>';
?>


<div class="objects-full">
	<div class="objects-full__nav">
		<?php echo do_shortcode('[facetwp facet="objects"]'); ?>
	</div>

	<ul class="objects-full__list facetwp-template">

	<?php while ( have_posts() ) : the_post(); ?>

		<li class="objects-full__item">
			<?php
				$imageFull = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full');
				$imageCaption = wp_get_attachment_caption( get_post_thumbnail_id() );

			?>

			<a href="<?php echo $imageFull[0]; ?>" style="background-image: url('<?php echo $imageFull[0]; ?>');" class="objects-full__link" title="<?php the_title(); ?>">
				<div class="objects-full__w">
					<div class="objects-full__icon"></div>
					<div class="objects-full__text"><?php echo $imageCaption; ?></div>
				</div>
			</a>
		</li>

	<?php endwhile;  ?>

	</ul>

	<?php echo wp_bootstrap_pagination(); ?>


	</div><!-- #catalog-in -->
</div><!-- #catalog -->


