<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
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

			<?php while ( have_posts() ) : the_post(); ?>
			<h1 class="main__title"><?php the_title(); ?></h1>

			<div class="vacancies">
				<div class="vacancies__row row">
					<div class="vacancies__col col-md-8">
						<article class="vacancies__item">

							<?php $salary = get_field('salary'); ?>


							<div class="vacancies__text">
								<div class="vacancies__top">
									<h2 class="vacancies__subtitle">Зарплата:</h2>

									<?php if ($salary): ?>
										<div class="vacancies__salary"><?php echo $salary; ?></div>

									<?php endif; ?>

								</div>


							<?php if( have_rows('list_full') ): ?>

								<?php while ( have_rows('list_full') ) : the_row(); ?>
									<?php $listTitle =  get_sub_field('list_full_title'); ?>

								<?php if ($listTitle): ?>
									<h2 class="vacancies__subtitle"><?php echo $listTitle; ?></h2>

								<?php endif; ?>

									<ul class="list list_style-second">
									<?php while ( have_rows('list_full_list') ) : the_row(); ?>
										<?php $listItem =  get_sub_field('list_full_desc'); ?>


										<?php if ($listItem): ?>

											<li><?php echo $listItem; ?></li>

										<?php endif; ?>


									<?php endwhile; ?>
									</ul>

								<?php endwhile; ?>
							<?php endif; ?>

							</div>
						</article>
						<a href="#back" onclick="history.back();" class="vacancies__button button button_third button_prev">Назад к списку
							<svg class="button__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_button-arrow"></use></svg>
						</a>
					</div>
					<div class="vacancies__col col-md-4">
						<aside class="form form_third vacancies__form">
							<h2 class="form__title">Отправить резюме</h2>
							<div class="form__w">
								<?php
									$resumeForm = get_field('form_shortcode');
								?>

								<?php if ($resumeForm): ?>
								<div class="form__w">
									<?php echo do_shortcode($resumeForm); ?>
								</div>
								<?php endif; ?>
							</div>
						</aside>
					</div>
				</div>
			</div>


			<?php endwhile; wp_reset_query(); // End of the loop. ?>


	</section>
</main>



<?php
get_footer();
