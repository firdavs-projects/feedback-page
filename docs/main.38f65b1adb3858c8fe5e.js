/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/Feedback.js":
/*!********************************!*\
  !*** ./components/Feedback.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feedback": () => (/* binding */ Feedback)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _FeedbackSocial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackSocial */ "./components/FeedbackSocial.js");
/* harmony import */ var _FeedbackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedbackForm */ "./components/FeedbackForm.js");



var Feedback = function Feedback() {
  var title = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
    "class": 'title',
    innerHTML: 'Get in touch'
  });
  var subtitle = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'subtitle',
    innerHTML: 'We are always happy to make valuable new contacts.'
  });
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {
    "class": 'feedback',
    children: [(0,_FeedbackForm__WEBPACK_IMPORTED_MODULE_2__.FeedbackForm)([title, subtitle]), (0,_FeedbackSocial__WEBPACK_IMPORTED_MODULE_1__.FeedbackSocial)()]
  });
};

/***/ }),

/***/ "./components/FeedbackForm.js":
/*!************************************!*\
  !*** ./components/FeedbackForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackForm": () => (/* binding */ FeedbackForm)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var LIMIT = 100;
var FeedbackForm = function FeedbackForm(children) {
  var name = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
    type: 'text',
    "class": 'input',
    id: 'name',
    name: 'name',
    placeholder: 'John Doe'
  });
  var nameLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
    "for": 'name',
    innerHTML: 'Name',
    "class": 'label'
  });
  var nameContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'input-container',
    children: [nameLabel, name]
  });
  var email = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
    type: 'email',
    "class": 'input',
    id: 'email',
    name: 'email',
    placeholder: 'john.doe@example.com'
  });
  var emailLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
    "for": 'email',
    innerHTML: 'Email',
    "class": 'label'
  });
  var emailContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'input-container',
    children: [emailLabel, email]
  });
  var fullnameContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'fullname-container',
    children: [nameContainer, emailContainer]
  });
  var message = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
    id: 'message',
    "class": 'input',
    name: 'message',
    placeholder: 'Hi there! My name is John, I have a question about'
  });
  var messageLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
    "for": 'message',
    innerHTML: 'Message',
    "class": 'label'
  });
  var messageLine = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
    "class": 'message-line',
    style: "width: 0px;"
  });
  var messageCounter = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
    "class": 'message-counter',
    innerHTML: "0/".concat(LIMIT)
  });
  var messageContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'input-container',
    children: [messageLabel, message, messageLine, messageCounter]
  });
  var submit = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
    type: 'submit',
    "class": 'btn',
    innerHTML: 'Send'
  });
  var inputs = [name, email, message];
  inputs.forEach(function (input) {
    input.addEventListener('input', function (e) {
      return inputHandler(e, input, inputs);
    });
  });
  var feedbackForm = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {
    "class": 'feedback-form',
    children: [].concat(_toConsumableArray(children), [fullnameContainer, messageContainer, submit])
  });
  feedbackForm.addEventListener('submit', function (e) {
    return submitHandler(e, feedbackForm, inputs);
  });
  return feedbackForm;
};

var inputHandler = function inputHandler(e, input, _ref) {
  var _ref2 = _slicedToArray(_ref, 3),
      name = _ref2[0],
      email = _ref2[1],
      message = _ref2[2];

  var textLength = e.target.value.length;

  switch (input.id) {
    case 'name':
      textLength && name.classList.remove('error');
      break;

    case 'email':
      textLength && email.classList.remove('error');
      break;

    case 'message':
      if (textLength >= LIMIT) {
        message.value = message.value.slice(0, LIMIT);
        textLength = LIMIT;
      }

      if (textLength < LIMIT) {
        message.classList.remove('error');
      }

      var messageLine = message.parentElement.querySelector('.message-line');
      var messageCounter = message.parentElement.querySelector('.message-counter');
      messageLine.style.width = "".concat(textLength, "%");
      messageCounter.innerHTML = "".concat(textLength, "/").concat(LIMIT);
      break;

    default:
      break;
  }
};

var submitHandler = function submitHandler(e, feedbackForm, _ref3) {
  var _ref4 = _slicedToArray(_ref3, 3),
      name = _ref4[0],
      email = _ref4[1],
      message = _ref4[2];

  e.preventDefault();
  var formData = new FormData(feedbackForm);
  var data = {};
  var isValid = true;

  var _iterator = _createForOfIteratorHelper(formData.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      switch (key) {
        case 'name':
          if (value.length < 2) {
            name.classList.add('error');
            isValid = false;
            return;
          }

          data[key] = value;
          name.classList.remove('error');
          break;

        case 'email':
          if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isValidEmail)(value)) {
            email.classList.add('error');
            isValid = false;
            return;
          }

          data[key] = value;
          email.classList.remove('error');
          break;

        case 'message':
          if (value.length < 2) {
            message.classList.add('error');
            isValid = false;
            return;
          }

          data[key] = value;
          message.classList.remove('error');
          break;

        default:
          break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (isValid) {
    console.log(data);
    var thanks = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
      "class": 'thanks',
      innerHTML: 'Thank you for your feedback!'
    });
    feedbackForm.replaceWith(thanks);
  }
};

/***/ }),

/***/ "./components/FeedbackSocial.js":
/*!**************************************!*\
  !*** ./components/FeedbackSocial.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackSocial": () => (/* binding */ FeedbackSocial)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./utils/index.js");
/* harmony import */ var _assets_icons_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/info.svg */ "./assets/icons/info.svg");
/* harmony import */ var _assets_icons_fb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/fb.svg */ "./assets/icons/fb.svg");
/* harmony import */ var _assets_icons_tw_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/tw.svg */ "./assets/icons/tw.svg");
/* harmony import */ var _assets_icons_in_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/in.svg */ "./assets/icons/in.svg");





