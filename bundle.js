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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../styles.css */ \"./styles.css\");\n/* harmony import */ var _material_icons_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../material-icons/material-icons.css */ \"./material-icons/material-icons.css\");\n\n\n\nconst data = [\n    {\n        'folder': true,\n        'title': 'Pictures',\n        'children': [\n            {\n                'title': 'logo.png'\n            },\n            {\n                'folder': true,\n                'title': 'Vacations',\n                'children': [\n                    {\n                        'title': 'spain.jpeg'\n                    }\n                ]\n            }\n        ]\n    },\n    {\n        'folder': true,\n        'title': 'Desktop',\n        'children': [\n            {\n                'folder': true,\n                'title': 'screenshots',\n                'children': null\n            }\n        ]\n    },\n    {\n        'folder': true,\n        'title': 'Downloads',\n        'children': [\n            {\n                'folder': true,\n                'title': 'JS',\n                'children': null\n            },\n            {\n                'title': 'nvm-setup.exe'\n            },\n            {\n                'title': 'node.exe'\n            }\n        ]\n    },\n    {\n        'title': 'credentials.txt'\n    }\n];\n\nconst rootNode = document.getElementById('root');\n\n// TODO: your code goes here\n\n(() => {\n    renderList(data, rootNode, false);\n})();\n\nfunction renderList(data, el, contentHidden) {\n    const ulElement = document.createElement('ul');\n\n    if (contentHidden) {\n        ulElement.style.display = 'none';\n    }\n\n    data.forEach((dataEl) => {\n        const titleLi = createTitleLi(dataEl);\n        ulElement.appendChild(titleLi);\n\n        if (dataEl.children) {\n            const containerLi = createContainerLi(dataEl);\n            ulElement.appendChild(containerLi);\n        } else if (dataEl.folder) {\n            const emptyFolderLi = createEmptyFolderLi();\n            ulElement.appendChild(emptyFolderLi);\n        }\n    });\n\n    el.appendChild(ulElement);\n}\n\nfunction createEmptyFolderLi(displayEmptyFolder) {\n    const emptyFolderLi = document.createElement('li');\n    const emptyFolderUl = document.createElement('ul');\n    if (!displayEmptyFolder) {\n        emptyFolderUl.style.display = 'none';\n    }\n\n    const emptyFolderLiInner = document.createElement('li');\n    const emptyFolderLiInnerText = document.createTextNode('Empty folder');\n\n    emptyFolderLiInner.appendChild(emptyFolderLiInnerText);\n    emptyFolderUl.appendChild(emptyFolderLiInner);\n    emptyFolderLi.appendChild(emptyFolderUl);\n    emptyFolderLi.setAttribute('class', 'empty-folder');\n\n    return emptyFolderLi;\n}\n\nfunction createTitleLi(dataEl) {\n    const liElement = document.createElement('li');\n\n    const iconElement = createIcon(dataEl.folder);\n    const liText = document.createTextNode(dataEl.title);\n\n    liElement.appendChild(iconElement);\n    liElement.appendChild(liText);\n\n    liElement.onclick = openOrCloseFolder;\n    liElement.oncontextmenu = showContextMenu;\n\n    return liElement;\n}\n\nfunction showContextMenu(event) {\n    event.preventDefault();\n\n    const targetElement = event.target;\n    targetElement.style.backgroundColor = 'darkgrey';\n\n    const menuBackground = createMenuBackground(targetElement);\n\n    const menu = document.createElement('ul');\n    menu.setAttribute('class', 'menu');\n    menu.style.marginLeft = event.clientX + 'px';\n    menu.style.marginTop = event.clientY + 'px';\n\n    const renameElement = createRenameElement(targetElement);\n    const deleteElement = createDeleteElement(targetElement);\n\n    menu.appendChild(renameElement);\n    menu.appendChild(deleteElement);\n\n    menuBackground.appendChild(menu);\n    rootNode.appendChild(menuBackground);\n    rootNode.style.position = 'relative';\n}\n\nfunction createRenameElement(targetElement) {\n    const renameElement = document.createElement('li');\n    const renameElementText = document.createTextNode('Rename');\n    renameElement.appendChild(renameElementText);\n\n    renameElement.onclick = (e) => {\n        if (targetElement.tagName === 'I') {\n            clickRename(e, targetElement.parentNode);\n        } else {\n            clickRename(e, targetElement);\n        }\n    };\n\n    return renameElement;\n}\n\nfunction createDeleteElement(targetElement) {\n    const deleteElement = document.createElement('li');\n    const deleteElementText = document.createTextNode('Delete');\n    deleteElement.appendChild(deleteElementText);\n\n    deleteElement.onclick = () => {\n        clickDelete(targetElement);\n    };\n\n    return deleteElement;\n}\n\nfunction clickDelete(targetElement) {\n    const parent = targetElement.parentNode;\n\n    if (targetElement.tagName === 'I') {\n        targetElement.parentElement.remove();\n    } else {\n        if (targetElement.nextElementSibling && targetElement.nextElementSibling.getAttribute('class') === 'empty-folder') {\n            targetElement.nextElementSibling.remove();\n        } else if (targetElement.nextElementSibling && targetElement.nextElementSibling.tagName === 'DIV') {\n            targetElement.nextElementSibling.remove();\n        }\n        targetElement.remove();\n    }\n\n    if (parent.childNodes.length === 0) {\n        const parentUl = parent.parentElement.parentElement;\n        parent.parentElement.remove();\n        const emptyFolderLi = createEmptyFolderLi(true);\n\n        parentUl.appendChild(emptyFolderLi);\n    }\n}\n\nfunction createMenuBackground(targetElement) {\n    const menuBackground = document.createElement('div');\n    menuBackground.setAttribute('class', 'menu-background');\n    menuBackground.style.position = 'absolute';\n\n    menuBackground.onclick = (e) => {\n        e.preventDefault();\n        closeMenu(targetElement);\n    };\n\n    menuBackground.oncontextmenu = (e) => {\n        e.preventDefault();\n        closeMenu(targetElement);\n    };\n\n    return menuBackground;\n}\n\nfunction clickRename(e, targetElement) {\n    const text = targetElement.childNodes[1].textContent;\n    targetElement.removeChild(targetElement.childNodes[1]);\n\n    const nameInput = document.createElement('input');\n    nameInput.setAttribute('value', text);\n\n    targetElement.appendChild(nameInput);\n\n    nameInput.addEventListener('focus', function () {\n        if (text.includes('.')) {\n            this.setSelectionRange(0, text.split('.')[0].length);\n        } else {\n            this.select();\n        }\n    });\n\n    nameInput.addEventListener('focusout', function (e) {\n        const targetElement = e.target;\n        const value = e.target.value;\n\n        const text = document.createTextNode(value);\n\n        const parent = targetElement.parentNode;\n        parent.removeChild(targetElement.parentNode.childNodes[1]);\n        parent.appendChild(text);\n    });\n\n    nameInput.addEventListener('keyup', function (e) {\n        if (e.key === 'Enter') {\n            const targetElement = e.target;\n            const value = e.target.value;\n\n            const text = document.createTextNode(value);\n\n            const parent = targetElement.parentNode;\n\n            try {\n                parent.removeChild(targetElement.parentNode.childNodes[1]);\n                parent.appendChild(text);\n            } catch (e) {\n                // can be deleted during focusout event\n            }\n        }\n    });\n\n    nameInput.focus();\n}\n\nfunction closeMenu(targetElement) {\n    rootNode.childNodes.forEach((node) => {\n        if (node.tagName === 'DIV') {\n            rootNode.removeChild(node);\n        }\n    });\n\n    targetElement.style.backgroundColor = 'white';\n}\n\nfunction createContainerLi(dataEl) {\n    const containerLi = document.createElement('div');\n\n    renderList(dataEl.children, containerLi, true);\n\n    return containerLi;\n}\n\nfunction createIcon(isFolder) {\n    const iconElement = document.createElement('i');\n    iconElement.setAttribute('class', 'material-icons ' + (isFolder ? 'icon-orange' : 'icon-grey'));\n    const iconText = document.createTextNode(isFolder ? 'folder' : 'insert_drive_file');\n    iconElement.appendChild(iconText);\n\n    return iconElement;\n}\n\nfunction openOrCloseFolder(event) {\n    const targetElement = event.target;\n\n    if (targetElement.tagName === 'I') {\n        if (targetElement.parentElement.nextElementSibling) {\n            const ulUnderIcon = targetElement.parentElement.nextElementSibling.firstChild;\n            if (ulUnderIcon.tagName === 'UL') {\n                ulUnderIcon.style.display = ulUnderIcon.style.display === 'none' ? 'block' : 'none';\n            }\n\n            const iconElement = targetElement.firstChild;\n            if (iconElement && iconElement.parentElement.parentElement.getAttribute('class') !== 'empty-folder') {\n                swapFolderIcon(iconElement);\n            }\n        }\n\n        return 1;\n    }\n\n    if (targetElement.nextElementSibling) {\n        const iconElement = targetElement.firstChild;\n\n        targetElement.nextElementSibling.childNodes.forEach((el) => {\n            if (el.tagName === 'UL') {\n                swapFolderIcon(iconElement);\n                el.style.display = el.style.display === 'none' ? 'block' : 'none';\n            }\n        });\n    }\n}\n\nfunction swapFolderIcon(iconElement) {\n    if (iconElement.textContent === 'folder') {\n        iconElement.textContent = 'folder_open';\n    } else if (iconElement.textContent === 'folder_open') {\n        iconElement.textContent = 'folder';\n    }\n}\n\n//# sourceURL=webpack://folders/./index.js?");

/***/ }),

/***/ "./material-icons/MaterialIcons-Regular.eot":
/*!**************************************************!*\
  !*** ./material-icons/MaterialIcons-Regular.eot ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4674f8ded773cb03e824.eot\";\n\n//# sourceURL=webpack://folders/./material-icons/MaterialIcons-Regular.eot?");

/***/ }),

/***/ "./material-icons/MaterialIcons-Regular.ttf":
/*!**************************************************!*\
  !*** ./material-icons/MaterialIcons-Regular.ttf ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e7382c63da0098d634a.ttf\";\n\n//# sourceURL=webpack://folders/./material-icons/MaterialIcons-Regular.ttf?");

/***/ }),

/***/ "./material-icons/MaterialIcons-Regular.woff":
/*!***************************************************!*\
  !*** ./material-icons/MaterialIcons-Regular.woff ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"83bebaf37c09c7e1c3ee.woff\";\n\n//# sourceURL=webpack://folders/./material-icons/MaterialIcons-Regular.woff?");

/***/ }),

/***/ "./material-icons/MaterialIcons-Regular.woff2":
/*!****************************************************!*\
  !*** ./material-icons/MaterialIcons-Regular.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cff684e59ffb052d72cb.woff2\";\n\n//# sourceURL=webpack://folders/./material-icons/MaterialIcons-Regular.woff2?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./material-icons/material-icons.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./material-icons/material-icons.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MaterialIcons_Regular_eot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaterialIcons-Regular.eot */ \"./material-icons/MaterialIcons-Regular.eot\");\n/* harmony import */ var _MaterialIcons_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MaterialIcons-Regular.woff2 */ \"./material-icons/MaterialIcons-Regular.woff2\");\n/* harmony import */ var _MaterialIcons_Regular_woff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MaterialIcons-Regular.woff */ \"./material-icons/MaterialIcons-Regular.woff\");\n/* harmony import */ var _MaterialIcons_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MaterialIcons-Regular.ttf */ \"./material-icons/MaterialIcons-Regular.ttf\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_MaterialIcons_Regular_eot__WEBPACK_IMPORTED_MODULE_2__);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_MaterialIcons_Regular_woff2__WEBPACK_IMPORTED_MODULE_3__);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_MaterialIcons_Regular_woff__WEBPACK_IMPORTED_MODULE_4__);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_MaterialIcons_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Material Icons';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"); /* For IE6-8 */\\n  src: local('Material Icons'),\\n       local('MaterialIcons-Regular'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('truetype');\\n}\\n\\n.material-icons {\\n  font-family: 'Material Icons';\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 24px;  /* Preferred icon size */\\n  display: inline-block;\\n  line-height: 1;\\n  text-transform: none;\\n  letter-spacing: normal;\\n  word-wrap: normal;\\n  white-space: nowrap;\\n  direction: ltr;\\n\\n  /* Support for all WebKit browsers. */\\n  -webkit-font-smoothing: antialiased;\\n  /* Support for Safari and Chrome. */\\n  text-rendering: optimizeLegibility;\\n\\n  /* Support for Firefox. */\\n  -moz-osx-font-smoothing: grayscale;\\n\\n  /* Support for IE. */\\n  font-feature-settings: 'liga';\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://folders/./material-icons/material-icons.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"ul {\\n    list-style-type: none;\\n}\\n\\nli {\\n    display: flex;\\n    align-items: flex-end;\\n}\\n\\nli:hover {\\n    background-color: darkgrey;\\n}\\n\\nli.empty-folder:hover {\\n    background-color: white;\\n}\\n\\n.empty-folder li {\\n    background-color: white;\\n}\\n\\ni.icon-orange {\\n    color: darkorange;\\n}\\n\\ni.icon-grey {\\n    color: gray;\\n}\\n\\nhtml, body {\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n#root {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n#root > ul {\\n    width: 400px;\\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\n    border-radius: 12px;\\n    padding-top: 20px;\\n    padding-bottom: 20px;\\n}\\n\\n.wrapper {\\n    width: 40%;\\n    background-color: pink;\\n}\\n\\n.menu-background {\\n    width: 100%;\\n    height: 100vh;\\n}\\n\\n.menu {\\n    padding: 5px;\\n    background-color: rgb(247, 247, 247);\\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\n    width: 150px;\\n}\\n\\n.instruction {\\n    margin: 15px auto auto;\\n    width: 300px;\\n    padding-left: 10px;\\n    border: black solid 1px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://folders/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://folders/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://folders/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./material-icons/material-icons.css":
/*!*******************************************!*\
  !*** ./material-icons/material-icons.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_material_icons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./material-icons.css */ \"./node_modules/css-loader/dist/cjs.js!./material-icons/material-icons.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_material_icons_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_material_icons_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://folders/./material-icons/material-icons.css?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://folders/./styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://folders/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;