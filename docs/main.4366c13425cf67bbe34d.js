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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _FeedbackSocial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeedbackSocial */ "./components/FeedbackSocial.js");
/* harmony import */ var _FeedbackForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedbackForm */ "./components/FeedbackForm.js");



var Feedback = function Feedback() {
  var feedbackSection = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', {
    "class": 'feedback-section'
  });
  var title = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
    "class": 'title',
    innerHTML: 'Get in touch'
  });
  var subtitle = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'subtitle',
    innerHTML: 'We are always happy to make valuable new contacts.'
  });
  var feedbackForm = (0,_FeedbackForm__WEBPACK_IMPORTED_MODULE_2__.FeedbackForm)([title, subtitle]);
  var feedbackSocial = (0,_FeedbackSocial__WEBPACK_IMPORTED_MODULE_1__.FeedbackSocial)();
  feedbackSection.append(feedbackForm, feedbackSocial);
  return feedbackSection;
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
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


var LIMIT = 50;
var FeedbackForm = function FeedbackForm(children) {
  var name = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
    type: 'text',
    "class": 'input',
    id: 'name',
    name: 'name',
    placeholder: 'John Doe'
  });
  var nameContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'input-container',
    children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
      "for": 'name',
      innerHTML: 'Name',
      "class": 'label'
    }), name]
  });
  var email = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
    type: 'email',
    "class": 'input',
    id: 'email',
    name: 'email',
    placeholder: 'john.doe@example.com'
  });
  var emailContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'input-container',
    children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
      "for": 'email',
      innerHTML: 'Email',
      "class": 'label'
    }), email]
  });
  var fullnameContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'fullname-container',
    children: [nameContainer, emailContainer]
  });
  var message = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
    id: 'message',
    "class": 'input',
    name: 'message',
    placeholder: 'Hi there! My name is John, I have a question about'
  });
  var messageLine = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
    "class": 'message-line',
    style: "width: 0px;"
  });
  var messageCounter = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('span', {
    "class": 'message-counter',
    innerHTML: "0/".concat(LIMIT)
  });
  var messageContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'input-container',
    children: [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
      "for": 'message',
      innerHTML: 'Message',
      "class": 'label'
    }), message, messageLine, messageCounter]
  });
  var submit = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
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
  var feedbackForm = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('form', {
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

  var messageLength = e.target.value.length;

  switch (input.id) {
    case 'name':
      messageLength && name.classList.remove('error');
      break;

    case 'email':
      messageLength && email.classList.remove('error');
      break;

    case 'message':
      if (messageLength >= LIMIT) {
        message.value = message.value.slice(0, LIMIT);
        messageLength = LIMIT;
      }

      if (messageLength < LIMIT) {
        message.classList.remove('error');
      }

      var messageLine = message.parentElement.querySelector('.message-line');
      var messageCounter = message.parentElement.querySelector('.message-counter');
      messageLine.style.width = "".concat(messageLength * 2, "%");
      messageCounter.innerHTML = "".concat(messageLength, "/").concat(LIMIT);
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
          if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.isValidEmail)(value)) {
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
    var thanks = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* harmony import */ var _assets_icons_info_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/info.svg */ "./assets/icons/info.svg");
/* harmony import */ var _assets_icons_fb_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/fb.svg */ "./assets/icons/fb.svg");
/* harmony import */ var _assets_icons_tw_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/tw.svg */ "./assets/icons/tw.svg");
/* harmony import */ var _assets_icons_in_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/in.svg */ "./assets/icons/in.svg");





var FeedbackSocial = function FeedbackSocial() {
  var feedbackSocial = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'feedback-social'
  });
  var titleSocial = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', {
    "class": 'title',
    innerHTML: 'Contact information'
  });
  titleSocial.classList.add('social-title');
  var info = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_info_svg__WEBPACK_IMPORTED_MODULE_1__,
    alt: 'info',
    "class": 'info'
  });
  var subtitleSocial = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'subtitle',
    innerHTML: 'Click to view'
  });
  subtitleSocial.classList.add('social-subtitle');
  var linksContainer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'links-container'
  });
  var fb = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_fb_svg__WEBPACK_IMPORTED_MODULE_2__,
    alt: 'facebook'
  });
  var tw = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_tw_svg__WEBPACK_IMPORTED_MODULE_3__,
    alt: 'twitter'
  });
  var linked = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('img', {
    src: _assets_icons_in_svg__WEBPACK_IMPORTED_MODULE_4__,
    alt: 'linkedin'
  });
  var facebook = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'facebook'
  });
  facebook.append(fb);
  var twitter = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: '#',
    "class": 'twitter'
  });
  twitter.append(tw);
  var linkedin = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");

var Footer = function Footer() {
  var footer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('footer', {
    "class": 'footer'
  });
  var link = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', {
    href: 'https://app.rs.school/cv/2077dc36-91de-43f9-843b-553976dea00a',
    innerHTML: 'Firdavs Abdulloev',
    "class": 'author-link'
  });
  var developer = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {
    "class": 'developer',
    innerHTML: 'Developed by '
  });
  developer.append(link);
  var copyright = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', {
    "class": 'copyright',
    innerHTML: "Copyright &copy; ".concat(new Date().getFullYear(), " Company LLC")
  });
  footer.append(developer, copyright);
  return footer;
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");

var Header = function Header() {
  var header = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('header', {
    "class": 'header'
  });
  var heading = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', {
    "class": 'container',
    innerHTML: 'CONTACT'
  });
  header.append(heading);
  return header;
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");


