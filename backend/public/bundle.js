/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/IdeaForm.js":
/*!************************************!*\
  !*** ./src/components/IdeaForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IdeaForm\": () => (/* binding */ IdeaForm)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\nvar _formModal = /*#__PURE__*/new WeakMap();\nvar _form = /*#__PURE__*/new WeakMap();\nvar IdeaForm = /*#__PURE__*/function () {\n  function IdeaForm() {\n    _classCallCheck(this, IdeaForm);\n    _classPrivateFieldInitSpec(this, _formModal, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _form, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldSet(this, _formModal, document.querySelector(\"#form-modal\"));\n  }\n  _createClass(IdeaForm, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      _classPrivateFieldGet(this, _form).addEventListener(\"submit\", this.handleSubmit.bind(this));\n    }\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var idea = {\n        text: _classPrivateFieldGet(this, _form).elements.text.value,\n        tag: _classPrivateFieldGet(this, _form).elements.tag.value,\n        username: _classPrivateFieldGet(this, _form).elements.username.value\n      };\n\n      // Clear fields\n      _classPrivateFieldGet(this, _form).elements.text.value = \"\";\n      _classPrivateFieldGet(this, _form).elements.tag.value = \"\";\n      _classPrivateFieldGet(this, _form).elements.username.value = \"\";\n      document.dispatchEvent(new Event(\"closemodal\"));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      _classPrivateFieldGet(this, _formModal).innerHTML = \"\\n        <form id=\\\"idea-form\\\">\\n            <div class=\\\"form-control\\\">\\n                <label for=\\\"idea-text\\\">Enter a Username</label>\\n                <input type=\\\"text\\\" name=\\\"username\\\" id=\\\"username\\\" />\\n            </div>\\n            <div class=\\\"form-control\\\">\\n                <label for=\\\"idea-text\\\">What's Your Idea?</label>\\n                <textarea name=\\\"text\\\" id=\\\"idea-text\\\"></textarea>\\n            </div>\\n            <div class=\\\"form-control\\\">\\n                <label for=\\\"tag\\\">Tag</label>\\n                <input type=\\\"text\\\" name=\\\"tag\\\" id=\\\"tag\\\" />\\n            </div>\\n            <button class=\\\"btn\\\" type=\\\"submit\\\" id=\\\"submit\\\">Submit</button>\\n        </form>\\n        \";\n      _classPrivateFieldSet(this, _form, document.querySelector(\"#idea-form\"));\n      this.addEventListeners();\n    }\n  }]);\n  return IdeaForm;\n}();\n\n//# sourceURL=webpack://webpack-starter/./src/components/IdeaForm.js?");

/***/ }),

/***/ "./src/components/IdeaList.js":
/*!************************************!*\
  !*** ./src/components/IdeaList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IdeaList\": () => (/* binding */ IdeaList)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\nvar _ideaListEl = /*#__PURE__*/new WeakMap();\nvar _ideas = /*#__PURE__*/new WeakMap();\nvar _validTags = /*#__PURE__*/new WeakMap();\nvar IdeaList = /*#__PURE__*/function () {\n  function IdeaList() {\n    _classCallCheck(this, IdeaList);\n    _classPrivateFieldInitSpec(this, _ideaListEl, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _ideas, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _validTags, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldSet(this, _ideaListEl, document.querySelector(\"#idea-list\"));\n    _classPrivateFieldSet(this, _ideas, [{\n      id: 1,\n      text: \"Idea 1\",\n      tag: \"Business\",\n      username: \"John\",\n      date: \"02/01/2023\"\n    }, {\n      id: 2,\n      text: \"Idea 2\",\n      tag: \"Health\",\n      username: \"John\",\n      date: \"02/01/2023\"\n    }, {\n      id: 3,\n      text: \"Idea 3\",\n      tag: \"Business\",\n      username: \"John\",\n      date: \"02/01/2023\"\n    }]);\n    _classPrivateFieldSet(this, _validTags, new Set());\n    _classPrivateFieldGet(this, _validTags).add(\"technology\");\n    _classPrivateFieldGet(this, _validTags).add(\"software\");\n    _classPrivateFieldGet(this, _validTags).add(\"business\");\n    _classPrivateFieldGet(this, _validTags).add(\"education\");\n    _classPrivateFieldGet(this, _validTags).add(\"health\");\n    _classPrivateFieldGet(this, _validTags).add(\"inventions\");\n  }\n  _createClass(IdeaList, [{\n    key: \"getTagClass\",\n    value: function getTagClass(tag) {\n      tag = tag.toLowerCase();\n      var tagClass = \"\";\n      if (_classPrivateFieldGet(this, _validTags).has(tag)) {\n        tagClass = \"tag-\".concat(tag);\n      }\n      return tagClass;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      _classPrivateFieldGet(this, _ideaListEl).innerHTML = _classPrivateFieldGet(this, _ideas).map(function (idea) {\n        var tagClass = _this.getTagClass(idea.tag);\n        return \"\\n        <div class=\\\"card\\\">\\n            <button class=\\\"delete\\\"><i class=\\\"fas fa-times\\\"></i></button>\\n            <h3>\".concat(idea.text, \"</h3>\\n            <p class=\\\"tag \").concat(tagClass, \"\\\">\").concat(idea.tag.toUpperCase(), \"</p>\\n            <p>\\n            Posted on <span class=\\\"date\\\">\").concat(idea.date, \"</span> by\\n            <span class=\\\"author\\\">\").concat(idea.username, \"</span>\\n            </p>\\n        </div>\\n        \");\n      }).join(\"\");\n    }\n  }]);\n  return IdeaList;\n}();\n\n//# sourceURL=webpack://webpack-starter/./src/components/IdeaList.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\nvar _modal = /*#__PURE__*/new WeakMap();\nvar _modalBtn = /*#__PURE__*/new WeakMap();\nvar Modal = /*#__PURE__*/function () {\n  function Modal() {\n    _classCallCheck(this, Modal);\n    _classPrivateFieldInitSpec(this, _modal, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldInitSpec(this, _modalBtn, {\n      writable: true,\n      value: void 0\n    });\n    _classPrivateFieldSet(this, _modal, document.querySelector(\"#modal\"));\n    _classPrivateFieldSet(this, _modalBtn, document.querySelector(\"#modal-btn\"));\n    this.addEventListeners();\n  }\n  _createClass(Modal, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      _classPrivateFieldGet(this, _modalBtn).addEventListener(\"click\", this.open.bind(this));\n      window.addEventListener(\"click\", this.outsideClick.bind(this));\n      document.addEventListener(\"closemodal\", this.close.bind(this));\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      _classPrivateFieldGet(this, _modal).style.display = \"block\";\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      _classPrivateFieldGet(this, _modal).style.display = \"none\";\n    }\n  }, {\n    key: \"outsideClick\",\n    value: function outsideClick(e) {\n      if (e.target === _classPrivateFieldGet(this, _modal)) {\n        this.close();\n      }\n    }\n  }]);\n  return Modal;\n}();\n\n//# sourceURL=webpack://webpack-starter/./src/components/Modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _components_IdeaForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/IdeaForm */ \"./src/components/IdeaForm.js\");\n/* harmony import */ var _components_IdeaList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/IdeaList */ \"./src/components/IdeaList.js\");\n\n\n\n\n\nnew _components_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal();\nvar ideaForm = new _components_IdeaForm__WEBPACK_IMPORTED_MODULE_3__.IdeaForm();\nideaForm.render();\nvar ideaList = new _components_IdeaList__WEBPACK_IMPORTED_MODULE_4__.IdeaList();\nideaList.render();\n\n//# sourceURL=webpack://webpack-starter/./src/index.js?");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./node_modules/@fortawesome/fontawesome-free/css/all.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-starter/./src/css/style.css?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;