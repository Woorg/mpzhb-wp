<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>



<section class="main__in container">
	<h1 class="main__title"><?php echo post_type_archive_title(); ?>
		<?php if (is_tax()): echo single_cat_title();  endif; ?>

	</h1>

	<div class="article">
		<div class="article__row row">
			<div class="article__col col-md-8 facetwp-template ">
				<div class="facet-result"></div>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php

					$terms = get_the_terms( $post->ID, 'news-category' );

				?>
				<?php foreach ($terms as $term): ?>

				<article class="article__item">
					<a href="<?php the_permalink(); ?>" class="article__title"><?php the_title() ?></a>
					<div class="article__text">
						<?php the_excerpt(30); ?>
					</div>
					<span class="article__date"><?php the_time('d.m.y'); ?></span>

					<a href="<?php echo get_term_link( $term );  ?>" class="article__category"><?php echo $term->name;  ?></a>
				</article>
				<?php endforeach; ?>

			<?php endwhile; wp_reset_query(); ?>

				<?php echo wp_bootstrap_pagination(); ?>
			</div>


			<div class="article__col col-md-4">
				<aside class="form form_second article__form">
					<h2 class="form__title">Поиск публикаций</h2>
					<div class="form__w">
						<form id="filter" action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="post">
							<div class="form__field form__field_select">
								<label for="month" class="form__label">Период публикации:</label>

								<?php echo do_shortcode('[facetwp facet="news_month"]'); ?>

								<!-- <select id="month" name="" class="form__select">
									<option value="">За все время</option>
									<option value="">Июнь</option>
									<option value="">Июль</option>
									<option value="">Август</option>
									<option value="">Сентябрь</option>
									<option value="">Октябрь</option>
									<option value="">Ноябрь</option>
									<option value="">Декабрь</option>
								</select> -->
							</div>
							<div class="form__field form__field_select">
								<label for="category" class="form__label">Категория:</label>
								<?php echo do_shortcode('[facetwp facet="news_cats"]'); ?>
							</div>
							<!-- <div class="form__button-w">
								<button type="reset" class="form__reset button button_second">Сбросить</button>
								<button type="submit" class="form__submit button">Искать</button>
								<input type="hidden" name="action" value="myfilter">
							</div> -->
						</form>
					</div>
				</aside>
			</div>

		</div>
	</div>
</section>


