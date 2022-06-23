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
  var feedbackSocial = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('aside', {
    "class": 'feedback-social'
  });
  var titleSocial = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
    "class": 'title',
    innerHTML: 'Contact information'
  });
  titleSocial.classList.add('social-title');
  var info = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_info_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: 'info',
    "class": 'info'
  });
  var subtitleSocial = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'subtitle',
    innerHTML: 'Click to view'
  });
  subtitleSocial.classList.add('social-subtitle');
  var linksContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'links-container'
  });
  var fb = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_fb_svg__WEBPACK_IMPORTED_MODULE_2__,
    alt: 'facebook'
  });
  var tw = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_tw_svg__WEBPACK_IMPORTED_MODULE_3__,
    alt: 'twitter'
  });
  var linked = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_in_svg__WEBPACK_IMPORTED_MODULE_4__,
    alt: 'linkedin'
  });
  var facebook = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'facebook'
  });
  facebook.append(fb);
  var twitter = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'twitter'
  });
  twitter.append(tw);
  var linkedin = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'linkedin'
  });
  linkedin.append(linked);
  linksContainer.append(facebook, twitter, linkedin);
  feedbackSocial.append(titleSocial, info, subtitleSocial, linksContainer);
  return feedbackSocial;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUZvQixDQUFSLENBQTFCOztBQVVBLGtCQUFBeUIsUUFBUSxDQUFDYSxJQUFULEVBQWN6QyxNQUFkLHVCQUF3QnFDLE9BQXhCOztBQUNBVCxRQUFRLENBQUNjLElBQVQsQ0FBYzFDLE1BQWQsQ0FBcUJ3QyxJQUFyQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWVkYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWRiYWNrU29jaWFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uL3Njc3MvYmFzZS5zY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcz8yNGJkIiwid2VicGFjazovLy8uL3Njc3MvYmFzZS5zY3NzPzI1NTMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3ltYXBzL2Rpc3QveW1hcHMuZXNtLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtGZWVkYmFja1NvY2lhbH0gZnJvbSBcIi4vRmVlZGJhY2tTb2NpYWxcIjtcclxuaW1wb3J0IHtGZWVkYmFja0Zvcm19IGZyb20gXCIuL0ZlZWRiYWNrRm9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtjbGFzczogJ3RpdGxlJywgaW5uZXJIVE1MOiAnR2V0IGluIHRvdWNoJ30pO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50KCdwJywge1xyXG4gICAgICAgIGNsYXNzOiAnc3VidGl0bGUnLFxyXG4gICAgICAgIGlubmVySFRNTDogJ1dlIGFyZSBhbHdheXMgaGFwcHkgdG8gbWFrZSB2YWx1YWJsZSBuZXcgY29udGFjdHMuJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7XHJcbiAgICAgICAgY2xhc3M6ICdmZWVkYmFjaycsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgRmVlZGJhY2tGb3JtKFt0aXRsZSwgc3VidGl0bGVdKSxcclxuICAgICAgICAgICAgRmVlZGJhY2tTb2NpYWwoKVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBpc1ZhbGlkRW1haWx9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuY29uc3QgTElNSVQgPSAxMDA7XHJcbmV4cG9ydCBjb25zdCBGZWVkYmFja0Zvcm0gPSAoY2hpbGRyZW4pID0+IHtcclxuICAgIGNvbnN0IG5hbWUgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICdpbnB1dCcsXHJcbiAgICAgICAge3R5cGU6ICd0ZXh0JywgY2xhc3M6ICdpbnB1dCcsIGlkOiAnbmFtZScsIG5hbWU6ICduYW1lJywgcGxhY2Vob2xkZXI6ICdKb2huIERvZSd9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAnbmFtZScsIGlubmVySFRNTDogJ05hbWUnLCBjbGFzczogJ2xhYmVsJ30pO1xyXG4gICAgY29uc3QgbmFtZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICBjbGFzczogJ2lucHV0LWNvbnRhaW5lcicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIG5hbWVMYWJlbCxcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgIHt0eXBlOiAnZW1haWwnLCBjbGFzczogJ2lucHV0JywgaWQ6ICdlbWFpbCcsIG5hbWU6ICdlbWFpbCcsIHBsYWNlaG9sZGVyOiAnam9obi5kb2VAZXhhbXBsZS5jb20nfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICdlbWFpbCcsIGlubmVySFRNTDogJ0VtYWlsJywgY2xhc3M6ICdsYWJlbCd9KTtcclxuICAgIGNvbnN0IGVtYWlsQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnaW5wdXQtY29udGFpbmVyJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgZW1haWxMYWJlbCxcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZ1bGxuYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnZnVsbG5hbWUtY29udGFpbmVyJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgbmFtZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgZW1haWxDb250YWluZXJcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdIaSB0aGVyZSEgTXkgbmFtZSBpcyBKb2huLCBJIGhhdmUgYSBxdWVzdGlvbiBhYm91dCdcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsID0gY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAnbWVzc2FnZScsIGlubmVySFRNTDogJ01lc3NhZ2UnLCBjbGFzczogJ2xhYmVsJ30pO1xyXG4gICAgY29uc3QgbWVzc2FnZUxpbmUgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICdzcGFuJyxcclxuICAgICAgICB7Y2xhc3M6ICdtZXNzYWdlLWxpbmUnLCBzdHlsZTogXCJ3aWR0aDogMHB4O1wifVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb3VudGVyID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnc3BhbicsXHJcbiAgICAgICAge2NsYXNzOiAnbWVzc2FnZS1jb3VudGVyJywgaW5uZXJIVE1MOiBgMC8ke0xJTUlUfWB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICBjbGFzczogJ2lucHV0LWNvbnRhaW5lcicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIG1lc3NhZ2VMYWJlbCxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgbWVzc2FnZUxpbmUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudGVyXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICB7dHlwZTogJ3N1Ym1pdCcsIGNsYXNzOiAnYnRuJywgaW5uZXJIVE1MOiAnU2VuZCd9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBbbmFtZSwgZW1haWwsIG1lc3NhZ2VdO1xyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IGlucHV0SGFuZGxlcihlLCBpbnB1dCwgaW5wdXRzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmZWVkYmFja0Zvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywge1xyXG4gICAgICAgIGNsYXNzOiAnZmVlZGJhY2stZm9ybScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgLi4uY2hpbGRyZW4sIGZ1bGxuYW1lQ29udGFpbmVyLCBtZXNzYWdlQ29udGFpbmVyLCBzdWJtaXRcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGZlZWRiYWNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gc3VibWl0SGFuZGxlcihlLCBmZWVkYmFja0Zvcm0sIGlucHV0cykpO1xyXG5cclxuICAgIHJldHVybiBmZWVkYmFja0Zvcm07XHJcbn1cclxuXHJcblxyXG5jb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgaW5wdXQsIFtuYW1lLCBlbWFpbCwgbWVzc2FnZV0pID0+IHtcclxuICAgIGxldCB0ZXh0TGVuZ3RoID0gZS50YXJnZXQudmFsdWUubGVuZ3RoO1xyXG4gICAgc3dpdGNoIChpbnB1dC5pZCkge1xyXG4gICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICB0ZXh0TGVuZ3RoICYmIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgdGV4dExlbmd0aCAmJiBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgICAgIGlmICh0ZXh0TGVuZ3RoID49IExJTUlUKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnZhbHVlID0gbWVzc2FnZS52YWx1ZS5zbGljZSgwLCBMSU1JVCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0TGVuZ3RoID0gTElNSVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRleHRMZW5ndGggPCBMSU1JVCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMaW5lID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWxpbmUnKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUNvdW50ZXIgPSBtZXNzYWdlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY291bnRlcicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlTGluZS5zdHlsZS53aWR0aCA9IGAke3RleHRMZW5ndGh9JWA7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudGVyLmlubmVySFRNTCA9IGAke3RleHRMZW5ndGh9LyR7TElNSVR9YDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJtaXRIYW5kbGVyID0gKGUsIGZlZWRiYWNrRm9ybSwgW25hbWUsIGVtYWlsLCBtZXNzYWdlXSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZmVlZGJhY2tGb3JtKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRW1haWwodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdtZXNzYWdlJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc3QgdGhhbmtzID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICd0aGFua3MnLCBpbm5lckhUTUw6ICdUaGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2shJ30pO1xyXG4gICAgICAgIGZlZWRiYWNrRm9ybS5yZXBsYWNlV2l0aCh0aGFua3MpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IGluZm9JY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvaW5mby5zdmdcIjtcclxuaW1wb3J0IGZiSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2ZiLnN2Z1wiO1xyXG5pbXBvcnQgdHdJY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvdHcuc3ZnXCI7XHJcbmltcG9ydCBpbkljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9pbi5zdmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGZWVkYmFja1NvY2lhbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZlZWRiYWNrU29jaWFsID0gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7Y2xhc3M6ICdmZWVkYmFjay1zb2NpYWwnfSk7XHJcbiAgICBjb25zdCB0aXRsZVNvY2lhbCA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywge2NsYXNzOiAndGl0bGUnLCBpbm5lckhUTUw6ICdDb250YWN0IGluZm9ybWF0aW9uJ30pO1xyXG4gICAgdGl0bGVTb2NpYWwuY2xhc3NMaXN0LmFkZCgnc29jaWFsLXRpdGxlJyk7XHJcbiAgICBjb25zdCBpbmZvID0gY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogaW5mb0ljb24sIGFsdDogJ2luZm8nLCBjbGFzczogJ2luZm8nfSk7XHJcbiAgICBjb25zdCBzdWJ0aXRsZVNvY2lhbCA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7XHJcbiAgICAgICAgY2xhc3M6ICdzdWJ0aXRsZScsXHJcbiAgICAgICAgaW5uZXJIVE1MOiAnQ2xpY2sgdG8gdmlldydcclxuICAgIH0pO1xyXG4gICAgc3VidGl0bGVTb2NpYWwuY2xhc3NMaXN0LmFkZCgnc29jaWFsLXN1YnRpdGxlJyk7XHJcblxyXG4gICAgY29uc3QgbGlua3NDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6ICdsaW5rcy1jb250YWluZXInfSk7XHJcbiAgICBjb25zdCBmYiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtzcmM6IGZiSWNvbiwgYWx0OiAnZmFjZWJvb2snfSk7XHJcbiAgICBjb25zdCB0dyA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtzcmM6IHR3SWNvbiwgYWx0OiAndHdpdHRlcid9KTtcclxuICAgIGNvbnN0IGxpbmtlZCA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtzcmM6IGluSWNvbiwgYWx0OiAnbGlua2VkaW4nfSk7XHJcbiAgICBjb25zdCBmYWNlYm9vayA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogJyMnLCBjbGFzczogJ2ZhY2Vib29rJ30pO1xyXG4gICAgZmFjZWJvb2suYXBwZW5kKGZiKTtcclxuICAgIGNvbnN0IHR3aXR0ZXIgPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICcjJywgY2xhc3M6ICd0d2l0dGVyJ30pO1xyXG4gICAgdHdpdHRlci5hcHBlbmQodHcpO1xyXG4gICAgY29uc3QgbGlua2VkaW4gPSBjcmVhdGVFbGVtZW50KCdhJywge2hyZWY6ICcjJywgY2xhc3M6ICdsaW5rZWRpbid9KTtcclxuICAgIGxpbmtlZGluLmFwcGVuZChsaW5rZWQpO1xyXG4gICAgbGlua3NDb250YWluZXIuYXBwZW5kKGZhY2Vib29rLCB0d2l0dGVyLCBsaW5rZWRpbik7XHJcblxyXG4gICAgZmVlZGJhY2tTb2NpYWwuYXBwZW5kKHRpdGxlU29jaWFsLCBpbmZvLCBzdWJ0aXRsZVNvY2lhbCwgbGlua3NDb250YWluZXIpO1xyXG4gICAgcmV0dXJuIGZlZWRiYWNrU29jaWFsO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaW5rID0gY3JlYXRlRWxlbWVudCgnYScsIHtcclxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9hcHAucnMuc2Nob29sL2N2LzIwNzdkYzM2LTkxZGUtNDNmOS04NDNiLTU1Mzk3NmRlYTAwYScsXHJcbiAgICAgICAgaW5uZXJIVE1MOiAnRmlyZGF2cyBBYmR1bGxvZXYnLFxyXG4gICAgICAgIGNsYXNzOiAnYXV0aG9yLWxpbmsnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRldmVsb3BlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2RldmVsb3BlcicsIGlubmVySFRNTDogJ0RldmVsb3BlZCBieSAnLCBjaGlsZHJlbjogbGlua30pO1xyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gY3JlYXRlRWxlbWVudCgncCcsIHtcclxuICAgICAgICBjbGFzczogJ2NvcHlyaWdodCcsXHJcbiAgICAgICAgaW5uZXJIVE1MOiBgQ29weXJpZ2h0ICZjb3B5OyAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQ29tcGFueSBMTENgXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCB7Y2xhc3M6ICdmb290ZXInLCBjaGlsZHJlbjogW2RldmVsb3BlciwgY29weXJpZ2h0XX0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50KCdoMScsIHsgY2xhc3M6ICdjb250YWluZXInLCBpbm5lckhUTUw6ICdDT05UQUNUJyB9KTtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoZWFkZXInLCB7XHJcbiAgICAgICAgY2xhc3M6ICdoZWFkZXInLFxyXG4gICAgICAgIGNoaWxkcmVuOiBoZWFkZXJcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHltYXBzIGZyb20gJ3ltYXBzJztcclxuaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwcyA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7IGNsYXNzOiAnbWFwcycsIGlkOiAnbWFwcycgfSk7XHJcbiAgICB5bWFwc1xyXG4gICAgICAgIC5sb2FkKClcclxuICAgICAgICAudGhlbihtYXBzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWFwID0gbmV3IG1hcHMuTWFwKCdtYXBzJywge1xyXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzQ5LCAzNy42MTldLC8vINCc0L7RgdC60LLQsFxyXG4gICAgICAgICAgICAgICAgem9vbTogMTUsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sczogW11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcmsgPSBuZXcgbWFwcy5QbGFjZW1hcmsoWzU1Ljc1MiwgMzcuNjE5XSk7XHJcbiAgICAgICAgICAgIG1hcC5nZW9PYmplY3RzLmFkZChtYXJrKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvYWQgWWFuZGV4IE1hcHMnLCBlcnJvcikpO1xyXG5cclxuICAgIHJldHVybiBtYXBzO1xyXG59IiwiaW1wb3J0IHtGZWVkYmFja30gZnJvbSBcIi4vRmVlZGJhY2tcIjtcclxuaW1wb3J0IHtNYXBzfSBmcm9tIFwiLi9NYXBzXCI7XHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IHtGb290ZXJ9IGZyb20gXCIuL0Zvb3RlclwiO1xyXG5cclxuZXhwb3J0IHtGZWVkYmFjaywgTWFwcywgSGVhZGVyLCBGb290ZXJ9OyIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgYXJncykgPT4ge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGlmIChhcmdzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYXJncykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXJnc1trZXldKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnY2hpbGRyZW4nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmdzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoLi4uYXJnc1trZXldKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmQoYXJnc1trZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBhcmdzW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzVmFsaWRFbWFpbCA9IGVtYWlsID0+IHtcclxuICAgIGNvbnN0IHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICMwOGIyZGI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHggMDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuI21hcHMge1xcbiAgaGVpZ2h0OiA0ODBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi55bWFwcy0yLTEtNzktbWFwLWNvcHlyaWdodHMtcHJvbW8sXFxuLnltYXBzLTItMS03OS1jb3B5cmlnaHRfX3dyYXAge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZmVlZGJhY2sge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgbWluLWhlaWdodDogMzkwcHg7XFxuICBtYXJnaW46IC0yODBweCBhdXRvIDA7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICMwOGIyZGI7XFxufVxcbi50aXRsZS5zb2NpYWwtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnN1YnRpdGxlIHtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnN1YnRpdGxlLnNvY2lhbC1zdWJ0aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIxcHg7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmVlZGJhY2stZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgd2lkdGg6IDcwJTtcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXG59XFxuXFxuLmZlZWRiYWNrLXNvY2lhbCB7XFxuICBiYWNrZ3JvdW5kOiAjMDhiMmRiO1xcbiAgcGFkZGluZzogMzBweCA1cHg7XFxuICB3aWR0aDogMzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uZnVsbG5hbWUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uZnVsbG5hbWUtY29udGFpbmVyIC5pbnB1dC1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxufVxcbi5mdWxsbmFtZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLmlucHV0OmZvY3VzLXZpc2libGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzA4YjJkYjtcXG59XFxuLmlucHV0LmVycm9yIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5tZXNzYWdlLWxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJhY2tncm91bmQ6ICMwOGIyZGI7XFxuICBtYXJnaW4tdG9wOiAtMjFweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLm1lc3NhZ2UtY291bnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6ICMwOGIyZGI7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idG4ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHBhZGRpbmc6IDdweCAyNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMwOGIyZGI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmZvIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4ubGlua3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubGlua3MtY29udGFpbmVyIGEge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxufVxcblxcbi50aGFua3Mge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDAgMjBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogIzA4YjJkYjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG4uYXV0aG9yLWxpbmsge1xcbiAgY29sb3I6ICMwOGIyZGI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHtcXG4gIC5mZWVkYmFjayB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gIH1cXG5cXG4gIC50aGFua3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mZWVkYmFjay1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmVlZGJhY2stc29jaWFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZnVsbG5hbWUtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mdWxsbmFtZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xcbiAgLmZlZWRiYWNrIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5pbmZvIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gIH1cXG5cXG4gIC5mb290ZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRldmVsb3BlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIH1cXG5cXG4gIC50aGFua3Mge1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLnRpdGxlLnNvY2lhbC10aXRsZSB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3Njc3MvYmFzZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0Usb0NBQUE7QUFERjs7QUFJQTtFQUNFLG1CQWJXO0VBY1gsV0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7O0VBRUUsd0JBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FwRFc7QUFtRGI7QUFHRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURKOztBQUtBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBRkY7QUFJRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQW5GVztFQW9GWCxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtBQUhGO0FBTUk7RUFDRSxpQkFBQTtBQUpOO0FBT0k7RUFDRSxnQkFBQTtBQUxOOztBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0U7RUFDRSxhQUFBO0FBUEo7QUFVRTtFQUNFLHlCQUFBO0FBUko7QUFXRTtFQUNFLHFCQUFBO0FBVEo7O0FBYUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkEzSVc7RUE0SVgsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFWRjs7QUFhQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQXJKVztFQXNKWCxlQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVkY7QUFZRTtFQUNFLG1CQXZLUztFQXdLVCxlQUFBO0VBQ0EsWUFBQTtBQVZKOztBQWNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFYRjs7QUFjQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFYRjtBQWFFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVhKOztBQWVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0F6TVc7RUEwTVgsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVpGOztBQWVBO0VBQ0UsY0EzTlc7RUE0TlgsaUJBQUE7RUFDQSxxQkFBQTtBQVpGOztBQWVBO0VBQ0U7SUFDRSx3QkFBQTtFQVpGOztFQWNBO0lBQ0UsV0FBQTtFQVhGOztFQWFBO0lBQ0UsV0FBQTtFQVZGOztFQVlBO0lBQ0UsV0FBQTtFQVRGOztFQVdBO0lBQ0Usc0JBQUE7RUFSRjtFQVVFO0lBQ0UseUJBQUE7SUFDQSwwQkFBQTtFQVJKO0FBQ0Y7QUFZQTtFQUNFO0lBQ0Usc0JBQUE7RUFWRjs7RUFZQTtJQUNFLG1CQUFBO0VBVEY7O0VBV0E7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBUkY7O0VBVUE7SUFDRSxrQkFBQTtFQVBGOztFQVNBO0lBQ0UsaUJBQUE7SUFDQSxTQUFBO0VBTkY7O0VBUUE7SUFDRSxnQkFBQTtFQUxGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGJhc2UtY29sb3I6ICMwOGIyZGI7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogJGJhc2UtY29sb3I7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21hcHMge1xcclxcbiAgaGVpZ2h0OiA0ODBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi55bWFwcy0yLTEtNzktbWFwLWNvcHlyaWdodHMtcHJvbW8sXFxyXFxuLnltYXBzLTItMS03OS1jb3B5cmlnaHRfX3dyYXAge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2sge1xcclxcbiAgd2lkdGg6IDgwMHB4O1xcclxcbiAgbWluLWhlaWdodDogMzkwcHg7XFxyXFxuICBtYXJnaW46IC0yODBweCBhdXRvIDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgY29sb3I6ICRiYXNlLWNvbG9yO1xcclxcblxcclxcbiAgJi5zb2NpYWwtdGl0bGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc3VidGl0bGUge1xcclxcbiAgY29sb3I6ICMyMjI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgJi5zb2NpYWwtc3VidGl0bGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjFweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmVlZGJhY2stZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgd2lkdGg6IDcwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLXNvY2lhbCB7XFxyXFxuICBiYWNrZ3JvdW5kOiAkYmFzZS1jb2xvcjtcXHJcXG4gIHBhZGRpbmc6IDMwcHggNXB4O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGxuYW1lLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICAmOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAmOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYXNlLWNvbG9yO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5lcnJvciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmxhYmVsIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGNvbG9yOiAjMjIyO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLWxpbmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQ6ICRiYXNlLWNvbG9yO1xcclxcbiAgbWFyZ2luLXRvcDogLTIxcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLWNvdW50ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gIHRleHQtYWxpZ246IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgcGFkZGluZzogN3B4IDI1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogJGJhc2UtY29sb3I7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50aGFua3Mge1xcclxcbiAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBtYXJnaW46IDAgMjBweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBjb2xvcjogJGJhc2UtY29sb3I7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBjb2xvcjogIzIyMjtcXHJcXG59XFxyXFxuXFxyXFxuLmF1dGhvci1saW5rIHtcXHJcXG4gIGNvbG9yOiAkYmFzZS1jb2xvcjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xcclxcbiAgLmZlZWRiYWNrIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcclxcbiAgfVxcclxcbiAgLnRoYW5rcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmZlZWRiYWNrLWZvcm0ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5mZWVkYmFjay1zb2NpYWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5mdWxsbmFtZS1jb250YWluZXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XFxyXFxuICAuZmVlZGJhY2sge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcbiAgLmluZm8ge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuZGV2ZWxvcGVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcbiAgLnRoYW5rcyB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICB9XFxyXFxuICAudGl0bGUuc29jaWFsLXRpdGxlIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgeW1hcHMkMSA9IHtcbiAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICB2YXIgc3JjID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnLy9hcGktbWFwcy55YW5kZXgucnUvMi4xLz9sYW5nPWVuX1JVJztcblxuICAgIHZhciBnZXROc1BhcmFtVmFsdWUgPSBmdW5jdGlvbiBnZXROc1BhcmFtVmFsdWUoKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IHNyYy5tYXRjaCgvW1xcXFw/Jl1ucz0oW14mI10qKS8pO1xuICAgICAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLnByb21pc2UpIHtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0RWxlbWVudC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHRFbGVtZW50Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbnMgPSBnZXROc1BhcmFtVmFsdWUoKTtcblxuICAgICAgICBpZiAobnMgJiYgbnMgIT09ICd5bWFwcycpIHtcbiAgICAgICAgICAoMCwgZXZhbCkoXCJ2YXIgeW1hcHMgPSBcIi5jb25jYXQobnMsIFwiO1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXR1cm4geW1hcHMucmVhZHkocmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgeW1hcHMkMTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4vc2Nzcy9iYXNlLnNjc3MnO1xyXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7SGVhZGVyLCBNYXBzLCBGZWVkYmFjaywgRm9vdGVyfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBoZWFkZXJzID0gW1xyXG4gICAgY3JlYXRlRWxlbWVudCgndGl0bGUnLCB7aW5uZXJIVE1MOiAnRmVlZGJhY2snfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KCdsaW5rJywge3JlbDogJ3Nob3J0Y3V0IGljb24nLCBocmVmOiAnaHR0cHM6Ly9ycy5zY2hvb2wvZmF2aWNvbi5pY28nfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KCdtZXRhJywge25hbWU6ICd2aWV3cG9ydCcsIGNvbnRlbnQ6ICd3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSd9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ21ldGEnLCB7bmFtZTogJ2Rlc2NyaXB0aW9uJywgY29udGVudDogJ0NvbnRhY3QgZm9ybSd9KSxcclxuICAgIGNyZWF0ZUVsZW1lbnQoJ21ldGEnLCB7bmFtZTogJ2tleXdvcmRzJywgY29udGVudDogJ2NvbnRhY3QsIGZlZWRiYWNrLCBmb3JtJ30pLFxyXG4gICAgY3JlYXRlRWxlbWVudCgnbWV0YScsIHtuYW1lOiAnYXV0aG9yJywgY29udGVudDogJ0ZpcmRhdnMgQWJkdWxsb2V2J30pLFxyXG4gICAgY3JlYXRlRWxlbWVudCgnbWV0YScsIHtuYW1lOiAnb2c6dGl0bGUnLCBjb250ZW50OiAnRmVlZGJhY2snfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KCdtZXRhJywge25hbWU6ICdvZzpkZXNjcmlwdGlvbicsIGNvbnRlbnQ6ICdDb250YWN0IGZvcm0nfSksXHJcbiAgICBjcmVhdGVFbGVtZW50KCdtZXRhJywge25hbWU6ICdvZzppbWFnZScsIGNvbnRlbnQ6ICdodHRwczovL3JzLnNjaG9vbC9mYXZpY29uLmljbyd9KSxcclxuXTtcclxuXHJcbmNvbnN0IHJvb3QgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XHJcbiAgICBpZDogJ3Jvb3QnLFxyXG4gICAgY2hpbGRyZW46IFtcclxuICAgICAgICBIZWFkZXIoKSxcclxuICAgICAgICBNYXBzKCksXHJcbiAgICAgICAgRmVlZGJhY2soKSxcclxuICAgICAgICBGb290ZXIoKSxcclxuICAgIF1cclxufSk7XHJcblxyXG5kb2N1bWVudC5oZWFkLmFwcGVuZCguLi5oZWFkZXJzKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7Il0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJGZWVkYmFja1NvY2lhbCIsIkZlZWRiYWNrRm9ybSIsIkZlZWRiYWNrIiwidGl0bGUiLCJpbm5lckhUTUwiLCJzdWJ0aXRsZSIsImNoaWxkcmVuIiwiaXNWYWxpZEVtYWlsIiwiTElNSVQiLCJuYW1lIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJuYW1lTGFiZWwiLCJuYW1lQ29udGFpbmVyIiwiZW1haWwiLCJlbWFpbExhYmVsIiwiZW1haWxDb250YWluZXIiLCJmdWxsbmFtZUNvbnRhaW5lciIsIm1lc3NhZ2UiLCJtZXNzYWdlTGFiZWwiLCJtZXNzYWdlTGluZSIsInN0eWxlIiwibWVzc2FnZUNvdW50ZXIiLCJtZXNzYWdlQ29udGFpbmVyIiwic3VibWl0IiwiaW5wdXRzIiwiZm9yRWFjaCIsImlucHV0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJpbnB1dEhhbmRsZXIiLCJmZWVkYmFja0Zvcm0iLCJzdWJtaXRIYW5kbGVyIiwidGV4dExlbmd0aCIsInRhcmdldCIsInZhbHVlIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic2xpY2UiLCJwYXJlbnRFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIndpZHRoIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiZGF0YSIsImlzVmFsaWQiLCJlbnRyaWVzIiwia2V5IiwiYWRkIiwiY29uc29sZSIsImxvZyIsInRoYW5rcyIsInJlcGxhY2VXaXRoIiwiaW5mb0ljb24iLCJmYkljb24iLCJ0d0ljb24iLCJpbkljb24iLCJmZWVkYmFja1NvY2lhbCIsInRpdGxlU29jaWFsIiwiaW5mbyIsInNyYyIsImFsdCIsInN1YnRpdGxlU29jaWFsIiwibGlua3NDb250YWluZXIiLCJmYiIsInR3IiwibGlua2VkIiwiZmFjZWJvb2siLCJocmVmIiwiYXBwZW5kIiwidHdpdHRlciIsImxpbmtlZGluIiwiRm9vdGVyIiwibGluayIsImRldmVsb3BlciIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkhlYWRlciIsImhlYWRlciIsInltYXBzIiwiTWFwcyIsIm1hcHMiLCJsb2FkIiwidGhlbiIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsIm1hcmsiLCJQbGFjZW1hcmsiLCJnZW9PYmplY3RzIiwiZXJyb3IiLCJ0YWciLCJhcmdzIiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0Iiwia2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiaGVhZGVycyIsInJlbCIsImNvbnRlbnQiLCJyb290IiwiaGVhZCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9