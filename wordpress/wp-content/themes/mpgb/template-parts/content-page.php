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

<?php

	$prodTitle = get_field('produce_title');
	$advTitle = get_field('advantages_title');


?>


<div class="about about_second">
	<div class="about__row row">
		<div class="about__col col-md-8">
			<div class="about__text">
				<?php the_content(); ?>
			</div>
			<?php if ($prodTitle): ?>
			<div class="produce about__produce">
				<h2 class="produce__title"><?php echo $prodTitle; ?></h2>
				<?php if( have_rows('produce') ): ?>
				<ul class="produce__list">
					<?php while( have_rows('produce') ): the_row(); ?>
					<li class="produce__item">
						<?php
							// vars
							$prodItemTitle = get_sub_field('produce_item-title');
							$prodItemVal = get_sub_field('produce_item-val');
						?>

						<div class="produce__item-title"><?php echo $prodItemTitle; ?></div>
						<div class="produce__item-text"><?php echo $prodItemVal; ?></div>
					</li>
					<?php endwhile; ?>
				</ul>
				<?php endif; ?>
			</div>
			<?php endif ?>

			<?php if ($advTitle): ?>
			<h2 class="about__subtitle"><?php echo $advTitle; ?></h2>
			<?php if( have_rows('advantages_list') ): ?>
			<ul class="about__list">
				<?php while( have_rows('advantages_list') ): the_row(); ?>
					<?php $advListItem = get_sub_field('advantages_item'); ?>

					<li class="about__list-item"><?php echo $advListItem; ?></li>

				<?php endwhile; ?>
			</ul>
			<?php endif; ?>

			<?php endif ?>

			<?php
				$s_inc_1 = 0;
				$s_inc_2 = 0;
			?>

			<?php if( have_rows('our_team') ): ?>
			<div class="team">
				<h2 class="team__title">НАШ КОЛЛЕКТИВ</h2>
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
							$serviceTabContent = get_sub_field('service_lab__tab_content');
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
			<?php endif ?>
		</div>
		<div class="about__col about__col_form col-md-4">
			<?php
				$formShortcode = get_field('form_shortcode');
				$formTitle = get_field('form_title');

			?>


			<?php if ($formShortcode): ?>
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
