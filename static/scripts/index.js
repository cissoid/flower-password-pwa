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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/blueimp-md5/js/md5.js":
/*!********************************************!*\
  !*** ./node_modules/blueimp-md5/js/md5.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/*\n * JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\n\n/* global define */\n\n;(function ($) {\n  'use strict';\n\n  /*\n  * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n  * to work around bugs in some JS interpreters.\n  */\n\n  function safeAdd(x, y) {\n    var lsw = (x & 0xffff) + (y & 0xffff);\n    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n    return msw << 16 | lsw & 0xffff;\n  }\n\n  /*\n  * Bitwise rotate a 32-bit number to the left.\n  */\n  function bitRotateLeft(num, cnt) {\n    return num << cnt | num >>> 32 - cnt;\n  }\n\n  /*\n  * These functions implement the four basic operations the algorithm uses.\n  */\n  function md5cmn(q, a, b, x, s, t) {\n    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n  }\n  function md5ff(a, b, c, d, x, s, t) {\n    return md5cmn(b & c | ~b & d, a, b, x, s, t);\n  }\n  function md5gg(a, b, c, d, x, s, t) {\n    return md5cmn(b & d | c & ~d, a, b, x, s, t);\n  }\n  function md5hh(a, b, c, d, x, s, t) {\n    return md5cmn(b ^ c ^ d, a, b, x, s, t);\n  }\n  function md5ii(a, b, c, d, x, s, t) {\n    return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n  }\n\n  /*\n  * Calculate the MD5 of an array of little-endian words, and a bit length.\n  */\n  function binlMD5(x, len) {\n    /* append padding */\n    x[len >> 5] |= 0x80 << len % 32;\n    x[(len + 64 >>> 9 << 4) + 14] = len;\n\n    var i;\n    var olda;\n    var oldb;\n    var oldc;\n    var oldd;\n    var a = 1732584193;\n    var b = -271733879;\n    var c = -1732584194;\n    var d = 271733878;\n\n    for (i = 0; i < x.length; i += 16) {\n      olda = a;\n      oldb = b;\n      oldc = c;\n      oldd = d;\n\n      a = md5ff(a, b, c, d, x[i], 7, -680876936);\n      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n\n      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n      b = md5gg(b, c, d, a, x[i], 20, -373897302);\n      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n\n      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n      d = md5hh(d, a, b, c, x[i], 11, -358537222);\n      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n\n      a = md5ii(a, b, c, d, x[i], 6, -198630844);\n      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n\n      a = safeAdd(a, olda);\n      b = safeAdd(b, oldb);\n      c = safeAdd(c, oldc);\n      d = safeAdd(d, oldd);\n    }\n    return [a, b, c, d];\n  }\n\n  /*\n  * Convert an array of little-endian words to a string\n  */\n  function binl2rstr(input) {\n    var i;\n    var output = '';\n    var length32 = input.length * 32;\n    for (i = 0; i < length32; i += 8) {\n      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);\n    }\n    return output;\n  }\n\n  /*\n  * Convert a raw string to an array of little-endian words\n  * Characters >255 have their high-byte silently ignored.\n  */\n  function rstr2binl(input) {\n    var i;\n    var output = [];\n    output[(input.length >> 2) - 1] = undefined;\n    for (i = 0; i < output.length; i += 1) {\n      output[i] = 0;\n    }\n    var length8 = input.length * 8;\n    for (i = 0; i < length8; i += 8) {\n      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;\n    }\n    return output;\n  }\n\n  /*\n  * Calculate the MD5 of a raw string\n  */\n  function rstrMD5(s) {\n    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));\n  }\n\n  /*\n  * Calculate the HMAC-MD5, of a key and some data (raw strings)\n  */\n  function rstrHMACMD5(key, data) {\n    var i;\n    var bkey = rstr2binl(key);\n    var ipad = [];\n    var opad = [];\n    var hash;\n    ipad[15] = opad[15] = undefined;\n    if (bkey.length > 16) {\n      bkey = binlMD5(bkey, key.length * 8);\n    }\n    for (i = 0; i < 16; i += 1) {\n      ipad[i] = bkey[i] ^ 0x36363636;\n      opad[i] = bkey[i] ^ 0x5c5c5c5c;\n    }\n    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);\n    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));\n  }\n\n  /*\n  * Convert a raw string to a hex string\n  */\n  function rstr2hex(input) {\n    var hexTab = '0123456789abcdef';\n    var output = '';\n    var x;\n    var i;\n    for (i = 0; i < input.length; i += 1) {\n      x = input.charCodeAt(i);\n      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);\n    }\n    return output;\n  }\n\n  /*\n  * Encode a string as utf-8\n  */\n  function str2rstrUTF8(input) {\n    return unescape(encodeURIComponent(input));\n  }\n\n  /*\n  * Take string arguments and return either raw or hex encoded strings\n  */\n  function rawMD5(s) {\n    return rstrMD5(str2rstrUTF8(s));\n  }\n  function hexMD5(s) {\n    return rstr2hex(rawMD5(s));\n  }\n  function rawHMACMD5(k, d) {\n    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));\n  }\n  function hexHMACMD5(k, d) {\n    return rstr2hex(rawHMACMD5(k, d));\n  }\n\n  function md5(string, key, raw) {\n    if (!key) {\n      if (!raw) {\n        return hexMD5(string);\n      }\n      return rawMD5(string);\n    }\n    if (!raw) {\n      return hexHMACMD5(key, string);\n    }\n    return rawHMACMD5(key, string);\n  }\n\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n      return md5;\n    }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n})(this);\n\n//# sourceURL=webpack:///./node_modules/blueimp-md5/js/md5.js?");

