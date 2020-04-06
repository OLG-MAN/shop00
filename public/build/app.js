(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/menu.css":
/*!*****************************!*\
  !*** ./assets/css/menu.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");

__webpack_require__(/*! ../css/menu.css */ "./assets/css/menu.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


__webpack_require__(/*! ./modules/cart */ "./assets/js/modules/cart.js");

__webpack_require__(/*! ./modules/menu */ "./assets/js/modules/menu.js");

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/js/modules/cart.js":
/*!***********************************!*\
  !*** ./assets/js/modules/cart.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

var addToCartButtons, cartTable;
addToCartButtons = document.querySelectorAll('.js-add-to-cart');
addToCartButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    event.preventDefault();
    fetch(button.href, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (response) {
      return response.text();
    }).then(function (body) {
      document.getElementById('header-cart').innerHTML = body;
    });
  });
});
cartTable = document.getElementById('cartTable');

if (cartTable) {
  cartTable.addEventListener('input', function (event) {
    if (!event.target.classList.contains('js-cart-item-count')) {
      return;
    }

    var input = event.target;
    var formData = new FormData();
    formData.set('count', input.value);
    fetch(input.dataset.url, {
      method: 'post',
      body: formData
    }).then(function (response) {
      return response.json();
    }).then(function (body) {
      document.getElementById('header-cart').innerHTML = body['headerCart']['content'];
      cartTable.innerHTML = body['cartTable']['content'];
    });
  });
  cartTable.addEventListener('click', function (event) {
    var link = event.target.closest('.js-cart-remove-item');

    if (!link) {
      return;
    }

    event.preventDefault();
    fetch(link.href).then(function (response) {
      return response.text();
    }).then(function (body) {
      cartTable.innerHTML = body;
    });
  });
}

/***/ }),

/***/ "./assets/js/modules/menu.js":
/*!***********************************!*\
  !*** ./assets/js/modules/menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

/*!
 * Bootstrap 4 multi dropdown navbar ( https://bootstrapthemes.co/demo/resource/bootstrap-4-multi-dropdown-navbar/ )
 * Copyright 2017.
 * Licensed under the GPL license
 */
__webpack_require__(/*! ../../css/menu.css */ "./assets/css/menu.css");

