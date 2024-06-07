<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use Roots\Acorn\Application;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Books extends Block
{
    public function __construct(Application $app)
    {
        /**
         * The block name.
         *
         * @var string
         */
        $this->name = __('Books', 'sage');

        /**
         * The block slug.
         *
         * @var string
         */
        $this->slug = 'books';

        /**
         * The block description.
         *
         * @var string
         */
        $this->description = __('A simple Books block.', 'sage');

        /**
         * The block category.
         *
         * @var string
         */
        $this->category = 'common';

        /**
         * The block icon.
         *
         * @var string|array
         */
        $this->icon = 'editor-ul';

        /**
         * The block keywords.
         *
         * @var array
         */
        $this->keywords = [];

        /**
         * The block post type allow list.
         *
         * @var array
         */
        $this->post_types = [];

        /**
         * The parent block type allow list.
         *
         * @var array
         */
        $this->parent = [];

        /**
         * The default block mode.
         *
         * @var string
         */
        $this->mode = 'edit';

        /**
         * The default block alignment.
         *
         * @var string
         */
        $this->align = '';

        /**
         * The default block text alignment.
         *
         * @var string
         */
        $this->align_text = '';

        /**
         * The default block content alignment.
         *
         * @var string
         */
        $this->align_content = '';

        /**
         * The supported block features.
         *
         * @var array
         */
        $this->supports = [
            'align' => true,
            'align_text' => false,
            'align_content' => false,
            'full_height' => false,
            'anchor' => false,
            'mode' => false,
            'multiple' => true,
            'jsx' => true,
        ];

        /**
         * The block styles.
         *
         * @var array
         */
//        $this->styles = [
//            [
//                'name' => 'light',
//                'label' => 'Light',
//                'isDefault' => true,
//            ],
//            [
//                'name' => 'dark',
//                'label' => 'Dark',
//            ]
//        ];

        /**
         * The block preview example data.
         *
         * @var array
         */
//        $this->example = [
//           'items' => [
//               ['item' => 'Item one'],
//               ['item' => 'Item two'],
//               ['item' => 'Item three'],
//           ],
//        ];

        parent::__construct($app);
    }

    /**
     * Data to be passed to the block before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title' => $this->title(),
            'text' => $this->text(),
            'books_cats' => $this->books_cats(),
            'image_webp' => $this->image_webp(),
            'image_jpg' => $this->image_jpg(),
            'cat_title' => $this->cat_title(),
            'cat_desc' => $this->cat_desc(),
            'bg_color' => $this->bg_color(),
            'rgba' => $this->rgba(),
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $books = new FieldsBuilder('books');

        $books
            ->addText('title', [
                'label' => 'Title',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addTextarea('text', [
                'label' => 'Text',
                'wrapper' => [
                    'width' => '',
                ],
                'rows' => '2',
                'new_lines' => 'br', // Possible values are 'wpautop', 'br', or ''.
            ])
            ->addRepeater('books_cats', [
                'label' => 'Categories',
                'wrapper' => [
                    'width' => '',
                ],
                'layout' => 'table',
                'button_label' => '',
            ])
            ->addImage('image_webp', [
                'label' => 'Image webp',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('image_jpg', [
                'label' => 'Image jpg',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addText('cat_title', [
                'label' => 'Category',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addTextarea('cat_desc', [
                'label' => 'Description',
                'wrapper' => [
                    'width' => '',
                ],
                'rows' => '2',
                'new_lines' => 'br', // Possible values are 'wpautop', 'br', or ''.
            ])
            ->addColorPicker('bg_color', [
                'label' => 'Background Color',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addColorPicker('rgba', [
                'label' => 'RGBA Color',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->endRepeater();

        return $books->build();
    }

    /**
     * Return the Ttile field.
     *
     * @return array
     */
    public function title()
    {
        return get_field('title');
    }


    /**
     * Return the Text field.
     * @return mixed
     */
    public function text()
    {
        return get_field('text');
    }


    /**
     * Return the Cats field.
     * @return mixed
     */
    public function books_cats()
    {
        return get_field('books_cats');
    }

    /**
     * Return the image field.
     * @return mixed
     */
    public function image_webp()
    {
        return get_field('image_webp');
    }

    /**
     * Return the image field.
     * @return mixed
     */
    public function image_jpg()
    {
        return get_field('image_jpg');
    }

    /**
     * Return the Cat title field.
     * @return mixed
     */
    public function cat_title()
    {
        return get_field('cat_title');
    }

    /**
     * Return the Cat desc field.
     * @return mixed
     */
    public function cat_desc()
    {
        return get_field('cat_desc');
    }

    /**
     * Return the bg color field.
     * @return mixed
     */
    public function bg_color()
    {
        return get_field('bg_color');
    }


    /**
     * Return the RGBA field.
     * @return mixed
     */
    public function rgba()
    {
        return get_field('rgba');
    }

    /**
     * Assets to be enqueued when rendering the block.
     *
     * @return void
     */
    public function enqueue()
    {
        //
    }
}
