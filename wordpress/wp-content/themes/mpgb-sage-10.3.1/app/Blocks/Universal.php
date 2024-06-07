<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use Roots\Acorn\Application;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Universal extends Block
{
    public function __construct(Application $app)
    {
        /**
         * The block name.
         *
         * @var string
         */
        $this->name = __('Universal', 'sage');

        /**
         * The block slug.
         *
         * @var string
         */
        $this->slug = 'universal';

        /**
         * The block description.
         *
         * @var string
         */
        $this->description = __('A simple Universal block.', 'sage');

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
            'branches_title' => $this->branches_title(),
            'branches' => $this->branches(),
            'branch' => $this->branch(),
            'branch_icon' => $this->branch_icon(),
            'branch_link' => $this->branch_link(),
            'view_on_audible_title' => $this->view_on_audible_title(),
            'view_on_audible' => $this->view_on_audible(),
            'lang' => $this->lang(),
            'icon' => $this->icon(),
            'link' => $this->link(),
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $universal = new FieldsBuilder('universal');

        $universal
            ->addText('title', [
                'label' => 'Title',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addText('branches_title', [
                'label' => 'Subtitle',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addRepeater('branches', [
                'label' => 'Repeater Field',
                'wrapper' => [
                    'width' => '',
                ],
                'layout' => 'table',
            ])
            ->addText('branch', [
                'label' => 'Branch',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addImage('branch_icon', [
                'label' => 'Icon',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addUrl('branch_link', [
                'label' => 'Branch URL',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->endRepeater()
            ->addText('view_on_audible_title', [
                'label' => 'Subtitle',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addRepeater('view_on_audible', [
                'label' => 'View on audible',
                'wrapper' => [
                    'width' => '',
                ],
                'layout' => 'table',
            ])
            ->addText('lang', [
                'label' => 'Language',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->addImage('icon', [
                'label' => 'Icon',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addUrl('link', [
                'label' => 'Link',
                'wrapper' => [
                    'width' => '',
                ],
            ])
            ->endRepeater();

        return $universal->build();
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

    public function branches_title()
    {
        return get_field('branches_title');
    }

    public function branches()
    {
        return get_field('branches');
    }

    public function branch()
    {
        return get_field('branch');
    }

    public function branch_icon()
    {
        return get_field('branch_icon');
    }

    public function branch_link()
    {
        return get_field('branch_link');
    }

    public function view_on_audible_title()
    {
        return get_field('view_on_audible_title');
    }

    public function view_on_audible()
    {
        return get_field('view_on_audible');
    }

    public function lang()
    {
        return get_field('lang');
    }

    public function icon()
    {
        return get_field('icon');
    }

    public function link()
    {
        return get_field('link');
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
