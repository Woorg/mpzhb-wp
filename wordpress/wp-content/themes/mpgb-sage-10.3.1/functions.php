<?php

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our theme. We will simply require it into the script here so that we
| don't have to worry about manually loading any of our classes later on.
|
*/

if (!file_exists($composer = __DIR__ . '/vendor/autoload.php')) {
    wp_die(__('Error locating autoloader. Please run <code>composer install</code>.', 'sage'));
}

require $composer;

/*
|--------------------------------------------------------------------------
| Register The Bootloader
|--------------------------------------------------------------------------
|
| The first thing we will do is schedule a new Acorn application container
| to boot when WordPress is finished loading the theme. The application
| serves as the "glue" for all the components of Laravel and is
| the IoC container for the system binding all of the various parts.
|
*/

try {
    \Roots\bootloader();
} catch (Throwable $e) {
    wp_die(
        __('You need to install Acorn to use this theme.', 'sage'),
        '',
        [
            'link_url' => 'https://docs.roots.io/acorn/2.x/installation/',
            'link_text' => __('Acorn Docs: Installation', 'sage'),
        ]
    );
}

/*
|--------------------------------------------------------------------------
| Register Sage Theme Files
|--------------------------------------------------------------------------
|
| Out of the box, Sage ships with categorically named theme files
| containing common functionality and setup to be bootstrapped with your
| theme. Simply add (or remove) files from the array below to change what
| is registered alongside Sage.
|
*/

collect(['setup', 'filters'])
    ->each(function ($file) {
        if (!locate_template($file = "app/{$file}.php", true, true)) {
            wp_die(
            /* translators: %s is replaced with the relative file path */
                sprintf(__('Error locating <code>%s</code> for inclusion.', 'sage'), $file)
            );
        }
    });

/*
|--------------------------------------------------------------------------
| Enable Sage Theme Support
|--------------------------------------------------------------------------
|
| Once our theme files are registered and available for use, we are almost
| ready to boot our application. But first, we need to signal to Acorn
| that we will need to initialize the necessary service providers built in
| for Sage when booting.
|
*/

add_theme_support('sage');

/**
 * Parth to svg sprite
 * @return string
 */
function svg_sprite_paths()
{

    $path = get_template_directory_uri() . '/front/static/prod/assets/images/general/sprite.svg';
    return $path;
}

/**
 * Parth to fonts
 * @return string
 */
function fonts_paths()
{
    $path = get_template_directory_uri() . '/front/static/prod/assets/fonts';
    return $path;
}

// Excerpt length

add_filter('excerpt_length', function () {
    return 35;
});

// Excerpt more

/**
 * Обрезка текста (excerpt). Шоткоды вырезаются. Минимальное значение maxchar может быть 22.
 *
 * @param string/array $args Параметры.
 *
 * @return string HTML
 *
 * @ver 2.6.5
 */
function abp_excerpt($args = '')
{
    global $post;

    if (is_string($args))
        parse_str($args, $args);

    $rg = (object)array_merge(array(
        'maxchar' => 350,   // Макс. количество символов.
        'text' => '',    // Какой текст обрезать (по умолчанию post_excerpt, если нет post_content.
        // Если в тексте есть `<!--more-->`, то `maxchar` игнорируется и берется
        // все до <!--more--> вместе с HTML.
        'autop' => true,  // Заменить переносы строк на <p> и <br> или нет?
        'save_tags' => '',    // Теги, которые нужно оставить в тексте, например '<strong><b><a>'.
        'more_text' => 'Читать дальше...', // Текст ссылки `Читать дальше`.
        'ignore_more' => false, // нужно ли игнорировать <!--more--> в контенте
    ), $args);

    $rg = apply_filters('kama_excerpt_args', $rg);

    if (!$rg->text)
        $rg->text = $post->post_excerpt ?: $post->post_content;

    $text = $rg->text;
    // убираем блочные шорткоды: [foo]some data[/foo]. Учитывает markdown
    $text = preg_replace('~\[([a-z0-9_-]+)[^\]]*\](?!\().*?\[/\1\]~is', '', $text);
    // убираем шоткоды: [singlepic id=3]. Учитывает markdown
    $text = preg_replace('~\[/?[^\]]*\](?!\()~', '', $text);
    $text = trim($text);

    // <!--more-->
    if (!$rg->ignore_more && strpos($text, '<!--more-->')) {
        preg_match('/(.*)<!--more-->/s', $text, $mm);

        $text = trim($mm[1]);

        $text_append = ' <a href="' . get_permalink($post) . '#more-' . $post->ID . '">' . $rg->more_text . '</a>';
    } // text, excerpt, content
    else {
        $text = trim(strip_tags($text, $rg->save_tags));

        // Обрезаем
        if (mb_strlen($text) > $rg->maxchar) {
            $text = mb_substr($text, 0, $rg->maxchar);
            $text = preg_replace('~(.*)\s[^\s]*$~s', '\\1...', $text); // кил последнее слово, оно 99% неполное
        }
    }

    // сохраняем переносы строк. Упрощенный аналог wpautop()
    if ($rg->autop) {
        $text = preg_replace(
            array("/\r/", "/\n{2,}/", "/\n/", '~</p><br ?/?>~'),
            array('', '</p><p>', '<br />', '</p>'),
            $text
        );
    }

    $text = apply_filters('kama_excerpt', $text, $rg);

    if (isset($text_append))
        $text .= $text_append;

    return ($rg->autop && $text) ? "<p>$text</p>" : $text;
}


// Allow webp upload

/**
 * Sets the extension and mime type for .webp files.
 *
 * @param array $wp_check_filetype_and_ext File data array containing 'ext', 'type', and
 *                                          'proper_filename' keys.
 * @param string $file Full path to the file.
 * @param string $filename The name of the file (may differ from $file due to
 *                                          $file being in a tmp directory).
 * @param array $mimes Key is the file extension with value as the mime type.
 */
function abp_file_and_ext_webp($types, $file, $filename, $mimes)
{
    if (false !== strpos($filename, '.webp')) {
        $types['ext'] = 'webp';
        $types['type'] = 'image/webp';
    }

    return $types;
}

add_filter('wp_check_filetype_and_ext', 'abp_file_and_ext_webp', 10, 4);

/**
 * Adds webp filetype to allowed mimes
 *
 * @see https://codex.wordpress.org/Plugin_API/Filter_Reference/upload_mimes
 *
 * @param array $mimes Mime types keyed by the file extension regex corresponding to
 *                     those types. 'swf' and 'exe' removed from full list. 'htm|html' also
 *                     removed depending on '$user' capabilities.
 *
 * @return array
 */

function abp_mime_types_webp($mimes)
{
    $mimes['webp'] = 'image/webp';


    return $mimes;
}

add_filter('upload_mimes', 'abp_mime_types_webp');
