<form id="searchform" action="<?php echo home_url( '/' ) ?>" method="get" class="search-form__form" role="search">
	<input id="s" type="text" name="s" value="<?php echo get_search_query() ?>" placeholder="" class="search-form__input" />
	<button type="submit" class="search-form__submit">
		<svg class="search-form__submit-icon"><use xlink:href="<?php echo get_template_directory_uri(); ?>/assets/images/icon.svg#icon_search"></use></svg>
	</button>
</form>
