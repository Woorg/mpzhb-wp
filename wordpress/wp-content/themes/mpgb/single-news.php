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
				<div class="article">
					<div class="article__row row">
						<?php
							$termini = get_the_terms( $post->ID, 'news-category' );

							// так как функция вернула массив, то логично будет прокрутить его через foreach()

						?>

						<div class="article__col col-md-8  facetwp-template">
							<article class="article__item">
								<div class="article__meta">
									<span class="article__date"><?php the_time('d.m.y'); ?></span>
									<?php foreach( $termini as $termin ): echo '<a href="' . get_term_link( $termin ) . '" class="article__category">' . $termin->name . '</a>'; endforeach; ?>
								</div>
								<div class="article__text">
									<?php the_content(); ?>
								</div>
							</article>
							<div class="article__button-w">
								<?php if ($pred_post = get_previous_post() ) : ?>
									<a href="<?php echo get_permalink($pred_post); ?>" class="article__button button button_third button_prev">Предыдущая публикация
										<svg class="button__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_button-arrow"></use></svg>
									</a>
								<?php endif; ?>
								<?php if ($next_post = get_next_post() ) : ?>
									<a href="<?php echo get_permalink($next_post); ?>" class="article__button button button_third button_next">Следующая публикация
										<svg class="button__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_button-arrow"></use></svg>
									</a>
								<?php endif; ?>


							</div>
						</div>
						<div class="article__col col-md-4">
                            <?php /*
							<aside class="form form_second article__form">
								<?php
									$formTitle = get_field('form_title');
									$formShortcode = get_field('form_shortcode');

								 ?>
								<?php if ($formTitle): ?>
									<h2 class="form__title"><?php echo $formTitle; ?></h2>
								<?php endif ?>
								<?php if ($formShortcode): ?>
								<div class="form__w">
									<?php echo do_shortcode($formShortcode); ?>
								</div>
								<?php endif ?>
							</aside>
                             */?>
                            <aside class="form form_second article__form">
                                <h2 class="form__title">Поиск публикаций</h2>
                                <div class="form__w">
                                    <form id="filter" action="<?php echo site_url() ?>/wp-admin/admin-ajax.php" method="post">
                                        <div class="form__field form__field_select">
                                            <label for="month" class="form__label">Месяц публикаций:</label>

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


			<?php endwhile; wp_reset_query(); // End of the loop. ?>


	</section>
</main>



<?php
get_footer();