var FeedbackSocial = function FeedbackSocial() {
  var titleSocial = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
    "class": 'title',
    innerHTML: 'Contact information'
  });
  var info = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_info_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: 'info',
    "class": 'info'
  });
  var subtitleSocial = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'subtitle',
    innerHTML: 'Click to view'
  });
  titleSocial.classList.add('social-title');
  subtitleSocial.classList.add('social-subtitle');
  var fb = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_fb_svg__WEBPACK_IMPORTED_MODULE_2__,
    alt: 'facebook'
  });
  var facebook = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'facebook',
    children: fb
  });
  var tw = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_tw_svg__WEBPACK_IMPORTED_MODULE_3__,
    alt: 'twitter'
  });
  var twitter = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'twitter',
    children: tw
  });
  var ln = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_in_svg__WEBPACK_IMPORTED_MODULE_4__,
    alt: 'linkedin'
  });
  var linkedin = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'linkedin',
    children: ln
  });
  var linksContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'links-container',
    children: [facebook, twitter, linkedin]
  });
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('aside', {
    "class": 'feedback-social',
    children: [titleSocial, info, subtitleSocial, linksContainer]
  });
};

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./utils/index.js");

var Footer = function Footer() {
  var link = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: 'https://app.rs.school/cv/2077dc36-91de-43f9-843b-553976dea00a',
    innerHTML: 'Firdavs Abdulloev',
    "class": 'author-link'
  });
  var developer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'developer',
    innerHTML: 'Developed by ',
    children: link
  });
  var copyright = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'copyright',
    innerHTML: "Copyright &copy; ".concat(new Date().getFullYear(), " Company LLC")
  });
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', {
    "class": 'footer',
    children: [developer, copyright]
  });
};

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./utils/index.js");

var Header = function Header() {
  var header = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {
    "class": 'container',
    innerHTML: 'CONTACT'
  });
  return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', {
    "class": 'header',
    children: header
  });
};

/***/ }),

/***/ "./components/Maps.js":
/*!****************************!*\
  !*** ./components/Maps.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Maps": () => (/* binding */ Maps)
/* harmony export */ });
/* harmony import */ var ymaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ymaps */ "../node_modules/ymaps/dist/ymaps.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./utils/index.js");


var Maps = function Maps() {
  var maps = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('section', {
    "class": 'maps',
    id: 'maps'
  });
  ymaps__WEBPACK_IMPORTED_MODULE_0__["default"].load().then(function (maps) {
    var map = new maps.Map('maps', {
      center: [55.749, 37.619],
      // Москва
      zoom: 15,
      controls: []
    });
    var mark = new maps.Placemark([55.752, 37.619]);
    map.geoObjects.add(mark);
  })["catch"](function (error) {
    return console.log('Failed to load Yandex Maps', error);
  });
  return maps;
};

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feedback": () => (/* reexport safe */ _Feedback__WEBPACK_IMPORTED_MODULE_0__.Feedback),
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_3__.Footer),
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__.Header),
/* harmony export */   "Maps": () => (/* reexport safe */ _Maps__WEBPACK_IMPORTED_MODULE_1__.Maps)
/* harmony export */ });
/* harmony import */ var _Feedback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Feedback */ "./components/Feedback.js");
/* harmony import */ var _Maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps */ "./components/Maps.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");






