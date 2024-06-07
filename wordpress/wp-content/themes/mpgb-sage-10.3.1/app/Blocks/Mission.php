<?php

namespace App\Blocks;

use Log1x\AcfComposer\Block;
use Roots\Acorn\Application;
use StoutLogic\AcfBuilder\FieldsBuilder;

class Mission extends Block
{
    public function __construct(Application $app)
    {
        /**
         * The block name.
         *
         * @var string
         */
        $this->name = __('Mission', 'sage');

        /**
         * The block slug.
         *
         * @var string
         */
        $this->slug = 'mission';

        /**
         * The block description.
         *
         * @var string
         */
        $this->description = __('A simple Mission block.', 'sage');

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
            'image_mob_w' => $this->image_mob_w(),
            'image_tablet_w' => $this->image_tablet_w(),
            'image_desktop_w' => $this->image_desktop_w(),
            'image_mob_j' => $this->image_mob_j(),
            'image_tablet_j' => $this->image_tablet_j(),
            'image_desktop_j' => $this->image_desktop_j(),
        ];
    }

    /**
     * The block field group.
     *
     * @return array
     */
    public function fields()
    {
        $mission = new FieldsBuilder('mission');

        $mission
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
            ->addImage('image_mob_w', [
                'label' => 'Image mob webp',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('image_tablet_w', [
                'label' => 'Image tablet webp',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('image_desktop_w', [
                'label' => 'Image desktop webp',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('image_mob_j', [
                'label' => 'Image mob jpeg',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('image_tablet_j', [
                'label' => 'Image tablet jpeg',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('image_desktop_j', [
                'label' => 'Image desktop jpeg',
                'wrapper' => [
                    'width' => '',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ]);

        return $mission->build();
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

    public function text()
    {
        return get_field('text');
    }

    public function image_mob_w()
    {
        return get_field('image_mob_w');
    }
    public function image_tablet_w()
    {
        return get_field('image_tablet_w');
    }
    public function image_desktop_w()
    {
        return get_field('image_desktop_w');
    }
    public function image_mob_j()
    {
        return get_field('image_mob_j');
    }
    public function image_tablet_j()
    {
        return get_field('image_tablet_j');
    }
    public function image_desktop_j()
    {
        return get_field('image_desktop_j');
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