var Maps = function Maps() {
  var maps = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', {
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

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
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
        console.log(args[key], element);

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.header {\n  background: #8787ed;\n  color: #fff;\n  padding: 20px 0;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.container {\n  max-width: 1140px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n\n#maps {\n  height: 480px;\n  overflow: hidden;\n}\n\n.ymaps-2-1-79-map-copyrights-promo,\n.ymaps-2-1-79-copyright__wrap {\n  display: none !important;\n}\n\n.feedback-section {\n  width: 800px;\n  min-height: 390px;\n  margin: -280px auto 0;\n  background: white;\n  position: relative;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.title {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 20px 0;\n  text-transform: uppercase;\n  color: #8787ed;\n}\n.title.social-title {\n  color: white;\n  font-size: 28px;\n  line-height: 1.5;\n  text-align: center;\n}\n\n.subtitle {\n  color: #222;\n  margin-bottom: 20px;\n}\n.subtitle.social-subtitle {\n  color: white;\n  font-size: 21px;\n  max-width: 100px;\n  text-align: center;\n}\n\n.feedback-form {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 70%;\n  padding: 30px 40px;\n}\n\n.feedback-social {\n  background: #8787ed;\n  padding: 30px 5px;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.fullname-container {\n  width: 100%;\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: space-between;\n}\n.fullname-container .input-container:first-child {\n  margin-right: 5px;\n}\n.fullname-container .input-container:last-child {\n  margin-left: 5px;\n}\n\n.input {\n  width: 100%;\n  height: 40px;\n  border: 1px solid #ccc;\n  padding: 0 10px;\n  margin-bottom: 20px;\n}\n.input:focus {\n  outline: none;\n}\n.input:focus-visible {\n  border: 1px solid #8787ed;\n}\n.input.error {\n  border: 1px solid red;\n}\n\n.label {\n  font-size: 13px;\n  color: #222;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.message-line {\n  display: block;\n  height: 3px;\n  background: #8787ed;\n  margin-top: -21px;\n  position: relative;\n  z-index: 100;\n}\n\n.message-counter {\n  display: block;\n  font-weight: bold;\n  font-size: 13px;\n  color: #8787ed;\n  text-align: end;\n}\n\n.input-container {\n  width: 100%;\n}\n\n.btn {\n  height: 40px;\n  border: 1px solid #ccc;\n  padding: 7px 25px;\n  border-radius: 20px;\n  background: white;\n  margin-left: 15px;\n  margin-top: 15px;\n}\n.btn:hover {\n  background: #8787ed;\n  cursor: pointer;\n  color: white;\n}\n\n.info {\n  width: 50px;\n  height: 50px;\n}\n\n.links-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.links-container a {\n  border: 2px solid white;\n  border-radius: 50%;\n  padding: 10px;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 10px;\n}\n\n.thanks {\n  font-size: 34px;\n  font-weight: bold;\n  margin: 0 20px;\n  text-transform: uppercase;\n  color: #8787ed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-size: 13px;\n  color: #222;\n}\n\n.author-link {\n  color: #8787ed;\n  font-weight: bold;\n  text-decoration: none;\n}\n\n@media screen and (max-width: 768px) {\n  .feedback-section {\n    width: calc(100% - 40px);\n  }\n\n  .thanks {\n    width: 100%;\n  }\n\n  .feedback-form {\n    width: 100%;\n  }\n\n  .feedback-social {\n    width: 100%;\n  }\n\n  .fullname-container {\n    flex-direction: column;\n  }\n  .fullname-container .input-container {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n}\n@media screen and (max-width: 578px) {\n  .feedback-section {\n    flex-direction: column;\n  }\n\n  .info {\n    margin-bottom: 15px;\n  }\n\n  .footer {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .developer {\n    margin-bottom: 5px;\n  }\n\n  .thanks {\n    min-height: 200px;\n    margin: 0;\n  }\n\n  .title.social-title {\n    max-width: 300px;\n  }\n}", "",{"version":3,"sources":["webpack://./scss/base.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AACJ;;AACA;EACI,oCAAA;AAEJ;;AAAA;EACI,mBAAA;EACA,WAAA;EACA,eAAA;EACA,wCAAA;AAGJ;;AAAA;EACI,iBAAA;EACA,cAAA;EACA,eAAA;AAGJ;;AAAA;EACI,aAAA;EACA,gBAAA;AAGJ;;AAAA;;EAEI,wBAAA;AAGJ;;AAAA;EACI,YAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,uCAAA;AAGJ;;AAAA;EACI,eAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,cAAA;AAGJ;AADI;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAGR;;AACA;EACI,WAAA;EACA,mBAAA;AAEJ;AAAI;EACI,YAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AAER;;AAEA;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,UAAA;EACA,kBAAA;AACJ;;AAEA;EACI,mBAAA;EACA,iBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;AACJ;;AAEA;EACI,WAAA;EACA,aAAA;EACA,cAAA;EACA,8BAAA;AACJ;AAEQ;EACI,iBAAA;AAAZ;AAEQ;EACI,gBAAA;AAAZ;;AAKA;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,eAAA;EACA,mBAAA;AAFJ;AAII;EACI,aAAA;AAFR;AAII;EACI,yBAAA;AAFR;AAII;EACI,qBAAA;AAFR;;AAMA;EACI,eAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAHJ;;AAMA;EACI,cAAA;EACA,WAAA;EACA,mBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;AAHJ;;AAMA;EACI,cAAA;EACA,iBAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;AAHJ;;AAMA;EACI,WAAA;AAHJ;;AAMA;EACI,YAAA;EACA,sBAAA;EACA,iBAAA;EACA,mBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;AAHJ;AAKI;EACI,mBAAA;EACA,eAAA;EACA,YAAA;AAHR;;AAOA;EACI,WAAA;EACA,YAAA;AAJJ;;AAOA;EACI,aAAA;EACA,uBAAA;EACA,WAAA;AAJJ;AAKI;EACI,uBAAA;EACA,kBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;AAHR;;AAOA;EACI,eAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;AAJJ;;AAOA;EACI,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;AAJJ;;AAOA;EACI,cAAA;EACA,iBAAA;EACA,qBAAA;AAJJ;;AAOA;EACI;IACI,wBAAA;EAJN;;EAME;IACI,WAAA;EAHN;;EAKE;IACI,WAAA;EAFN;;EAIE;IACI,WAAA;EADN;;EAGE;IACI,sBAAA;EAAN;EACM;IACI,yBAAA;IACA,0BAAA;EACV;AACF;AAGA;EACI;IACI,sBAAA;EADN;;EAGE;IACI,mBAAA;EAAN;;EAEE;IACI,sBAAA;IACA,mBAAA;EACN;;EACE;IACI,kBAAA;EAEN;;EAAE;IACI,iBAAA;IACA,SAAA;EAGN;;EADE;IACI,gBAAA;EAIN;AACF","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody{\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n.header {\r\n    background: #8787ed;\r\n    color: #fff;\r\n    padding: 20px 0;\r\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.container {\r\n    max-width: 1140px;\r\n    margin: 0 auto;\r\n    padding: 0 20px;\r\n}\r\n\r\n#maps {\r\n    height: 480px;\r\n    overflow: hidden;\r\n}\r\n\r\n.ymaps-2-1-79-map-copyrights-promo,\r\n.ymaps-2-1-79-copyright__wrap {\r\n    display: none!important;\r\n}\r\n\r\n.feedback-section {\r\n    width: 800px;\r\n    min-height: 390px;\r\n    margin: -280px auto 0;\r\n    background: white;\r\n    position: relative;\r\n    z-index: 10;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.title {\r\n    font-size: 34px;\r\n    font-weight: bold;\r\n    margin: 20px 0;\r\n    text-transform: uppercase;\r\n    color: #8787ed;\r\n\r\n    &.social-title {\r\n        color: white;\r\n        font-size: 28px;\r\n        line-height: 1.5;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.subtitle {\r\n    color: #222;\r\n    margin-bottom: 20px;\r\n\r\n    &.social-subtitle {\r\n        color: white;\r\n        font-size: 21px;\r\n        max-width: 100px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.feedback-form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    width: 70%;\r\n    padding: 30px 40px;\r\n}\r\n\r\n.feedback-social {\r\n    background: #8787ed;\r\n    padding: 30px 5px;\r\n    width: 30%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.fullname-container{\r\n    width: 100%;\r\n    display: flex;\r\n    flex: 1 1 auto;\r\n    justify-content: space-between;\r\n\r\n    .input-container {\r\n        &:first-child {\r\n            margin-right: 5px;\r\n        }\r\n        &:last-child {\r\n            margin-left: 5px;\r\n        }\r\n    }\r\n}\r\n\r\n.input {\r\n    width: 100%;\r\n    height: 40px;\r\n    border: 1px solid #ccc;\r\n    padding: 0 10px;\r\n    margin-bottom: 20px;\r\n\r\n    &:focus {\r\n        outline: none;\r\n    }\r\n    &:focus-visible {\r\n        border: 1px solid #8787ed;\r\n    }\r\n    &.error {\r\n        border: 1px solid red;\r\n    }\r\n}\r\n\r\n.label {\r\n    font-size: 13px;\r\n    color: #222;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.message-line {\r\n    display: block;\r\n    height: 3px;\r\n    background: #8787ed;\r\n    margin-top: -21px;\r\n    position: relative;\r\n    z-index: 100;\r\n}\r\n\r\n.message-counter {\r\n    display: block;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    color: #8787ed;\r\n    text-align: end;\r\n}\r\n\r\n.input-container{\r\n    width: 100%;\r\n}\r\n\r\n.btn {\r\n    height: 40px;\r\n    border: 1px solid #ccc;\r\n    padding: 7px 25px;\r\n    border-radius: 20px;\r\n    background: white;\r\n    margin-left: 15px;\r\n    margin-top: 15px;\r\n\r\n    &:hover {\r\n        background: #8787ed;\r\n        cursor: pointer;\r\n        color: white;\r\n    }\r\n}\r\n\r\n.info {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.links-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    a{\r\n        border: 2px solid white;\r\n        border-radius: 50%;\r\n        padding: 10px;\r\n        width: 40px;\r\n        height: 40px;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0 10px;\r\n    }\r\n}\r\n\r\n.thanks {\r\n    font-size: 34px;\r\n    font-weight: bold;\r\n    margin:0 20px;\r\n    text-transform: uppercase;\r\n    color: #8787ed;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.footer{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    padding: 10px 20px;\r\n    font-size: 13px;\r\n    color: #222;\r\n}\r\n\r\n.author-link {\r\n    color: #8787ed;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .feedback-section {\r\n        width: calc(100% - 40px);\r\n    }\r\n    .thanks {\r\n        width: 100%;\r\n    }\r\n    .feedback-form {\r\n        width: 100%;\r\n    }\r\n    .feedback-social {\r\n        width: 100%;\r\n    }\r\n    .fullname-container{\r\n        flex-direction: column;\r\n        .input-container {\r\n            margin-left: 0!important;\r\n            margin-right: 0!important;\r\n        }\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 578px) {\r\n    .feedback-section {\r\n        flex-direction: column;\r\n    }\r\n    .info {\r\n        margin-bottom: 15px;\r\n    }\r\n    .footer{\r\n        flex-direction: column;\r\n        align-items: center;\r\n    }\r\n    .developer {\r\n        margin-bottom: 5px;\r\n    }\r\n    .thanks {\r\n        min-height: 200px;\r\n        margin: 0;\r\n    }\r\n    .title.social-title {\r\n        max-width: 300px;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./utils/utils.js");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize.css/normalize.css */ "../node_modules/normalize.css/normalize.css");
/* harmony import */ var _scss_base_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/base.scss */ "./scss/base.scss");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./components/Header.js");
/* harmony import */ var _components_Maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Maps */ "./components/Maps.js");
/* harmony import */ var _components_Feedback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Feedback */ "./components/Feedback.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer */ "./components/Footer.js");
var _document$head;

 // styles


 // components





