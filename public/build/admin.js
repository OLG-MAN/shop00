(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/admin/js/admin.js":
/*!**********************************!*\
  !*** ./assets/admin/js/admin.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./modules/order */ "./assets/admin/js/modules/order.js");

__webpack_require__(/*! ./modules/product */ "./assets/admin/js/modules/product.js");

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

/***/ }),

/***/ "./assets/admin/js/modules/order.js":
/*!******************************************!*\
  !*** ./assets/admin/js/modules/order.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

window.addEventListener('load', function () {
  var container, amountElement;
  container = document.querySelector('.form-group[id$="_items"]');
  amountElement = document.querySelector('.js-amount');

  if (container) {
    container.addEventListener('input', function (event) {
      if (event.target.classList.contains('js-update-amount')) {
        updateAmount();
      }
    });
    $(container).on('change', function (event) {
      if (event.target.name.indexOf('[product]') > 0) {
        updatePrice(event.target);
      }
    });
  }

  function updateAmount() {
    var amount = 0;
    var rows = container.querySelectorAll('.sonata-ba-tbody tr');
    rows.forEach(function (row) {
      var priceElement = row.querySelector('[name*=price]');
      var countElement = row.querySelector('[name*=count]');
      amount += priceElement.value * countElement.value;
    });
    amountElement.value = amount;
  }

  function updatePrice(select) {
    var option = select.selectedOptions[0];
    var row = select.closest('tr');
    var priceElement = row.querySelector('[name*=price]');
    priceElement.value = option.dataset.price;
    updateAmount();
  }
});

/***/ }),

