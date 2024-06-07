<?php

namespace App\Options;

use Log1x\AcfComposer\Options as Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class ThemeOptions extends Field
{
    /**
     * The option page menu name.
     *
     * @var string
     */
    public $name = 'Theme Options';

    /**
     * The option page document title.
     *
     * @var string
     */
    public $title = 'Theme Options | Options';

    /**
     * The option page field group.
     *
     * @return array
     */
    public function fields()
    {
        $themeOptions = new FieldsBuilder('theme_options');

        $themeOptions
            ->addTab('tab_general', [
                'label' => 'General',
                'instructions' => '',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addTab('tab_cookie', [
                'label' => 'Cookie',
                'instructions' => '',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addTextarea('cookie_text', [
                'label' => 'Cookie text',
                'instructions' => '',
                'required' => 0,
                'wrapper' => [
                    'width' => '',
                ],
                'rows' => '2',
                'new_lines' => '', // Possible values are 'wpautop', 'br', or ''.
            ])
            ->addPageLink('use_of_cookies_link', [
                'label' => 'Use Cookies page link',
                'type' => 'page_link',
                'wrapper' => [
                    'width' => '',
                ],
                'post_type' => ['page'],
                'taxonomy' => [],
                'allow_null' => 0,
                'allow_archives' => 1,
                'multiple' => 0,
            ]);

        return $themeOptions->build();
    }
}