/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "isValidEmail": () => (/* binding */ isValidEmail)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var createElement = function createElement(tag, args) {
  var element = document.createElement(tag);

  if (args) {
    Object.keys(args).forEach(function (key) {
      if (key === 'class') {
        element.classList.add(args[key]);
        return;
      }

      if (key === 'children') {
        if (Array.isArray(args[key])) {
          element.append.apply(element, _toConsumableArray(args[key]));
        } else {
          element.append(args[key]);
        }

        return;
      }

      element[key] = args[key];
    });
  }

  return element;
};
var isValidEmail = function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./../node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/base.scss":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/base.scss ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.header {\n  background: #08b2db;\n  color: #fff;\n  padding: 20px 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.container {\n  max-width: 1140px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n#maps {\n  height: 480px;\n  overflow: hidden;\n}\n\n.ymaps-2-1-79-map-copyrights-promo,\n.ymaps-2-1-79-copyright__wrap {\n  display: none !important;\n}\n\n.feedback {\n  width: 800px;\n  min-height: 390px;\n  margin: -280px auto 0;\n  background: white;\n  position: relative;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.title {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 20px 0;\n  text-transform: uppercase;\n  color: #08b2db;\n}\n.title.social-title {\n  color: white;\n  font-size: 28px;\n  line-height: 1.5;\n  text-align: center;\n}\n\n.subtitle {\n  color: #222;\n  margin-bottom: 20px;\n}\n.subtitle.social-subtitle {\n  color: white;\n  font-size: 21px;\n  max-width: 100px;\n  text-align: center;\n}\n\n.feedback-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 70%;\n  padding: 30px 40px;\n}\n\n.feedback-social {\n  background: #08b2db;\n  padding: 30px 5px;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.fullname-container {\n  width: 100%;\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: space-between;\n}\n.fullname-container .input-container:first-child {\n  margin-right: 5px;\n}\n.fullname-container .input-container:last-child {\n  margin-left: 5px;\n}\n\n.input {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #ccc;\n  padding: 0 10px;\n  margin-bottom: 20px;\n}\n.input:focus {\n  outline: none;\n}\n.input:focus-visible {\n  border: 1px solid #08b2db;\n}\n.input.error {\n  border: 1px solid red;\n}\n\n.label {\n  font-size: 13px;\n  color: #222;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.message-line {\n  display: block;\n  height: 3px;\n  background: #08b2db;\n  margin-top: -21px;\n  position: relative;\n  z-index: 100;\n}\n\n.message-counter {\n  display: block;\n  font-weight: bold;\n  font-size: 13px;\n  color: #08b2db;\n  text-align: end;\n}\n\n.input-container {\n  width: 100%;\n}\n\n.btn {\n  height: 40px;\n  border: 1px solid #ccc;\n  padding: 7px 25px;\n  border-radius: 20px;\n  background: white;\n  margin-left: 15px;\n  margin-top: 15px;\n}\n.btn:hover {\n  background: #08b2db;\n  cursor: pointer;\n  color: white;\n}\n\n.info {\n  width: 50px;\n  height: 50px;\n}\n\n.links-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.links-container a {\n  border: 2px solid white;\n  border-radius: 50%;\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px;\n}\n\n.thanks {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 0 20px;\n  text-transform: uppercase;\n  color: #08b2db;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-size: 13px;\n  color: #222;\n}\n\n.author-link {\n  color: #08b2db;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 860px) {\n  .feedback {\n    width: calc(100% - 40px);\n  }\n\n  .thanks {\n    width: 100%;\n  }\n\n  .feedback-form {\n    width: 100%;\n  }\n\n  .feedback-social {\n    width: 100%;\n  }\n\n  .fullname-container {\n    flex-direction: column;\n  }\n  .fullname-container .input-container {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n}\n@media screen and (max-width: 580px) {\n  .feedback {\n    flex-direction: column;\n  }\n\n  .info {\n    margin-bottom: 15px;\n  }\n\n  .footer {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .developer {\n    margin-bottom: 5px;\n  }\n\n  .thanks {\n    min-height: 200px;\n    margin: 0;\n  }\n\n  .title.social-title {\n    max-width: 300px;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/base.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;AADF;;AAIA;EACE,oCAAA;AADF;;AAIA;EACE,mBAbW;EAcX,WAAA;EACA,eAAA;EACA,wCAAA;AADF;;AAIA;EACE,iBAAA;EACA,cAAA;EACA,eAAA;AADF;;AAIA;EACE,aAAA;EACA,gBAAA;AADF;;AAIA;;EAEE,wBAAA;AADF;;AAIA;EACE,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,uCAAA;AADF;;AAIA;EACE,eAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,cApDW;AAmDb;AAGE;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AADJ;;AAKA;EACE,WAAA;EACA,mBAAA;AAFF;AAIE;EACE,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAFJ;;AAMA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;EACA,kBAAA;AAHF;;AAMA;EACE,mBAnFW;EAoFX,iBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AAHF;;AAMA;EACE,WAAA;EACA,aAAA;EACA,cAAA;EACA,8BAAA;AAHF;AAMI;EACE,iBAAA;AAJN;AAOI;EACE,gBAAA;AALN;;AAUA;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,mBAAA;AAPF;AASE;EACE,aAAA;AAPJ;AAUE;EACE,yBAAA;AARJ;AAWE;EACE,qBAAA;AATJ;;AAaA;EACE,eAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAVF;;AAaA;EACE,cAAA;EACA,WAAA;EACA,mBA3IW;EA4IX,iBAAA;EACA,kBAAA;EACA,YAAA;AAVF;;AAaA;EACE,cAAA;EACA,iBAAA;EACA,eAAA;EACA,cArJW;EAsJX,eAAA;AAVF;;AAaA;EACE,WAAA;AAVF;;AAaA;EACE,YAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AAVF;AAYE;EACE,mBAvKS;EAwKT,eAAA;EACA,YAAA;AAVJ;;AAcA;EACE,WAAA;EACA,YAAA;AAXF;;AAcA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AAXF;AAaE;EACE,uBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AAXJ;;AAeA;EACE,eAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,cAzMW;EA0MX,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAZF;;AAeA;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AAZF;;AAeA;EACE,cA3NW;EA4NX,iBAAA;EACA,qBAAA;AAZF;;AAeA;EACE;IACE,wBAAA;EAZF;;EAcA;IACE,WAAA;EAXF;;EAaA;IACE,WAAA;EAVF;;EAYA;IACE,WAAA;EATF;;EAWA;IACE,sBAAA;EARF;EAUE;IACE,yBAAA;IACA,0BAAA;EARJ;AACF;AAYA;EACE;IACE,sBAAA;EAVF;;EAYA;IACE,mBAAA;EATF;;EAWA;IACE,sBAAA;IACA,mBAAA;EARF;;EAUA;IACE,kBAAA;EAPF;;EASA;IACE,iBAAA;IACA,SAAA;EANF;;EAQA;IACE,gBAAA;EALF;AACF","sourcesContent":["$base-color: #08b2db;\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.header {\r\n  background: $base-color;\r\n  color: #fff;\r\n  padding: 20px 0;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.container {\r\n  max-width: 1140px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n}\r\n\r\n#maps {\r\n  height: 480px;\r\n  overflow: hidden;\r\n}\r\n\r\n.ymaps-2-1-79-map-copyrights-promo,\r\n.ymaps-2-1-79-copyright__wrap {\r\n  display: none !important;\r\n}\r\n\r\n.feedback {\r\n  width: 800px;\r\n  min-height: 390px;\r\n  margin: -280px auto 0;\r\n  background: white;\r\n  position: relative;\r\n  z-index: 10;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.title {\r\n  font-size: 34px;\r\n  font-weight: bold;\r\n  margin: 20px 0;\r\n  text-transform: uppercase;\r\n  color: $base-color;\r\n\r\n  &.social-title {\r\n    color: white;\r\n    font-size: 28px;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.subtitle {\r\n  color: #222;\r\n  margin-bottom: 20px;\r\n\r\n  &.social-subtitle {\r\n    color: white;\r\n    font-size: 21px;\r\n    max-width: 100px;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.feedback-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 70%;\r\n  padding: 30px 40px;\r\n}\r\n\r\n.feedback-social {\r\n  background: $base-color;\r\n  padding: 30px 5px;\r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.fullname-container {\r\n  width: 100%;\r\n  display: flex;\r\n  flex: 1 1 auto;\r\n  justify-content: space-between;\r\n\r\n  .input-container {\r\n    &:first-child {\r\n      margin-right: 5px;\r\n    }\r\n\r\n    &:last-child {\r\n      margin-left: 5px;\r\n    }\r\n  }\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n  height: 40px;\r\n  border: 1px solid #ccc;\r\n  padding: 0 10px;\r\n  margin-bottom: 20px;\r\n\r\n  &:focus {\r\n    outline: none;\r\n  }\r\n\r\n  &:focus-visible {\r\n    border: 1px solid $base-color;\r\n  }\r\n\r\n  &.error {\r\n    border: 1px solid red;\r\n  }\r\n}\r\n\r\n.label {\r\n  font-size: 13px;\r\n  color: #222;\r\n  display: block;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.message-line {\r\n  display: block;\r\n  height: 3px;\r\n  background: $base-color;\r\n  margin-top: -21px;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n\r\n.message-counter {\r\n  display: block;\r\n  font-weight: bold;\r\n  font-size: 13px;\r\n  color: $base-color;\r\n  text-align: end;\r\n}\r\n\r\n.input-container {\r\n  width: 100%;\r\n}\r\n\r\n.btn {\r\n  height: 40px;\r\n  border: 1px solid #ccc;\r\n  padding: 7px 25px;\r\n  border-radius: 20px;\r\n  background: white;\r\n  margin-left: 15px;\r\n  margin-top: 15px;\r\n\r\n  &:hover {\r\n    background: $base-color;\r\n    cursor: pointer;\r\n    color: white;\r\n  }\r\n}\r\n\r\n.info {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.links-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n\r\n  a {\r\n    border: 2px solid white;\r\n    border-radius: 50%;\r\n    padding: 10px;\r\n    width: 40px;\r\n    height: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 10px;\r\n  }\r\n}\r\n\r\n.thanks {\r\n  font-size: 34px;\r\n  font-weight: bold;\r\n  margin: 0 20px;\r\n  text-transform: uppercase;\r\n  color: $base-color;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n  padding: 10px 20px;\r\n  font-size: 13px;\r\n  color: #222;\r\n}\r\n\r\n.author-link {\r\n  color: $base-color;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: 860px) {\r\n  .feedback {\r\n    width: calc(100% - 40px);\r\n  }\r\n  .thanks {\r\n    width: 100%;\r\n  }\r\n  .feedback-form {\r\n    width: 100%;\r\n  }\r\n  .feedback-social {\r\n    width: 100%;\r\n  }\r\n  .fullname-container {\r\n    flex-direction: column;\r\n\r\n    .input-container {\r\n      margin-left: 0 !important;\r\n      margin-right: 0 !important;\r\n    }\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 580px) {\r\n  .feedback {\r\n    flex-direction: column;\r\n  }\r\n  .info {\r\n    margin-bottom: 15px;\r\n  }\r\n  .footer {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .developer {\r\n    margin-bottom: 5px;\r\n  }\r\n  .thanks {\r\n    min-height: 200px;\r\n    margin: 0;\r\n  }\r\n  .title.social-title {\r\n    max-width: 300px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \*************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/normalize.css/normalize.css":
/*!***************************************************!*\
  !*** ../node_modules/normalize.css/normalize.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./normalize.css */ "../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./scss/base.scss":
/*!************************!*\
  !*** ./scss/base.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/ymaps/dist/ymaps.esm.js":
/*!***********************************************!*\
  !*** ../node_modules/ymaps/dist/ymaps.esm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ymaps$1 = {
  load: function load() {
    var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '//api-maps.yandex.ru/2.1/?lang=en_RU';

    var getNsParamValue = function getNsParamValue() {
      var results = src.match(/[\\?&]ns=([^&#]*)/);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    if (!this.promise) {
      this.promise = new Promise(function (resolve, reject) {
        var scriptElement = document.createElement('script');
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
        scriptElement.type = 'text/javascript';
        scriptElement.src = src;
        document.body.appendChild(scriptElement);
      }).then(function () {
        var ns = getNsParamValue();

        if (ns && ns !== 'ymaps') {
          (0, eval)("var ymaps = ".concat(ns, ";"));
        }

        return new Promise(function (resolve) {
          return ymaps.ready(resolve);
        });
      });
    }

    return this.promise;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ymaps$1);


/***/ }),

