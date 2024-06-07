<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package MPGB
 */

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimal-ui">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="imagetoolbar" content="no">
		<meta name="msthemecompatible" content="no">
		<meta name="cleartype" content="on">
		<meta name="HandheldFriendly" content="True">
		<meta name="format-detection" content="telephone=no">
		<meta name="format-detection" content="address=no">
		<meta name="theme-color" content="#ffffff">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
		<?php wp_head(); ?>
		
		<link rel='stylesheet' id='mpgb-style-css'  href='http://mpgb.ru/wp-content/themes/mpgb/style_override.css?ver=4.9.4' type='text/css' media='all' />
    <script> 
    var my_tp = false;
    var click_pass = false;
    var mouse_pass = false;

    jQuery(document).ready(function() {

        jQuery('.bcheck').val('bc_ok');

        var cs = true;
                        
        setTimeout("my_tp = true;", 2000);
                        

        jQuery('body').mousemove(function(){
            mouse_pass = true;
        });
                            
        jQuery('body').click(function(){
            click_pass = true;
        });
                            
        jQuery('body').keydown(function(){
            click_pass = true;
        });

        jQuery('form').submit(function() {
            if((my_tp && mouse_pass) || (my_tp && click_pass)) {
                jQuery('.bcheck').val('bc_ok2');
            }
        });

    });
    </script> 
	</head>

	<body <?php body_class('page'); ?>>
		<header class="header">
			<div class="header__top">
				<div class="container header__in">
					<div class="row">
						<?php
							$phone = get_field('gs__phone', 'option');
							$worktime = get_field('gs__worktime', 'option');
							$email = get_field('gs__email', 'option');
							$pricelist = get_field('gs__pricelist', 'option');
						?>
						<div class="col-lg-8 col-md-7 header__top-left">
                            
                            <?php if($phone) : ?>
								<span class='hidden-xs' style='color: #FFF; margin-right: 30px;'>Отдел продаж:</span><a href="<?php echo 'tel:' . str_replace( array(
										")",
										"(",
										" ",
										"-",
									), "", $phone ); ?>" class="header__phone">
									<svg class="header__phone-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_phone"></use></svg>
									<span><?php echo $phone; ?></span>
								</a>
							<?php endif; ?>
							
							<a class="header__phone" href="mailto:sale@mpgb.ru"><svg class="header__bid-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_mail"></use></svg>
							sale@mpgb.ru</a>
							
							<?php if($worktime) : ?>
								<div class="header__time hidden-xs">
									<svg class="header__time-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_clock"></use></svg>
									<span><?php echo $worktime; ?></span>
								</div>
							<?php endif; ?>

							

						</div>
						<div class="col-lg-4 col-md-5 header__top-right">


						<!--
						<?php if($email) : ?>
							<a href="#popup-2" class="header__bid open-popup">
								<svg class="header__bid-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_mail"></use></svg>
								<span>Отправить заявку</span>
							</a>
						<?php endif; ?>
						-->
						<?php if($pricelist) : ?>
							<a href="<?php echo $pricelist; ?>" class="header__download open-popup">
								<svg class="header__download-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_download"></use></svg>
								<span>Скачать прайс-лист</span>
							</a>
						<?php endif; ?>

							<a href="#popup-3" class="header__tender open-popup">
								<svg class="header__tender-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_chart"></use></svg>
								<span>Пригласить в тендер</span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="header__body">
				<div class="container header__in">
					<?php
						$logo = get_field('gs__logo', 'option');
						if($logo) :
					?>
						<?php if(is_front_page() || is_home()) : ?>
							<div class="header__logo logo" style="background-image: url('<?php echo $logo['url']; ?>');">Моспромжелезобетон</div>
						<?php else : ?>
							<a href="<?php echo get_home_url(); ?>" class="header__logo logo" style="background-image: url('<?php echo $logo['url']; ?>');">Моспромжелезобетон</a>
						<?php endif; ?>
					<?php endif; ?>

					<nav class="header__nav nav">
						<label for="navTrigger" class="nav__trigger">
							<div class="nav__trigger-text">Меню</div>
							<svg class="nav__trigger-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_bars"></use></svg>
						</label>
						<input id="navTrigger" type="checkbox" class="nav__checkbox" />
							<?php
								wp_nav_menu( array(
									'theme_location'  => 'menu-1',
									'menu_id' => '',
									'container' => '',
									'menu_class' => 'nav__list',
									'walker' => new Custom_Walker_Nav_Menu()
								) );
							?>
					</nav>
					<div class="header__search-form search-form">
						<?php get_search_form(); ?>

					</div>
				</div>
			</div>
		</header>

		<!-- end header -->





