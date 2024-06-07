/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./markup/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./markup/assets/js/main.js":
/*!**********************************!*\
  !*** ./markup/assets/js/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_average_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-average-color */ "./node_modules/fast-average-color/dist/index.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);


 // import { tns } from "tiny-slider/src/tiny-slider";a
// import $ from 'jquery';

(function ($) {
  svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()();
  var styles = ['padding: 2px 9px', 'background: #1b1e64', 'color: #fff', 'display: inline-block', 'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset', 'line-height: 1.52', 'text-align: left', 'font-size: 14px', 'font-weight: 400'].join(';');
  console.log('%c Developed by Igor Gorlov https://igorlov.ru', styles); // window.addEventListener('load', function () {
  //   const ac = new FastAverageColor();
  //   const items = document.querySelectorAll('.books__category');
  //   for (var i = 0; i < items.length; i++) {
  //     if ($(window).width() >= 500) {
  //       const
  //         item = items[i],
  //         image = item.querySelector('img'),
  //         picture = item.querySelector('.books__picture'),
  //         isBottom = item.classList.contains('item_bottom'),
  //         gradient = item.querySelector('.books__gradient'),
  //         size = 300,
  //         color = ac.getColor(image, isBottom ? {
  //           top: width - size,
  //           width: size
  //         } : {
  //           width: size
  //         }),
  //         colorEnd = [].concat(color.value.slice(0, 3), 0.7).join(','),
  //       lg = 'linear-gradient(to bottom, rgb(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.2) 50%)';
  //       gradient.style.backgroundColor = 'rgba(' + colorEnd + ')';
  //       gradient.style.backgroundImage = lg;
  //     } else {
  //       const
  //         item = items[i],
  //         image = item.querySelector('img'),
  //         picture = item.querySelector('.books__picture'),
  //         isBottom = item.classList.contains('item_bottom'),
  //         gradient = item.querySelector('.books__gradient'),
  //         size = 100,
  //         color = ac.getColor(image, isBottom ? {
  //           top: width - size,
  //           width: size
  //         } : {
  //           width: size
  //         }),
  //         colorEnd = [].concat(color.value.slice(0, 3), 0.7).join(','),
  //       lg = 'linear-gradient(to bottom, rgb(0, 0, 0, 0) 0%,  rgba(0, 0, 0, 0.2) 91%)';
  //       gradient.style.backgroundColor = 'rgba(' + colorEnd + ')';
  //       gradient.style.backgroundImage = lg;
  //     }
  //   }
  // }, false);

  $(function () {
    /*
       Lazyload images
     */
    var lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazy',
      load_delay: 50,
      use_native: true
    });

    if (lazyLoadInstance) {
      lazyLoadInstance.update();
    } // Cookies


    var $cookie = document.querySelector('.cookies');
    var $cookieClose = document.querySelector('.cookies__close');

    function agreeWithCookies() {
      var age = 60 * 60 * 24 * 30;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('agreedWithCookies', 'agreedWithCookies', {
        expires: age
      });
    }

    if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('agreedWithCookies') === 'agreedWithCookies') {
      // console.log(Cookies.get('agreedWithCookies'));
      document.body.classList.remove("page__cookie-visible");
    } else {
      // console.log(Cookies.get('agreedWithCookies'));
      document.body.classList.add("page__cookie-visible");
      $cookieClose.addEventListener('click', function (e) {
        e.preventDefault();
        agreeWithCookies();
        document.body.classList.remove("page__cookie-visible");
      });
    } // Nav


    var $header = $('.header');
    var $navTrigger = $('.nav__trigger');
    $navTrigger.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('nav__trigger_active');
      $header.toggleClass('header_open');
    }); // Close nav

    $(document).on('click', function (e) {
      if (!$(e.target).closest('.nav__trigger_active').length) {
        $navTrigger.removeClass('nav__trigger_active');
        $header.removeClass('header_open');
      }
    }); // ScrollTo
    // $('.home .nav__list a, .home .nav-sec__list a').on('click', function (e) {
    //   e.preventDefault();
    //   let _scroll = $(this).attr('href');
    //   if (_scroll != '#' && $(_scroll).length) {
    //     $('html, body').animate({
    //       scrollTop: $(_scroll).offset().top - 0
    //     }, 300);
    //   }
    // });
    // HeaderSlider

    var $headerSlider = $('.header__slider');

    if ($headerSlider.length > 0) {
      $headerSlider.slick({
        slidesToScroll: 1,
        dots: false,
        slidesToShow: 1,
        mobileFirst: true,
        // loop: true,
        accessibility: true,
        infinite: true,
        speed: 600,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        // autoplay: false,
        autoplaySpeed: 20000,
        arrows: false
      });
    } // Story slider


    var $storySlider = $('.story__timeline'); // const $storySlider = $('.story__timeline');

    if ($storySlider.length > 0) {
      $storySlider.slick({
        dots: true,
        mobileFirst: true,
        focusOnSelect: true,
        waitForAnimate: true,
        // adaptiveHeight: true,
        adaptiveHeight: false,
        arrows: false,
        infinite: false,
        responsive: [{
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            // initialSlide: 5,
            centerMode: true,
            centerPadding: '0px' // fade: true,
            // adaptiveHeight: true,

          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2 // adaptiveHeight: true,

          }
        }, {
          breakpoint: 1200,
          settings: 'unslick'
        }]
      });
      $(window).on('resize', function () {
        $storySlider.slick('resize');
      }); // $('.slider-nav').slick({
      //   slidesToShow: 6,
      //   slidesToScroll: 4,
      //   asNavFor: '.slider-for',
      //   dots: true,
      //   centerMode: true,
      //   focusOnSelect: true
      // });
    } // Press slider


    var $pressSlider = $('.press__slider');

    if ($pressSlider.length > 0) {
      $pressSlider.slick({
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        infinite: true,
        // initialSlide: -1,
        speed: 300,
        focusOnSelect: true,
        waitForAnimate: false,
        adaptiveHeight: false,
        arrows: false,
        responsive: [{
          breakpoint: 1,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false
          }
        }, {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            prevArrow: '.press__arrow_back',
            nextArrow: '.press__arrow_next'
          }
        }]
      });
    } // Books


    var $booksCategory = $(".books__category");

    if ($(window).width() >= 768) {
      $booksCategory.eq(2).addClass('books__category_active');

      if (!$booksCategory.hasClass('.books__category_active')) {
        $booksCategory.siblings('.books__category').find('.books__cat-w').addClass('books__cat-w_active');
      }

      $booksCategory.hover(function () {
        $(".books__categories").find(".books__category_active").removeClass("books__category_active");
        $(this).addClass("books__category_active");

        if (!$(this).hasClass('.books__category_active')) {
          $(this).siblings('.books__category').find('.books__cat-w').addClass('books__cat-w_active');
        }
      }, function () {
        $(".books__categories").children(".books__category_active").removeClass("books__category_active");
        $(this).siblings('.books__category').find('.books__cat-w').removeClass('books__cat-w_active');
      });
    } else {
      $booksCategory.eq(2).addClass('books__category_active');
      $booksCategory.hover(function () {
        $(".books__categories").find(".books__category_active").removeClass("books__category_active");
        $(this).addClass("books__category_active");

        if (!$(this).hasClass('.books__category_active')) {
          $(this).siblings('.books__category').find('.books__cat-w').addClass('books__cat-w_active');
        }
      });
    } // Middle color

  });
})(jQuery);

/***/ }),

/***/ "./node_modules/fast-average-color/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/fast-average-color/dist/index.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! Fast Average Color | © 2021 Denis Seleznev | MIT License | https://github.com/fast-average-color/fast-average-color */
function toHex(num) {
    const str = num.toString(16);

    return str.length === 1 ? '0' + str : str;
}

function arrayToHex(arr) {
    return '#' + arr.map(toHex).join('');
}

function isDark(color) {
    // http://www.w3.org/TR/AERT#color-contrast
    const result = (color[0] * 299 + color[1] * 587 + color[2] * 114) / 1000;

    return result < 128;
}

function prepareIgnoredColor(color) {
    if (!color) { return color; }

    if (Array.isArray(color)) {
        return typeof color[0] === 'number' ? [color.slice()] : color;
    }

    return [color];
}

function isIgnoredColor(data, index, ignoredColor) {
    for (let i = 0; i < ignoredColor.length; i++) {
        if (isIgnoredColorAsNumbers(data, index, ignoredColor[i])) {
            return true;
        }
    }

    return false;
}

function isIgnoredColorAsNumbers(data, index, ignoredColor) {
    switch (ignoredColor.length) {
        case 3:
            // [red, green, blue]
            if (isIgnoredRGBColor(data, index, ignoredColor)) {
                return true;
            }

            break;
        case 4:
            // [red, green, blue, alpha]
            if (isIgnoredRGBAColor(data, index, ignoredColor)) {
                return true;
            }

            break;
        case 5:
            // [red, green, blue, alpha, threshold]
            if (isIgnoredRGBAColorWithThreshold(data, index, ignoredColor)) {
                return true;
            }

            break;
        default:
            return false;
    }
}

