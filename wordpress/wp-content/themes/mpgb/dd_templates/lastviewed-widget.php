<?php

$before_widget      = $this->before_widget;
$after_widget       = $this->after_widget;
$before_title       = $this->before_title;
$title              = $this->title;
$after_title        = $this->after_title;

$post_list          = $this->post_list;

$title_is_active    = $this->post_title_settings['is_active'];
$title_is_link      = $this->post_title_settings['is_link'];

$thumb_is_active    = $this->post_thumb_settings['is_active'];
$thumb_is_link      = $this->post_thumb_settings['is_link'];
$thumb_size         = $this->post_thumb_settings['size'];

$content_is_active  = $this->post_content_settings['is_active'];
$content_is_link    = $this->post_content_settings['is_link'];
$content_type       = $this->post_content_settings['type'];
$more_active        = $this->post_content_settings['more_active'];
$more_title         = $this->post_content_settings['more_title'];

$settings_are_set   = $this->settings_are_set;

if ($post_list->have_posts()) :

	echo $before_widget;

	if ($settings_are_set): ?>
	<div class="related">
	<div class="container related__in">
		<!-- recent watched -->

			<h2 class="related__title">Вы смотрели:</h2>
			<?php $s_inc = 0; ?>
			<ul class="catalog__list row facetwp-template">
				<?php while ($post_list->have_posts()) : $post_list->the_post(); $s_inc++;

					$id = get_the_ID();
					$title = get_the_title();
					$content = $this->contentfilter($id);

					$thumb = get_the_post_thumbnail($id, 'medium');
					$hasThumb = $thumb_is_active && has_post_thumbnail() ? $thumb_is_active : false;
					$perma = get_permalink();
					$class = $s_inc <= 3 ? " related__item col-md-4 col-sm-4 col-xs-6 " : " related__item related__item_hidden col-md-4 col-sm-4 col-xs-6 " ;
					$prodTitle = get_field('product__price');

					?>
					<li class="catalog__item col-md-3">
						<a href="<?php echo $perma; ?>" class="catalog__link">
							<figure class="catalog__image">
								<?php echo $thumb; ?>
							</figure>

								<div class="catalog__item-title"><?php echo $title; ?></div>
								<div class="related__item-price"><?php if ($prodTitle): echo $prodTitle; endif; ?></div>

						</a>
					</li>
				<?php endwhile; ?>
			</ul>

			<div class="related__button-w">
				<a href="#" class="related__button button button_second">
					<svg class="button__icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_refresh"></use></svg>Показать еще</a>
			</div>

		</div>
	</div><!-- #related -->


	<?php else : ?>
		<p>No options set yet! Set the options in the <a href="<?php echo esc_url(home_url('/wp-admin/widgets.php')); ?>">widget</a>.</p>
	<?php endif; ?>
	<?php echo $after_widget; ?>
<?php endif; ?>
