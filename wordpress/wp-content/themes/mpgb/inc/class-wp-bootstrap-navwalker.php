<?php

class Custom_Walker_Nav_Menu extends Walker_Nav_Menu {

	public function start_el(&$output, $item, $depth = 0, $args = array(), $id = 0) {

		//$output .= "Link - ".$depth;
		$html = "";
		if ($depth == 0) {
			$html .= "<li ";

			if ($args->walker->has_children) {
				$html .= ' class="nav__list nav__list_subnav"';
			}

			$html .= "><a ";

			if ($args->walker->has_children) {
				$html .= 'class="nav__link"';
			}
			$html .= ' href="%s">%s';

			if ($args->walker->has_children) {
				$html .= '';
			}
			$html .= '</a>';

			if ($args->walker->has_children) {
				$html .= '';
			}

			$output .= html_entity_decode(sprintf($html, $item->url, $item->title));

		} elseif ($depth == 1) {
			$cat = get_category($item->object_id);
            $active = '';
            $post = get_post();
            $id1 = $post->ID;
			if ($item->type == 'post_type'){
                $active = ($item->object_id == $id1) ? 'active-wm' : '' ;
            } elseif ($item->type == 'taxonomy') {
			    $current_id = get_queried_object()->term_id;
			    $get_id = get_term($item->object_id);
                $active = ($get_id->term_id == $current_id) ? 'active-wm' : '' ;
            } elseif ($item->type == 'post_type_archive') {
                $current_id = get_queried_object()->term_id;

                $active = ($item->url == get_post_type_archive_link($post->post_type)) ? 'active-wm' : '';
            }


			$output .= '<li class="subnav__item '.$active.'"><a class="subnav__link subnav__link-title" href="'. $item->url .'">'. html_entity_decode($item->title) .'</a>';

		} elseif ($depth == 2) {

			if ($item->type == 'taxonomy') {
				$term = get_term($item->object_id);

				$output .= '<li class="subnav__subnav-item"><a class="subnav__subnav-link subnav__link-title" href="'. $item->url .'">'. html_entity_decode($item->title) .' <span>('. $term->count . ')</span></a>';
			}
		}
	}

	public function end_el(&$output, $item, $depth = 0, $args = array()) {

		if($depth == 0) {
			$output .= "";
		}
		elseif($depth == 1) {
			$output .= '</li>';
		}

		elseif($depth == 2) {
			$output .= '</li>';
		}
	}

	public function start_lvl(&$output, $depth = 0, $args = array()) {
		if($depth == 0) {
			$output .= '<div class="subnav"><ul class="subnav__list">';


		}
		if($depth == 1) {
			$output .= '<ul class="subnav__subnav-list">';
		}
	}

	public function end_lvl(&$output, $depth = 0, $args = array()) {
			if($depth == 0) {
				$output .= '</ul></div>';
			}
			if($depth == 1) {
				$output .= '</ul>';
			}
	}

}