/***/ }),

/***/ "./src/flowerpass.js":
/*!***************************!*\
  !*** ./src/flowerpass.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const md5 = __webpack_require__(/*! blueimp-md5 */ \"./node_modules/blueimp-md5/js/md5.js\");\n\nfunction flowerpass(passwd, salt) {\n    const tmp = md5(passwd, salt);\n    const source = md5(tmp, \"snow\");\n    const rule = md5(tmp, \"kise\");\n    let result = upperCasePassword(source, rule);\n    return ensureNotBeginWithDigit(result).substr(0, 16);\n}\n\nfunction upperCasePassword(source, rule) {\n    const c = 'sunlovesnow1990090127xykab';\n    source = source.split('');\n    rule = rule.split('');\n    for (let i = 0; i < source.length; i++) {\n        if (isNaN(source[i]) && c.search(rule[i]) > -1) {\n            source[i] = source[i].toUpperCase();\n        }\n    }\n    return source.join('');\n}\n\nfunction ensureNotBeginWithDigit(passwd) {\n    if (!isNaN(passwd[0])) {\n        return 'K' + passwd.substr(1);\n    } else {\n        return passwd;\n    }\n}\n\nmodule.exports = flowerpass;\n\n//# sourceURL=webpack:///./src/flowerpass.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const flowerpass = __webpack_require__(/*! flowerpass */ \"./src/flowerpass.js\");\n\n__webpack_require__(/*! style.scss */ \"./src/style.scss\");\n\nfunction calc() {\n    const passwd = document.querySelector('#passwd').value;\n    const salt = document.querySelector('#salt').value;\n    const result = flowerpass(passwd, salt);\n    document.querySelector('#result').innerText = result;\n}\n\nfunction copy() {\n    const textArea = document.createElement('textarea');\n    textArea.value = document.querySelector('#result').innerText;\n    document.body.appendChild(textArea);\n    textArea.focus();\n    textArea.select();\n    const success = document.execCommand('copy');\n    document.body.removeChild(textArea);\n    document.querySelector('#copy-button').value = 'Copyed!!';\n}\n\nwindow.addEventListener('load', function () {\n    document.querySelector('#passwd').addEventListener('keyup', calc);\n    document.querySelector('#salt').addEventListener('keyup', calc);\n    document.querySelector('#copy-button').addEventListener('click', copy);\n});\n\nif ('serviceWorker' in navigator) {\n    navigator.serviceWorker.register('./service-worker.js').then(() => {\n        console.log('service worker registered');\n    });\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });