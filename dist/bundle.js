/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Mulish-VariableFont_wght.ttf */ \"./src/assets/fonts/Mulish-VariableFont_wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@charset \"UTF-8\";\n@font-face {\n  font-family: \"mulish\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\nbody {\n  font-family: \"mulish\";\n  margin: 0;\n}\n\n#shape1 {\n  position: absolute;\n  left: 50px;\n  top: 800px;\n  z-index: -10;\n}\n\n#shape2 {\n  position: absolute;\n  right: 0;\n  top: 200px;\n  z-index: -10;\n}\n\n#shape3 {\n  position: absolute;\n  right: 5vw;\n  top: 870px;\n  z-index: -10;\n}\n\nh1 {\n  color: #000;\n  font-family: Mulish;\n  font-size: 48px;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 120%;\n  letter-spacing: 0.48px;\n}\n\n.app {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.container {\n  height: fit-content;\n}\n\nheader {\n  margin-top: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.navigation {\n  display: flex;\n  align-items: center;\n  gap: 60px;\n}\n.navigation ul {\n  list-style: none;\n  display: flex;\n  gap: 70px;\n}\n.navigation ul a {\n  color: #000;\n  text-decoration: none;\n}\n.navigation ul a:hover {\n  color: #C05AFF;\n}\n.navigation__menu {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n.navigation__menu .profile_pic {\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n}\n.navigation__menu img {\n  cursor: pointer;\n}\n.navigation__menu span {\n  cursor: pointer;\n}\n.navigation__burger-icon {\n  display: none;\n  width: 37px;\n  height: 2px;\n  background-color: #C05AFF;\n  position: relative;\n}\n.navigation__burger-icon::before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  width: 37px;\n  height: 2px;\n  background-color: #C05AFF;\n  top: 10px;\n}\n.navigation__burger-icon::after {\n  display: block;\n  position: absolute;\n  content: \"\";\n  width: 37px;\n  height: 2px;\n  background-color: #C05AFF;\n  bottom: 10px;\n}\n\n.main {\n  display: flex;\n  gap: 100px;\n  margin-top: 30px;\n  margin-bottom: 110px;\n}\n\n.sidebar {\n  width: 25%;\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n.sidebar__content {\n  flex-direction: column;\n  gap: 40px;\n}\n.sidebar legend {\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 120%;\n  letter-spacing: 0.18px;\n  margin-bottom: 30px;\n}\n.sidebar__btn {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  background-color: #C05AFF;\n  border: none;\n  color: #fff;\n  width: 200px;\n  height: 50px;\n  border-radius: 100px;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 120%;\n  letter-spacing: 0.18px;\n  margin-bottom: 20px;\n}\n.sidebar__btn--options {\n  cursor: pointer;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  background-color: #C05AFF;\n  border: none;\n  color: #fff;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n}\n.sidebar__btn--options img {\n  width: 20px;\n  height: 20px;\n}\n.sidebar__difficulty fieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sidebar__difficulty input {\n  appearance: none;\n  border: 1px solid #C05AFF;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  transition: 0.2s all linear;\n}\n.sidebar__difficulty input:checked {\n  border: 8px solid #C05AFF;\n}\n.sidebar__skills fieldset {\n  padding: 0;\n  margin: 0;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.sidebar__skills fieldset div {\n  display: flex;\n  align-items: center;\n  display: flex;\n  gap: 5px;\n}\n.sidebar__skills input {\n  appearance: none;\n  border: 1px solid #C05AFF;\n  width: 15px;\n  height: 15px;\n  transition: 0.2s all linear;\n}\n.sidebar__skills input:checked::before {\n  content: \"✔︎\";\n  color: #C05AFF;\n  margin-left: 1px;\n}\n\n.promo {\n  height: fit-content;\n}\n.promo h1 .text-accent {\n  padding: 5px 25px;\n  border-radius: 100px;\n  background: #C9FF50;\n}\n.promo .cards {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  justify-content: space-evenly;\n  gap: 5px;\n}\n.promo .cards .card {\n  position: relative;\n  width: 380px;\n  height: 340px;\n  border-radius: 30px;\n  background: #C05AFF;\n  color: #fff;\n  padding-bottom: 14px;\n  margin-bottom: 20px;\n}\n.promo .cards .card__title {\n  position: relative;\n  z-index: 5;\n  padding-left: 20px;\n}\n.promo .cards .card__back-image {\n  position: absolute;\n  top: 10%;\n  left: 25%;\n}\n.promo .cards .card__back-image--ae {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n}\n.promo .cards .card__info {\n  display: flex;\n  position: relative;\n  z-index: 1;\n}\n.promo .cards .card__info .card__photo {\n  width: 213px;\n  height: 255px;\n}\n.promo .cards .card__info .card__flag {\n  position: absolute;\n  top: 70%;\n  left: 37%;\n  width: 66px;\n  height: 66px;\n}\n.promo .cards .card__teacher {\n  position: absolute;\n  color: #000;\n  left: 40%;\n  background-color: #C9FF50;\n  border-radius: 60px;\n  width: 184px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.promo .cards .card__teacher img {\n  position: absolute;\n  top: 20px;\n  left: -10%;\n}\n.promo .cards .card__price {\n  margin-top: 100px;\n  font-size: 40px;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 120%;\n  letter-spacing: 0.4px;\n}\n.promo .cards .card__price--old {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 120%;\n  letter-spacing: 0.2px;\n  margin-left: 80px;\n  margin-top: 10px;\n  position: relative;\n}\n.promo .cards .card__price--old::after {\n  content: \"\";\n  width: 70px;\n  display: block;\n  position: absolute;\n  left: -5px;\n  bottom: 10px;\n  border-bottom: 1px solid #FF50BA;\n}\n.promo .cards .card__price--old::before {\n  content: \"-51%\";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #FF50BA;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 120%;\n  letter-spacing: 0.1px;\n  border-radius: 20px;\n  width: 50px;\n  height: 18px;\n  position: absolute;\n  left: 50%;\n  top: -15px;\n}\n.promo .cards .card__more {\n  display: block;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 120%; /* 21.6px */\n  letter-spacing: 0.18px;\n  margin-left: 10%;\n  margin-top: 20%;\n  cursor: pointer;\n}\n\nfooter {\n  background-color: #C05AFF;\n  height: 230px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  color: #fff;\n}\n\n.footer-info {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 55px;\n  color: #fff;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 120%;\n  letter-spacing: 0.18px;\n}\n.footer-info__links {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.footer-info__links a {\n  text-decoration: none;\n  color: #fff;\n}\n\n.copyright {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.yellow-text {\n  color: #FFFD50;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n  appearance: none;\n  margin-right: 15px;\n  width: 180px;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 5px;\n  background-color: #C05AFF;\n  background-size: 70% 100%;\n  background-repeat: no-repeat;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #C05AFF;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n  box-shadow: none;\n  border: none;\n  background: transparent;\n}\n\n@media (min-width: 1401px) {\n  .container {\n    width: 80vw;\n  }\n  .sidebar__content {\n    display: flex;\n  }\n  .promo {\n    width: 75%;\n  }\n}\n@media (max-width: 1400px) {\n  #shape1,\n  #shape2 {\n    display: none;\n  }\n  #shape3 {\n    top: 200px;\n  }\n  .container {\n    width: 95vw;\n  }\n  .sidebar__content {\n    display: flex;\n    gap: 40px;\n  }\n}\n@media (max-width: 1200px) {\n  .main {\n    flex-direction: column;\n    gap: 20px;\n  }\n  .promo {\n    width: 100%;\n  }\n  .card {\n    min-width: 380px;\n  }\n  .sidebar {\n    flex-direction: row;\n    width: 100%;\n  }\n  .sidebar__content {\n    display: none;\n  }\n  .sidebar__btn--options {\n    display: flex;\n  }\n}\n@media (max-width: 850px) {\n  .promo h1 span {\n    display: block;\n  }\n  .navigation ul {\n    display: none;\n  }\n  .navigation .magn_glass {\n    display: none;\n  }\n  .navigation__menu span {\n    display: none;\n  }\n  .navigation__burger-icon {\n    display: block;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dailylang/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dailylang/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://dailylang/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dailylang/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://dailylang/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dailylang/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://dailylang/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://dailylang/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://dailylang/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://dailylang/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://dailylang/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!*********************************************************************!*\
  !*** ./src/assets/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./AZ.svg\": \"./src/assets/images/AZ.svg\",\n\t\"./Arrow.svg\": \"./src/assets/images/Arrow.svg\",\n\t\"./Polygon.svg\": \"./src/assets/images/Polygon.svg\",\n\t\"./Vector.svg\": \"./src/assets/images/Vector.svg\",\n\t\"./ae.svg\": \"./src/assets/images/ae.svg\",\n\t\"./arrow_down.svg\": \"./src/assets/images/arrow_down.svg\",\n\t\"./arrow_down_white.svg\": \"./src/assets/images/arrow_down_white.svg\",\n\t\"./flag.png\": \"./src/assets/images/flag.png\",\n\t\"./icons8-tick.svg\": \"./src/assets/images/icons8-tick.svg\",\n\t\"./logo_white.svg\": \"./src/assets/images/logo_white.svg\",\n\t\"./magn_glass.svg\": \"./src/assets/images/magn_glass.svg\",\n\t\"./options.png\": \"./src/assets/images/options.png\",\n\t\"./profile.png\": \"./src/assets/images/profile.png\",\n\t\"./shape1.svg\": \"./src/assets/images/shape1.svg\",\n\t\"./shape2.svg\": \"./src/assets/images/shape2.svg\",\n\t\"./shape3.svg\": \"./src/assets/images/shape3.svg\",\n\t\"./woman1.jpg\": \"./src/assets/images/woman1.jpg\",\n\t\"./woman1.svg\": \"./src/assets/images/woman1.svg\",\n\t\"./woman2.svg\": \"./src/assets/images/woman2.svg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/images sync \\\\.(png%7Cjpe?g%7Csvg)$\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/_sync_nonrecursive_\\.(png%257Cjpe?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\n\nconst imagesContext = __webpack_require__(\"./src/assets/images sync \\\\.(png%7Cjpe?g%7Csvg)$\");\nconst images = imagesContext.keys().map(imagesContext);\n\n\n//# sourceURL=webpack://dailylang/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/Mulish-VariableFont_wght.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/Mulish-VariableFont_wght.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c3d26f19ac7f56a0fd74.ttf\";\n\n//# sourceURL=webpack://dailylang/./src/assets/fonts/Mulish-VariableFont_wght.ttf?");

/***/ }),

/***/ "./src/assets/images/AZ.svg":
/*!**********************************!*\
  !*** ./src/assets/images/AZ.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/AZ.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/AZ.svg?");

/***/ }),

/***/ "./src/assets/images/Arrow.svg":
/*!*************************************!*\
  !*** ./src/assets/images/Arrow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/Arrow.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/Arrow.svg?");

/***/ }),

/***/ "./src/assets/images/Polygon.svg":
/*!***************************************!*\
  !*** ./src/assets/images/Polygon.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/Polygon.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/Polygon.svg?");

/***/ }),

/***/ "./src/assets/images/Vector.svg":
/*!**************************************!*\
  !*** ./src/assets/images/Vector.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/Vector.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/Vector.svg?");

/***/ }),

/***/ "./src/assets/images/ae.svg":
/*!**********************************!*\
  !*** ./src/assets/images/ae.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/ae.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/ae.svg?");

/***/ }),

/***/ "./src/assets/images/arrow_down.svg":
/*!******************************************!*\
  !*** ./src/assets/images/arrow_down.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/arrow_down.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/arrow_down.svg?");

/***/ }),

/***/ "./src/assets/images/arrow_down_white.svg":
/*!************************************************!*\
  !*** ./src/assets/images/arrow_down_white.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/arrow_down_white.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/arrow_down_white.svg?");

/***/ }),

