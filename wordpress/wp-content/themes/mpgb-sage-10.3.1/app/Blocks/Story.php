<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use Roots\Acorn\Application;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Story extends Block
{
    public function __construct(Application $app)
    {
        /**
         * The block name.
         *
         * @var string
         */
        $this->name = __('Story', 'sage');

        /**
         * The block slug.
         *
         * @var string
         */
        $this->slug = 'story';

        /**
         * The block description.
         *
         * @var string
         */
        $this->description = __('A simple Story block.', 'sage');

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
        $this->styles = [
            [
                'name' => 'light',
                'label' => 'Light',
                'isDefault' => true,
            ],
            [
                'name' => 'dark',
                'label' => 'Dark',
            ]
        ];

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
            'timeline' => $this->timeline(),
            'year' => $this->year(),
            'text' => $this->text(),
        ];

    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $story = new FieldsBuilder('story');

        $story
            ->addText('title', [
                'label' => 'Title',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addRepeater('timeline', [
                'label' => 'Timeline',
                'wrapper' => [
                    'width' => '',
                ],
                'layout' => 'table',
            ])
            ->addText('year', [
                'label' => 'Year',
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
            ->endRepeater();

        return $story->build();
    }

    /**
     * Return the items field.
     *
     * @return array
     */
    public function title()
    {
        return get_field('title');
    }

    public function timeline()
    {
        return get_field('timeline');
    }

    public function year()
    {
        return get_field('year');
    }

    public function text()
    {
        return get_field('text');
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