function isIgnoredRGBColor(data, index, ignoredColor) {
    // Ignore if the pixel are transparent.
    if (data[index + 3] !== 255) {
        return true;
    }

    if (data[index] === ignoredColor[0] &&
        data[index + 1] === ignoredColor[1] &&
        data[index + 2] === ignoredColor[2]
    ) {
        return true;
    }

    return false;
}

function isIgnoredRGBAColor(data, index, ignoredColor) {
    if (data[index + 3] && ignoredColor[3]) {
        return data[index] === ignoredColor[0] &&
            data[index + 1] === ignoredColor[1] &&
            data[index + 2] === ignoredColor[2] &&
            data[index + 3] === ignoredColor[3];
    }

    // Ignore rgb components if the pixel are fully transparent.
    return data[index + 3] === ignoredColor[3];
}

function inRange(colorComponent, ignoredColorComponent, value) {
    return colorComponent >= (ignoredColorComponent - value) &&
        colorComponent <= (ignoredColorComponent + value);
}

function isIgnoredRGBAColorWithThreshold(data, index, ignoredColor) {
    const redIgnored = ignoredColor[0];
    const greenIgnored = ignoredColor[1];
    const blueIgnored = ignoredColor[2];
    const alphaIgnored = ignoredColor[3];
    const threshold = ignoredColor[4];
    const alphaData = data[index + 3];

    const alphaInRange = inRange(alphaData, alphaIgnored, threshold);
    if (!alphaIgnored) {
        return alphaInRange;
    }

    if (!alphaData && alphaInRange) {
        return true;
    }

    if (inRange(data[index], redIgnored, threshold) &&
        inRange(data[index + 1], greenIgnored, threshold) &&
        inRange(data[index + 2], blueIgnored, threshold) &&
        alphaInRange
    ) {
        return true;
    }

    return false;
}