/***/ "./src/assets/images/flag.png":
/*!************************************!*\
  !*** ./src/assets/images/flag.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/flag.png\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/flag.png?");

/***/ }),

/***/ "./src/assets/images/icons8-tick.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/icons8-tick.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/icons8-tick.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/icons8-tick.svg?");

/***/ }),

/***/ "./src/assets/images/logo_white.svg":
/*!******************************************!*\
  !*** ./src/assets/images/logo_white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/logo_white.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/logo_white.svg?");

/***/ }),

/***/ "./src/assets/images/magn_glass.svg":
/*!******************************************!*\
  !*** ./src/assets/images/magn_glass.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/magn_glass.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/magn_glass.svg?");

/***/ }),

/***/ "./src/assets/images/options.png":
/*!***************************************!*\
  !*** ./src/assets/images/options.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/options.png\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/options.png?");

/***/ }),

/***/ "./src/assets/images/profile.png":
/*!***************************************!*\
  !*** ./src/assets/images/profile.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/profile.png\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/profile.png?");

/***/ }),

/***/ "./src/assets/images/shape1.svg":
/*!**************************************!*\
  !*** ./src/assets/images/shape1.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/shape1.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/shape1.svg?");

/***/ }),

/***/ "./src/assets/images/shape2.svg":
/*!**************************************!*\
  !*** ./src/assets/images/shape2.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/shape2.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/shape2.svg?");

/***/ }),

/***/ "./src/assets/images/shape3.svg":
/*!**************************************!*\
  !*** ./src/assets/images/shape3.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/shape3.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/shape3.svg?");

/***/ }),

/***/ "./src/assets/images/woman1.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/woman1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/woman1.jpg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/woman1.jpg?");

/***/ }),

/***/ "./src/assets/images/woman1.svg":
/*!**************************************!*\
  !*** ./src/assets/images/woman1.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/woman1.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/woman1.svg?");

/***/ }),

/***/ "./src/assets/images/woman2.svg":
/*!**************************************!*\
  !*** ./src/assets/images/woman2.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"assets/images/woman2.svg\";\n\n//# sourceURL=webpack://dailylang/./src/assets/images/woman2.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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