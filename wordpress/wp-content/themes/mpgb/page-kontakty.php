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

				<div class="contacts">
					<div class="contacts__row row">
						<div class="contacts__col col-md-8">
							<?php

							$address =  get_field('address');
							$workHours = get_field('working_hours');

							?>

							<h2 class="contacts__subtitle">Адрес и время работы</h2>

							<?php if ($address): ?>
							<div class="contacts__address"><?php echo $address; ?>
								<svg class="contacts__address-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_map-marker"></use></svg>
							</div>
							<?php endif ?>
							
							<?php if ($workHours): ?>
							<div class="contacts__work"><?php echo $workHours; ?>
								<svg class="contacts__work-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_clock"></use></svg>
							</div>
							<?php endif ?>

							<?php
								$s_inc_1 = 0;
								$s_inc_2 = 0;
							?>


							<h2 class="contacts__subtitle">Контакты сотрудников</h2>

							<?php if( have_rows('our_team') ): ?>
							<div class="team contacts__team">
								<div class="tabs team__tabs">
									<ul class="tabs__nav team__tabs-nav">
									<?php while( have_rows('our_team') ): the_row(); $s_inc_1++; ?>
										<?php
											$teamDep = get_sub_field('our_team_department-title');
											$class = $s_inc_1 == 1 ? "tabs__item tabs__item_active" : "tabs__item ";
										?>

										<li class="<?php echo $class; ?>">
											<a href="#tab-<?php echo  $s_inc_1; ?>" class="tabs__link"><?php if ($teamDep): echo $teamDep; endif; ?></a>
										</li>
									<?php endwhile; ?>
									</ul>

									<?php while( have_rows('our_team') ): the_row(); $s_inc_2++; ?>

										<?php
											// $serviceTabContent = get_sub_field('service_lab__tab_content');
											$class_2 = $s_inc_2 == 1 ? "tabs__tab tabs__tab_active" : "tabs__tab ";
										?>

										<div id="tab-<?php echo $s_inc_2; ?>" class="<?php echo $class_2; ?>">
											<ul class="team__list">

											<?php while( have_rows('our_team_dep') ): the_row(); ?>

												<?php while( have_rows('our_team_member') ): the_row(); ?>
													<?php
														$teamMemberPhoto = get_sub_field('our_team_member_photo');
														$teamMemberName = get_sub_field('our_team_member_fullname');
														$teamMemberPos = get_sub_field('our_team_member_position');
														$teamMemberPhone = get_sub_field('our_team_member_phone');
														$teamMemberEmail = get_sub_field('our_team_member_email');
													?>


														<il class="team__item">
															<a href="<?php echo $teamMemberPhoto['url']; ?>" class="team__image">
																<?php echo wp_get_attachment_image( $teamMemberPhoto['id'], 'medium' ); ?>
															</a>
															<div class="team__name"><?php echo $teamMemberName; ?></div>
															<div class="team__position"><?php echo $teamMemberPos; ?></div>
															<a href="<?php echo 'tel:' . str_replace( array(
																	")",
																	"(",
																	" ",
																	"-",
																), "", $teamMemberPhone ); ?>" class="team__phone"><?php echo $teamMemberPhone; ?></a>
															<a href="mailto:<?php echo $teamMemberEmail; ?>" class="team__mail"><?php echo $teamMemberEmail; ?></a>
														</il>

												<?php endwhile; ?>

											<?php endwhile; ?>

											</ul>
										</div>

									<?php endwhile; ?>

								</div>
							</div>
							<?php endif; ?>


							<h2 class="contacts__subtitle">Схема проезда</h2>
							<!--
							<div class="map contacts__map">
								<div id="map" class="map__object"></div>
							</div>
							-->
							<strong>АО «Моспромжелезобетон» (ЖБИ-18)</strong>:<p> м. «Бульвар Рокоссовского» (последний вагон из центра), автобус №3, трамвай №2, 13, 36, 29 до остановки «Ул. Тагильская» (вторая от метро). 
Выйдя из трамвая, перейдя ул. Открытое шоссе, проследовать по ул.  Тагильская 600 метров пешком до 8-ми этажного серого административного  здания (слева по ходу) «Моспромжелезобетон».</p>
							<p ></p>
							<p ></p>
							<iframe height="480" width="100%" marginheight="0" src="http://maps.google.ru/maps?f=d&amp;source=s_d&amp;saddr=%D0%9C%D0%B5%D1%82%D1%80%D0%BE+%D0%A3%D0%BB%D0%B8%D1%86%D0%B0+%D0%9F%D0%BE%D0%B4%D0%B1%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%4055.814267,37.733799&amp;daddr=55.81645,37.756748&amp;hl=ru&amp;geocode=FXuoUwMdp8U_Ag%3B&amp;mra=dme&amp;mrcr=0&amp;mrsp=1&amp;sz=15&amp;sll=55.816765,37.74484&amp;sspn=0.014901,0.038581&amp;ie=UTF8&amp;ll=55.816089,37.74529&amp;spn=0.011574,0.027466&amp;z=15&amp;output=embed" frameborder="0" width="640" marginwidth="0" scrolling="no"></iframe>
						</div>
						<div class="contacts__col col-md-4">
							<?php
								$formTitle =  get_field('form_title');
								$formShortcode =  get_field('form_shortcode');

							 ?>
							<?php if ($formShortcode): ?>
							<aside class="form contacts__form">
								<?php if ($formTitle): ?>
									<h2 class="form__title"><?php echo $formTitle; ?></h2>
								<?php endif ?>
								<div class="form__w">
									<?php echo do_shortcode($formShortcode); ?>
								</div>
							</aside>
							<?php endif ?>
						</div>
					</div>
				</div>

			<?php endwhile; wp_reset_query(); // End of the loop. ?>


	</section>
</main>


<?php
get_footer();