/***/ "./assets/admin/js/modules/product.js":
/*!********************************************!*\
  !*** ./assets/admin/js/modules/product.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

window.addEventListener('load', function () {
  var container;
  var attributeValues = null;
  var attributes; // получаем таблицу с атрибутами

  container = document.querySelector('.form-group[id$="_attributeValues"]');

  if (container) {
    // Выполняем, только если на странице есть таблица с атрибутами
    initAttributeValues(); // сохраняем все возможные значения атрибутов

    $(document).on('sonata.add_element', function () {
      // При добавлении нового атрибута
      $('.js-product-attribute').trigger('change'); // вызываем событие изменения атрибута для фильтрации фозможных значений
    });
    $(container).on('change', function (event) {
      // На событие change
      if (event.target.tagName === 'SELECT' // если элемент select
      && event.target.classList.contains('js-product-attribute' // и в class есть js-product-attribute
      )) {
        filterAttributeValues(event.target); // фильтруем список значений атрибута
      }
    });
  }

  function initAttributeValues() {
    // получаем список возможных значений
    var result = [];
    var valuesSelect = container.querySelector('select.js-product-attribute-value'); // Ищем селект со значенями атрибутов

    if (!valuesSelect) {
      // если не найден
      $(document).on('sonata.add_element', function () {
        // при добавлении нового атрибута
        if (attributeValues === null) {
          initAttributeValues(); // запускаем получение списка возможных значений
        }
      });
      return;
    }

    valuesSelect.options.forEach(function (option) {
      // для каждой опции селекта
      result.push({
        // сохраняем ее параметры в массив
        value: option.value,
        label: option.innerHTML,
        attributeId: option.dataset.attributeId
      });
    });
    attributeValues = result; // сохраняем в переменной
  }

  function filterAttributeValues(attributeSelect) {
    // фильтрация значений атрибутов
    var attributeId = attributeSelect.selectedOptions.item(0).value; // получает айди текущего атрибута

    var row = attributeSelect.closest('tr'); // ищем строку, в которой находится текущий атрибут и его значения

    var valueSelect = row.querySelector('select.js-product-attribute-value'); // находим селект со значениями

    var selectedIndex = valueSelect.selectedIndex;
    valueSelect.innerHTML = ''; // очищаем список опций селекта

    attributeValues.forEach(function (item) {
      // для каждого из возможных значений атрибутов
      if (item.attributeId === attributeId) {
        // если айди атриьута у значения совпадает с выбранным
        var option = document.createElement('option'); // создаем новый option

        option.value = item.value;
        option.innerHTML = item.label;
        valueSelect.add(option); // добавляем в select
      }
    });
    valueSelect.selectedIndex = selectedIndex;
    $(valueSelect).trigger('change'); // запускаем собітие изменения селекта для обновления опций в select2
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},[["./assets/admin/js/admin.js","runtime","vendors~admin~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vanMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL21vZHVsZXMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL21vZHVsZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZnVuY3Rpb24ubmFtZS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb250YWluZXIiLCJhbW91bnRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVwZGF0ZUFtb3VudCIsIiQiLCJvbiIsIm5hbWUiLCJpbmRleE9mIiwidXBkYXRlUHJpY2UiLCJhbW91bnQiLCJyb3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyb3ciLCJwcmljZUVsZW1lbnQiLCJjb3VudEVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdCIsIm9wdGlvbiIsInNlbGVjdGVkT3B0aW9ucyIsImNsb3Nlc3QiLCJkYXRhc2V0IiwicHJpY2UiLCJhdHRyaWJ1dGVWYWx1ZXMiLCJhdHRyaWJ1dGVzIiwiaW5pdEF0dHJpYnV0ZVZhbHVlcyIsInRyaWdnZXIiLCJ0YWdOYW1lIiwiZmlsdGVyQXR0cmlidXRlVmFsdWVzIiwicmVzdWx0IiwidmFsdWVzU2VsZWN0Iiwib3B0aW9ucyIsInB1c2giLCJsYWJlbCIsImlubmVySFRNTCIsImF0dHJpYnV0ZUlkIiwiYXR0cmlidXRlU2VsZWN0IiwiaXRlbSIsInZhbHVlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImNyZWF0ZUVsZW1lbnQi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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyx1RUFBdUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkJELGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCxxQkFBcUIsbUJBQU8sQ0FBQyx1R0FBcUM7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6ImFkbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9tb2R1bGVzL29yZGVyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvcHJvZHVjdCcpO1xuXG5jb25zb2xlLmxvZygnSGVsbG8gV2VicGFjayBFbmNvcmUhIEVkaXQgbWUgaW4gYXNzZXRzL2pzL2FwcC5qcycpOyIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciwgYW1vdW50RWxlbWVudDtcblxuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWdyb3VwW2lkJD1cIl9pdGVtc1wiXScpO1xuICAgIGFtb3VudEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtYW1vdW50Jyk7XG5cbiAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLXVwZGF0ZS1hbW91bnQnKSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUFtb3VudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGNvbnRhaW5lcikub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5uYW1lLmluZGV4T2YoJ1twcm9kdWN0XScpID4gMCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByaWNlKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFtb3VudCgpIHtcbiAgICAgICAgbGV0IGFtb3VudCA9IDA7XG4gICAgICAgIGxldCByb3dzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zb25hdGEtYmEtdGJvZHkgdHInKTtcblxuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgICAgbGV0IHByaWNlRWxlbWVudCA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbbmFtZSo9cHJpY2VdJyk7XG4gICAgICAgICAgICBsZXQgY291bnRFbGVtZW50ID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lKj1jb3VudF0nKTtcblxuICAgICAgICAgICAgYW1vdW50ICs9IHByaWNlRWxlbWVudC52YWx1ZSAqIGNvdW50RWxlbWVudC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYW1vdW50RWxlbWVudC52YWx1ZSA9IGFtb3VudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcmljZShzZWxlY3QpIHtcbiAgICAgICAgbGV0IG9wdGlvbiA9IHNlbGVjdC5zZWxlY3RlZE9wdGlvbnNbMF07XG4gICAgICAgIGxldCByb3cgPSBzZWxlY3QuY2xvc2VzdCgndHInKTtcbiAgICAgICAgbGV0IHByaWNlRWxlbWVudCA9IHJvdy5xdWVyeVNlbGVjdG9yKCdbbmFtZSo9cHJpY2VdJyk7XG5cbiAgICAgICAgcHJpY2VFbGVtZW50LnZhbHVlID0gb3B0aW9uLmRhdGFzZXQucHJpY2U7XG4gICAgICAgIHVwZGF0ZUFtb3VudCgpO1xuICAgIH1cbn0pOyIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lcjtcbiAgICBsZXQgYXR0cmlidXRlVmFsdWVzID0gbnVsbDtcbiAgICBsZXQgYXR0cmlidXRlcztcblxuICAgIC8vINC/0L7Qu9GD0YfQsNC10Lwg0YLQsNCx0LvQuNGG0YMg0YEg0LDRgtGA0LjQsdGD0YLQsNC80LhcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1ncm91cFtpZCQ9XCJfYXR0cmlidXRlVmFsdWVzXCJdJyk7XG5cbiAgICBpZiAoY29udGFpbmVyKSB7IC8vINCS0YvQv9C+0LvQvdGP0LXQvCwg0YLQvtC70YzQutC+INC10YHQu9C4INC90LAg0YHRgtGA0LDQvdC40YbQtSDQtdGB0YLRjCDRgtCw0LHQu9C40YbQsCDRgSDQsNGC0YDQuNCx0YPRgtCw0LzQuFxuICAgICAgICBpbml0QXR0cmlidXRlVmFsdWVzKCk7IC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQstGB0LUg0LLQvtC30LzQvtC20L3Ri9C1INC30L3QsNGH0LXQvdC40Y8g0LDRgtGA0LjQsdGD0YLQvtCyXG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ3NvbmF0YS5hZGRfZWxlbWVudCcsIGZ1bmN0aW9uKCkgeyAvLyDQn9GA0Lgg0LTQvtCx0LDQstC70LXQvdC40Lgg0L3QvtCy0L7Qs9C+INCw0YLRgNC40LHRg9GC0LBcbiAgICAgICAgICAgICQoJy5qcy1wcm9kdWN0LWF0dHJpYnV0ZScpLnRyaWdnZXIoJ2NoYW5nZScpOyAvLyDQstGL0LfRi9Cy0LDQtdC8INGB0L7QsdGL0YLQuNC1INC40LfQvNC10L3QtdC90LjRjyDQsNGC0YDQuNCx0YPRgtCwINC00LvRjyDRhNC40LvRjNGC0YDQsNGG0LjQuCDRhNC+0LfQvNC+0LbQvdGL0YUg0LfQvdCw0YfQtdC90LjQuVxuICAgICAgICB9KTtcblxuICAgICAgICAkKGNvbnRhaW5lcikub24oJ2NoYW5nZScsIChldmVudCkgPT4geyAvLyDQndCwINGB0L7QsdGL0YLQuNC1IGNoYW5nZVxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnU0VMRUNUJyAvLyDQtdGB0LvQuCDRjdC70LXQvNC10L3RgiBzZWxlY3RcbiAgICAgICAgICAgICAgICAmJiBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1wcm9kdWN0LWF0dHJpYnV0ZScgLy8g0Lgg0LIgY2xhc3Mg0LXRgdGC0YwganMtcHJvZHVjdC1hdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyQXR0cmlidXRlVmFsdWVzKGV2ZW50LnRhcmdldCk7IC8vINGE0LjQu9GM0YLRgNGD0LXQvCDRgdC/0LjRgdC+0Log0LfQvdCw0YfQtdC90LjQuSDQsNGC0YDQuNCx0YPRgtCwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRBdHRyaWJ1dGVWYWx1ZXMoKSB7IC8vINC/0L7Qu9GD0YfQsNC10Lwg0YHQv9C40YHQvtC6INCy0L7Qt9C80L7QttC90YvRhSDQt9C90LDRh9C10L3QuNC5XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IHZhbHVlc1NlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzZWxlY3QuanMtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWUnKTsgLy8g0JjRidC10Lwg0YHQtdC70LXQutGCINGB0L4g0LfQvdCw0YfQtdC90Y/QvNC4INCw0YLRgNC40LHRg9GC0L7QslxuXG4gICAgICAgIGlmICghdmFsdWVzU2VsZWN0KSB7IC8vINC10YHQu9C4INC90LUg0L3QsNC50LTQtdC9XG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignc29uYXRhLmFkZF9lbGVtZW50JywgZnVuY3Rpb24oKSB7IC8vINC/0YDQuCDQtNC+0LHQsNCy0LvQtdC90LjQuCDQvdC+0LLQvtCz0L4g0LDRgtGA0LjQsdGD0YLQsFxuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVWYWx1ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdEF0dHJpYnV0ZVZhbHVlcygpOyAvLyDQt9Cw0L/Rg9GB0LrQsNC10Lwg0L/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQstC+0LfQvNC+0LbQvdGL0YUg0LfQvdCw0YfQtdC90LjQuVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZXNTZWxlY3Qub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHsgLy8g0LTQu9GPINC60LDQttC00L7QuSDQvtC/0YbQuNC4INGB0LXQu9C10LrRgtCwXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IC8vINGB0L7RhdGA0LDQvdGP0LXQvCDQtdC1INC/0LDRgNCw0LzQtdGC0YDRiyDQsiDQvNCw0YHRgdC40LJcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24uaW5uZXJIVE1MLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUlkOiBvcHRpb24uZGF0YXNldC5hdHRyaWJ1dGVJZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlcyA9IHJlc3VsdDsgLy8g0YHQvtGF0YDQsNC90Y/QtdC8INCyINC/0LXRgNC10LzQtdC90L3QvtC5XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyQXR0cmlidXRlVmFsdWVzKGF0dHJpYnV0ZVNlbGVjdCkgeyAvLyDRhNC40LvRjNGC0YDQsNGG0LjRjyDQt9C90LDRh9C10L3QuNC5INCw0YLRgNC40LHRg9GC0L7QslxuICAgICAgICBsZXQgYXR0cmlidXRlSWQgPSBhdHRyaWJ1dGVTZWxlY3Quc2VsZWN0ZWRPcHRpb25zLml0ZW0oMCkudmFsdWU7IC8vINC/0L7Qu9GD0YfQsNC10YIg0LDQudC00Lgg0YLQtdC60YPRidC10LPQviDQsNGC0YDQuNCx0YPRgtCwXG4gICAgICAgIGxldCByb3cgPSBhdHRyaWJ1dGVTZWxlY3QuY2xvc2VzdCgndHInKTsgLy8g0LjRidC10Lwg0YHRgtGA0L7QutGDLCDQsiDQutC+0YLQvtGA0L7QuSDQvdCw0YXQvtC00LjRgtGB0Y8g0YLQtdC60YPRidC40Lkg0LDRgtGA0LjQsdGD0YIg0Lgg0LXQs9C+INC30L3QsNGH0LXQvdC40Y9cbiAgICAgICAgbGV0IHZhbHVlU2VsZWN0ID0gcm93LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdC5qcy1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZScpOyAvLyDQvdCw0YXQvtC00LjQvCDRgdC10LvQtdC60YIg0YHQviDQt9C90LDRh9C10L3QuNGP0LzQuFxuICAgICAgICBsZXQgc2VsZWN0ZWRJbmRleCA9IHZhbHVlU2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgdmFsdWVTZWxlY3QuaW5uZXJIVE1MID0gJyc7IC8vINC+0YfQuNGJ0LDQtdC8INGB0L/QuNGB0L7QuiDQvtC/0YbQuNC5INGB0LXQu9C10LrRgtCwXG5cbiAgICAgICAgYXR0cmlidXRlVmFsdWVzLmZvckVhY2goKGl0ZW0pID0+IHsgLy8g0LTQu9GPINC60LDQttC00L7Qs9C+INC40Lcg0LLQvtC30LzQvtC20L3Ri9GFINC30L3QsNGH0LXQvdC40Lkg0LDRgtGA0LjQsdGD0YLQvtCyXG4gICAgICAgICAgICBpZiAoaXRlbS5hdHRyaWJ1dGVJZCA9PT0gYXR0cmlidXRlSWQpIHsgLy8g0LXRgdC70Lgg0LDQudC00Lgg0LDRgtGA0LjRjNGD0YLQsCDRgyDQt9C90LDRh9C10L3QuNGPINGB0L7QstC/0LDQtNCw0LXRgiDRgSDQstGL0LHRgNCw0L3QvdGL0LxcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7IC8vINGB0L7Qt9C00LDQtdC8INC90L7QstGL0Lkgb3B0aW9uXG4gICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICB2YWx1ZVNlbGVjdC5hZGQob3B0aW9uKTsgLy8g0LTQvtCx0LDQstC70Y/QtdC8INCyIHNlbGVjdFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YWx1ZVNlbGVjdC5zZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAkKHZhbHVlU2VsZWN0KS50cmlnZ2VyKCdjaGFuZ2UnKTsgLy8g0LfQsNC/0YPRgdC60LDQtdC8INGB0L7QsdGW0YLQuNC1INC40LfQvNC10L3QtdC90LjRjyDRgdC10LvQtdC60YLQsCDQtNC70Y8g0L7QsdC90L7QstC70LXQvdC40Y8g0L7Qv9GG0LjQuSDQsiBzZWxlY3QyXG4gICAgfVxuXG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgc2xvcHB5QXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2xvcHB5LWFycmF5LW1ldGhvZCcpO1xuXG52YXIgbmF0aXZlSW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbnZhciBORUdBVElWRV9aRVJPID0gISFuYXRpdmVJbmRleE9mICYmIDEgLyBbMV0uaW5kZXhPZigxLCAtMCkgPCAwO1xudmFyIFNMT1BQWV9NRVRIT0QgPSBzbG9wcHlBcnJheU1ldGhvZCgnaW5kZXhPZicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgU0xPUFBZX01FVEhPRCB9LCB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIGluZGV4T2Yoc2VhcmNoRWxlbWVudCAvKiAsIGZyb21JbmRleCA9IDAgKi8pIHtcbiAgICByZXR1cm4gTkVHQVRJVkVfWkVST1xuICAgICAgLy8gY29udmVydCAtMCB0byArMFxuICAgICAgPyBuYXRpdmVJbmRleE9mLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgMFxuICAgICAgOiAkaW5kZXhPZih0aGlzLCBzZWFyY2hFbGVtZW50LCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1mdW5jdGlvbi1pbnN0YW5jZXMtbmFtZVxuaWYgKERFU0NSSVBUT1JTICYmICEoTkFNRSBpbiBGdW5jdGlvblByb3RvdHlwZSkpIHtcbiAgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90b3R5cGUsIE5BTUUsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25Qcm90b3R5cGVUb1N0cmluZy5jYWxsKHRoaXMpLm1hdGNoKG5hbWVSRSlbMV07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=