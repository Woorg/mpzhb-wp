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


	<div class="vacancies">
		<div class="vacancies__row row">
			<div class="vacancies__col col-md-8">
			<?php while ( have_posts() ) : the_post(); ?>

				<article class="vacancies__item">
					<div class="vacancies__title"><?php the_title(); ?></div>
					<?php if( have_rows('list_short') ): ?>
					<dl class="vacancies__demands">

					<?php while ( have_rows('list_short') ) : the_row(); ?>
						<?php while ( have_rows('list_short_list') ) : the_row(); ?>

							<?php
								$listShortTerm = get_sub_field('list_short_term');
								$listShortDesc = get_sub_field('list_short_desc');
							?>
							<div class="vacancies__demants-item">
								<?php if ($listShortTerm): ?>
									<dt class="vacancies__demants-term"><?php echo $listShortTerm; ?></dt>

								<?php endif ?>
								<?php if ($listShortDesc): ?>
									<dd class="vacancies__demants-desc"><?php echo $listShortDesc; ?></dd>

								<?php endif ?>
							</div>
						<?php endwhile; ?>
					<?php endwhile; ?>

					</dl>
					<?php endif; ?>

					<?php $salary = get_field('salary'); ?>
					<?php if ($salary): ?>
						<div class="vacancies__salary"><?php echo $salary; ?></div>

					<?php endif ?>

					<a href="<?php the_permalink(); ?>" class="vacancies__link"></a>
				</article>

			<?php endwhile; ?>
			
			<?php echo wp_bootstrap_pagination(); ?>
			
			</div>
			<div class="vacancies__col col-md-4">
				<aside class="form form_third vacancies__form">
					<h2 class="form__title">Отправить резюме</h2>
					<?php
						$resumeForm = get_field('form_shortcode');
					?>

					<?php if ($resumeForm): ?>
					<div class="form__w">
						<?php echo do_shortcode($resumeForm); ?>
					</div>
					<?php endif; ?>
				</aside>
			</div>
		</div>
	</div>

</section>



