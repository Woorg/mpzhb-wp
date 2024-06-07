<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>


<article class="article__item">
	<a href="<?php the_permalink(); ?>" class="article__title"><?php the_title(); ?></a>
	<div class="article__text">
		<?php the_excerpt(); ?>
	</div>
</article>

