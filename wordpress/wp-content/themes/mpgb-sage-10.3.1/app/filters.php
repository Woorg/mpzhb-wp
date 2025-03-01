<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});



/**
    Change nav item class
 */

add_filter('nav_menu_css_class', function ( $classes, $item, $args ) {

    if ($args->theme_location === 'menu-1'):
        $classes[] = 'nav__item';
    elseif ($args->theme_location === 'menu-2'):
        $classes[] = 'nav-sec__item';
    elseif ($args->theme_location === 'menu-3') :
        $classes[] = 'nav-sec__item';
    endif;
    return $classes;

}, 1, 3);


/**
    Change nav link class
 */

add_filter('nav_menu_link_attributes', function ( $atts, $item, $args, $depth ) {

    if ($args->theme_location === 'menu-1') :
        $atts['class'] = 'nav__link';
    elseif ($args->theme_location === 'menu-2') :
        $atts['class'] = 'nav-sec__link';
    elseif ($args->theme_location === 'menu-3') :
        $atts['class'] = 'nav-sec__link';
    endif;
    return $atts;

}, 10, 4);


//add support for async and defer params

add_filter( 'script_loader_tag', function($tag, $handle){
    if ( wp_scripts()->get_data( $handle, 'defer' ) ) {
        $tag = str_replace( '></', ' defer></', $tag );
    }
    if ( wp_scripts()->get_data( $handle, 'async' ) ) {
        $tag = str_replace( '></', ' async></', $tag );
    }
    return $tag;
}, 10, 2 );


// Contacts form 7

// add_filter('wpcf7_form_elements', function ($content) {
//     $content = preg_replace('/<(p).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);

//     return $content;
// });


add_filter('wpcf7_autop_or_not', '__return_false');

/*
* Hide acf from the wp=admin area.
*/

//add_filter('acf/settings/show_admin', '__return_false');
