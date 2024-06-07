<?php

namespace App\Fields;

use Log1x\AcfComposer\Field;
use StoutLogic\AcfBuilder\FieldsBuilder;

class PostExtra extends Field
{
    /**
     * The field group.
     *
     * @return array
     */
    public function fields()
    {
        $postExtra = new FieldsBuilder('post_extra');

        $postExtra
            ->setLocation('post_type', '==', 'page');

        $postExtra
            ->addRepeater('slider', [
                'label' => 'Слайдер',
                'wrapper' => [
                    'width' => '',
                ],
                'layout' => 'table',
                'button_label' => '',
            ])
            ->addImage('mob_webp', [
                'label' => 'Mobile Webp Image',
                'wrapper' => [
                    'width' => '16.6',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('mob_jpeg', [
                'label' => 'Mobile Jpeg Image',
                'wrapper' => [
                    'width' => '16.6',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('tablet_webp', [
                'label' => 'Tablet webp Image',
                'wrapper' => [
                    'width' => '16.6',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('tablet_jpg', [
                'label' => 'Tablet jpg Image',
                'wrapper' => [
                    'width' => '16.6',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('desktop_webp', [
                'label' => 'Desktop webp Image',
                'wrapper' => [
                    'width' => '16.6',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->addImage('desktop_jpg', [
                'label' => 'Desktop jpg Image',
                'wrapper' => [
                    'width' => '16.6',
                ],
                'return_format' => 'id',
                'preview_size' => 'thumbnail',
            ])
            ->endRepeater();

        return $postExtra->build();
    }
}