function dominantAlgorithm(arr, len, options) {
    const colorHash = {};
    const divider = 24;
    const ignoredColor = options.ignoredColor;
    const step = options.step;
    let max = [0, 0, 0, 0, 0];
    
    for (let i = 0; i < len; i += step) {
        const red = arr[i];
        const green = arr[i + 1];
        const blue = arr[i + 2];
        const alpha = arr[i + 3];

        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }

        const key = Math.round(red / divider) + ',' +
                Math.round(green / divider) + ',' +
                Math.round(blue / divider);

        if (colorHash[key]) {
            colorHash[key] = [
                colorHash[key][0] + red * alpha,
                colorHash[key][1] + green * alpha,
                colorHash[key][2] + blue * alpha,
                colorHash[key][3] + alpha,
                colorHash[key][4] + 1
            ];
        } else {
            colorHash[key] = [red * alpha, green * alpha, blue * alpha, alpha, 1];
        }
        
        if (max[4] < colorHash[key][4]) {
            max = colorHash[key];
        }
    }

    const redTotal = max[0];
    const greenTotal = max[1];
    const blueTotal = max[2];

    const alphaTotal = max[3];
    const count = max[4];

    return alphaTotal ? [
        Math.round(redTotal / alphaTotal),
        Math.round(greenTotal / alphaTotal),
        Math.round(blueTotal / alphaTotal),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function simpleAlgorithm(arr, len, options) {
    let redTotal = 0;
    let greenTotal = 0;
    let blueTotal = 0;
    let alphaTotal = 0;
    let count = 0;

    const ignoredColor = options.ignoredColor;
    const step = options.step;

    for (let i = 0; i < len; i += step) {
        const alpha = arr[i + 3];
        const red = arr[i] * alpha;
        const green = arr[i + 1] * alpha;
        const blue = arr[i + 2] * alpha;

        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }

        redTotal += red;
        greenTotal += green;
        blueTotal += blue;
        alphaTotal += alpha;

        count++;
    }

    return alphaTotal ? [
        Math.round(redTotal / alphaTotal),
        Math.round(greenTotal / alphaTotal),
        Math.round(blueTotal / alphaTotal),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function sqrtAlgorithm(arr, len, options) {
    let redTotal = 0;
    let greenTotal = 0;
    let blueTotal = 0;
    let alphaTotal = 0;
    let count = 0;

    const ignoredColor = options.ignoredColor;
    const step = options.step;

    for (let i = 0; i < len; i += step) {
        const red = arr[i];
        const green = arr[i + 1];
        const blue = arr[i + 2];
        const alpha = arr[i + 3];

        if (ignoredColor && isIgnoredColor(arr, i, ignoredColor)) {
            continue;
        }

        redTotal += red * red * alpha;
        greenTotal += green * green * alpha;
        blueTotal += blue * blue * alpha;
        alphaTotal += alpha;

        count++;
    }

    return alphaTotal ? [
        Math.round(Math.sqrt(redTotal / alphaTotal)),
        Math.round(Math.sqrt(greenTotal / alphaTotal)),
        Math.round(Math.sqrt(blueTotal / alphaTotal)),
        Math.round(alphaTotal / count)
    ] : options.defaultColor;
}

function getDefaultColor(options) {
    return getOption(options, 'defaultColor', [0, 0, 0, 0]);
}

function getOption(options, name, defaultValue) {
    return typeof options[name] === 'undefined' ? defaultValue : options[name];
}

const MIN_SIZE = 10;
const MAX_SIZE = 100;

function isSvg(filename) {
    return filename.search(/\.svg(\?|$)/i) !== -1;
}

function getOriginalSize(resource) {
    if (resource instanceof HTMLImageElement) {
        let width = resource.naturalWidth;
        let height = resource.naturalHeight;

        // For SVG images with only viewBox attr.
        if (!resource.naturalWidth && isSvg(resource.src)) {
            width = height = MAX_SIZE;
        }

        return {
            width,
            height,
        };
    }

    if (resource instanceof HTMLVideoElement) {
        return {
            width: resource.videoWidth,
            height: resource.videoHeight
        };
    }

    return {
        width: resource.width,
        height: resource.height
    };
}

function prepareSizeAndPosition(originalSize, options) {
    const srcLeft = getOption(options, 'left', 0);
    const srcTop = getOption(options, 'top', 0);
    const srcWidth = getOption(options, 'width', originalSize.width);
    const srcHeight = getOption(options, 'height', originalSize.height);

    let destWidth = srcWidth;
    let destHeight = srcHeight;

    if (options.mode === 'precision') {
        return {
            srcLeft,
            srcTop,
            srcWidth,
            srcHeight,
            destWidth,
            destHeight
        };
    }

    let factor;

    if (srcWidth > srcHeight) {
        factor = srcWidth / srcHeight;
        destWidth = MAX_SIZE;
        destHeight = Math.round(destWidth / factor);
    } else {
        factor = srcHeight / srcWidth;
        destHeight = MAX_SIZE;
        destWidth = Math.round(destHeight / factor);
    }

    if (
        destWidth > srcWidth || destHeight > srcHeight ||
        destWidth < MIN_SIZE || destHeight < MIN_SIZE
    ) {
        destWidth = srcWidth;
        destHeight = srcHeight;
    }

    return {
        srcLeft,
        srcTop,
        srcWidth,
        srcHeight,
        destWidth,
        destHeight
    };
}

function makeCanvas() {
    return typeof window === 'undefined' ?
        new OffscreenCanvas(1, 1) :
        document.createElement('canvas');
}

const ERROR_PREFIX = 'FastAverageColor: ';

function outputError(options, text, details) {
    if (!options.silent) {
        console.error(ERROR_PREFIX + text);

        if (details) {
            console.error(details);
        }
    }
}

function getError(text) {
    return Error(ERROR_PREFIX + text);
}

class FastAverageColor {
    /**
     * Get asynchronously the average color from not loaded image.
     *
     * @param {string | HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | null} resource
     * @param {FastAverageColorOptions} [options]
     *
     * @returns {Promise<FastAverageColorOptions>}
     */
    getColorAsync(resource, options) {
        if (!resource) {
            return Promise.reject(getError('call .getColorAsync() without resource.'));
        }

        if (typeof resource === 'string') {
            const img = new Image();
            img.crossOrigin = '';
            img.src = resource;

            return this._bindImageEvents(img, options);
        } else if (resource instanceof Image && !resource.complete) {
            return this._bindImageEvents(resource, options);
        } else {
            const result = this.getColor(resource, options);

            return result.error ? Promise.reject(result.error) : Promise.resolve(result);
        }
    }

    /**
     * Get the average color from images, videos and canvas.
     *
     * @param {HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | null} resource
     * @param {FastAverageColorOptions} [options]
     *
     * @returns {FastAverageColorResult}
     */
    getColor(resource, options) {
        options = options || {};

        const defaultColor = getDefaultColor(options);

        if (!resource) {
            outputError(options, 'call .getColor(null) without resource.');

            return this.prepareResult(defaultColor);
        }

        const originalSize = getOriginalSize(resource);
        const size = prepareSizeAndPosition(originalSize, options);

        if (!size.srcWidth || !size.srcHeight || !size.destWidth || !size.destHeight) {
            outputError(options, `incorrect sizes for resource "${resource.src}".`);

            return this.prepareResult(defaultColor);
        }

        if (!this._ctx) {
            this._canvas = makeCanvas();
            this._ctx = this._canvas.getContext && this._canvas.getContext('2d');

            if (!this._ctx) {
                outputError(options, 'Canvas Context 2D is not supported in this browser.');

                return this.prepareResult(defaultColor);
            }
        }

        this._canvas.width = size.destWidth;
        this._canvas.height = size.destHeight;

        let value = defaultColor;

        try {
            this._ctx.clearRect(0, 0, size.destWidth, size.destHeight);
            this._ctx.drawImage(
                resource,
                size.srcLeft, size.srcTop,
                size.srcWidth, size.srcHeight,
                0, 0,
                size.destWidth, size.destHeight
            );

            const bitmapData = this._ctx.getImageData(0, 0, size.destWidth, size.destHeight).data;
            value = this.getColorFromArray4(bitmapData, options);
        } catch (e) {
            outputError(options, `security error (CORS) for resource ${resource.src}.\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image`, e);
        }

        return this.prepareResult(value);
    }

    /**
     * Get the average color from a array when 1 pixel is 4 bytes.
     *
     * @param {number[]|Uint8Array|Uint8ClampedArray} arr
     * @param {Object} [options]
     * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
     * @param {number[]}  [options.defaultColor=[0, 0, 0, 0]] [red, green, blue, alpha]
     * @param {number[]}  [options.ignoredColor] [red, green, blue, alpha]
     * @param {number} [options.step=1]
     *
     * @returns {number[]} [red (0-255), green (0-255), blue (0-255), alpha (0-255)]
     */
    getColorFromArray4(arr, options) {
        options = options || {};

        const bytesPerPixel = 4;
        const arrLength = arr.length;
        const defaultColor = getDefaultColor(options);

        if (arrLength < bytesPerPixel) {
            return defaultColor;
        }

        const len = arrLength - arrLength % bytesPerPixel;
        const step = (options.step || 1) * bytesPerPixel;

        let algorithm;

        switch (options.algorithm || 'sqrt') {
            case 'simple':
                algorithm = simpleAlgorithm;
                break;
            case 'sqrt':
                algorithm = sqrtAlgorithm;
                break;
            case 'dominant':
                algorithm = dominantAlgorithm;
                break;
            default:
                throw getError(`${options.algorithm} is unknown algorithm.`);
        }

        return algorithm(arr, len, {
            defaultColor,
            ignoredColor: prepareIgnoredColor(options.ignoredColor),
            step
        });
    }

    /**
     * Get color data from value ([r, g, b, a]).
     *
     * @param {number[]} value
     *
     * @returns {FastAverageColorResult}
     */
    prepareResult(value) {
        const rgb = value.slice(0, 3);
        const rgba = [].concat(rgb, value[3] / 255);
        const isDarkColor = isDark(value);

        return {
            value,
            rgb: 'rgb(' + rgb.join(',') + ')',
            rgba: 'rgba(' + rgba.join(',') + ')',
            hex: arrayToHex(rgb),
            hexa: arrayToHex(value),
            isDark: isDarkColor,
            isLight: !isDarkColor
        };
    }

    /**
     * Destroy the instance.
     */
    destroy() {
        delete this._canvas;
        delete this._ctx;
    }

    _bindImageEvents(resource, options) {
        return new Promise((resolve, reject) => {
            const onload = () => {
                unbindEvents();

                const result = this.getColor(resource, options);

                if (result.error) {
                    reject(result.error);
                } else {
                    resolve(result);
                }
            };

            const onerror = () => {
                unbindEvents();

                reject(getError(`Error loading image "${resource.src}".`));
            };

            const onabort = () => {
                unbindEvents();

                reject(getError(`Image "${resource.src}" loading aborted.`));
            };

            const unbindEvents = () => {
                resource.removeEventListener('load', onload);
                resource.removeEventListener('error', onerror);
                resource.removeEventListener('abort', onabort);
            };

            resource.addEventListener('load', onload);
            resource.addEventListener('error', onerror);
            resource.addEventListener('abort', onabort);
        });
    }
}

/**
 * @typeof {Object} FastAverageColorOptions
 *
 * @param {number[]}  [options.defaultColor=[0, 0, 0, 0]] [red, green, blue, alpha]
 * @param {number[]}  [options.ignoredColor] [red, green, blue, alpha]
 * @param {string} [options.mode="speed"] "precision" or "speed"
 * @param {string} [options.algorithm="sqrt"] "simple", "sqrt" or "dominant"
 * @param {number} [options.step=1]
 * @param {number} [options.left=0]
 * @param {number} [options.top=0]
 * @param {number} [options.width=width of resource]
 * @param {number} [options.height=height of resource]
 * @param {boolean} [options.silent] Disable error output via console.error
 */

/**
 * @typedef {Object} FastAverageColorResult
 *
 * @property {string} rgba
 * @property {string} rgb
 * @property {string} hex
 * @property {string} hexa
 * @property {number[]} value
 * @property {boolean} isDark
 * @property {boolean} isLight
 * @property {Error?} error
 */

/* harmony default export */ __webpack_exports__["default"] = (FastAverageColor);


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/svg4everybody/dist/svg4everybody.js":
/*!**********************************************************!*\
  !*** ./node_modules/svg4everybody/dist/svg4everybody.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL2Fzc2V0cy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mYXN0LWF2ZXJhZ2UtY29sb3IvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9zcmMvanMuY29va2llLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyJdLCJuYW1lcyI6WyIkIiwic3ZnNGV2ZXJ5Ym9keSIsInN0eWxlcyIsImpvaW4iLCJjb25zb2xlIiwibG9nIiwibGF6eUxvYWRJbnN0YW5jZSIsIkxhenlMb2FkIiwiZWxlbWVudHNfc2VsZWN0b3IiLCJsb2FkX2RlbGF5IiwidXNlX25hdGl2ZSIsInVwZGF0ZSIsIiRjb29raWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkY29va2llQ2xvc2UiLCJhZ3JlZVdpdGhDb29raWVzIiwiYWdlIiwiQ29va2llcyIsInNldCIsImV4cGlyZXMiLCJnZXQiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiRoZWFkZXIiLCIkbmF2VHJpZ2dlciIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCIkaGVhZGVyU2xpZGVyIiwic2xpY2siLCJzbGlkZXNUb1Njcm9sbCIsImRvdHMiLCJzbGlkZXNUb1Nob3ciLCJtb2JpbGVGaXJzdCIsImFjY2Vzc2liaWxpdHkiLCJpbmZpbml0ZSIsInNwZWVkIiwiZm9jdXNPblNlbGVjdCIsIndhaXRGb3JBbmltYXRlIiwiYWRhcHRpdmVIZWlnaHQiLCJmYWRlIiwiY3NzRWFzZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImFycm93cyIsIiRzdG9yeVNsaWRlciIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsIndpbmRvdyIsIiRwcmVzc1NsaWRlciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsIiRib29rc0NhdGVnb3J5Iiwid2lkdGgiLCJlcSIsImFkZENsYXNzIiwiaGFzQ2xhc3MiLCJzaWJsaW5ncyIsImZpbmQiLCJob3ZlciIsImNoaWxkcmVuIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Q0FFQTtBQUNBOztBQUVBLENBQUMsVUFBVUEsQ0FBVixFQUFhO0VBRVpDLG9EQUFhO0VBRWIsSUFBSUMsTUFBTSxHQUFHLENBQ1gsa0JBRFcsRUFFWCxxQkFGVyxFQUdYLGFBSFcsRUFJWCx1QkFKVyxFQUtYLDBJ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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHdFQUF3RTtBQUN2RixlQUFlLHdCQUF3QjtBQUN2QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUErRDtBQUM5RSxlQUFlLHdCQUF3QjtBQUN2QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrRUFBa0UsYUFBYTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBZ0U7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vYXNzZXRzL2pzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL21hcmt1cC9hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsImltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xuaW1wb3J0IEZhc3RBdmVyYWdlQ29sb3IgZnJvbSAnZmFzdC1hdmVyYWdlLWNvbG9yJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG4vLyBpbXBvcnQgeyB0bnMgfSBmcm9tIFwidGlueS1zbGlkZXIvc3JjL3Rpbnktc2xpZGVyXCI7YVxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgc3ZnNGV2ZXJ5Ym9keSgpO1xuXG4gIGxldCBzdHlsZXMgPSBbXG4gICAgJ3BhZGRpbmc6IDJweCA5cHgnLFxuICAgICdiYWNrZ3JvdW5kOiAjMWIxZTY0JyxcbiAgICAnY29sb3I6ICNmZmYnLFxuICAgICdkaXNwbGF5OiBpbmxpbmUtYmxvY2snLFxuICAgICdib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgaW5zZXQsIDAgNXB4IDNweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KSwgMCAtMTNweCA1cHggLTEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIGluc2V0JyxcbiAgICAnbGluZS1oZWlnaHQ6IDEuNTInLFxuICAgICd0ZXh0LWFsaWduOiBsZWZ0JyxcbiAgICAnZm9udC1zaXplOiAxNHB4JyxcbiAgICAnZm9udC13ZWlnaHQ6IDQwMCdcbiAgXS5qb2luKCc7Jyk7XG5cbiAgY29uc29sZS5sb2coJyVjIERldmVsb3BlZCBieSBJZ29yIEdvcmxvdiBodHRwczovL2lnb3Jsb3YucnUnLCBzdHlsZXMpO1xuXG5cbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgLy8gICBjb25zdCBhYyA9IG5ldyBGYXN0QXZlcmFnZUNvbG9yKCk7XG4gIC8vICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9va3NfX2NhdGVnb3J5Jyk7XG5cbiAgLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gIC8vICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPj0gNTAwKSB7XG4gIC8vICAgICAgIGNvbnN0XG4gIC8vICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldLFxuICAvLyAgICAgICAgIGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKSxcbiAgLy8gICAgICAgICBwaWN0dXJlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYm9va3NfX3BpY3R1cmUnKSxcblxuICAvLyAgICAgICAgIGlzQm90dG9tID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1fYm90dG9tJyksXG4gIC8vICAgICAgICAgZ3JhZGllbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5ib29rc19fZ3JhZGllbnQnKSxcblxuICAvLyAgICAgICAgIHNpemUgPSAzMDAsXG5cbiAgLy8gICAgICAgICBjb2xvciA9IGFjLmdldENvbG9yKGltYWdlLCBpc0JvdHRvbSA/IHtcbiAgLy8gICAgICAgICAgIHRvcDogd2lkdGggLSBzaXplLFxuICAvLyAgICAgICAgICAgd2lkdGg6IHNpemVcbiAgLy8gICAgICAgICB9IDoge1xuICAvLyAgICAgICAgICAgd2lkdGg6IHNpemVcbiAgLy8gICAgICAgICB9KSxcbiAgLy8gICAgICAgICBjb2xvckVuZCA9IFtdLmNvbmNhdChjb2xvci52YWx1ZS5zbGljZSgwLCAzKSwgMC43KS5qb2luKCcsJyksXG5cbiAgLy8gICAgICAgbGcgPSAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDAsIDAsIDAsIDApIDAlLCAgcmdiYSgwLCAwLCAwLCAwLjIpIDUwJSknO1xuICAvLyAgICAgICBncmFkaWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgnICsgY29sb3JFbmQgKyAnKSc7XG4gIC8vICAgICAgIGdyYWRpZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGxnO1xuXG4gIC8vICAgICB9IGVsc2Uge1xuXG4gIC8vICAgICAgIGNvbnN0XG4gIC8vICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldLFxuICAvLyAgICAgICAgIGltYWdlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdpbWcnKSxcbiAgLy8gICAgICAgICBwaWN0dXJlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcuYm9va3NfX3BpY3R1cmUnKSxcblxuICAvLyAgICAgICAgIGlzQm90dG9tID0gaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2l0ZW1fYm90dG9tJyksXG4gIC8vICAgICAgICAgZ3JhZGllbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5ib29rc19fZ3JhZGllbnQnKSxcblxuICAvLyAgICAgICAgIHNpemUgPSAxMDAsXG5cbiAgLy8gICAgICAgICBjb2xvciA9IGFjLmdldENvbG9yKGltYWdlLCBpc0JvdHRvbSA/IHtcbiAgLy8gICAgICAgICAgIHRvcDogd2lkdGggLSBzaXplLFxuICAvLyAgICAgICAgICAgd2lkdGg6IHNpemVcbiAgLy8gICAgICAgICB9IDoge1xuICAvLyAgICAgICAgICAgd2lkdGg6IHNpemVcbiAgLy8gICAgICAgICB9KSxcbiAgLy8gICAgICAgICBjb2xvckVuZCA9IFtdLmNvbmNhdChjb2xvci52YWx1ZS5zbGljZSgwLCAzKSwgMC43KS5qb2luKCcsJyksXG5cbiAgLy8gICAgICAgbGcgPSAnbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDAsIDAsIDAsIDApIDAlLCAgcmdiYSgwLCAwLCAwLCAwLjIpIDkxJSknO1xuICAvLyAgICAgICBncmFkaWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgnICsgY29sb3JFbmQgKyAnKSc7XG4gIC8vICAgICAgIGdyYWRpZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGxnO1xuXG4gIC8vICAgICB9XG5cbiAgLy8gICB9XG5cblxuICAvLyB9LCBmYWxzZSk7XG5cblxuICAkKGZ1bmN0aW9uKCkge1xuXG4gICAgIC8qXG4gICAgICAgIExhenlsb2FkIGltYWdlc1xuICAgICAgKi9cblxuICAgICAgbGV0IGxhenlMb2FkSW5zdGFuY2UgPSBuZXcgTGF6eUxvYWQoe1xuICAgICAgICBlbGVtZW50c19zZWxlY3RvcjogJy5sYXp5JyxcbiAgICAgICAgbG9hZF9kZWxheTogNTAsXG4gICAgICAgIHVzZV9uYXRpdmU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobGF6eUxvYWRJbnN0YW5jZSkge1xuICAgICAgICBsYXp5TG9hZEluc3RhbmNlLnVwZGF0ZSgpO1xuICAgICAgfVxuXG4gICAgLy8gQ29va2llc1xuXG4gICAgY29uc3QgJGNvb2tpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVzJyk7XG4gICAgY29uc3QgJGNvb2tpZUNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvb2tpZXNfX2Nsb3NlJyk7XG5cbiAgICBmdW5jdGlvbiBhZ3JlZVdpdGhDb29raWVzKCkge1xuICAgICAgdmFyIGFnZSA9IDYwICogNjAgKiAyNCAqIDMwO1xuICAgICAgQ29va2llcy5zZXQoJ2FncmVlZFdpdGhDb29raWVzJywgJ2FncmVlZFdpdGhDb29raWVzJywgeyBleHBpcmVzOiBhZ2UgfSk7XG4gICAgfVxuXG4gICAgaWYgKCBDb29raWVzLmdldCgnYWdyZWVkV2l0aENvb2tpZXMnKSA9PT0gJ2FncmVlZFdpdGhDb29raWVzJyApIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKENvb2tpZXMuZ2V0KCdhZ3JlZWRXaXRoQ29va2llcycpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2VfX2Nvb2tpZS12aXNpYmxlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhDb29raWVzLmdldCgnYWdyZWVkV2l0aENvb2tpZXMnKSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJwYWdlX19jb29raWUtdmlzaWJsZVwiKTtcblxuICAgICAgJGNvb2tpZUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZ3JlZVdpdGhDb29raWVzKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2VfX2Nvb2tpZS12aXNpYmxlXCIpO1xuICAgICAgfSk7XG4gICAgfVxuXG5cblxuICAgIC8vIE5hdlxuXG4gICAgY29uc3QgJGhlYWRlciA9ICQoJy5oZWFkZXInKTtcbiAgICBjb25zdCAkbmF2VHJpZ2dlciA9ICQoJy5uYXZfX3RyaWdnZXInKTtcblxuICAgICRuYXZUcmlnZ2VyLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCduYXZfX3RyaWdnZXJfYWN0aXZlJyk7XG4gICAgICAkaGVhZGVyLnRvZ2dsZUNsYXNzKCdoZWFkZXJfb3BlbicpO1xuXG5cbiAgICB9KTtcblxuICAgIC8vIENsb3NlIG5hdlxuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLm5hdl9fdHJpZ2dlcl9hY3RpdmUnKS5sZW5ndGgpIHtcbiAgICAgICAgJG5hdlRyaWdnZXIucmVtb3ZlQ2xhc3MoJ25hdl9fdHJpZ2dlcl9hY3RpdmUnKTtcbiAgICAgICAgJGhlYWRlci5yZW1vdmVDbGFzcygnaGVhZGVyX29wZW4nKTtcblxuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICAvLyBTY3JvbGxUb1xuXG4gICAgLy8gJCgnLmhvbWUgLm5hdl9fbGlzdCBhLCAuaG9tZSAubmF2LXNlY19fbGlzdCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgIGxldCBfc2Nyb2xsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgLy8gICBpZiAoX3Njcm9sbCAhPSAnIycgJiYgJChfc2Nyb2xsKS5sZW5ndGgpIHtcbiAgICAvLyAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgIC8vICAgICAgIHNjcm9sbFRvcDogJChfc2Nyb2xsKS5vZmZzZXQoKS50b3AgLSAwXG4gICAgLy8gICAgIH0sIDMwMCk7XG4gICAgLy8gICB9XG4gICAgLy8gfSk7XG5cblxuICAgIC8vIEhlYWRlclNsaWRlclxuXG4gICAgY29uc3QgJGhlYWRlclNsaWRlciA9ICQoJy5oZWFkZXJfX3NsaWRlcicpO1xuXG4gICAgaWYgKCRoZWFkZXJTbGlkZXIubGVuZ3RoID4gMCkge1xuXG4gICAgICAkaGVhZGVyU2xpZGVyLnNsaWNrKHtcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAvLyBsb29wOiB0cnVlLFxuICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDYwMCxcbiAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgd2FpdEZvckFuaW1hdGU6IGZhbHNlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgLy8gYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwMCxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcblxuICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8vIFN0b3J5IHNsaWRlclxuXG4gICAgY29uc3QgJHN0b3J5U2xpZGVyID0gJCgnLnN0b3J5X190aW1lbGluZScpO1xuICAgIC8vIGNvbnN0ICRzdG9yeVNsaWRlciA9ICQoJy5zdG9yeV9fdGltZWxpbmUnKTtcblxuXG4gICAgaWYgKCRzdG9yeVNsaWRlci5sZW5ndGggPiAwKSB7XG4gICAgICAkc3RvcnlTbGlkZXIuc2xpY2soe1xuICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG5cbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEsXG4gICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgIC8vIGluaXRpYWxTbGlkZTogNSxcbiAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXG4gICAgICAgICAgICAgIC8vIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgIC8vIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgLy8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICBzZXR0aW5nczogJ3Vuc2xpY2snLFxuICAgICAgICB9XVxuICAgICAgfSk7XG5cblxuICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJHN0b3J5U2xpZGVyLnNsaWNrKCdyZXNpemUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyAkKCcuc2xpZGVyLW5hdicpLnNsaWNrKHtcbiAgICAgIC8vICAgc2xpZGVzVG9TaG93OiA2LFxuICAgICAgLy8gICBzbGlkZXNUb1Njcm9sbDogNCxcbiAgICAgIC8vICAgYXNOYXZGb3I6ICcuc2xpZGVyLWZvcicsXG4gICAgICAvLyAgIGRvdHM6IHRydWUsXG4gICAgICAvLyAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAvLyAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG5cblxuXG4gICAgLy8gUHJlc3Mgc2xpZGVyXG5cbiAgICBjb25zdCAkcHJlc3NTbGlkZXIgPSAkKCcucHJlc3NfX3NsaWRlcicpO1xuXG4gICAgaWYgKCRwcmVzc1NsaWRlci5sZW5ndGggPiAwKSB7XG5cbiAgICAgICRwcmVzc1NsaWRlci5zbGljayh7XG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAvLyBpbml0aWFsU2xpZGU6IC0xLFxuICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogZmFsc2UsXG4gICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgIGFycm93czogZmFsc2UsXG5cbiAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgYnJlYWtwb2ludDogMSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJy5wcmVzc19fYXJyb3dfYmFjaycsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnLnByZXNzX19hcnJvd19uZXh0JyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cblxuXG4gICAgfVxuXG5cbiAgICAvLyBCb29rc1xuXG4gICAgY29uc3QgJGJvb2tzQ2F0ZWdvcnkgPSAkKFwiLmJvb2tzX19jYXRlZ29yeVwiKTtcblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSA3NjgpIHtcbiAgICAgICRib29rc0NhdGVnb3J5LmVxKDIpLmFkZENsYXNzKCdib29rc19fY2F0ZWdvcnlfYWN0aXZlJyk7XG4gICAgICBpZiAoISRib29rc0NhdGVnb3J5Lmhhc0NsYXNzKCcuYm9va3NfX2NhdGVnb3J5X2FjdGl2ZScpKSB7XG4gICAgICAgICRib29rc0NhdGVnb3J5XG4gICAgICAgICAgLnNpYmxpbmdzKCcuYm9va3NfX2NhdGVnb3J5JylcbiAgICAgICAgICAuZmluZCgnLmJvb2tzX19jYXQtdycpXG4gICAgICAgICAgLmFkZENsYXNzKCdib29rc19fY2F0LXdfYWN0aXZlJyk7XG4gICAgICB9XG5cbiAgICAgICRib29rc0NhdGVnb3J5LmhvdmVyKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAkKFwiLmJvb2tzX19jYXRlZ29yaWVzXCIpLmZpbmQoXCIuYm9va3NfX2NhdGVnb3J5X2FjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImJvb2tzX19jYXRlZ29yeV9hY3RpdmVcIik7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJib29rc19fY2F0ZWdvcnlfYWN0aXZlXCIpO1xuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJy5ib29rc19fY2F0ZWdvcnlfYWN0aXZlJykpIHtcbiAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAuc2libGluZ3MoJy5ib29rc19fY2F0ZWdvcnknKVxuICAgICAgICAgICAgLmZpbmQoJy5ib29rc19fY2F0LXcnKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdib29rc19fY2F0LXdfYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5ib29rc19fY2F0ZWdvcmllc1wiKS5jaGlsZHJlbihcIi5ib29rc19fY2F0ZWdvcnlfYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYm9va3NfX2NhdGVnb3J5X2FjdGl2ZVwiKTtcbiAgICAgICAgJCh0aGlzKVxuICAgICAgICAgIC5zaWJsaW5ncygnLmJvb2tzX19jYXRlZ29yeScpXG4gICAgICAgICAgLmZpbmQoJy5ib29rc19fY2F0LXcnKVxuICAgICAgICAgIC5yZW1vdmVDbGFzcygnYm9va3NfX2NhdC13X2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAkYm9va3NDYXRlZ29yeS5lcSgyKS5hZGRDbGFzcygnYm9va3NfX2NhdGVnb3J5X2FjdGl2ZScpO1xuXG4gICAgICAkYm9va3NDYXRlZ29yeS5ob3ZlcihmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgJChcIi5ib29rc19fY2F0ZWdvcmllc1wiKS5maW5kKFwiLmJvb2tzX19jYXRlZ29yeV9hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJib29rc19fY2F0ZWdvcnlfYWN0aXZlXCIpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYm9va3NfX2NhdGVnb3J5X2FjdGl2ZVwiKTtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCcuYm9va3NfX2NhdGVnb3J5X2FjdGl2ZScpKSB7XG4gICAgICAgICAgJCh0aGlzKVxuICAgICAgICAgICAgLnNpYmxpbmdzKCcuYm9va3NfX2NhdGVnb3J5JylcbiAgICAgICAgICAgIC5maW5kKCcuYm9va3NfX2NhdC13JylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYm9va3NfX2NhdC13X2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuXG5cbiAgICB9XG5cblxuICAgIC8vIE1pZGRsZSBjb2xvclxuXG5cblxuXG5cblxuICB9KTtcblxuXG5cblxufSkoalF1ZXJ5KTtcbiIsIi8qISBGYXN0IEF2ZXJhZ2UgQ29sb3IgfCDCqSAyMDIxIERlbmlzIFNlbGV6bmV2IHwgTUlUIExpY2Vuc2UgfCBodHRwczovL2dpdGh1Yi5jb20vZmFzdC1hdmVyYWdlLWNvbG9yL2Zhc3QtYXZlcmFnZS1jb2xvciAqL1xuZnVuY3Rpb24gdG9IZXgobnVtKSB7XG4gICAgY29uc3Qgc3RyID0gbnVtLnRvU3RyaW5nKDE2KTtcblxuICAgIHJldHVybiBzdHIubGVuZ3RoID09PSAxID8gJzAnICsgc3RyIDogc3RyO1xufVxuXG5mdW5jdGlvbiBhcnJheVRvSGV4KGFycikge1xuICAgIHJldHVybiAnIycgKyBhcnIubWFwKHRvSGV4KS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gaXNEYXJrKGNvbG9yKSB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQUVSVCNjb2xvci1jb250cmFzdFxuICAgIGNvbnN0IHJlc3VsdCA9IChjb2xvclswXSAqIDI5OSArIGNvbG9yWzFdICogNTg3ICsgY29sb3JbMl0gKiAxMTQpIC8gMTAwMDtcblxuICAgIHJldHVybiByZXN1bHQgPCAxMjg7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVJZ25vcmVkQ29sb3IoY29sb3IpIHtcbiAgICBpZiAoIWNvbG9yKSB7IHJldHVybiBjb2xvcjsgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY29sb3IpKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY29sb3JbMF0gPT09ICdudW1iZXInID8gW2NvbG9yLnNsaWNlKCldIDogY29sb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtjb2xvcl07XG59XG5cbmZ1bmN0aW9uIGlzSWdub3JlZENvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlnbm9yZWRDb2xvci5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXNJZ25vcmVkQ29sb3JBc051bWJlcnMoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcltpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc0lnbm9yZWRDb2xvckFzTnVtYmVycyhkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgc3dpdGNoIChpZ25vcmVkQ29sb3IubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIC8vIFtyZWQsIGdyZWVuLCBibHVlXVxuICAgICAgICAgICAgaWYgKGlzSWdub3JlZFJHQkNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdXG4gICAgICAgICAgICBpZiAoaXNJZ25vcmVkUkdCQUNvbG9yKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAvLyBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGEsIHRocmVzaG9sZF1cbiAgICAgICAgICAgIGlmIChpc0lnbm9yZWRSR0JBQ29sb3JXaXRoVGhyZXNob2xkKGRhdGEsIGluZGV4LCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQ29sb3IoZGF0YSwgaW5kZXgsIGlnbm9yZWRDb2xvcikge1xuICAgIC8vIElnbm9yZSBpZiB0aGUgcGl4ZWwgYXJlIHRyYW5zcGFyZW50LlxuICAgIGlmIChkYXRhW2luZGV4ICsgM10gIT09IDI1NSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGF0YVtpbmRleF0gPT09IGlnbm9yZWRDb2xvclswXSAmJlxuICAgICAgICBkYXRhW2luZGV4ICsgMV0gPT09IGlnbm9yZWRDb2xvclsxXSAmJlxuICAgICAgICBkYXRhW2luZGV4ICsgMl0gPT09IGlnbm9yZWRDb2xvclsyXVxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzSWdub3JlZFJHQkFDb2xvcihkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgaWYgKGRhdGFbaW5kZXggKyAzXSAmJiBpZ25vcmVkQ29sb3JbM10pIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbaW5kZXhdID09PSBpZ25vcmVkQ29sb3JbMF0gJiZcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAxXSA9PT0gaWdub3JlZENvbG9yWzFdICYmXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPT09IGlnbm9yZWRDb2xvclsyXSAmJlxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDNdID09PSBpZ25vcmVkQ29sb3JbM107XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIHJnYiBjb21wb25lbnRzIGlmIHRoZSBwaXhlbCBhcmUgZnVsbHkgdHJhbnNwYXJlbnQuXG4gICAgcmV0dXJuIGRhdGFbaW5kZXggKyAzXSA9PT0gaWdub3JlZENvbG9yWzNdO1xufVxuXG5mdW5jdGlvbiBpblJhbmdlKGNvbG9yQ29tcG9uZW50LCBpZ25vcmVkQ29sb3JDb21wb25lbnQsIHZhbHVlKSB7XG4gICAgcmV0dXJuIGNvbG9yQ29tcG9uZW50ID49IChpZ25vcmVkQ29sb3JDb21wb25lbnQgLSB2YWx1ZSkgJiZcbiAgICAgICAgY29sb3JDb21wb25lbnQgPD0gKGlnbm9yZWRDb2xvckNvbXBvbmVudCArIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNJZ25vcmVkUkdCQUNvbG9yV2l0aFRocmVzaG9sZChkYXRhLCBpbmRleCwgaWdub3JlZENvbG9yKSB7XG4gICAgY29uc3QgcmVkSWdub3JlZCA9IGlnbm9yZWRDb2xvclswXTtcbiAgICBjb25zdCBncmVlbklnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMV07XG4gICAgY29uc3QgYmx1ZUlnbm9yZWQgPSBpZ25vcmVkQ29sb3JbMl07XG4gICAgY29uc3QgYWxwaGFJZ25vcmVkID0gaWdub3JlZENvbG9yWzNdO1xuICAgIGNvbnN0IHRocmVzaG9sZCA9IGlnbm9yZWRDb2xvcls0XTtcbiAgICBjb25zdCBhbHBoYURhdGEgPSBkYXRhW2luZGV4ICsgM107XG5cbiAgICBjb25zdCBhbHBoYUluUmFuZ2UgPSBpblJhbmdlKGFscGhhRGF0YSwgYWxwaGFJZ25vcmVkLCB0aHJlc2hvbGQpO1xuICAgIGlmICghYWxwaGFJZ25vcmVkKSB7XG4gICAgICAgIHJldHVybiBhbHBoYUluUmFuZ2U7XG4gICAgfVxuXG4gICAgaWYgKCFhbHBoYURhdGEgJiYgYWxwaGFJblJhbmdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpblJhbmdlKGRhdGFbaW5kZXhdLCByZWRJZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGluUmFuZ2UoZGF0YVtpbmRleCArIDFdLCBncmVlbklnbm9yZWQsIHRocmVzaG9sZCkgJiZcbiAgICAgICAgaW5SYW5nZShkYXRhW2luZGV4ICsgMl0sIGJsdWVJZ25vcmVkLCB0aHJlc2hvbGQpICYmXG4gICAgICAgIGFscGhhSW5SYW5nZVxuICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGRvbWluYW50QWxnb3JpdGhtKGFyciwgbGVuLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29sb3JIYXNoID0ge307XG4gICAgY29uc3QgZGl2aWRlciA9IDI0O1xuICAgIGNvbnN0IGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIGNvbnN0IHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG4gICAgbGV0IG1heCA9IFswLCAwLCAwLCAwLCAwXTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHJlZCA9IGFycltpXTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBhcnJbaSArIDFdO1xuICAgICAgICBjb25zdCBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBhcnJbaSArIDNdO1xuXG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGtleSA9IE1hdGgucm91bmQocmVkIC8gZGl2aWRlcikgKyAnLCcgK1xuICAgICAgICAgICAgICAgIE1hdGgucm91bmQoZ3JlZW4gLyBkaXZpZGVyKSArICcsJyArXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZChibHVlIC8gZGl2aWRlcik7XG5cbiAgICAgICAgaWYgKGNvbG9ySGFzaFtrZXldKSB7XG4gICAgICAgICAgICBjb2xvckhhc2hba2V5XSA9IFtcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVswXSArIHJlZCAqIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzFdICsgZ3JlZW4gKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVsyXSArIGJsdWUgKiBhbHBoYSxcbiAgICAgICAgICAgICAgICBjb2xvckhhc2hba2V5XVszXSArIGFscGhhLFxuICAgICAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldWzRdICsgMVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbG9ySGFzaFtrZXldID0gW3JlZCAqIGFscGhhLCBncmVlbiAqIGFscGhhLCBibHVlICogYWxwaGEsIGFscGhhLCAxXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKG1heFs0XSA8IGNvbG9ySGFzaFtrZXldWzRdKSB7XG4gICAgICAgICAgICBtYXggPSBjb2xvckhhc2hba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlZFRvdGFsID0gbWF4WzBdO1xuICAgIGNvbnN0IGdyZWVuVG90YWwgPSBtYXhbMV07XG4gICAgY29uc3QgYmx1ZVRvdGFsID0gbWF4WzJdO1xuXG4gICAgY29uc3QgYWxwaGFUb3RhbCA9IG1heFszXTtcbiAgICBjb25zdCBjb3VudCA9IG1heFs0XTtcblxuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKHJlZFRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGJsdWVUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZUFsZ29yaXRobShhcnIsIGxlbiwgb3B0aW9ucykge1xuICAgIGxldCByZWRUb3RhbCA9IDA7XG4gICAgbGV0IGdyZWVuVG90YWwgPSAwO1xuICAgIGxldCBibHVlVG90YWwgPSAwO1xuICAgIGxldCBhbHBoYVRvdGFsID0gMDtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgY29uc3QgaWdub3JlZENvbG9yID0gb3B0aW9ucy5pZ25vcmVkQ29sb3I7XG4gICAgY29uc3Qgc3RlcCA9IG9wdGlvbnMuc3RlcDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IHN0ZXApIHtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBhcnJbaSArIDNdO1xuICAgICAgICBjb25zdCByZWQgPSBhcnJbaV0gKiBhbHBoYTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBhcnJbaSArIDFdICogYWxwaGE7XG4gICAgICAgIGNvbnN0IGJsdWUgPSBhcnJbaSArIDJdICogYWxwaGE7XG5cbiAgICAgICAgaWYgKGlnbm9yZWRDb2xvciAmJiBpc0lnbm9yZWRDb2xvcihhcnIsIGksIGlnbm9yZWRDb2xvcikpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVkVG90YWwgKz0gcmVkO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuO1xuICAgICAgICBibHVlVG90YWwgKz0gYmx1ZTtcbiAgICAgICAgYWxwaGFUb3RhbCArPSBhbHBoYTtcblxuICAgICAgICBjb3VudCsrO1xuICAgIH1cblxuICAgIHJldHVybiBhbHBoYVRvdGFsID8gW1xuICAgICAgICBNYXRoLnJvdW5kKHJlZFRvdGFsIC8gYWxwaGFUb3RhbCksXG4gICAgICAgIE1hdGgucm91bmQoZ3JlZW5Ub3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGJsdWVUb3RhbCAvIGFscGhhVG90YWwpLFxuICAgICAgICBNYXRoLnJvdW5kKGFscGhhVG90YWwgLyBjb3VudClcbiAgICBdIDogb3B0aW9ucy5kZWZhdWx0Q29sb3I7XG59XG5cbmZ1bmN0aW9uIHNxcnRBbGdvcml0aG0oYXJyLCBsZW4sIG9wdGlvbnMpIHtcbiAgICBsZXQgcmVkVG90YWwgPSAwO1xuICAgIGxldCBncmVlblRvdGFsID0gMDtcbiAgICBsZXQgYmx1ZVRvdGFsID0gMDtcbiAgICBsZXQgYWxwaGFUb3RhbCA9IDA7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGNvbnN0IGlnbm9yZWRDb2xvciA9IG9wdGlvbnMuaWdub3JlZENvbG9yO1xuICAgIGNvbnN0IHN0ZXAgPSBvcHRpb25zLnN0ZXA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSBzdGVwKSB7XG4gICAgICAgIGNvbnN0IHJlZCA9IGFycltpXTtcbiAgICAgICAgY29uc3QgZ3JlZW4gPSBhcnJbaSArIDFdO1xuICAgICAgICBjb25zdCBibHVlID0gYXJyW2kgKyAyXTtcbiAgICAgICAgY29uc3QgYWxwaGEgPSBhcnJbaSArIDNdO1xuXG4gICAgICAgIGlmIChpZ25vcmVkQ29sb3IgJiYgaXNJZ25vcmVkQ29sb3IoYXJyLCBpLCBpZ25vcmVkQ29sb3IpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZFRvdGFsICs9IHJlZCAqIHJlZCAqIGFscGhhO1xuICAgICAgICBncmVlblRvdGFsICs9IGdyZWVuICogZ3JlZW4gKiBhbHBoYTtcbiAgICAgICAgYmx1ZVRvdGFsICs9IGJsdWUgKiBibHVlICogYWxwaGE7XG4gICAgICAgIGFscGhhVG90YWwgKz0gYWxwaGE7XG5cbiAgICAgICAgY291bnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4gYWxwaGFUb3RhbCA/IFtcbiAgICAgICAgTWF0aC5yb3VuZChNYXRoLnNxcnQocmVkVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KGdyZWVuVG90YWwgLyBhbHBoYVRvdGFsKSksXG4gICAgICAgIE1hdGgucm91bmQoTWF0aC5zcXJ0KGJsdWVUb3RhbCAvIGFscGhhVG90YWwpKSxcbiAgICAgICAgTWF0aC5yb3VuZChhbHBoYVRvdGFsIC8gY291bnQpXG4gICAgXSA6IG9wdGlvbnMuZGVmYXVsdENvbG9yO1xufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0Q29sb3Iob3B0aW9ucykge1xuICAgIHJldHVybiBnZXRPcHRpb24ob3B0aW9ucywgJ2RlZmF1bHRDb2xvcicsIFswLCAwLCAwLCAwXSk7XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbihvcHRpb25zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9wdGlvbnNbbmFtZV0gPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogb3B0aW9uc1tuYW1lXTtcbn1cblxuY29uc3QgTUlOX1NJWkUgPSAxMDtcbmNvbnN0IE1BWF9TSVpFID0gMTAwO1xuXG5mdW5jdGlvbiBpc1N2ZyhmaWxlbmFtZSkge1xuICAgIHJldHVybiBmaWxlbmFtZS5zZWFyY2goL1xcLnN2ZyhcXD98JCkvaSkgIT09IC0xO1xufVxuXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFNpemUocmVzb3VyY2UpIHtcbiAgICBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHJlc291cmNlLm5hdHVyYWxXaWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHJlc291cmNlLm5hdHVyYWxIZWlnaHQ7XG5cbiAgICAgICAgLy8gRm9yIFNWRyBpbWFnZXMgd2l0aCBvbmx5IHZpZXdCb3ggYXR0ci5cbiAgICAgICAgaWYgKCFyZXNvdXJjZS5uYXR1cmFsV2lkdGggJiYgaXNTdmcocmVzb3VyY2Uuc3JjKSkge1xuICAgICAgICAgICAgd2lkdGggPSBoZWlnaHQgPSBNQVhfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogcmVzb3VyY2UudmlkZW9XaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcmVzb3VyY2UudmlkZW9IZWlnaHRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogcmVzb3VyY2Uud2lkdGgsXG4gICAgICAgIGhlaWdodDogcmVzb3VyY2UuaGVpZ2h0XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVNpemVBbmRQb3NpdGlvbihvcmlnaW5hbFNpemUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBzcmNMZWZ0ID0gZ2V0T3B0aW9uKG9wdGlvbnMsICdsZWZ0JywgMCk7XG4gICAgY29uc3Qgc3JjVG9wID0gZ2V0T3B0aW9uKG9wdGlvbnMsICd0b3AnLCAwKTtcbiAgICBjb25zdCBzcmNXaWR0aCA9IGdldE9wdGlvbihvcHRpb25zLCAnd2lkdGgnLCBvcmlnaW5hbFNpemUud2lkdGgpO1xuICAgIGNvbnN0IHNyY0hlaWdodCA9IGdldE9wdGlvbihvcHRpb25zLCAnaGVpZ2h0Jywgb3JpZ2luYWxTaXplLmhlaWdodCk7XG5cbiAgICBsZXQgZGVzdFdpZHRoID0gc3JjV2lkdGg7XG4gICAgbGV0IGRlc3RIZWlnaHQgPSBzcmNIZWlnaHQ7XG5cbiAgICBpZiAob3B0aW9ucy5tb2RlID09PSAncHJlY2lzaW9uJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjTGVmdCxcbiAgICAgICAgICAgIHNyY1RvcCxcbiAgICAgICAgICAgIHNyY1dpZHRoLFxuICAgICAgICAgICAgc3JjSGVpZ2h0LFxuICAgICAgICAgICAgZGVzdFdpZHRoLFxuICAgICAgICAgICAgZGVzdEhlaWdodFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGxldCBmYWN0b3I7XG5cbiAgICBpZiAoc3JjV2lkdGggPiBzcmNIZWlnaHQpIHtcbiAgICAgICAgZmFjdG9yID0gc3JjV2lkdGggLyBzcmNIZWlnaHQ7XG4gICAgICAgIGRlc3RXaWR0aCA9IE1BWF9TSVpFO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gTWF0aC5yb3VuZChkZXN0V2lkdGggLyBmYWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvciA9IHNyY0hlaWdodCAvIHNyY1dpZHRoO1xuICAgICAgICBkZXN0SGVpZ2h0ID0gTUFYX1NJWkU7XG4gICAgICAgIGRlc3RXaWR0aCA9IE1hdGgucm91bmQoZGVzdEhlaWdodCAvIGZhY3Rvcik7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgICBkZXN0V2lkdGggPiBzcmNXaWR0aCB8fCBkZXN0SGVpZ2h0ID4gc3JjSGVpZ2h0IHx8XG4gICAgICAgIGRlc3RXaWR0aCA8IE1JTl9TSVpFIHx8IGRlc3RIZWlnaHQgPCBNSU5fU0laRVxuICAgICkge1xuICAgICAgICBkZXN0V2lkdGggPSBzcmNXaWR0aDtcbiAgICAgICAgZGVzdEhlaWdodCA9IHNyY0hlaWdodDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzcmNMZWZ0LFxuICAgICAgICBzcmNUb3AsXG4gICAgICAgIHNyY1dpZHRoLFxuICAgICAgICBzcmNIZWlnaHQsXG4gICAgICAgIGRlc3RXaWR0aCxcbiAgICAgICAgZGVzdEhlaWdodFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VDYW52YXMoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID9cbiAgICAgICAgbmV3IE9mZnNjcmVlbkNhbnZhcygxLCAxKSA6XG4gICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xufVxuXG5jb25zdCBFUlJPUl9QUkVGSVggPSAnRmFzdEF2ZXJhZ2VDb2xvcjogJztcblxuZnVuY3Rpb24gb3V0cHV0RXJyb3Iob3B0aW9ucywgdGV4dCwgZGV0YWlscykge1xuICAgIGlmICghb3B0aW9ucy5zaWxlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihFUlJPUl9QUkVGSVggKyB0ZXh0KTtcblxuICAgICAgICBpZiAoZGV0YWlscykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihkZXRhaWxzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXJyb3IodGV4dCkge1xuICAgIHJldHVybiBFcnJvcihFUlJPUl9QUkVGSVggKyB0ZXh0KTtcbn1cblxuY2xhc3MgRmFzdEF2ZXJhZ2VDb2xvciB7XG4gICAgLyoqXG4gICAgICogR2V0IGFzeW5jaHJvbm91c2x5IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gbm90IGxvYWRlZCBpbWFnZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEltYWdlRWxlbWVudCB8IEhUTUxWaWRlb0VsZW1lbnQgfCBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGx9IHJlc291cmNlXG4gICAgICogQHBhcmFtIHtGYXN0QXZlcmFnZUNvbG9yT3B0aW9uc30gW29wdGlvbnNdXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGYXN0QXZlcmFnZUNvbG9yT3B0aW9ucz59XG4gICAgICovXG4gICAgZ2V0Q29sb3JBc3luYyhyZXNvdXJjZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZ2V0RXJyb3IoJ2NhbGwgLmdldENvbG9yQXN5bmMoKSB3aXRob3V0IHJlc291cmNlLicpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzb3VyY2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGltZy5jcm9zc09yaWdpbiA9ICcnO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHJlc291cmNlO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZEltYWdlRXZlbnRzKGltZywgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzb3VyY2UgaW5zdGFuY2VvZiBJbWFnZSAmJiAhcmVzb3VyY2UuY29tcGxldGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kSW1hZ2VFdmVudHMocmVzb3VyY2UsIG9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRDb2xvcihyZXNvdXJjZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZXJyb3IgPyBQcm9taXNlLnJlamVjdChyZXN1bHQuZXJyb3IpIDogUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGF2ZXJhZ2UgY29sb3IgZnJvbSBpbWFnZXMsIHZpZGVvcyBhbmQgY2FudmFzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MSW1hZ2VFbGVtZW50IHwgSFRNTFZpZGVvRWxlbWVudCB8IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbH0gcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0ge0Zhc3RBdmVyYWdlQ29sb3JPcHRpb25zfSBbb3B0aW9uc11cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGYXN0QXZlcmFnZUNvbG9yUmVzdWx0fVxuICAgICAqL1xuICAgIGdldENvbG9yKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IGdldERlZmF1bHRDb2xvcihvcHRpb25zKTtcblxuICAgICAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihvcHRpb25zLCAnY2FsbCAuZ2V0Q29sb3IobnVsbCkgd2l0aG91dCByZXNvdXJjZS4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTaXplID0gZ2V0T3JpZ2luYWxTaXplKHJlc291cmNlKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHByZXBhcmVTaXplQW5kUG9zaXRpb24ob3JpZ2luYWxTaXplLCBvcHRpb25zKTtcblxuICAgICAgICBpZiAoIXNpemUuc3JjV2lkdGggfHwgIXNpemUuc3JjSGVpZ2h0IHx8ICFzaXplLmRlc3RXaWR0aCB8fCAhc2l6ZS5kZXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICBvdXRwdXRFcnJvcihvcHRpb25zLCBgaW5jb3JyZWN0IHNpemVzIGZvciByZXNvdXJjZSBcIiR7cmVzb3VyY2Uuc3JjfVwiLmApO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlUmVzdWx0KGRlZmF1bHRDb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuX2N0eCkge1xuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gbWFrZUNhbnZhcygpO1xuICAgICAgICAgICAgdGhpcy5fY3R4ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQgJiYgdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5fY3R4KSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0RXJyb3Iob3B0aW9ucywgJ0NhbnZhcyBDb250ZXh0IDJEIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLicpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdChkZWZhdWx0Q29sb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fY2FudmFzLndpZHRoID0gc2l6ZS5kZXN0V2lkdGg7XG4gICAgICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBzaXplLmRlc3RIZWlnaHQ7XG5cbiAgICAgICAgbGV0IHZhbHVlID0gZGVmYXVsdENvbG9yO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jdHguY2xlYXJSZWN0KDAsIDAsIHNpemUuZGVzdFdpZHRoLCBzaXplLmRlc3RIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5fY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICByZXNvdXJjZSxcbiAgICAgICAgICAgICAgICBzaXplLnNyY0xlZnQsIHNpemUuc3JjVG9wLFxuICAgICAgICAgICAgICAgIHNpemUuc3JjV2lkdGgsIHNpemUuc3JjSGVpZ2h0LFxuICAgICAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgYml0bWFwRGF0YSA9IHRoaXMuX2N0eC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZS5kZXN0V2lkdGgsIHNpemUuZGVzdEhlaWdodCkuZGF0YTtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5nZXRDb2xvckZyb21BcnJheTQoYml0bWFwRGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIG91dHB1dEVycm9yKG9wdGlvbnMsIGBzZWN1cml0eSBlcnJvciAoQ09SUykgZm9yIHJlc291cmNlICR7cmVzb3VyY2Uuc3JjfS5cXG5EZXRhaWxzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9IVE1ML0NPUlNfZW5hYmxlZF9pbWFnZWAsIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZVJlc3VsdCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBhdmVyYWdlIGNvbG9yIGZyb20gYSBhcnJheSB3aGVuIDEgcGl4ZWwgaXMgNCBieXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyW118VWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5hbGdvcml0aG09XCJzcXJ0XCJdIFwic2ltcGxlXCIsIFwic3FydFwiIG9yIFwiZG9taW5hbnRcIlxuICAgICAqIEBwYXJhbSB7bnVtYmVyW119ICBbb3B0aW9ucy5kZWZhdWx0Q29sb3I9WzAsIDAsIDAsIDBdXSBbcmVkLCBncmVlbiwgYmx1ZSwgYWxwaGFdXG4gICAgICogQHBhcmFtIHtudW1iZXJbXX0gIFtvcHRpb25zLmlnbm9yZWRDb2xvcl0gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5zdGVwPTFdXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyW119IFtyZWQgKDAtMjU1KSwgZ3JlZW4gKDAtMjU1KSwgYmx1ZSAoMC0yNTUpLCBhbHBoYSAoMC0yNTUpXVxuICAgICAqL1xuICAgIGdldENvbG9yRnJvbUFycmF5NChhcnIsIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgY29uc3QgYnl0ZXNQZXJQaXhlbCA9IDQ7XG4gICAgICAgIGNvbnN0IGFyckxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRDb2xvciA9IGdldERlZmF1bHRDb2xvcihvcHRpb25zKTtcblxuICAgICAgICBpZiAoYXJyTGVuZ3RoIDwgYnl0ZXNQZXJQaXhlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRDb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbiA9IGFyckxlbmd0aCAtIGFyckxlbmd0aCAlIGJ5dGVzUGVyUGl4ZWw7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAob3B0aW9ucy5zdGVwIHx8IDEpICogYnl0ZXNQZXJQaXhlbDtcblxuICAgICAgICBsZXQgYWxnb3JpdGhtO1xuXG4gICAgICAgIHN3aXRjaCAob3B0aW9ucy5hbGdvcml0aG0gfHwgJ3NxcnQnKSB7XG4gICAgICAgICAgICBjYXNlICdzaW1wbGUnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IHNpbXBsZUFsZ29yaXRobTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NxcnQnOlxuICAgICAgICAgICAgICAgIGFsZ29yaXRobSA9IHNxcnRBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkb21pbmFudCc6XG4gICAgICAgICAgICAgICAgYWxnb3JpdGhtID0gZG9taW5hbnRBbGdvcml0aG07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRocm93IGdldEVycm9yKGAke29wdGlvbnMuYWxnb3JpdGhtfSBpcyB1bmtub3duIGFsZ29yaXRobS5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGdvcml0aG0oYXJyLCBsZW4sIHtcbiAgICAgICAgICAgIGRlZmF1bHRDb2xvcixcbiAgICAgICAgICAgIGlnbm9yZWRDb2xvcjogcHJlcGFyZUlnbm9yZWRDb2xvcihvcHRpb25zLmlnbm9yZWRDb2xvciksXG4gICAgICAgICAgICBzdGVwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBjb2xvciBkYXRhIGZyb20gdmFsdWUgKFtyLCBnLCBiLCBhXSkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcltdfSB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge0Zhc3RBdmVyYWdlQ29sb3JSZXN1bHR9XG4gICAgICovXG4gICAgcHJlcGFyZVJlc3VsdCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZ2IgPSB2YWx1ZS5zbGljZSgwLCAzKTtcbiAgICAgICAgY29uc3QgcmdiYSA9IFtdLmNvbmNhdChyZ2IsIHZhbHVlWzNdIC8gMjU1KTtcbiAgICAgICAgY29uc3QgaXNEYXJrQ29sb3IgPSBpc0RhcmsodmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIHJnYjogJ3JnYignICsgcmdiLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIHJnYmE6ICdyZ2JhKCcgKyByZ2JhLmpvaW4oJywnKSArICcpJyxcbiAgICAgICAgICAgIGhleDogYXJyYXlUb0hleChyZ2IpLFxuICAgICAgICAgICAgaGV4YTogYXJyYXlUb0hleCh2YWx1ZSksXG4gICAgICAgICAgICBpc0Rhcms6IGlzRGFya0NvbG9yLFxuICAgICAgICAgICAgaXNMaWdodDogIWlzRGFya0NvbG9yXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2NhbnZhcztcbiAgICAgICAgZGVsZXRlIHRoaXMuX2N0eDtcbiAgICB9XG5cbiAgICBfYmluZEltYWdlRXZlbnRzKHJlc291cmNlLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmdldENvbG9yKHJlc291cmNlLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3VsdC5lcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IG9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZ2V0RXJyb3IoYEVycm9yIGxvYWRpbmcgaW1hZ2UgXCIke3Jlc291cmNlLnNyY31cIi5gKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBvbmFib3J0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgICAgICAgICAgcmVqZWN0KGdldEVycm9yKGBJbWFnZSBcIiR7cmVzb3VyY2Uuc3JjfVwiIGxvYWRpbmcgYWJvcnRlZC5gKSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB1bmJpbmRFdmVudHMgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICAgICAgcmVzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICAgICAgICAgICAgICByZXNvdXJjZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uYWJvcnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9ubG9hZCk7XG4gICAgICAgICAgICByZXNvdXJjZS5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgICAgICAgcmVzb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBvbmFib3J0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEB0eXBlb2Yge09iamVjdH0gRmFzdEF2ZXJhZ2VDb2xvck9wdGlvbnNcbiAqXG4gKiBAcGFyYW0ge251bWJlcltdfSAgW29wdGlvbnMuZGVmYXVsdENvbG9yPVswLCAwLCAwLCAwXV0gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICogQHBhcmFtIHtudW1iZXJbXX0gIFtvcHRpb25zLmlnbm9yZWRDb2xvcl0gW3JlZCwgZ3JlZW4sIGJsdWUsIGFscGhhXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1vZGU9XCJzcGVlZFwiXSBcInByZWNpc2lvblwiIG9yIFwic3BlZWRcIlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmFsZ29yaXRobT1cInNxcnRcIl0gXCJzaW1wbGVcIiwgXCJzcXJ0XCIgb3IgXCJkb21pbmFudFwiXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMuc3RlcD0xXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmxlZnQ9MF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy50b3A9MF1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy53aWR0aD13aWR0aCBvZiByZXNvdXJjZV1cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5oZWlnaHQ9aGVpZ2h0IG9mIHJlc291cmNlXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zaWxlbnRdIERpc2FibGUgZXJyb3Igb3V0cHV0IHZpYSBjb25zb2xlLmVycm9yXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBGYXN0QXZlcmFnZUNvbG9yUmVzdWx0XG4gKlxuICogQHByb3BlcnR5IHtzdHJpbmd9IHJnYmFcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZ2JcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBoZXhcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBoZXhhXG4gKiBAcHJvcGVydHkge251bWJlcltdfSB2YWx1ZVxuICogQHByb3BlcnR5IHtib29sZWFufSBpc0RhcmtcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNMaWdodFxuICogQHByb3BlcnR5IHtFcnJvcj99IGVycm9yXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgRmFzdEF2ZXJhZ2VDb2xvcjtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=