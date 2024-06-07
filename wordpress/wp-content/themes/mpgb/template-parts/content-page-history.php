<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package MPGB
 */

?>


<h1 class="main__title"><?php the_title(); ?></h1>

<div class="history">
	<div class="history__row row">
		<div class="history__col col-md-8">
			<h2 class="history__subtitle">Главные даты и события</h2>
			<?php if( have_rows('history_dates') ): ?>
			<ul class="history__list">
				<?php while( have_rows('history_dates') ): the_row(); ?>
					<?php
						$historyDate = get_sub_field('history_date');
						$historyEvent = get_sub_field('history_event');

					?>
					<li class="history__item">
						<span class="history__year"><?php echo $historyDate; ?></span>
						<span class="history__desc">— <?php echo $historyEvent; ?></span>
					</li>

				<?php endwhile; wp_reset_query(); ?>
			</ul>
			<?php endif; ?>

			<h2 class="history__subtitle">Подробнее</h2>
			<div class="history__text">
				<?php the_content(); ?>
			</div>

		</div>

		<div class="about__col about__col_form col-md-4">
			<?php
				$formShortcode = get_field('form_shortcode');
				$formTitle = get_field('form_title');

			?>

			<?php if (formShortcode): ?>
			<aside class="form about__form">
				<h2 class="form__title"><?php echo $formTitle; ?></h2>
				<div class="form__w">
					<?php echo do_shortcode($formShortcode); ?>
				</div>
			</aside>
			<?php endif ?>

		</div>
	</div>
</div>