var headElements = [(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.createElement)('link', {
  rel: 'shortcut icon',
  href: 'https://rs.school/favicon.ico'
})];
var components = [(0,_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header)(), (0,_components_Maps__WEBPACK_IMPORTED_MODULE_4__.Maps)(), (0,_components_Feedback__WEBPACK_IMPORTED_MODULE_5__.Feedback)(), (0,_components_Footer__WEBPACK_IMPORTED_MODULE_6__.Footer)()];
var root = document.createElement('div');
root.id = 'root';
root.append.apply(root, components);

(_document$head = document.head).append.apply(_document$head, headElements);

document.body.appendChild(root);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sc0JBQXNCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxN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QUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxX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YUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NkQTs7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUMsWUFBWSxHQUFHLENBQ2pCOUcsMkRBQWEsQ0FBQyxNQUFELEVBQVM7RUFBQytHLEdBQUcsRUFBRSxlQUFOO0VBQXVCeEMsSUFBSSxFQUFFO0FBQTdCLENBQVQsQ0FESSxDQUFyQjtBQUlBLElBQU15QyxVQUFVLEdBQUcsQ0FDZi9CLDBEQUFNLEVBRFMsRUFFZkksc0RBQUksRUFGVyxFQUdmakYsOERBQVEsRUFITyxFQUlmc0UsMERBQU0sRUFKUyxDQUFuQjtBQU9BLElBQU11QyxJQUFJLEdBQUdaLFFBQVEsQ0FBQ3JHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBaUgsSUFBSSxDQUFDakcsRUFBTCxHQUFVLE1BQVY7QUFDQWlHLElBQUksQ0FBQ3RHLE1BQUwsT0FBQXNHLElBQUksRUFBV0QsVUFBWCxDQUFKOztBQUVBLGtCQUFBWCxRQUFRLENBQUNhLElBQVQsRUFBY3ZHLE1BQWQsdUJBQXdCbUcsWUFBeEI7O0FBQ0FULFFBQVEsQ0FBQ2MsSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxJQUExQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWVkYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWRiYWNrRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZlZWRiYWNrU29jaWFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly8vLi9zY3NzL2Jhc2Uuc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3M/MjRiZCIsIndlYnBhY2s6Ly8vLi9zY3NzL2Jhc2Uuc2Nzcz8yNTUzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy95bWFwcy9kaXN0L3ltYXBzLmVzbS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRWxlbWVudCwgaXNWYWxpZEVtYWlsfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHtGZWVkYmFja1NvY2lhbH0gZnJvbSBcIi4vRmVlZGJhY2tTb2NpYWxcIjtcclxuaW1wb3J0IHtGZWVkYmFja0Zvcm19IGZyb20gXCIuL0ZlZWRiYWNrRm9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZmVlZGJhY2tTZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIHtjbGFzczogJ2ZlZWRiYWNrLXNlY3Rpb24nfSk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsIHtjbGFzczogJ3RpdGxlJywgaW5uZXJIVE1MOiAnR2V0IGluIHRvdWNoJ30pO1xyXG4gICAgY29uc3Qgc3VidGl0bGUgPSBjcmVhdGVFbGVtZW50KCdwJywge1xyXG4gICAgICAgIGNsYXNzOiAnc3VidGl0bGUnLFxyXG4gICAgICAgIGlubmVySFRNTDogJ1dlIGFyZSBhbHdheXMgaGFwcHkgdG8gbWFrZSB2YWx1YWJsZSBuZXcgY29udGFjdHMuJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBmZWVkYmFja0Zvcm0gPSBGZWVkYmFja0Zvcm0oW3RpdGxlLCBzdWJ0aXRsZV0pO1xyXG4gICAgY29uc3QgZmVlZGJhY2tTb2NpYWwgPSBGZWVkYmFja1NvY2lhbCgpO1xyXG5cclxuICAgIGZlZWRiYWNrU2VjdGlvbi5hcHBlbmQoZmVlZGJhY2tGb3JtLCBmZWVkYmFja1NvY2lhbCk7XHJcbiAgICByZXR1cm4gZmVlZGJhY2tTZWN0aW9uO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50LCBpc1ZhbGlkRW1haWx9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5cclxuY29uc3QgTElNSVQgPSA1MDtcclxuZXhwb3J0IGNvbnN0IEZlZWRiYWNrRm9ybSA9IChjaGlsZHJlbikgPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICAgJ2lucHV0JyxcclxuICAgICAgICB7dHlwZTogJ3RleHQnLCBjbGFzczogJ2lucHV0JywgaWQ6ICduYW1lJywgbmFtZTogJ25hbWUnLCBwbGFjZWhvbGRlcjogJ0pvaG4gRG9lJ31cclxuICAgICk7XHJcbiAgICBjb25zdCBuYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnaW5wdXQtY29udGFpbmVyJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgY3JlYXRlRWxlbWVudCgnbGFiZWwnLCB7Zm9yOiAnbmFtZScsIGlubmVySFRNTDogJ05hbWUnLCBjbGFzczogJ2xhYmVsJ30pLFxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICdpbnB1dCcsXHJcbiAgICAgICAge3R5cGU6ICdlbWFpbCcsIGNsYXNzOiAnaW5wdXQnLCBpZDogJ2VtYWlsJywgbmFtZTogJ2VtYWlsJywgcGxhY2Vob2xkZXI6ICdqb2huLmRvZUBleGFtcGxlLmNvbSd9XHJcbiAgICApO1xyXG4gICAgY29uc3QgZW1haWxDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XHJcbiAgICAgICAgY2xhc3M6ICdpbnB1dC1jb250YWluZXInLCBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KCdsYWJlbCcsIHtmb3I6ICdlbWFpbCcsIGlubmVySFRNTDogJ0VtYWlsJywgY2xhc3M6ICdsYWJlbCd9KSxcclxuICAgICAgICAgICAgZW1haWxcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZ1bGxuYW1lQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge1xyXG4gICAgICAgIGNsYXNzOiAnZnVsbG5hbWUtY29udGFpbmVyJywgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgbmFtZUNvbnRhaW5lcixcclxuICAgICAgICAgICAgZW1haWxDb250YWluZXJcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnaW5wdXQnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgY2xhc3M6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdtZXNzYWdlJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdIaSB0aGVyZSEgTXkgbmFtZSBpcyBKb2huLCBJIGhhdmUgYSBxdWVzdGlvbiBhYm91dCdcclxuICAgICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbWVzc2FnZUxpbmUgPSBjcmVhdGVFbGVtZW50KFxyXG4gICAgICAgICdzcGFuJyxcclxuICAgICAgICB7Y2xhc3M6ICdtZXNzYWdlLWxpbmUnLCBzdHlsZTogXCJ3aWR0aDogMHB4O1wifVxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb3VudGVyID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnc3BhbicsXHJcbiAgICAgICAge2NsYXNzOiAnbWVzc2FnZS1jb3VudGVyJywgaW5uZXJIVE1MOiBgMC8ke0xJTUlUfWB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcclxuICAgICAgICBjbGFzczogJ2lucHV0LWNvbnRhaW5lcicsIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoJ2xhYmVsJywge2ZvcjogJ21lc3NhZ2UnLCBpbm5lckhUTUw6ICdNZXNzYWdlJywgY2xhc3M6ICdsYWJlbCd9KSxcclxuICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgbWVzc2FnZUxpbmUsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb3VudGVyXHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc3VibWl0ID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgICAnYnV0dG9uJyxcclxuICAgICAgICB7dHlwZTogJ3N1Ym1pdCcsIGNsYXNzOiAnYnRuJywgaW5uZXJIVE1MOiAnU2VuZCd9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dHMgPSBbbmFtZSwgZW1haWwsIG1lc3NhZ2VdO1xyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IGlucHV0SGFuZGxlcihlLCBpbnB1dCwgaW5wdXRzKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBmZWVkYmFja0Zvcm0gPSBjcmVhdGVFbGVtZW50KCdmb3JtJywge1xyXG4gICAgICAgIGNsYXNzOiAnZmVlZGJhY2stZm9ybScsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgLi4uY2hpbGRyZW4sIGZ1bGxuYW1lQ29udGFpbmVyLCBtZXNzYWdlQ29udGFpbmVyLCBzdWJtaXRcclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGZlZWRiYWNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gc3VibWl0SGFuZGxlcihlLCBmZWVkYmFja0Zvcm0sIGlucHV0cykpO1xyXG5cclxuICAgIHJldHVybiBmZWVkYmFja0Zvcm07XHJcbn1cclxuXHJcblxyXG5jb25zdCBpbnB1dEhhbmRsZXIgPSAoZSwgaW5wdXQsIFtuYW1lLCBlbWFpbCwgbWVzc2FnZV0pID0+IHtcclxuICAgIGxldCBtZXNzYWdlTGVuZ3RoID0gZS50YXJnZXQudmFsdWUubGVuZ3RoO1xyXG4gICAgc3dpdGNoIChpbnB1dC5pZCkge1xyXG4gICAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgICAgICBtZXNzYWdlTGVuZ3RoICYmIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICAgICAgbWVzc2FnZUxlbmd0aCAmJiBlbWFpbC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlTGVuZ3RoID49IExJTUlUKSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLnZhbHVlID0gbWVzc2FnZS52YWx1ZS5zbGljZSgwLCBMSU1JVCk7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGVuZ3RoID0gTElNSVQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VMZW5ndGggPCBMSU1JVCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMaW5lID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLWxpbmUnKTtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUNvdW50ZXIgPSBtZXNzYWdlLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UtY291bnRlcicpO1xyXG4gICAgICAgICAgICBtZXNzYWdlTGluZS5zdHlsZS53aWR0aCA9IGAke21lc3NhZ2VMZW5ndGggKiAyfSVgO1xyXG4gICAgICAgICAgICBtZXNzYWdlQ291bnRlci5pbm5lckhUTUwgPSBgJHttZXNzYWdlTGVuZ3RofS8ke0xJTUlUfWA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3VibWl0SGFuZGxlciA9IChlLCBmZWVkYmFja0Zvcm0sIFtuYW1lLCBlbWFpbCwgbWVzc2FnZV0pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZlZWRiYWNrRm9ybSk7XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBmb3JtRGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPCAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdlbWFpbCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbWFpbCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHRoYW5rcyA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywge2NsYXNzOiAndGhhbmtzJywgaW5uZXJIVE1MOiAnVGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrISd9KTtcclxuICAgICAgICBmZWVkYmFja0Zvcm0ucmVwbGFjZVdpdGgodGhhbmtzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Y3JlYXRlRWxlbWVudH0gZnJvbSBcIi4uL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCBpbmZvSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL2luZm8uc3ZnXCI7XHJcbmltcG9ydCBmYkljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9mYi5zdmdcIjtcclxuaW1wb3J0IHR3SWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3R3LnN2Z1wiO1xyXG5pbXBvcnQgaW5JY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvaW4uc3ZnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmVlZGJhY2tTb2NpYWwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmZWVkYmFja1NvY2lhbCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2ZlZWRiYWNrLXNvY2lhbCd9KTtcclxuICAgIGNvbnN0IHRpdGxlU29jaWFsID0gY3JlYXRlRWxlbWVudCgnaDInLCB7Y2xhc3M6ICd0aXRsZScsIGlubmVySFRNTDogJ0NvbnRhY3QgaW5mb3JtYXRpb24nfSk7XHJcbiAgICB0aXRsZVNvY2lhbC5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtdGl0bGUnKTtcclxuICAgIGNvbnN0IGluZm8gPSBjcmVhdGVFbGVtZW50KCdpbWcnLCB7c3JjOiBpbmZvSWNvbiwgYWx0OiAnaW5mbycsIGNsYXNzOiAnaW5mbyd9KTtcclxuICAgIGNvbnN0IHN1YnRpdGxlU29jaWFsID0gY3JlYXRlRWxlbWVudCgncCcsIHtcclxuICAgICAgICBjbGFzczogJ3N1YnRpdGxlJyxcclxuICAgICAgICBpbm5lckhUTUw6ICdDbGljayB0byB2aWV3J1xyXG4gICAgfSk7XHJcbiAgICBzdWJ0aXRsZVNvY2lhbC5jbGFzc0xpc3QuYWRkKCdzb2NpYWwtc3VidGl0bGUnKTtcclxuXHJcbiAgICBjb25zdCBsaW5rc0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2xpbmtzLWNvbnRhaW5lcid9KTtcclxuICAgIGNvbnN0IGZiID0gY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogZmJJY29uLCBhbHQ6ICdmYWNlYm9vayd9KTtcclxuICAgIGNvbnN0IHR3ID0gY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogdHdJY29uLCBhbHQ6ICd0d2l0dGVyJ30pO1xyXG4gICAgY29uc3QgbGlua2VkID0gY3JlYXRlRWxlbWVudCgnaW1nJywge3NyYzogaW5JY29uLCBhbHQ6ICdsaW5rZWRpbid9KTtcclxuICAgIGNvbnN0IGZhY2Vib29rID0gY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiAnIycsIGNsYXNzOiAnZmFjZWJvb2snfSk7XHJcbiAgICBmYWNlYm9vay5hcHBlbmQoZmIpO1xyXG4gICAgY29uc3QgdHdpdHRlciA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogJyMnLCBjbGFzczogJ3R3aXR0ZXInfSk7XHJcbiAgICB0d2l0dGVyLmFwcGVuZCh0dyk7XHJcbiAgICBjb25zdCBsaW5rZWRpbiA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogJyMnLCBjbGFzczogJ2xpbmtlZGluJ30pO1xyXG4gICAgbGlua2VkaW4uYXBwZW5kKGxpbmtlZCk7XHJcbiAgICBsaW5rc0NvbnRhaW5lci5hcHBlbmQoZmFjZWJvb2ssIHR3aXR0ZXIsIGxpbmtlZGluKTtcclxuXHJcbiAgICBmZWVkYmFja1NvY2lhbC5hcHBlbmQodGl0bGVTb2NpYWwsIGluZm8sIHN1YnRpdGxlU29jaWFsLCBsaW5rc0NvbnRhaW5lcik7XHJcbiAgICByZXR1cm4gZmVlZGJhY2tTb2NpYWw7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIHtjbGFzczogJ2Zvb3Rlcid9KTtcclxuICAgIGNvbnN0IGxpbmsgPSBjcmVhdGVFbGVtZW50KCdhJywge1xyXG4gICAgICAgIGhyZWY6ICdodHRwczovL2FwcC5ycy5zY2hvb2wvY3YvMjA3N2RjMzYtOTFkZS00M2Y5LTg0M2ItNTUzOTc2ZGVhMDBhJyxcclxuICAgICAgICBpbm5lckhUTUw6ICdGaXJkYXZzIEFiZHVsbG9ldicsXHJcbiAgICAgICAgY2xhc3M6ICdhdXRob3ItbGluaydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGV2ZWxvcGVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiAnZGV2ZWxvcGVyJywgaW5uZXJIVE1MOiAnRGV2ZWxvcGVkIGJ5ICd9KTtcclxuICAgIGRldmVsb3Blci5hcHBlbmQobGluayk7XHJcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBjcmVhdGVFbGVtZW50KCdwJywge1xyXG4gICAgICAgIGNsYXNzOiAnY29weXJpZ2h0JyxcclxuICAgICAgICBpbm5lckhUTUw6IGBDb3B5cmlnaHQgJmNvcHk7ICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBDb21wYW55IExMQ2BcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBmb290ZXIuYXBwZW5kKGRldmVsb3BlciwgY29weXJpZ2h0KTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnR9IGZyb20gXCIuLi91dGlscy91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicsIHsgY2xhc3M6ICdoZWFkZXInIH0pO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUVsZW1lbnQoJ2gxJywgeyBjbGFzczogJ2NvbnRhaW5lcicsIGlubmVySFRNTDogJ0NPTlRBQ1QnIH0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZChoZWFkaW5nKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59IiwiaW1wb3J0IHltYXBzIGZyb20gJ3ltYXBzJztcclxuaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYXBzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwcyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3M6ICdtYXBzJywgaWQ6ICdtYXBzJyB9KTtcclxuICAgIHltYXBzXHJcbiAgICAgICAgLmxvYWQoKVxyXG4gICAgICAgIC50aGVuKG1hcHMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBuZXcgbWFwcy5NYXAoJ21hcHMnLCB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFs1NS43NDksIDM3LjYxOV0sLy8g0JzQvtGB0LrQstCwXHJcbiAgICAgICAgICAgICAgICB6b29tOiAxNSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgbWFyayA9IG5ldyBtYXBzLlBsYWNlbWFyayhbNTUuNzUyLCAzNy42MTldKTtcclxuICAgICAgICAgICAgbWFwLmdlb09iamVjdHMuYWRkKG1hcmspO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gbG9hZCBZYW5kZXggTWFwcycsIGVycm9yKSk7XHJcblxyXG4gICAgcmV0dXJuIG1hcHM7XHJcbn0iLCJleHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0YWcsIGFyZ3MpID0+IHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcbiAgICBpZiAoYXJncykge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGFyZ3MpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFyZ3Nba2V5XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2NoaWxkcmVuJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJnc1trZXldLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3Nba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZCguLi5hcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZChhcmdzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IGFyZ3Nba2V5XTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZEVtYWlsID0gZW1haWwgPT4ge1xyXG4gICAgY29uc3QgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG4gICAgcmV0dXJuIHJlLnRlc3QoU3RyaW5nKGVtYWlsKS50b0xvd2VyQ2FzZSgpKTtcclxufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogIzg3ODdlZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDExNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4jbWFwcyB7XFxuICBoZWlnaHQ6IDQ4MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnltYXBzLTItMS03OS1tYXAtY29weXJpZ2h0cy1wcm9tbyxcXG4ueW1hcHMtMi0xLTc5LWNvcHlyaWdodF9fd3JhcCB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5mZWVkYmFjay1zZWN0aW9uIHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xcbiAgbWFyZ2luOiAtMjgwcHggYXV0byAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi50aXRsZSB7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiAjODc4N2VkO1xcbn1cXG4udGl0bGUuc29jaWFsLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdWJ0aXRsZSB7XFxuICBjb2xvcjogIzIyMjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5zdWJ0aXRsZS5zb2NpYWwtc3VidGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyMXB4O1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZlZWRiYWNrLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIHdpZHRoOiA3MCU7XFxuICBwYWRkaW5nOiAzMHB4IDQwcHg7XFxufVxcblxcbi5mZWVkYmFjay1zb2NpYWwge1xcbiAgYmFja2dyb3VuZDogIzg3ODdlZDtcXG4gIHBhZGRpbmc6IDMwcHggNXB4O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmZ1bGxuYW1lLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgYXV0bztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmZ1bGxuYW1lLWNvbnRhaW5lciAuaW5wdXQtY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4uZnVsbG5hbWUtY29udGFpbmVyIC5pbnB1dC1jb250YWluZXI6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5pbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4Nzg3ZWQ7XFxufVxcbi5pbnB1dC5lcnJvciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5sYWJlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzIyMjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubWVzc2FnZS1saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjODc4N2VkO1xcbiAgbWFyZ2luLXRvcDogLTIxcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5tZXNzYWdlLWNvdW50ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjODc4N2VkO1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBwYWRkaW5nOiA3cHggMjVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjODc4N2VkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5mbyB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxpbmtzLWNvbnRhaW5lciBhIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbn1cXG5cXG4udGhhbmtzIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICM4Nzg3ZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzIyMjtcXG59XFxuXFxuLmF1dGhvci1saW5rIHtcXG4gIGNvbG9yOiAjODc4N2VkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuZmVlZGJhY2stc2VjdGlvbiB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gIH1cXG5cXG4gIC50aGFua3Mge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5mZWVkYmFjay1mb3JtIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZmVlZGJhY2stc29jaWFsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAuZnVsbG5hbWUtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5mdWxsbmFtZS1jb250YWluZXIgLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzhweCkge1xcbiAgLmZlZWRiYWNrLXNlY3Rpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLmluZm8ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgfVxcblxcbiAgLmZvb3RlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZGV2ZWxvcGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgfVxcblxcbiAgLnRoYW5rcyB7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAudGl0bGUuc29jaWFsLXRpdGxlIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQ0FBQTtBQUVKOztBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBR0o7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBR0o7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTs7RUFFSSx3QkFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVDQUFBO0FBR0o7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBR0o7QUFESTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdSOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FBRUo7QUFBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVSOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUFDSjtBQUVRO0VBQ0ksaUJBQUE7QUFBWjtBQUVRO0VBQ0ksZ0JBQUE7QUFBWjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0ksYUFBQTtBQUZSO0FBSUk7RUFDSSx5QkFBQTtBQUZSO0FBSUk7RUFDSSxxQkFBQTtBQUZSOztBQU1BO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0FBSEo7O0FBTUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFIUjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBSko7QUFLSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFIUjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUpKOztBQU9BO0VBQ0k7SUFDSSx3QkFBQTtFQUpOOztFQU1FO0lBQ0ksV0FBQTtFQUhOOztFQUtFO0lBQ0ksV0FBQTtFQUZOOztFQUlFO0lBQ0ksV0FBQTtFQUROOztFQUdFO0lBQ0ksc0JBQUE7RUFBTjtFQUNNO0lBQ0kseUJBQUE7SUFDQSwwQkFBQTtFQUNWO0FBQ0Y7QUFHQTtFQUNJO0lBQ0ksc0JBQUE7RUFETjs7RUFHRTtJQUNJLG1CQUFBO0VBQU47O0VBRUU7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VBQ047O0VBQ0U7SUFDSSxrQkFBQTtFQUVOOztFQUFFO0lBQ0ksaUJBQUE7SUFDQSxTQUFBO0VBR047O0VBREU7SUFDSSxnQkFBQTtFQUlOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzg3ODdlZDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMTE0MHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFwcyB7XFxyXFxuICAgIGhlaWdodDogNDgwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi55bWFwcy0yLTEtNzktbWFwLWNvcHlyaWdodHMtcHJvbW8sXFxyXFxuLnltYXBzLTItMS03OS1jb3B5cmlnaHRfX3dyYXAge1xcclxcbiAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLXNlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogODAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDM5MHB4O1xcclxcbiAgICBtYXJnaW46IC0yODBweCBhdXRvIDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiAzNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjODc4N2VkO1xcclxcblxcclxcbiAgICAmLnNvY2lhbC10aXRsZSB7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICAmLnNvY2lhbC1zdWJ0aXRsZSB7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIxcHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5mZWVkYmFjay1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIHdpZHRoOiA3MCU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWRiYWNrLXNvY2lhbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4Nzg3ZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHggNXB4O1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5mdWxsbmFtZS1jb250YWluZXJ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxuICAgICY6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODc4N2VkO1xcclxcbiAgICB9XFxyXFxuICAgICYuZXJyb3Ige1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZXNzYWdlLWxpbmUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgaGVpZ2h0OiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM4Nzg3ZWQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lc3NhZ2UtY291bnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgICBjb2xvcjogIzg3ODdlZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtY29udGFpbmVye1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgcGFkZGluZzogN3B4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG5cXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjODc4N2VkO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmtzLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYXtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50aGFua3Mge1xcclxcbiAgICBmb250LXNpemU6IDM0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW46MCAyMHB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBjb2xvcjogIzg3ODdlZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEzcHg7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yLWxpbmsge1xcclxcbiAgICBjb2xvcjogIzg3ODdlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgLmZlZWRiYWNrLXNlY3Rpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgIC50aGFua3Mge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZlZWRiYWNrLWZvcm0ge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLmZlZWRiYWNrLXNvY2lhbCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuZnVsbG5hbWUtY29udGFpbmVye1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIC5pbnB1dC1jb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3OHB4KSB7XFxyXFxuICAgIC5mZWVkYmFjay1zZWN0aW9uIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmluZm8ge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZm9vdGVye1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmRldmVsb3BlciB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRoYW5rcyB7XFxyXFxuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgICAudGl0bGUuc29jaWFsLXRpdGxlIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgeW1hcHMkMSA9IHtcbiAgbG9hZDogZnVuY3Rpb24gbG9hZCgpIHtcbiAgICB2YXIgc3JjID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnLy9hcGktbWFwcy55YW5kZXgucnUvMi4xLz9sYW5nPWVuX1JVJztcblxuICAgIHZhciBnZXROc1BhcmFtVmFsdWUgPSBmdW5jdGlvbiBnZXROc1BhcmFtVmFsdWUoKSB7XG4gICAgICB2YXIgcmVzdWx0cyA9IHNyYy5tYXRjaCgvW1xcXFw/Jl1ucz0oW14mI10qKS8pO1xuICAgICAgcmV0dXJuIHJlc3VsdHMgPT09IG51bGwgPyAnJyA6IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHRzWzFdLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcbiAgICB9O1xuXG4gICAgaWYgKCF0aGlzLnByb21pc2UpIHtcbiAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0RWxlbWVudC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHRFbGVtZW50Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHNjcmlwdEVsZW1lbnQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbnMgPSBnZXROc1BhcmFtVmFsdWUoKTtcblxuICAgICAgICBpZiAobnMgJiYgbnMgIT09ICd5bWFwcycpIHtcbiAgICAgICAgICAoMCwgZXZhbCkoXCJ2YXIgeW1hcHMgPSBcIi5jb25jYXQobnMsIFwiO1wiKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXR1cm4geW1hcHMucmVhZHkocmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgeW1hcHMkMTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50fSBmcm9tIFwiLi91dGlscy91dGlsc1wiO1xyXG4vLyBzdHlsZXNcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4vc2Nzcy9iYXNlLnNjc3MnO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQge01hcHN9IGZyb20gXCIuL2NvbXBvbmVudHMvTWFwc1wiO1xyXG5pbXBvcnQge0ZlZWRiYWNrfSBmcm9tIFwiLi9jb21wb25lbnRzL0ZlZWRiYWNrXCI7XHJcbmltcG9ydCB7Rm9vdGVyfSBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5cclxuY29uc3QgaGVhZEVsZW1lbnRzID0gW1xyXG4gICAgY3JlYXRlRWxlbWVudCgnbGluaycsIHtyZWw6ICdzaG9ydGN1dCBpY29uJywgaHJlZjogJ2h0dHBzOi8vcnMuc2Nob29sL2Zhdmljb24uaWNvJ30pLFxyXG5dO1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IFtcclxuICAgIEhlYWRlcigpLFxyXG4gICAgTWFwcygpLFxyXG4gICAgRmVlZGJhY2soKSxcclxuICAgIEZvb3RlcigpLFxyXG5dO1xyXG5cclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5yb290LmlkID0gJ3Jvb3QnO1xyXG5yb290LmFwcGVuZCguLi5jb21wb25lbnRzKTtcclxuXHJcbmRvY3VtZW50LmhlYWQuYXBwZW5kKC4uLmhlYWRFbGVtZW50cyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7Il0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJpc1ZhbGlkRW1haWwiLCJGZWVkYmFja1NvY2lhbCIsIkZlZWRiYWNrRm9ybSIsIkZlZWRiYWNrIiwiZmVlZGJhY2tTZWN0aW9uIiwidGl0bGUiLCJpbm5lckhUTUwiLCJzdWJ0aXRsZSIsImZlZWRiYWNrRm9ybSIsImZlZWRiYWNrU29jaWFsIiwiYXBwZW5kIiwiTElNSVQiLCJjaGlsZHJlbiIsIm5hbWUiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsIm5hbWVDb250YWluZXIiLCJlbWFpbCIsImVtYWlsQ29udGFpbmVyIiwiZnVsbG5hbWVDb250YWluZXIiLCJtZXNzYWdlIiwibWVzc2FnZUxpbmUiLCJzdHlsZSIsIm1lc3NhZ2VDb3VudGVyIiwibWVzc2FnZUNvbnRhaW5lciIsInN1Ym1pdCIsImlucHV0cyIsImZvckVhY2giLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaW5wdXRIYW5kbGVyIiwic3VibWl0SGFuZGxlciIsIm1lc3NhZ2VMZW5ndGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInNsaWNlIiwicGFyZW50RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aWR0aCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImRhdGEiLCJpc1ZhbGlkIiwiZW50cmllcyIsImtleSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJ0aGFua3MiLCJyZXBsYWNlV2l0aCIsImluZm9JY29uIiwiZmJJY29uIiwidHdJY29uIiwiaW5JY29uIiwidGl0bGVTb2NpYWwiLCJpbmZvIiwic3JjIiwiYWx0Iiwic3VidGl0bGVTb2NpYWwiLCJsaW5rc0NvbnRhaW5lciIsImZiIiwidHciLCJsaW5rZWQiLCJmYWNlYm9vayIsImhyZWYiLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJGb290ZXIiLCJmb290ZXIiLCJsaW5rIiwiZGV2ZWxvcGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiSGVhZGVyIiwiaGVhZGVyIiwiaGVhZGluZyIsInltYXBzIiwiTWFwcyIsIm1hcHMiLCJsb2FkIiwidGhlbiIsIm1hcCIsIk1hcCIsImNlbnRlciIsInpvb20iLCJjb250cm9scyIsIm1hcmsiLCJQbGFjZW1hcmsiLCJnZW9PYmplY3RzIiwiZXJyb3IiLCJ0YWciLCJhcmdzIiwiZWxlbWVudCIsImRvY3VtZW50IiwiT2JqZWN0Iiwia2V5cyIsIkFycmF5IiwiaXNBcnJheSIsInJlIiwidGVzdCIsIlN0cmluZyIsInRvTG93ZXJDYXNlIiwiaGVhZEVsZW1lbnRzIiwicmVsIiwiY29tcG9uZW50cyIsInJvb3QiLCJoZWFkIiwiYm9keSIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==