<?php
/**
 * MPGB functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package MPGB
 */


if ( ! function_exists( 'mpgb_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function mpgb_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on MPGB, use a find and replace
		 * to change 'mpgb' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'mpgb', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'menu-1' => esc_html__( 'Primary', 'mpgb' ),
			'menu-2' => esc_html__( 'Products', 'mpgb' ),
			'menu-3' => esc_html__( 'Services', 'mpgb' ),
			'menu-4' => esc_html__( 'Оbjects', 'mpgb' ),
			// 'menu-5' => esc_html__( 'Primary', 'mpgb' ),
			// 'menu-6' => esc_html__( 'Primary', 'mpgb' ),
			'menu-7' => esc_html__( 'Footer-product', 'mpgb' ),
			'menu-8' => esc_html__( 'Footer-services', 'mpgb' ),
			'menu-9' => esc_html__( 'Footer-company', 'mpgb' )
			// 'menu-10' => esc_html__( 'Footer-news', 'mpgb' )
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'mpgb_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'mpgb_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mpgb_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'mpgb_content_width', 640 );
}
add_action( 'after_setup_theme', 'mpgb_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mpgb_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'mpgb' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'mpgb' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Subcategory', 'mpgb' ),
		'id'            => 'sidebar-2',
		'description'   => esc_html__( 'Add widgets here.', 'mpgb' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'mpgb_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function mpgb_scripts() {


	wp_enqueue_style( 'mpgb-style', get_stylesheet_uri() );

	#bootstrap css
	wp_enqueue_style( 'bootstrap', get_template_directory_uri() . '/assets/styles/bootstrap.min.css' );

	#bootstrap-theme css
	wp_enqueue_style( 'bootstrap-theme', get_template_directory_uri() . '/assets/styles/bootstrap-theme.min.css' );

	#app css
	wp_enqueue_style( 'app-css', get_template_directory_uri() . '/assets/styles/app.min.css' );

	#slick js
	// wp_enqueue_script( 'slick', get_template_directory_uri() . '/assets/scripts/slick.min.js', array( 'jquery' ), '1.4', true );

	#magnific-popup js
	// wp_enqueue_script( 'magnific-popup', get_template_directory_uri() . '/assets/scripts/jquery.magnific-popup.min.js', array( 'jquery' ), '1.4', true );

	#jquery js

	if (is_page( array(417, 'kontakty', 'Контакты') ) ):
		# code...
	wp_enqueue_script('map', '//api-maps.yandex.ru/2.1/?lang=ru_RU', array() , '45345', true);

	endif;


	wp_enqueue_script('jquery', array(''), '', true);

	#app js
	wp_enqueue_script('app-js', get_template_directory_uri() . '/assets/scripts/app.min.js', array('jquery'), '', true);

	wp_enqueue_script( 'mpgb-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'mpgb-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	#custom
    wp_enqueue_style( 'custom-css', get_template_directory_uri() . '/assets/styles/custom-wm.css' );
    wp_enqueue_script('custom-js', get_template_directory_uri() . '/js/custom-wm.js', array('jquery'), '', true);
    wp_localize_script( 'custom-js', 'wm_ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
}
add_action( 'wp_enqueue_scripts', 'mpgb_scripts' );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom Post Types
 */
require get_template_directory() . '/inc/custom-post-types.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


/**
 * Custom walker nav menu.
 */

require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';


/**
 * Change excerpt length
 */

function new_excerpt_length($length) {
	return 20;
}
add_filter('excerpt_length', 'new_excerpt_length');


/**
 * Remove brackets excerpt
 */

add_filter('excerpt_more', function($more) {
	return '...';
});

/**
 * Remove archive title hook
 */

function artabr_remove_name_cat( $title ){
	if ( is_category() ) {
		$title = single_cat_title( '', false );
	} elseif ( is_tag() ) {
		$title = single_tag_title( '', false );
	}
	return $title;
}
add_filter( 'get_the_archive_title', 'artabr_remove_name_cat' );


/**
 * How deep we are
 */


function get_cat_lvl($cat_id, $taxonomy){
	$max_depth_to_test = intval(9); // максимальная глубина подкатегорий
	$last_depth = 0;
	$term = get_term_by( 'id', $cat_id, $taxonomy );
	for ( $counter = 1; $counter <= $max_depth_to_test; $counter += 1) {
		if ($term->parent) {
			$term=get_term_by( 'id', $term->parent, $taxonomy );
			$last_depth = $counter;
		}
	}
	$last_depth +=1;
	return $last_depth;
}




/**
 * Fix breadcrumbs to psd
 */


add_filter('wpseo_breadcrumb_single_link' ,'remove_shop', 10 ,2);

function remove_shop($link_output, $link ){
	if( $link['text'] == 'Продукция' ) {
		$link_output = '';
	}
	return $link_output;
}


/**
 * Pagination
 */


function wp_bootstrap_pagination( $args = array() ) {

	$defaults = array(
		'range'           => 4,
		'custom_query'    => FALSE,
		'previous_string' => __( '<', 'text-domain' ),
		'next_string'     => __( '>', 'text-domain' ),
		'before_output'   => '<div class="pagination"><ul class="pagination__list">',
		'after_output'    => '</ul></div>'
	);

	$args = wp_parse_args(
		$args,
		apply_filters( 'wp_bootstrap_pagination_defaults', $defaults )
	);

	$args['range'] = (int) $args['range'] - 1;
	if ( !$args['custom_query'] )
		$args['custom_query'] = @$GLOBALS['wp_query'];
	$count = (int) $args['custom_query']->max_num_pages;
	$page  = intval( get_query_var( 'paged' ) );
	$ceil  = ceil( $args['range'] / 2 );

	if ( $count <= 1 )
		return FALSE;

	if ( !$page )
		$page = 1;

	if ( $count > $args['range'] ) {
		if ( $page <= $args['range'] ) {
			$min = 1;
			$max = $args['range'] + 1;
		} elseif ( $page >= ($count - $ceil) ) {
			$min = $count - $args['range'];
			$max = $count;
		} elseif ( $page >= $args['range'] && $page < ($count - $ceil) ) {
			$min = $page - $ceil;
			$max = $page + $ceil;
		}
	} else {
		$min = 1;
		$max = $count;
	}

	$echo = '';
	$previous = intval($page) - 1;
	$previous = esc_attr( get_pagenum_link($previous) );

	if ( $previous && (1 != $page) )
		$echo .= '<li><a href="' . $previous . '" title="' . __( 'previous', 'text-domain') . '">' . $args['previous_string'] . '</a></li>';

	if ( !empty($min) && !empty($max) ) {
		for( $i = $min; $i <= $max; $i++ ) {
			if ($page == $i) {
				$echo .= '<li class="active"><span class="active">' . str_pad( (int)$i, 2, ' ', STR_PAD_LEFT ) . '</span></li>';
			} else {
				$echo .= sprintf( '<li><a href="%s">%2d</a></li>', esc_attr( get_pagenum_link($i) ), $i );
			}
		}
	}

	$next = intval($page) + 1;
	$next = esc_attr( get_pagenum_link($next) );
	if ($next && ($count != $page) )
		$echo .= '<li><a href="' . $next . '" title="' . __( 'next', 'text-domain') . '">' . $args['next_string'] . '</a></li>';

	if ( isset($echo) )
		echo $args['before_output'] . $echo . $args['after_output'];
}


add_filter( 'get_the_archive_title', function ($title) {

	if ( is_category() ) {

			$title = single_cat_title( '', false );

		} elseif ( is_tag() ) {

			$title = single_tag_title( '', false );

		} elseif ( is_author() ) {

			$title = '<span class="vcard">' . get_the_author() . '</span>' ;

		}

	return $title;

});



add_filter('next_posts_link_attributes', 'posts_link_attributes_next');
add_filter('previous_posts_link_attributes', 'posts_link_attributes_prev');

function posts_link_attributes_next() {
	return 'class="article__button button button_third button_next"' ;
}

function posts_link_attributes_prev() {
	return 'class="article__button button button_third button_prev"';
}



// news filter

/**
 * формирование файла для скачивания
 */
function wm_get_file_action (){

    $html_get = $_POST['html'];
    $table = $_POST['table'];
    $idpost = $_POST['idpost'];

    $check_file = get_field('product__download', $idpost);

    /*$html_get = stripcslashes($html_get);

    $html = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>mpgb.ru</title>';
    $html .= '<style type="text/css">';
    $html .= 'body .tablepress .odd td {background: #eee;} .tablepress tbody tr td {
    border-top: 1px solid #eee;
    padding: 18px 9px;
    vertical-align: middle;}
    .tablepress thead th {
    border-top: 1px solid #eee;
    border-bottom: none;
    padding: 14px 9px;
    background-color: #fff;
    text-align: left;
    font-weight: 400;}';
    $html .= '</style>';
    $html .= '</head><body>';
    $html .= '<table class="tablepress">';
    $html .= $html_get;
    $html .= '</table>';
    $html .= '</body></html>';

    file_put_contents(get_template_directory() . '/download/'.$table.'.html', $html);*/

    //$file = get_template_directory() . '/inc/page.html';

    if (isset($check_file)){
        die($check_file);
    } else {
        die('err');
    }

}

add_action('wp_ajax_wm_get_file', 'wm_get_file_action');
add_action('wp_ajax_nopriv_wm_get_file', 'wm_get_file_action');

function wm_exclude_pages($query) {
    $serv = $_SERVER['REQUEST_URI'];
    if(stristr($serv, 'news') === FALSE) {
        if ($query->is_search) {
            $query->set('post_type', 'products');
        }
        return $query;
    }
    return $query;

}
add_filter('pre_get_posts','wm_exclude_pages');