/***/ "./assets/icons/fb.svg":
/*!*****************************!*\
  !*** ./assets/icons/fb.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "baf014d41b823d4ececc.svg";

/***/ }),

/***/ "./assets/icons/in.svg":
/*!*****************************!*\
  !*** ./assets/icons/in.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6754a5485e596751882.svg";

/***/ }),

/***/ "./assets/icons/info.svg":
/*!*******************************!*\
  !*** ./assets/icons/info.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9931ac66e04e3561cced.svg";

/***/ }),

/***/ "./assets/icons/tw.svg":
/*!*****************************!*\
  !*** ./assets/icons/tw.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "941ec9cf500db4a8a89e.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css/normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/base.scss */ "./scss/base.scss");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./utils/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/index.js");
var _document$head;





var headers = [(0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('title', {
  innerHTML: 'Feedback'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('link', {
  rel: 'shortcut icon',
  href: 'https://rs.school/favicon.ico'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'viewport',
  content: 'width=device-width, initial-scale=1'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'description',
  content: 'Contact form'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'keywords',
  content: 'contact, feedback, form'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'author',
  content: 'Firdavs Abdulloev'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'og:title',
  content: 'Feedback'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'og:description',
  content: 'Contact form'
}), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('meta', {
  name: 'og:image',
  content: 'https://rs.school/favicon.ico'
})];
var root = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.createElement)('div', {
  id: 'root',
  children: [(0,_components__WEBPACK_IMPORTED_MODULE_3__.Header)(), (0,_components__WEBPACK_IMPORTED_MODULE_3__.Maps)(), (0,_components__WEBPACK_IMPORTED_MODULE_3__.Feedback)(), (0,_components__WEBPACK_IMPORTED_MODULE_3__.Footer)()]
});

(_document$head = document.head).append.apply(_document$head, headers);

document.body.append(root);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHVCQUF3QkssT0FBeEI7O0FBQ0FWLFFBQVEsQ0FBQ2UsSUFBVCxDQUFjVixNQUFkLENBQXFCUSxJQUFyQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWVkYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWRiYWNrU29jaWFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uL3Njc3MvYmFzZS5zY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8yNGJkIiwid2VicGFjazovLy8uL3Njc3MvYmFzZS5zY3NzPzI1NTMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3ltYXBzL2Rpc3QveW1hcHMuZXNtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtGZWVkYmFja1NvY2lhbH0gZnJvbSBcIi4vRmVlZGJhY2tTb2NpYWxcIjtcclxuaW1wb3J0IHtGZWVkYmFja0Zvcm19IGZyb20gXCIuL0ZlZWRiYWNrRm9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtjbGFzczogJ3RpdGxlJywgaW5uZXJIVE1MOiAnR2V0IGluIHRvdWNoJ30pO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50KCdwJywge1xyXG4gICAgICAgIGNsYXNzOiAnc3VidGl0bGUnLFxyXG4gICAgICAgIGlubmVySFRNTDogJ1dlIGFyZSBhbHdheXMgaGFwcHkgdG8gbWFrZSB2YWx1YWJsZSBuZXcgY29udGFjdHMuJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7XHJcbiAgICAgICAgY2xhc3M6ICdmZWVkYmFjaycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgRmVlZGJhY2tGb3JtKFt0aXRsZSwgc3VidGl0bGVdKSxcclxuICAgICAgICAgICAgRmVlZGJhY2tTb2NpYWwoKVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBpc1ZhbGlkRW1haWx9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY29uc3QgTElNSVQgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBGZWVkYmFja0Zvcm0gPSAoY2hpbGRyZW4pID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICdpbnB1dCcsXHJcbiAgICAgICAge3R5cGU6ICd0ZXh0JywgY2xhc3M6ICdpbnB1dCcsIGlkOiAnbmFtZScsIG5hbWU6ICduYW1lJywgcGxhY2Vob2xkZXI6ICdKb2huIERvZSd9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAnbmFtZScsIGlubmVySFRNTDogJ05hbWUnLCBjbGFzczogJ2xhYmVsJ30pO1xyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICBjbGFzczogJ2lucHV0LWNvbnRhaW5lcicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIG5hbWVMYWJlbCxcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgIHt0eXBlOiAnZW1haWwnLCBjbGFzczogJ2lucHV0JywgaWQ6ICdlbWFpbCcsIG5hbWU6ICdlbWFpbCcsIHBsYWNlaG9sZGVyOiAnam9obi5kb2VAZXhhbXBsZS5jb20nfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICdlbWFpbCcsIGlubmVySFRNTDogJ0VtYWlsJywgY2xhc3M6ICdsYWJlbCd9KTtcclxuICAgIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnaW5wdXQtY29udGFpbmVyJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgZW1haWxMYWJlbCxcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZ1bGxuYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnZnVsbG5hbWUtY29udGFpbmVyJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgbmFtZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgZW1haWxDb250YWluZXJcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdIaSB0aGVyZSEgTXkgbmFtZSBpcyBKb2huLCBJIGhhdmUgYSBxdWVzdGlvbiBhYm91dCdcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAnbWVzc2FnZScsIGlubmVySFRNTDogJ01lc3NhZ2UnLCBjbGFzczogJ2xhYmVsJ30pO1xyXG4gICAgY29uc3QgbWVzc2FnZUxpbmUgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICdzcGFuJyxcclxuICAgICAgICB7Y2xhc3M6ICdtZXNzYWdlLWxpbmUnLCBzdHlsZTogXCJ3aWR0aDogMHB4O1wifVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb3VudGVyID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnc3BhbicsXHJcbiAgICAgICAge2NsYXNzOiAnbWVzc2FnZS1jb3VudGVyJywgaW5uZXJIVE1MOiBgMC8ke0xJTUlUfWB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICBjbGFzczogJ2lucHV0LWNvbnRhaW5lcicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIG1lc3NhZ2VMYWJlbCxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgbWVzc2FnZUxpbmUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudGVyXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICB7dHlwZTogJ3N1Ym1pdCcsIGNsYXNzOiAnYnRuJywgaW5uZXJIVE1MOiAnU2VuZCd9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBbbmFtZSwgZW1haWwsIG1lc3NhZ2VdO1xyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IGlucHV0SGFuZGxlcihlLCBpbnB1dCwgaW5wdXRzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmZWVkYmFja0Zvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywge1xyXG4gICAgICAgIGNsYXNzOiAnZmVlZGJhY2stZm9ybScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgLi4uY2hpbGRyZW4sIGZ1bGxuYW1lQ29udGFpbmVyLCBtZXNzYWdlQ29udGFpbmVyLCBzdWJtaXRcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGZlZWRiYWNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gc3VibWl0SGFuZGxlcihlLCBmZWVkYmFja0Zvcm0sIGlucHV0cykpO1xyXG5cclxuICAgIHJldHVybiBmZWVkYmFja0Zvcm07XHJcbn1cclxuXHJcblxyXG5jb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgaW5wdXQsIFtuYW1lLCBlbWFpbCwgbWVzc2FnZV0pID0+IHtcclxuICAgIGxldCB0ZXh0TGVuZ3RoID0gZS50YXJnZXQudmFsdWUubGVuZ3RoO1xyXG4gICAgc3dpdGNoIChpbnB1dC5pZCkge1xyXG4gICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICB0ZXh0TGVuZ3RoICYmIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgdGV4dExlbmd0aCAmJiBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgICAgIGlmICh0ZXh0TGVuZ3RoID49IExJTUlUKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnZhbHVlID0gbWVzc2FnZS52YWx1ZS5zbGljZSgwLCBMSU1JVCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0TGVuZ3RoID0gTElNSVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRleHRMZW5ndGggPCBMSU1JVCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMaW5lID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWxpbmUnKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUNvdW50ZXIgPSBtZXNzYWdlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY291bnRlcicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlTGluZS5zdHlsZS53aWR0aCA9IGAke3RleHRMZW5ndGh9JWA7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudGVyLmlubmVySFRNTCA9IGAke3RleHRMZW5ndGh9LyR7TElNSVR9YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXRIYW5kbGVyID0gKGUsIGZlZWRiYWNrRm9ybSwgW25hbWUsIGVtYWlsLCBtZXNzYWdlXSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZmVlZGJhY2tGb3JtKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRW1haWwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtZXNzYWdlJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc3QgdGhhbmtzID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICd0aGFua3MnLCBpbm5lckhUTUw6ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJ30pO1xyXG4gICAgICAgIGZlZWRiYWNrRm9ybS5yZXBsYWNlV2l0aCh0aGFua3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IGluZm9JY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvaW5mby5zdmdcIjtcclxuaW1wb3J0IGZiSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2ZiLnN2Z1wiO1xyXG5pbXBvcnQgdHdJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvdHcuc3ZnXCI7XHJcbmltcG9ydCBpbkljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9pbi5zdmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGZWVkYmFja1NvY2lhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlU29jaWFsID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICd0aXRsZScsIGlubmVySFRNTDogJ0NvbnRhY3QgaW5mb3JtYXRpb24nfSk7XHJcbiAgICBjb25zdCBpbmZvID0gY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogaW5mb0ljb24sIGFsdDogJ2luZm8nLCBjbGFzczogJ2luZm8nfSk7XHJcbiAgICBjb25zdCBzdWJ0aXRsZVNvY2lhbCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7XHJcbiAgICAgICAgY2xhc3M6ICdzdWJ0aXRsZScsXHJcbiAgICAgICAgaW5uZXJIVE1MOiAnQ2xpY2sgdG8gdmlldydcclxuICAgIH0pO1xyXG5cclxuICAgIHRpdGxlU29jaWFsLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbC10aXRsZScpO1xyXG4gICAgc3VidGl0bGVTb2NpYWwuY2xhc3NMaXN0LmFkZCgnc29jaWFsLXN1YnRpdGxlJyk7XHJcblxyXG4gICAgY29uc3QgZmIgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7c3JjOiBmYkljb24sIGFsdDogJ2ZhY2Vib29rJ30pO1xyXG4gICAgY29uc3QgZmFjZWJvb2sgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICcjJywgY2xhc3M6ICdmYWNlYm9vaycsIGNoaWxkcmVuOiBmYn0pO1xyXG4gICAgY29uc3QgdHcgPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7c3JjOiB0d0ljb24sIGFsdDogJ3R3aXR0ZXInfSk7XHJcbiAgICBjb25zdCB0d2l0dGVyID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnIycsIGNsYXNzOiAndHdpdHRlcicsIGNoaWxkcmVuOiB0d30pO1xyXG4gICAgY29uc3QgbG4gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7c3JjOiBpbkljb24sIGFsdDogJ2xpbmtlZGluJ30pO1xyXG4gICAgY29uc3QgbGlua2VkaW4gPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICcjJywgY2xhc3M6ICdsaW5rZWRpbicsIGNoaWxkcmVuOiBsbn0pO1xyXG5cclxuICAgIGNvbnN0IGxpbmtzQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnbGlua3MtY29udGFpbmVyJyxcclxuICAgICAgICBjaGlsZHJlbjogW2ZhY2Vib29rLCB0d2l0dGVyLCBsaW5rZWRpbl1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhc2lkZScsIHtcclxuICAgICAgICBjbGFzczogJ2ZlZWRiYWNrLXNvY2lhbCcsXHJcbiAgICAgICAgY2hpbGRyZW46IFt0aXRsZVNvY2lhbCwgaW5mbywgc3VidGl0bGVTb2NpYWwsIGxpbmtzQ29udGFpbmVyXVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge1xyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2FwcC5ycy5zY2hvb2wvY3YvMjA3N2RjMzYtOTFkZS00M2Y5LTg0M2ItNTUzOTc2ZGVhMDBhJyxcclxuICAgICAgICBpbm5lckhUTUw6ICdGaXJkYXZzIEFiZHVsbG9ldicsXHJcbiAgICAgICAgY2xhc3M6ICdhdXRob3ItbGluaydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGV2ZWxvcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZGV2ZWxvcGVyJywgaW5uZXJIVE1MOiAnRGV2ZWxvcGVkIGJ5ICcsIGNoaWxkcmVuOiBsaW5rfSk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBjcmVhdGVFbGVtZW50KCdwJywge1xyXG4gICAgICAgIGNsYXNzOiAnY29weXJpZ2h0JyxcclxuICAgICAgICBpbm5lckhUTUw6IGBDb3B5cmlnaHQgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBDb21wYW55IExMQ2BcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIHtjbGFzczogJ2Zvb3RlcicsIGNoaWxkcmVuOiBbZGV2ZWxvcGVyLCBjb3B5cmlnaHRdfSk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgeyBjbGFzczogJ2NvbnRhaW5lcicsIGlubmVySFRNTDogJ0NPTlRBQ1QnIH0pO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIHtcclxuICAgICAgICBjbGFzczogJ2hlYWRlcicsXHJcbiAgICAgICAgY2hpbGRyZW46IGhlYWRlclxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeW1hcHMgZnJvbSAneW1hcHMnO1xyXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1hcHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXBzID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIHsgY2xhc3M6ICdtYXBzJywgaWQ6ICdtYXBzJyB9KTtcclxuICAgIHltYXBzXHJcbiAgICAgICAgLmxvYWQoKVxyXG4gICAgICAgIC50aGVuKG1hcHMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgbWFwcy5NYXAoJ21hcHMnLCB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NDksIDM3LjYxOV0sLy8g0JzQvtGB0LrQstCwXHJcbiAgICAgICAgICAgICAgICB6b29tOiAxNSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgbWFyayA9IG5ldyBtYXBzLlBsYWNlbWFyayhbNTUuNzUyLCAzNy42MTldKTtcclxuICAgICAgICAgICAgbWFwLmdlb09iamVjdHMuYWRkKG1hcmspO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9hZCBZYW5kZXggTWFwcycsIGVycm9yKSk7XHJcblxyXG4gICAgcmV0dXJuIG1hcHM7XHJcbn0iLCJpbXBvcnQge0ZlZWRiYWNrfSBmcm9tIFwiLi9GZWVkYmFja1wiO1xyXG5pbXBvcnQge01hcHN9IGZyb20gXCIuL01hcHNcIjtcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQge0Zvb3Rlcn0gZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5leHBvcnQge0ZlZWRiYWNrLCBNYXBzLCBIZWFkZXIsIEZvb3Rlcn07IiwiZXhwb3J0IGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnLCBhcmdzKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgaWYgKGFyZ3MpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhhcmdzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjbGFzcycpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdjaGlsZHJlbicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3Nba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZCguLi5hcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChhcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IGFyZ3Nba2V5XTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZEVtYWlsID0gZW1haWwgPT4ge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzA4YjJkYjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDExNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4jbWFwcyB7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnltYXBzLTItMS03OS1tYXAtY29weXJpZ2h0cy1wcm9tbyxcXG4ueW1hcHMtMi0xLTc5LWNvcHlyaWdodF9fd3JhcCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mZWVkYmFjayB7XFxuICB3aWR0aDogODAwcHg7XFxuICBtaW4taGVpZ2h0OiAzOTBweDtcXG4gIG1hcmdpbjogLTI4MHB4IGF1dG8gMDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzA4YjJkYjtcXG59XFxuLnRpdGxlLnNvY2lhbC10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgY29sb3I6ICMyMjI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uc3VidGl0bGUuc29jaWFsLXN1YnRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mZWVkYmFjay1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogNzAlO1xcbiAgcGFkZGluZzogMzBweCA0MHB4O1xcbn1cXG5cXG4uZmVlZGJhY2stc29jaWFsIHtcXG4gIGJhY2tncm91bmQ6ICMwOGIyZGI7XFxuICBwYWRkaW5nOiAzMHB4IDVweDtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5mdWxsbmFtZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5mdWxsbmFtZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmZ1bGxuYW1lLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuXFxuLmlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5pbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDhiMmRiO1xcbn1cXG4uaW5wdXQuZXJyb3Ige1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ubGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICMyMjI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLm1lc3NhZ2UtbGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogM3B4O1xcbiAgYmFja2dyb3VuZDogIzA4YjJkYjtcXG4gIG1hcmdpbi10b3A6IC0yMXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ubWVzc2FnZS1jb3VudGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzA4YjJkYjtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogN3B4IDI1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzA4YjJkYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmluZm8ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5saW5rcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5saW5rcy1jb250YWluZXIgYSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuXFxuLnRoYW5rcyB7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMCAyMHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjMDhiMmRiO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICMyMjI7XFxufVxcblxcbi5hdXRob3ItbGluayB7XFxuICBjb2xvcjogIzA4YjJkYjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcbiAgLmZlZWRiYWNrIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcbiAgfVxcblxcbiAgLnRoYW5rcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLmZlZWRiYWNrLWZvcm0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mZWVkYmFjay1zb2NpYWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mdWxsbmFtZS1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmZ1bGxuYW1lLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxuICAuZmVlZGJhY2sge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmluZm8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGV2ZWxvcGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLnRoYW5rcyB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAudGl0bGUuc29jaWFsLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsbUJBYlc7RUFjWCxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTs7RUFFRSx3QkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQXBEVztBQW1EYjtBQUdFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBbkZXO0VBb0ZYLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0FBSEY7QUFNSTtFQUNFLGlCQUFBO0FBSk47QUFPSTtFQUNFLGdCQUFBO0FBTE47O0FBVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBUEY7QUFTRTtFQUNFLGFBQUE7QUFQSjtBQVVFO0VBQ0UseUJBQUE7QUFSSjtBQVdFO0VBQ0UscUJBQUE7QUFUSjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQTNJVztFQTRJWCxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBckpXO0VBc0pYLGVBQUE7QUFWRjs7QUFhQTtFQUNFLFdBQUE7QUFWRjs7QUFhQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UsbUJBdktTO0VBd0tULGVBQUE7RUFDQSxZQUFBO0FBVko7O0FBY0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVhGOztBQWNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQVhGO0FBYUU7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBWEo7O0FBZUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQXpNVztFQTBNWCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBWkY7O0FBZUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBWkY7O0FBZUE7RUFDRSxjQTNOVztFQTROWCxpQkFBQTtFQUNBLHFCQUFBO0FBWkY7O0FBZUE7RUFDRTtJQUNFLHdCQUFBO0VBWkY7O0VBY0E7SUFDRSxXQUFBO0VBWEY7O0VBYUE7SUFDRSxXQUFBO0VBVkY7O0VBWUE7SUFDRSxXQUFBO0VBVEY7O0VBV0E7SUFDRSxzQkFBQTtFQVJGO0VBVUU7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VBUko7QUFDRjtBQVlBO0VBQ0U7SUFDRSxzQkFBQTtFQVZGOztFQVlBO0lBQ0UsbUJBQUE7RUFURjs7RUFXQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFSRjs7RUFVQTtJQUNFLGtCQUFBO0VBUEY7O0VBU0E7SUFDRSxpQkFBQTtJQUNBLFNBQUE7RUFORjs7RUFRQTtJQUNFLGdCQUFBO0VBTEY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFzZS1jb2xvcjogIzA4YjJkYjtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDExNDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFwcyB7XFxyXFxuICBoZWlnaHQ6IDQ4MHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnltYXBzLTItMS03OS1tYXAtY29weXJpZ2h0cy1wcm9tbyxcXHJcXG4ueW1hcHMtMi0xLTc5LWNvcHlyaWdodF9fd3JhcCB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjayB7XFxyXFxuICB3aWR0aDogODAwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAzOTBweDtcXHJcXG4gIG1hcmdpbjogLTI4MHB4IGF1dG8gMDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogJGJhc2UtY29sb3I7XFxyXFxuXFxyXFxuICAmLnNvY2lhbC10aXRsZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZSB7XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAmLnNvY2lhbC1zdWJ0aXRsZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbiAgcGFkZGluZzogMzBweCA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stc29jaWFsIHtcXHJcXG4gIGJhY2tncm91bmQ6ICRiYXNlLWNvbG9yO1xcclxcbiAgcGFkZGluZzogMzBweCA1cHg7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbG5hbWUtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICAgICY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gICY6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpmb2N1cy12aXNpYmxlIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJhc2UtY29sb3I7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLmVycm9yIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgY29sb3I6ICMyMjI7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UtbGluZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogM3B4O1xcclxcbiAgYmFja2dyb3VuZDogJGJhc2UtY29sb3I7XFxyXFxuICBtYXJnaW4tdG9wOiAtMjFweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UtY291bnRlciB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICBwYWRkaW5nOiA3cHggMjVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGlua3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcblxcclxcbiAgYSB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRoYW5rcyB7XFxyXFxuICBmb250LXNpemU6IDM0cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1heC13aWR0aDogODAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yLWxpbmsge1xcclxcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XFxyXFxuICAuZmVlZGJhY2sge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XFxyXFxuICB9XFxyXFxuICAudGhhbmtzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuZmVlZGJhY2stZm9ybSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmZlZWRiYWNrLXNvY2lhbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmZ1bGxuYW1lLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgIC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcXHJcXG4gIC5mZWVkYmFjayB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuICAuaW5mbyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5kZXZlbG9wZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB9XFxyXFxuICAudGhhbmtzIHtcXHJcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gIH1cXHJcXG4gIC50aXRsZS5zb2NpYWwtdGl0bGUge1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsInZhciB5bWFwcyQxID0ge1xuICBsb2FkOiBmdW5jdGlvbiBsb2FkKCkge1xuICAgIHZhciBzcmMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcvL2FwaS1tYXBzLnlhbmRleC5ydS8yLjEvP2xhbmc9ZW5fUlUnO1xuXG4gICAgdmFyIGdldE5zUGFyYW1WYWx1ZSA9IGZ1bmN0aW9uIGdldE5zUGFyYW1WYWx1ZSgpIHtcbiAgICAgIHZhciByZXN1bHRzID0gc3JjLm1hdGNoKC9bXFxcXD8mXW5zPShbXiYjXSopLyk7XG4gICAgICByZXR1cm4gcmVzdWx0cyA9PT0gbnVsbCA/ICcnIDogZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMV0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgIH07XG5cbiAgICBpZiAoIXRoaXMucHJvbWlzZSkge1xuICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHRFbGVtZW50Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgc2NyaXB0RWxlbWVudC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gc3JjO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBucyA9IGdldE5zUGFyYW1WYWx1ZSgpO1xuXG4gICAgICAgIGlmIChucyAmJiBucyAhPT0gJ3ltYXBzJykge1xuICAgICAgICAgICgwLCBldmFsKShcInZhciB5bWFwcyA9IFwiLmNvbmNhdChucywgXCI7XCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJldHVybiB5bWFwcy5yZWFkeShyZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB5bWFwcyQxO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi9zY3NzL2Jhc2Uuc2Nzcyc7XHJcbmltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHtIZWFkZXIsIE1hcHMsIEZlZWRiYWNrLCBGb290ZXJ9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IGhlYWRlcnMgPSBbXHJcbiAgICBjcmVhdGVFbGVtZW50KCd0aXRsZScsIHtpbm5lckhUTUw6ICdGZWVkYmFjayd9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ2xpbmsnLCB7cmVsOiAnc2hvcnRjdXQgaWNvbicsIGhyZWY6ICdodHRwczovL3JzLnNjaG9vbC9mYXZpY29uLmljbyd9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ21ldGEnLCB7bmFtZTogJ3ZpZXdwb3J0JywgY29udGVudDogJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJ30pLFxyXG4gICAgY3JlYXRlRWxlbWVudCgnbWV0YScsIHtuYW1lOiAnZGVzY3JpcHRpb24nLCBjb250ZW50OiAnQ29udGFjdCBmb3JtJ30pLFxyXG4gICAgY3JlYXRlRWxlbWVudCgnbWV0YScsIHtuYW1lOiAna2V5d29yZHMnLCBjb250ZW50OiAnY29udGFjdCwgZmVlZGJhY2ssIGZvcm0nfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KCdtZXRhJywge25hbWU6ICdhdXRob3InLCBjb250ZW50OiAnRmlyZGF2cyBBYmR1bGxvZXYnfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KCdtZXRhJywge25hbWU6ICdvZzp0aXRsZScsIGNvbnRlbnQ6ICdGZWVkYmFjayd9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ21ldGEnLCB7bmFtZTogJ29nOmRlc2NyaXB0aW9uJywgY29udGVudDogJ0NvbnRhY3QgZm9ybSd9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ21ldGEnLCB7bmFtZTogJ29nOmltYWdlJywgY29udGVudDogJ2h0dHBzOi8vcnMuc2Nob29sL2Zhdmljb24uaWNvJ30pLFxyXG5dO1xyXG5cclxuY29uc3Qgcm9vdCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgIGlkOiAncm9vdCcsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIEhlYWRlcigpLFxyXG4gICAgICAgIE1hcHMoKSxcclxuICAgICAgICBGZWVkYmFjaygpLFxyXG4gICAgICAgIEZvb3RlcigpLFxyXG4gICAgXVxyXG59KTtcclxuXHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kKC4uLmhlYWRlcnMpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTsiXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsIkZlZWRiYWNrU29jaWFsIiwiRmVlZGJhY2tGb3JtIiwiRmVlZGJhY2siLCJ0aXRsZSIsImlubmVySFRNTCIsInN1YnRpdGxlIiwiY2hpbGRyZW4iLCJpc1ZhbGlkRW1haWwiLCJMSU1JVCIsIm5hbWUiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm5hbWVMYWJlbCIsIm5hbWVDb250YWluZXIiLCJlbWFpbCIsImVtYWlsTGFiZWwiLCJlbWFpbENvbnRhaW5lciIsImZ1bGxuYW1lQ29udGFpbmVyIiwibWVzc2FnZSIsIm1lc3NhZ2VMYWJlbCIsIm1lc3NhZ2VMaW5lIiwic3R5bGUiLCJtZXNzYWdlQ291bnRlciIsIm1lc3NhZ2VDb250YWluZXIiLCJzdWJtaXQiLCJpbnB1dHMiLCJmb3JFYWNoIiwiaW5wdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImlucHV0SGFuZGxlciIsImZlZWRiYWNrRm9ybSIsInN1Ym1pdEhhbmRsZXIiLCJ0ZXh0TGVuZ3RoIiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzbGljZSIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2lkdGgiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJkYXRhIiwiaXNWYWxpZCIsImVudHJpZXMiLCJrZXkiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwidGhhbmtzIiwicmVwbGFjZVdpdGgiLCJpbmZvSWNvbiIsImZiSWNvbiIsInR3SWNvbiIsImluSWNvbiIsInRpdGxlU29jaWFsIiwiaW5mbyIsInNyYyIsImFsdCIsInN1YnRpdGxlU29jaWFsIiwiZmIiLCJmYWNlYm9vayIsImhyZWYiLCJ0dyIsInR3aXR0ZXIiLCJsbiIsImxpbmtlZGluIiwibGlua3NDb250YWluZXIiLCJGb290ZXIiLCJsaW5rIiwiZGV2ZWxvcGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiSGVhZGVyIiwiaGVhZGVyIiwieW1hcHMiLCJNYXBzIiwibWFwcyIsImxvYWQiLCJ0aGVuIiwibWFwIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwibWFyayIsIlBsYWNlbWFyayIsImdlb09iamVjdHMiLCJlcnJvciIsInRhZyIsImFyZ3MiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJPYmplY3QiLCJrZXlzIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwicmUiLCJ0ZXN0IiwiU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJoZWFkZXJzIiwicmVsIiwiY29udGVudCIsInJvb3QiLCJoZWFkIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=