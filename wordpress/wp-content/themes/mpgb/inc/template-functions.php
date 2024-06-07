<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package MPGB
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function mpgb_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}
	if ( is_archive('objects') ) {
		$classes[] = 'page_objects';
	} else {
		$classes[] = '';
	}

	return $classes;
}
add_filter( 'body_class', 'mpgb_body_classes' );

/**
 * Add a pingback url auto-discovery header for singularly identifiable articles.
 */
function mpgb_pingback_header() {
	if ( is_singular() && pings_open() ) {
		echo '<link rel="pingback" href="', esc_url( get_bloginfo( 'pingback_url' ) ), '">';
	}
}
add_action( 'wp_head', 'mpgb_pingback_header' );

//----------------------------------------------------
// ACF Option Pages
//----------------------------------------------------
if( function_exists('acf_add_options_page') ) {

	acf_add_options_page(array(
		'page_title' 	=> 'Настройки темы',
		'menu_title'	=> 'Настройки темы',
		'menu_slug' 	=> 'theme-settings',
		'capability'	=> 'edit_posts',
		'icon_url'      => 'dashicons-admin-settings',
		'redirect'	=> false
	));

//	acf_add_options_sub_page(array(
//		'page_title' 	=> 'Видеонаблюдение',
//		'menu_title'	=> 'Видеонаблюдение',
//		'menu_slug' 	=> 'theme-video',
//		'parent_slug'	=> 'theme-settings',
//		'capability'	=> 'edit_posts',
//		'redirect'	=> false
//	));

}
