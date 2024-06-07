webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	__webpack_require__(2);
	
	var _jquery = __webpack_require__(3);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(4);
	
	var _lightenseImages = __webpack_require__(5);
	
	var _lightenseImages2 = _interopRequireDefault(_lightenseImages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// import $ from 'jquery';
	// import Pjax from 'pjax';
	(function ($) {
	
		(0, _svg4everybody2.default)();
	
		var styles = ['padding: 9px', 'background: #fff', 'color: #000', 'display: inline-block', 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)', 'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset', 'line-height: 1.4', 'text-align: left', 'font-size: 12px', 'font-weight: 400'].join(';');
	
		console.log('%c заказать html верстку', styles);
		console.log('%c gorlov35@gmail.com', styles);
	
		$(function () {
	
			var $header = $('.header');
			var $logo = $('.header__logo');
			var $hHeader = $('.header').outerHeight();
			var $page = $('.page');
			var $pageIn = $('.page_inner');
			var $sec = $('.section');
			var $main = $('.main');
			var $hNavIcon = $('.nav__icon');
			var $sideBlockW = $('.sidebar__block');
			var $wW = $(window).width();
	
			// Lightense images
	
			var lightense = (0, _lightenseImages2.default)('.article__img img', {
				time: 300,
				padding: 40,
				offset: 40,
				keyboard: true,
				cubicBezier: 'cubic-bezier(.2, 0, .1, 1)',
				zIndex: 2147483647
			});
	
			// Body padding
	
	
			$pageIn.css({
				'padding-top': $hHeader
			});
	
			$(window).resize(function () {
				var $hHeader = $('.header').outerHeight();
	
				$pageIn.css({
					'padding-top': $hHeader
				});
			});
			$(window).on('scroll', function () {
				if ($(window).scrollTop() > 170) {
					// $('.article__w-w').addClass('article__w-w_full');
				} else {
						// $('.article__w-w').removeClass('article__w-w_full');
					}
			});
	
			if ($wW < 768) {
				$('.sidebar__block').removeClass('sidebar__block_fixed');
			}
	
			// Pjax
	
			// const pjax = new Pjax({
			// 	elements: 'a',
			// 	selectors: ['title', '.main', '.header', '.footer', '.article', '.content', '.calc']
			// });
	
	
			/* Hero particles */
	
			/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
			particlesJS.load('hero', '../assets/scripts/particles.json', function () {
				console.log('callback - particles.js config loaded');
			});
	
			// Sticky header
	
			$page.waypoint(function (d) {
	
				if (d === 'down') {
					$header.addClass('is-inverted is-fixed');
					$logo.addClass('logo_dark');
				} else {
					$header.removeClass('is-inverted');
					$logo.removeClass('logo_dark');
				}
				if (d === 'up') {
					$header.addClass('is-static');
				} else {
					$header.removeClass('is-static');
				}
			}, {
				offset: '-' + $hHeader + 'px'
			});
	
			if ($('.main').find('.sidebar').length !== 0) {
	
				var sticky = new Waypoint.Sticky({
					element: $('.sidebar__w'),
					stuckClass: 'sidebar__block_fixed'
				});
			}
	
			if ($('.main').find('.article__table-contents').length === 0) {} else {
	
				var stickyTablC = new Waypoint.Sticky({
					element: $('.article__table-contents'),
					stuckClass: 'article__table-contents_fixed'
				});
			}
	
			// Header nav
	
			$hNavIcon.on('click', function () {
				$('.nav__icon_open').toggleClass('nav__icon_show');
				$('.nav__icon_close').toggleClass('nav__icon_show');
			});
	
			// Animate sections
	
			$sec.waypoint(function (d) {
				if (d === 'down') {
					// this.element.classList.add('fade-in');
					// this.element.classList.remove('fade-out');
	
				} else {
						// this.element.classList.remove('fade-in');
						// this.element.classList.add('fade-out');
	
					}
			}, {
				offset: '50%'
			});
	
			// Article width
	
			var $articleW = $('.article__w');
	
			if ($articleW.has('.sticky-wrapper').length === 1) {
				// console.log( $articleW.has('.sticky-wrapper').length );
			} else {
				$articleW.children('.article__w-w').addClass('article__w-w_full');
				// console.log( $articleW.has('.sticky-wrapper').length );
			}
	
			// Calc
	
			var $calcInput = $('.form input');
	
			$('.calc__price-val').html($('.calc__type input:checked').val());
	
			$calcInput.each(function () {
				$(this).change(function () {
					calculateTotal();
				});
			});
	
			function calculateTotal() {
				var calcType = $('.calc__type .calc__form-radio:checked').val();
				var calclayout = $('.calc__layout .calc__form-radio:checked').val();
				var calcInput = $('.calc__range-input').val();
				var subTotal = Number(calcType) + Number(calclayout);
				var total = subTotal * calcInput;
				var totalTitle = $('.calc__price-val');
				var nalog = total * Number(13) / Number(100);
				var totalSum = Math.round(total) + Math.round(nalog);
				var totalSumRetail = totalSum * Number(15) / Number(100);
				totalTitle.text(totalSum);
				if (totalSum > 15000) {
					console.log('%c скидка 15% за заказ верстки от 15000', styles);
					console.log(totalSumRetail);
					totalTitle.text(totalSum - Math.round(totalSumRetail));
				} else {
					totalTitle.text(totalSum);
				}
			}
	
			function pageWidget(pages) {
				var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
				widgetWrap.prependTo("body");
				for (var i = 0; i < pages.length; i++) {
					$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
				}
				var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
				widgetStilization.prependTo(".widget_wrap");
			}
	
			// pageWidget(['index', 'blog', 'portfolio', 'contacts']);
		});
	})(jQuery);

/***/ })
])
//# sourceMappingURL=0.ef1414746ed02f1b9bfb.hot-update.js.map