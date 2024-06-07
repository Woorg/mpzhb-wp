<?php

/**

 * Template Name: Главная страница

 */


get_header(); ?>

		<section class="hero">

			<div class="hero__slider slider">

				<ul class="slider__list">
					<?php
						$bannerImage = get_field('hero_image');
						$size = 'full'; // (thumbnail, medium, large, full or custom size)
					?>

					<li style="background-image: url('<?php if( $bannerImage ) : echo wp_get_attachment_image_url($bannerImage, $size); else : echo get_template_directory_uri().'/assets/images/content/banner-img-1.jpg'; endif; ?>');" class="slider__item">

						<div class="container slider__in">
							<?php
								$bannerTitle = get_field('hero_title');
								$bannerText = get_field('hero_text');
								$bannerLink = get_field('hero_link');
								$bannerButtonText = get_field('hero_button_text');


							 ?>
							<div class="slider__item-w">

								<h1 class="hero__title">
									<?php
										if ($bannerTitle) :
											echo $bannerTitle;
										endif;
									?>
								</h1>

								<div class="hero__text">
									<?php
										if ($bannerText) :
											echo $bannerText;
										endif;
									?>
								</div>

								<a href="<?php if ($bannerLink) : echo $bannerLink; endif; ?>" class="hero__button button"><?php if ($bannerButtonText) : echo $bannerButtonText; endif; ?>

									<svg class="button__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_button-arrow"></use></svg>

								</a>

							</div>

						</div>

					</li>

				</ul>

			</div>

		</section>


		<section class="section">

			<div class="container section__in">

				<div class="row">

					<div class="col-md-7">
						<?php
							$aboutTitle = get_field('about_title');
							$aboutText = get_field('about_text');

						 ?>

						<div class="about">

							<h2 class="about__title"><?php if ($aboutTitle) : echo $aboutTitle; endif; ?></h2>

							<div class="about__text">
								<?php if ($aboutText) : echo $aboutText; endif; ?>

							</div>

							<div class="produce">

								<?php $produceTitle = get_field('produce_title'); ?>

								<h2 class="produce__title"><?php if ($produceTitle) : echo $produceTitle; endif; ?></h2>

								<?php if( have_rows('produce') ): ?>

								<ul class="produce__list">
									<?php while( have_rows('produce') ): the_row(); ?>

										<?php
											// vars
											$produceItemTitle = get_sub_field('produce_item-title');
											$produceItemVal = get_sub_field('produce_item-val');

										?>

										<li class="produce__item">
											<?php if( $produceItemTitle ): ?>
												<div class="produce__item-title"><?php echo $produceItemTitle; ?></div>
											<?php endif; ?>

											<?php if( $produceItemVal ): ?>
												<div class="produce__item-text"><?php echo $produceItemVal; ?></div>
											<?php endif; ?>
										</li>

									<?php endwhile; wp_reset_query(); ?>

								</ul>

								<?php endif; ?>
							</div>

						</div>

					</div>

					<div class="col-md-5">

						<div class="advantages">
							<?php $advantTitle = get_field('advantages_title'); ?>


							<h2 class="advantages__title"><?php if ($advantTitle) : echo $advantTitle; endif; ?></h2>

							<?php if( have_rows('advantages_list') ): ?>

							<ul class="advantages__list">

							<?php while( have_rows('advantages_list') ): the_row(); ?>

								<?php
									// vars
									$advantItem = get_sub_field('advantages_item');

								?>

								<?php if( $advantItem ): ?>
									<li class="advantages__item"><?php echo $advantItem; ?></li>
								<?php endif; ?>

							<?php endwhile; wp_reset_query(); ?>


							</ul>

							<?php endif; ?>

						</div>

					</div>

				</div>

			</div>

		</section>



		<section class="products">

			<div class="container products__in">

				<?php $mainProductsTitle = get_field('main_products_title'); ?>

				<h2 class="products__title"><?php if ($mainProductsTitle) : echo $mainProductsTitle; endif; ?></h2>

				<div class="products__list-w">

					<ul class="products__list">
						<?php

                             if( have_rows('products_home', 'option') ): $i = 0;

                                 while( have_rows('products_home', 'option') ): the_row();
                                    $i++;

                                    $pr_name = get_sub_field('pr_home_name');
                                    $pr_url = str_replace(".swtest.ru", "", get_sub_field('pr_home_url'));
                                    $pr_foto = get_sub_field('pr_home_foto');
                            ?>
                            <li class="products__item">
                                <a href="<?php echo $pr_url; ?> " class="products__link">
                                    <figure class="products__image">
                                        <img src="<?php echo $pr_foto; ?>" />
                                    </figure>
                                    <div class="products__item-title"><?php echo $pr_name ?></div>
                                </a>
                            </li>
                                <?php endwhile;
                            endif;

                        ?>
					</ul>

				</div>

			</div>

		</section>



		<section class="services">

			<div class="services__in container">

				<?php $servicesTitle = get_field('services_title'); ?>

				<h2 class="services__title"><?php if ($servicesTitle) : echo $servicesTitle; endif; ?></h2>

				<ul class="advantages__list row">
					<?php
						$args = array(
							'post_type'   =>  'services',
							'orderby'     =>  'date',
							'order'       =>  'ASC'
						);

						$q = new WP_Query( $args );
						$s_inc = 0;
					?>

					<?php while ( $q->have_posts()) : $q->the_post(); $s_inc++; ?>

					<li class="advantages__item advantages__item-new col-md-4">
						
                            <div class="advantages__icon-w-new">
                                <!-- <svg class="services__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_service-icon-<?php echo $s_inc; ?>"></use></svg> -->
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/service<?php echo $s_inc; ?>.svg" />
                            </div>

                            <div class="advantages__item-w"><a href="<?php the_permalink(); ?>" class="services__link-new">
                                <div class="advantages__item-title-new" style='text-decoration: underline;'><?php the_title(); ?></div>
                                <div class="advantages__item-text-new"><?php the_excerpt(); ?></div>
                                </a>
                            </div>

							

						</a>

					</li>

					<?php endwhile; ?>
					<?php wp_reset_query(); ?>

				</ul>

			</div>

		</section>



		<section class="objects">

			<?php

				$objectsTitle = get_field('objects_title');
				$objectsButtonText = get_field('objects_button_text');
				$objectsButtonLink = get_field('objects_button_link');


			 ?>

			<h2 class="objects__title"><?php if ($objectsTitle) : echo $objectsTitle; endif; ?></h2>

			<div class="objects__carousel carousel">

				<?php
					$args = array(
						'post_type'   =>  'objects',
						'post_per_page' => 8,
						'orderby'     =>  'date',
						'order'       =>  'DESC'
					);

					$q = new WP_Query( $args );

					?>

				<ul class="carousel__list">
					<?php if ( $q->have_posts() ) : while ( $q->have_posts() ) : $q->the_post(); ?>

					<li class="carousel__item">

						<div href="<?php the_post_thumbnail_url( 'full' ); ?>" style="background-image: url('<?php the_post_thumbnail_url( 'full' ); ?>');" class="carousel__link">

							<div class="carousel__w">

								<div class="carousel__icon"></div>

								<div class="carousel__text"><?php the_post_thumbnail_caption(); ?></div>

							</div>

						</div>

					</li>

					<?php endwhile; wp_reset_query(); endif; ?>


				</ul>

			</div>

			<div class="objects__button-w">

				<a href="<?php if ($objectsButtonLink) : echo $objectsButtonLink; endif; ?>" class="objects__button button"><?php if ($objectsButtonText) : echo $objectsButtonText; endif; ?>

					<svg class="button__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_button-arrow"></use></svg>

				</a>

			</div>

		</section>



		<section class="clients">

			<?php

				$clientsTitle = get_field('clients_title');
				$clientsGallery = get_field('clients_gallery');

			 ?>

			<div class="container clients__in">

				<h2 class="clients__title"><?php if ($clientsTitle) : echo $clientsTitle; endif; ?></h2>

				<div class="clients__list-w">

					<?php if ($clientsGallery) : ?>

					<ul class="clients__list">

						<?php foreach ($clientsGallery as $client) : ?>


						<li class="clients__item">

							<div class="clients__link" title="<?php echo $client['caption'] ?>">

								<?php echo wp_get_attachment_image( $client['ID'], 'full' ); ?>

							</div>

						</li>

						<?php endforeach; ?>
					</ul>

					<?php endif; ?>

				</div>

			</div>

		</section>



<?php get_footer();