$(document).ready(function () {
  $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
    var $el = $(this);
    $el.toggleClass('active-dropdown');
    var $parent = $(this).offsetParent(".dropdown-menu");

    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }

    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parent("li").toggleClass('show');
    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
      $('.dropdown-menu .show').removeClass("show");
      $el.removeClass('active-dropdown');
    });

    if (!$parent.parent().hasClass('navbar-nav')) {
      $el.next().css({
        "top": $el[0].offsetTop,
        "left": $parent.outerWidth() - 4
      });
    }

    return false;
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~admin~app","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9tZW51LmNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tb2R1bGVzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL21vZHVsZXMvbWVudS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsImFkZFRvQ2FydEJ1dHRvbnMiLCJjYXJ0VGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImhyZWYiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImJvZHkiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiaW5wdXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwic2V0IiwidmFsdWUiLCJkYXRhc2V0IiwidXJsIiwibWV0aG9kIiwianNvbiIsImxpbmsiLCJjbG9zZXN0IiwiJCIsInJlYWR5Iiwib24iLCJlIiwiJGVsIiwidG9nZ2xlQ2xhc3MiLCIkcGFyZW50Iiwib2Zmc2V0UGFyZW50IiwibmV4dCIsImhhc0NsYXNzIiwicGFyZW50cyIsImZpcnN0IiwiZmluZCIsInJlbW92ZUNsYXNzIiwiJHN1Yk1lbnUiLCJwYXJlbnQiLCJjc3MiLCJvZmZzZXRUb3AiLCJvdXRlcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBT0E7QUFDQUEsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDhDQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMs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QUhEOztBQUtBLFFBQUssQ0FBQ1AsT0FBTyxDQUFDUyxNQUFSLEdBQWlCTixRQUFqQixDQUEyQixZQUEzQixDQUFOLEVBQWtEO0FBQzlDTCxTQUFHLENBQUNJLElBQUosR0FBV1EsR0FBWCxDQUFnQjtBQUFFLGVBQU9aLEdBQUcsQ0FBQyxDQUFELENBQUgsQ0FBT2EsU0FBaEI7QUFBMkIsZ0JBQVFYLE9BQU8sQ0FBQ1ksVUFBUixLQUF1QjtBQUExRCxPQUFoQjtBQUNIOztBQUVELFdBQU8sS0FBUDtBQUNILEdBdEJEO0FBdUJILENBeEJELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xucmVxdWlyZSgnLi4vY3NzL21lbnUuY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byByZXF1aXJlIGl0LlxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuXG5yZXF1aXJlKCcuL21vZHVsZXMvY2FydCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL21lbnUnKTtcblxuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IGFkZFRvQ2FydEJ1dHRvbnMsIGNhcnRUYWJsZTtcblxuYWRkVG9DYXJ0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hZGQtdG8tY2FydCcpO1xuXG5hZGRUb0NhcnRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0ZmV0Y2goYnV0dG9uLmhyZWYsIHtcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChib2R5KSA9PiB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItY2FydCcpLmlubmVySFRNTCA9IGJvZHk7XG5cdFx0XHR9KVxuXHR9KTtcbn0pO1xuXG5jYXJ0VGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydFRhYmxlJyk7XG5cbmlmIChjYXJ0VGFibGUpIHtcblx0Y2FydFRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG5cdFx0aWYgKCFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1jYXJ0LWl0ZW0tY291bnQnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcblx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRcdGZvcm1EYXRhLnNldCgnY291bnQnLCBpbnB1dC52YWx1ZSk7XG5cblx0XHRmZXRjaChpbnB1dC5kYXRhc2V0LnVybCwge1xuXHRcdFx0bWV0aG9kOiAncG9zdCcsXG5cdFx0XHRib2R5OiBmb3JtRGF0YVxuXHRcdH0pXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoYm9keSkgPT4ge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLWNhcnQnKS5pbm5lckhUTUwgPSBib2R5WydoZWFkZXJDYXJ0J11bJ2NvbnRlbnQnXTtcblx0XHRcdFx0Y2FydFRhYmxlLmlubmVySFRNTCA9IGJvZHlbJ2NhcnRUYWJsZSddWydjb250ZW50J107XG5cdFx0XHR9KTtcblx0fSk7XG5cblx0Y2FydFRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5cdFx0bGV0IGxpbmsgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmpzLWNhcnQtcmVtb3ZlLWl0ZW0nKTtcblxuXHRcdGlmICghbGluaykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRmZXRjaChsaW5rLmhyZWYpXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoYm9keSkgPT4ge1xuXHRcdFx0XHRjYXJ0VGFibGUuaW5uZXJIVE1MID0gYm9keTtcblx0XHRcdH0pO1xuXHR9KVxufVxuIiwiLyohXG4gKiBCb290c3RyYXAgNCBtdWx0aSBkcm9wZG93biBuYXZiYXIgKCBodHRwczovL2Jvb3RzdHJhcHRoZW1lcy5jby9kZW1vL3Jlc291cmNlL2Jvb3RzdHJhcC00LW11bHRpLWRyb3Bkb3duLW5hdmJhci8gKVxuICogQ29weXJpZ2h0IDIwMTcuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgR1BMIGxpY2Vuc2VcbiAqL1xuXG5yZXF1aXJlKCcuLi8uLi9jc3MvbWVudS5jc3MnKTtcbiQoIGRvY3VtZW50ICkucmVhZHkoIGZ1bmN0aW9uICgpIHtcbiAgICAkKCAnLmRyb3Bkb3duLW1lbnUgYS5kcm9wZG93bi10b2dnbGUnICkub24oICdjbGljaycsIGZ1bmN0aW9uICggZSApIHtcbiAgICAgICAgdmFyICRlbCA9ICQoIHRoaXMgKTtcbiAgICAgICAgJGVsLnRvZ2dsZUNsYXNzKCdhY3RpdmUtZHJvcGRvd24nKTtcbiAgICAgICAgdmFyICRwYXJlbnQgPSAkKCB0aGlzICkub2Zmc2V0UGFyZW50KCBcIi5kcm9wZG93bi1tZW51XCIgKTtcbiAgICAgICAgaWYgKCAhJCggdGhpcyApLm5leHQoKS5oYXNDbGFzcyggJ3Nob3cnICkgKSB7XG4gICAgICAgICAgICAkKCB0aGlzICkucGFyZW50cyggJy5kcm9wZG93bi1tZW51JyApLmZpcnN0KCkuZmluZCggJy5zaG93JyApLnJlbW92ZUNsYXNzKCBcInNob3dcIiApO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkc3ViTWVudSA9ICQoIHRoaXMgKS5uZXh0KCBcIi5kcm9wZG93bi1tZW51XCIgKTtcbiAgICAgICAgJHN1Yk1lbnUudG9nZ2xlQ2xhc3MoICdzaG93JyApO1xuXG4gICAgICAgICQoIHRoaXMgKS5wYXJlbnQoIFwibGlcIiApLnRvZ2dsZUNsYXNzKCAnc2hvdycgKTtcblxuICAgICAgICAkKCB0aGlzICkucGFyZW50cyggJ2xpLm5hdi1pdGVtLmRyb3Bkb3duLnNob3cnICkub24oICdoaWRkZW4uYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoIGUgKSB7XG4gICAgICAgICAgICAkKCAnLmRyb3Bkb3duLW1lbnUgLnNob3cnICkucmVtb3ZlQ2xhc3MoIFwic2hvd1wiICk7XG4gICAgICAgICAgICAkZWwucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1kcm9wZG93bicpO1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgaWYgKCAhJHBhcmVudC5wYXJlbnQoKS5oYXNDbGFzcyggJ25hdmJhci1uYXYnICkgKSB7XG4gICAgICAgICAgICAkZWwubmV4dCgpLmNzcyggeyBcInRvcFwiOiAkZWxbMF0ub2Zmc2V0VG9wLCBcImxlZnRcIjogJHBhcmVudC5vdXRlcldpZHRoKCkgLSA0IH0gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ICk7XG59ICk7XG4iXSwic291cmNlUm9vdCI6IiJ9