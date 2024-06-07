<?php

/*-------------------------------------------------------------------------

** Регистрируем Тип постов

-------------------------------------------------------------------------*/

add_action('init', 'register_post_types');



function register_post_types(){



	register_post_type('products', array(

		'label'  => null,

		'labels' => array(

			'name'               => 'Продукция', // основное название для типа записи

			'singular_name'      => 'Продукт', // название для одной записи этого типа

			'add_new'            => 'Добавить продукт', // для добавления новой записи

			'add_new_item'       => 'Добавление продукта', // заголовка у вновь создаваемой записи в админ-панели.

			'edit_item'          => 'Редактирование продукта', // для редактирования типа записи

			'new_item'           => 'Новый продукт', // текст новой записи

			'view_item'          => 'Смотреть продукт', // для просмотра записи этого типа.

			'search_items'       => 'Искать продукт', // для поиска по этим типам записи

			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено

			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине

			'parent_item_colon'  => '', // для родителей (у древовидных типов)

			'menu_name'          => 'Продукция', // название меню

		),

		'description'         => '',

		'public'              => true,

		'publicly_queryable'  => true,

		'exclude_from_search' => false,

		'show_ui'             => true,

		'show_in_nav_menus'   => true,

		'show_in_menu'        => true, // показывать ли в меню адмнки

		'menu_position'       => 8,

		'menu_icon'           => 'dashicons-cart',

		//'capability_type'   => 'post',

		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи

		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав

		'hierarchical'        => true,

		'supports'            => array('title','editor', 'thumbnail', 'excerpt', 'custom-fields'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		'taxonomies'          => array('product-category'),

		'has_archive'         => true,

		'rewrite'             => true,

		'query_var'           => true,

	) );



	register_post_type('services', array(

		'label'  => null,

		'labels' => array(

			'name'               => 'Услуги', // основное название для типа записи

			'singular_name'      => 'Услуга', // название для одной записи этого типа

			'add_new'            => 'Добавить услугу', // для добавления новой записи

			'add_new_item'       => 'Добавление услуги', // заголовка у вновь создаваемой записи в админ-панели.

			'edit_item'          => 'Редактирование услуги', // для редактирования типа записи

			'new_item'           => 'Новая услуга', // текст новой записи

			'view_item'          => 'Смотреть услугу', // для просмотра записи этого типа.

			'search_items'       => 'Искать услугу', // для поиска по этим типам записи

			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено

			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине

			'parent_item_colon'  => '', // для родителей (у древовидных типов)

			'menu_name'          => 'Услуги', // название меню

		),

		'description'         => '',

		'public'              => true,

		'publicly_queryable'  => true,

		'exclude_from_search' => false,

		'show_ui'             => true,

		'show_in_nav_menus'   => true,

		'show_in_menu'        => true, // показывать ли в меню адмнки

		'menu_position'       => 9,

		'menu_icon'           => 'dashicons-hammer',

		//'capability_type'   => 'post',

		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи

		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав

		'hierarchical'        => true,

		'supports'            => array('title','editor', 'thumbnail', 'excerpt', 'custom-fields'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		'taxonomies'          => array('services-category'),

		'has_archive'         => true,

		'rewrite'             => true,

		'query_var'           => true,

	) );


	register_post_type('objects', array(

		'label'  => null,

		'labels' => array(

			'name'               => 'Объекты', // основное название для типа записи

			'singular_name'      => 'Объект', // название для одной записи этого типа

			'add_new'            => 'Добавить объект', // для добавления новой записи

			'add_new_item'       => 'Добавление объекта', // заголовка у вновь создаваемой записи в админ-панели.

			'edit_item'          => 'Редактирование объекта', // для редактирования типа записи

			'new_item'           => 'Новый объект', // текст новой записи

			'view_item'          => 'Смотреть объект', // для просмотра записи этого типа.

			'search_items'       => 'Искать объект', // для поиска по этим типам записи

			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено

			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине

			'parent_item_colon'  => '', // для родителей (у древовидных типов)

			'menu_name'          => 'Объекты', // название меню

		),

		'description'         => '',

		'public'              => true,

		'publicly_queryable'  => true,

		'exclude_from_search' => false,

		'show_ui'             => true,

		'show_in_nav_menus'   => true,

		'show_in_menu'        => true, // показывать ли в меню адмнки

		'menu_position'       => 8,

		'menu_icon'           => 'dashicons-cart',

		//'capability_type'   => 'post',

		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи

		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав

		'hierarchical'        => true,

		'supports'            => array('title','editor', 'thumbnail', 'excerpt', 'custom-fields'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		'taxonomies'          => array('objects-category'),

		'has_archive'         => true,

		'rewrite'             => true,

		'query_var'           => true,

	) );


	register_post_type('news', array(

		'label'  => null,

		'labels' => array(

			'name'               => 'Новости', // основное название для типа записи

			'singular_name'      => 'Новость', // название для одной записи этого типа

			'add_new'            => 'Добавить новость', // для добавления новой записи

			'add_new_item'       => 'Добавление новости', // заголовка у вновь создаваемой записи в админ-панели.

			'edit_item'          => 'Редактирование новости', // для редактирования типа записи

			'new_item'           => 'Новая новость', // текст новой записи

			'view_item'          => 'Смотреть новость', // для просмотра записи этого типа.

			'search_items'       => 'Искать новость', // для поиска по этим типам записи

			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено

			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине

			'parent_item_colon'  => '', // для родителей (у древовидных типов)

			'menu_name'          => 'Новости', // название меню

		),

		'description'         => '',

		'public'              => true,

		'publicly_queryable'  => true,

		'exclude_from_search' => false,

		'show_ui'             => true,

		'show_in_nav_menus'   => true,

		'show_in_menu'        => true, // показывать ли в меню адмнки

		'menu_position'       => 8,

		'menu_icon'           => 'dashicons-cart',

		//'capability_type'   => 'post',

		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи

		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав

		'hierarchical'        => true,

		'supports'            => array('title','editor', 'thumbnail', 'excerpt', 'custom-fields'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		'taxonomies'          => array('news-category'),

		'has_archive'         => true,

		'rewrite'             => true,

		'query_var'           => true,

	) );


	register_post_type('vacancies', array(

		'label'  => null,

		'labels' => array(

			'name'               => 'Вакансии', // основное название для типа записи

			'singular_name'      => 'Вакансия', // название для одной записи этого типа

			'add_new'            => 'Добавить вакансию', // для добавления новой записи

			'add_new_item'       => 'Добавление вакансии', // заголовка у вновь создаваемой записи в админ-панели.

			'edit_item'          => 'Редактирование вакансии', // для редактирования типа записи

			'new_item'           => 'Новая вакансия', // текст новой записи

			'view_item'          => 'Смотреть вакансию', // для просмотра записи этого типа.

			'search_items'       => 'Искать вакансию', // для поиска по этим типам записи

			'not_found'          => 'Не найдено', // если в результате поиска ничего не было найдено

			'not_found_in_trash' => 'Не найдено в корзине', // если не было найдено в корзине

			'parent_item_colon'  => '', // для родителей (у древовидных типов)

			'menu_name'          => 'Вакансии', // название меню

		),

		'description'         => '',

		'public'              => true,

		'publicly_queryable'  => true,

		'exclude_from_search' => false,

		'show_ui'             => true,

		'show_in_nav_menus'   => true,

		'show_in_menu'        => true, // показывать ли в меню адмнки

		'menu_position'       => 8,

		'menu_icon'           => 'dashicons-cart',

		//'capability_type'   => 'post',

		//'capabilities'      => 'post', // массив дополнительных прав для этого типа записи

		//'map_meta_cap'      => null, // Ставим true чтобы включить дефолтный обработчик специальных прав

		'hierarchical'        => true,

		'supports'            => array('title','editor', 'thumbnail', 'excerpt', 'custom-fields'), // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'

		'taxonomies'          => array('news-category'),

		'has_archive'         => true,

		'rewrite'             => true,

		'query_var'           => true,

	) );



}



/*-------------------------------------------------------------------------

** Регистрируем Таксономии к Продукции и Услугам

-------------------------------------------------------------------------*/

add_action('init', 'create_taxonomy');



function create_taxonomy(){



	register_taxonomy('product-category', array('products'), array(

		'label'     => '', // определяется параметром $labels->name

		'labels'    => array(

			'name'              => 'Категории продукции',

			'singular_name'     => 'Категория продукции',

			'search_items'      => 'Поиск категории',

			'all_items'         => 'Все категории',

			'view_item '        => 'Смотреть категорию',

			'parent_item'       => 'Родительская категория',

			'parent_item_colon' => 'Родительская категория:',

			'edit_item'         => 'Редактировать категорию',

			'update_item'       => 'Обновить категорию',

			'add_new_item'      => 'Добавить новую категорию',

			'new_item_name'     => 'Имя новой категории',

			'menu_name'         => 'Категории',

		),

		'description'           => '', // описание таксономии

		'public'                => true,

		'publicly_queryable'    => null, // равен аргументу public

		'show_in_nav_menus'     => true, // равен аргументу public

		'show_ui'               => true, // равен аргументу public

		'hierarchical'          => true,

		'update_count_callback' => '',

		'rewrite'               => true,

		'query_var'             => true, // название параметра запроса

		'capabilities'          => array(),

		'meta_box_cb'           => null, // callback функция. Отвечает за html код метабокса (с версии 3.8): post_categories_meta_box или post_tags_meta_box. Если указать false, то метабокс будет отключен вообще

		'show_admin_column'     => true, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)

		'_builtin'              => false,

		'show_in_quick_edit'    => null, // по умолчанию значение show_ui

	) );



	register_taxonomy('services-category', array('services'), array(

		'label'     => '', // определяется параметром $labels->name

		'labels'    => array(

			'name'              => 'Категории услуги',

			'singular_name'     => 'Категория услуги',

			'search_items'      => 'Поиск категории',

			'all_items'         => 'Все категории',

			'view_item '        => 'Смотреть категорию',

			'parent_item'       => 'Родительская категория',

			'parent_item_colon' => 'Родительская категория:',

			'edit_item'         => 'Редактировать категорию',

			'update_item'       => 'Обновить категорию',

			'add_new_item'      => 'Добавить новую категорию',

			'new_item_name'     => 'Имя новой категории',

			'menu_name'         => 'Категории',

		),

		'description'           => '', // описание таксономии

		'public'                => true,

		'publicly_queryable'    => null, // равен аргументу public

		'show_in_nav_menus'     => true, // равен аргументу public

		'show_ui'               => true, // равен аргументу public

		'hierarchical'          => true,

		'update_count_callback' => '',

		'rewrite'               => true,

		//'query_var'             => $taxonomy, // название параметра запроса

		'capabilities'          => array(),

		'meta_box_cb'           => null, // callback функция. Отвечает за html код метабокса (с версии 3.8): post_categories_meta_box или post_tags_meta_box. Если указать false, то метабокс будет отключен вообще

		'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)

		'_builtin'              => false,

		'show_in_quick_edit'    => null, // по умолчанию значение show_ui

	) );


	register_taxonomy('objects-category', array('objects'), array(

		'label'     => '', // определяется параметром $labels->name

		'labels'    => array(

			'name'              => 'Категории объектов',

			'singular_name'     => 'Категория объекта',

			'search_items'      => 'Поиск категории',

			'all_items'         => 'Все категории',

			'view_item '        => 'Смотреть категорию',

			'parent_item'       => 'Родительская категория',

			'parent_item_colon' => 'Родительская категория:',

			'edit_item'         => 'Редактировать категорию',

			'update_item'       => 'Обновить категорию',

			'add_new_item'      => 'Добавить новую категорию',

			'new_item_name'     => 'Имя новой категории',

			'menu_name'         => 'Категории',

		),

		'description'           => '', // описание таксономии

		'public'                => true,

		'publicly_queryable'    => null, // равен аргументу public

		'show_in_nav_menus'     => true, // равен аргументу public

		'show_ui'               => true, // равен аргументу public

		'hierarchical'          => true,

		'update_count_callback' => '',

		'rewrite'               => true,

		//'query_var'             => $taxonomy, // название параметра запроса

		'capabilities'          => array(),

		'meta_box_cb'           => null, // callback функция. Отвечает за html код метабокса (с версии 3.8): post_categories_meta_box или post_tags_meta_box. Если указать false, то метабокс будет отключен вообще

		'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)

		'_builtin'              => false,

		'show_in_quick_edit'    => null, // по умолчанию значение show_ui

	) );


	register_taxonomy('news-category', array('news'), array(

		'label'     => '', // определяется параметром $labels->name

		'labels'    => array(

			'name'              => 'Категории новостей',

			'singular_name'     => 'Категория новости',

			'search_items'      => 'Поиск категории',

			'all_items'         => 'Все категории',

			'view_item '        => 'Смотреть категорию',

			'parent_item'       => 'Родительская категория',

			'parent_item_colon' => 'Родительская категория:',

			'edit_item'         => 'Редактировать категорию',

			'update_item'       => 'Обновить категорию',

			'add_new_item'      => 'Добавить новую категорию',

			'new_item_name'     => 'Имя новой категории',

			'menu_name'         => 'Категории',

		),

		'description'           => '', // описание таксономии

		'public'                => true,

		'publicly_queryable'    => null, // равен аргументу public

		'show_in_nav_menus'     => true, // равен аргументу public

		'show_ui'               => true, // равен аргументу public

		'hierarchical'          => true,

		'update_count_callback' => '',

		'rewrite'               => true,

		//'query_var'             => $taxonomy, // название параметра запроса

		'capabilities'          => array(),

		'meta_box_cb'           => null, // callback функция. Отвечает за html код метабокса (с версии 3.8): post_categories_meta_box или post_tags_meta_box. Если указать false, то метабокс будет отключен вообще

		'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)

		'_builtin'              => false,

		'show_in_quick_edit'    => null, // по умолчанию значение show_ui

	) );


	register_taxonomy('vacancies-category', array('vacancies'), array(

		'label'     => '', // определяется параметром $labels->name

		'labels'    => array(

			'name'              => 'Категории вакансий',

			'singular_name'     => 'Категория вакансии',

			'search_items'      => 'Поиск категории',

			'all_items'         => 'Все категории',

			'view_item '        => 'Смотреть категорию',

			'parent_item'       => 'Родительская категория',

			'parent_item_colon' => 'Родительская категория:',

			'edit_item'         => 'Редактировать категорию',

			'update_item'       => 'Обновить категорию',

			'add_new_item'      => 'Добавить новую категорию',

			'new_item_name'     => 'Имя новой категории',

			'menu_name'         => 'Категории',

		),

		'description'           => '', // описание таксономии

		'public'                => true,

		'publicly_queryable'    => null, // равен аргументу public

		'show_in_nav_menus'     => true, // равен аргументу public

		'show_ui'               => true, // равен аргументу public

		'hierarchical'          => true,

		'update_count_callback' => '',

		'rewrite'               => true,

		//'query_var'             => $taxonomy, // название параметра запроса

		'capabilities'          => array(),

		'meta_box_cb'           => null, // callback функция. Отвечает за html код метабокса (с версии 3.8): post_categories_meta_box или post_tags_meta_box. Если указать false, то метабокс будет отключен вообще

		'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)

		'_builtin'              => false,

		'show_in_quick_edit'    => null, // по умолчанию значение show_ui

	) );


}
