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
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div class="wrapper">

    <?php
        $phone = get_field('gs__phone', 'option');
        $worktime = get_field('gs__worktime', 'option');
        $email = get_field('gs__email', 'option');
        $pricelist = get_field('gs__pricelist', 'option');
    ?>

    <header class="site-header">

        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 text-left-lg">

                        <?php if($worktime) : ?>
                            <span class="icon-with-text mgr30-lg"><i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo $worktime; ?></span>
                        <?php endif; ?>

	                    <?php if($phone) : ?>
                            <a href="<?php echo 'tel:' . str_replace( array(
		                            ")",
		                            "(",
		                            " ",
		                            "-",
	                            ), "", $phone ); ?>" class="icon-with-text"><i class="fa fa-phone" aria-hidden="true"></i> <span><?php echo $phone; ?></span></a>
	                    <?php endif; ?>

                    </div>
                    <div class="col-lg-7 text-right-lg">

	                    <?php if($email) : ?>
                            <a href="mailto:<?php echo $email; ?>" class="icon-with-text"><i class="fa fa-envelope-o" aria-hidden="true"></i> <span>Отправить заявку</span></a>
	                    <?php endif; ?>

	                    <?php if($pricelist) : ?>
                            <a href="<?php echo $pricelist; ?>" class="icon-with-text mgl30-lg" download><i class="fa fa-download" aria-hidden="true"></i> <span>Скачать прайс-лист</span></a>
	                    <?php endif; ?>

                        <a href="#" class="icon-with-text mgl30-lg"><i class="fa fa-bar-chart" aria-hidden="true"></i> <span>Пригласить в тендер</span></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="bottom-header">
            <div class="container">
                <div class="row">
                    <div class="col bottom-header__wrap-content">

                        <?php
                            $logo = get_field('gs__logo', 'option');
                            if($logo) :
                        ?>
                            <div class="logo">
                                <?php if(is_front_page() || is_home()) : ?>
                                    <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>" class="img-fluid">
                                <?php else : ?>
                                    <a href="<?php echo get_home_url(); ?>">
                                        <img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>" class="img-fluid">
                                    </a>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>

	                    <?php
                            wp_nav_menu( array(
                                'theme_location'  => 'menu-1',
                                'container'       => 'nav',
                                'container_class' => 'main-menu',
                                'echo'            => true,
                                'depth'           => 0
                            ) );
	                    ?>

	                    <?php get_search_form(); ?>

                    </div>
                </div>
            </div>
        </div>

    </header>
