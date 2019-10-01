module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/admin/git/project-www/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx("div", {
  className: "_2nkoQovCMNDdKtTjNi5W_x SiteFooter__FooterWrapper-sc-160ijjw-2 kpoBQb",
  "data-reactid": "523",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "footer-grid _13KHfN73YmQgsYHxXvuh_J _1V4AsGFqT8un0KZo8QWVRL kKeFxbI9p0TnKvSk7DzSR _1gTQggGV_yO4HJ6p7pil3E _1UmvYpZQFDG3yh_HWxQaF9 SiteFooter__FooterColumnWrapper-sc-160ijjw-3 gUfPmS",
  "data-reactid": "524",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "footer-column grid-three _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ SiteFooter__FooterSubColumn-sc-160ijjw-4 ilwNes",
  "data-reactid": "525",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  href: "https://tumblbug.com/notices",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  rel: "noopener noreferrer",
  "data-reactid": "526",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "\uACF5\uC9C0\uC0AC\uD56D"), __jsx("br", {
  "data-reactid": "529",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("a", {
  href: "https://www.rocketpunch.com/companies/tumblbug/jobs",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "530",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\uCC44\uC6A9"), __jsx("br", {
  "data-reactid": "531",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("a", {
  href: "https://creator.tumblbug.com/",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "532",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "\uCC3D\uC791\uC790 \uAC00\uC774\uB4DC"), __jsx("br", {
  "data-reactid": "533",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("a", {
  href: "https://www.notion.so/tumcorp/What-s-new-External-af33c52645094594b6bf8a101e686cae",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "534",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "\uC11C\uBE44\uC2A4 \uAC1C\uC120\uC0AC\uD56D")), __jsx("div", {
  className: "footer-column grid-four _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ SiteFooter__FooterSubColumn-sc-160ijjw-4 erxKKA",
  "data-reactid": "535",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  href: "https://tumblbug.com/terms-of-use",
  "data-reactid": "536",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\uC774\uC6A9\uC57D\uAD00"), __jsx("br", {
  "data-reactid": "537",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("a", {
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  href: "https://tumblbug.com/privacy",
  "data-reactid": "538",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "\uAC1C\uC778\uC815\uBCF4 \uCC98\uB9AC\uBC29\uCE68"), __jsx("br", {
  "data-reactid": "539",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("a", {
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  href: "https://tumblbug.com/help/fees",
  "data-reactid": "540",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\uC218\uC218\uB8CC \uC815\uCC45"), __jsx("br", {
  "data-reactid": "541",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("a", {
  href: "https://help.tumblbug.com/",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  "data-reactid": "542",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "\uD5EC\uD504 \uC13C\uD130")), __jsx("div", {
  className: "footer-column grid-nine _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ _2h2Lxt21YmZS8bCMfCUMnE SiteFooter__FooterSubColumn-sc-160ijjw-4 cDdnng",
  "data-reactid": "543",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "544",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("a", {
  href: "https://pf.kakao.com/_BAxdXj",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "545",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("svg", {
  className: "_2hPd4Spw463EFQEs-kFa8f _11c5M97q-sUJQWm_yVaRTR",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "18",
  viewbox: "0 0 20 18",
  "data-reactid": "546",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("title", {
  "data-reactid": "547",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Kakaotalk plus friends"), __jsx("path", {
  d: "M10 0C4.477 0 0 3.467 0 7.745c0 2.784 1.897 5.224 4.744 6.59-.209.764-.757 2.77-.867 3.2-.136.532.199.525.419.382.172-.112 2.74-1.823 3.848-2.561.602.087 1.222.133 1.856.133 5.523 0 10-3.467 10-7.744C20 3.467 15.523 0 10 0",
  "data-reactid": "548",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx("span", {
  className: "SiteFooter__SROnlyLabel-sc-160ijjw-0 dKBthp",
  "data-reactid": "549",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "\uCE74\uCE74\uC624\uD1A1 \uD50C\uB7EC\uC2A4 \uCE5C\uAD6C \uBC14\uB85C\uAC00\uAE30")), "\xA0\xA0", __jsx("a", {
  href: "https://www.facebook.com/tumblbug",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "551",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("i", {
  className: "_1uz2PaH_Pc163IQLnwFtm8 _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "552",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("span", {
  className: "SiteFooter__SROnlyLabel-sc-160ijjw-0 dKBthp",
  "data-reactid": "553",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "facebook \uBC14\uB85C\uAC00\uAE30")), "\xA0\xA0", __jsx("a", {
  href: "https://twitter.com/tumblbug",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "555",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("i", {
  className: "_2FxT97uoLyJpLIfoko0aQD _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "556",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), __jsx("span", {
  className: "SiteFooter__SROnlyLabel-sc-160ijjw-0 dKBthp",
  "data-reactid": "557",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "twitter \uBC14\uB85C\uAC00\uAE30")), "\xA0\xA0", __jsx("a", {
  href: "https://www.instagram.com/tumblbug/",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "559",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("i", {
  className: "jVeP2LZnw-ySfySkeJWoo _1oJMWnMCW_Y6GmNc1mhqaW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "560",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("span", {
  className: "SiteFooter__SROnlyLabel-sc-160ijjw-0 dKBthp",
  "data-reactid": "561",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "instagram \uBC14\uB85C\uAC00\uAE30")), "\xA0\xA0", __jsx("a", {
  href: "http://post.naver.com/my.nhn?memberNo=23995853",
  className: "_3TJ2LNmiyFnXVggSgiKX5Q",
  target: "_blank",
  rel: "noopener noreferrer",
  "data-reactid": "563",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("svg", {
  className: "_3wp2zfPfFJudKjknXrAhPI",
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "18.31",
  viewbox: "0 0 20 18.31",
  "data-reactid": "564",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("title", {
  "data-reactid": "565",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "naverIcon"), __jsx("path", {
  d: "M20,19.15H13.33A0.34,0.34,0,0,1,13,19L7,10.22,6.84,10v9.15H0V0.85H6.68A0.32, 0.32,0,0,1,7,1l6,8.75a0.82,0.82,0,0,0,.19.22V0.86H20v18.3Z",
  transform: "translate(0 -0.84)",
  "data-reactid": "566",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
})))), __jsx("div", {
  "data-reactid": "567",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  href: "https://help.tumblbug.com/hc/ko/requests/new",
  target: "_blank",
  rel: "noopener noreferrer",
  className: "_13KHfN73YmQgsYHxXvuh_J _1Qdv504-1XMeYXZyb0xQZT _3SbGdzxKM6M_AeOQWLNqks",
  "data-reactid": "568",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("i", {
  className: "IOopdu3Yum3GyEGW_GKW6 _254YPhBOB9qv7-J8bIg7co _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "569",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), "\uBB38\uC758\uD558\uAE30"))), __jsx("div", {
  className: "footer-column grid-sixteen _2yIPuXkUmexMNa4oYh94d2 _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ",
  "data-reactid": "571",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "572",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "\uD140 \uBE14\uBC85\uC740 \uD50C\uB7AB\uD3FC \uC81C\uACF5\uC790\uB85C\uC11C \uD504\uB85C\uC81D\uD2B8\uC758 \uB2F9\uC0AC\uC790\uAC00 \uC544\uB2C8\uBA70, \uC9C1\uC811\uC801\uC778 \uD1B5\uC2E0\uD310\uB9E4\uB97C \uC9C4\uD589\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uD504\uB85C\uC81D\uD2B8\uC758 \uC644\uC218 \uBC0F \uC120\uBB3C\uC81C\uACF5\uC758 \uCC45\uC784\uC740 \uD574\uB2F9 \uD504\uB85C\uC81D\uD2B8\uC758 \uCC3D\uC791\uC790\uC5D0\uAC8C \uC788\uC73C\uBA70, \uD504\uB85C\uC81D\uD2B8\uC640 \uAD00\uB828\uD558\uC5EC \uD6C4\uC6D0\uC790\uC640 \uBC1C\uC0DD\uD558\uB294 \uBC95\uC801 \uBD84\uC7C1\uC5D0 \uB300\uD55C \uCC45\uC784\uC740 \uD574\uB2F9 \uCC3D\uC791\uC790\uAC00 \uBD80\uB2F4\uD569\uB2C8\uB2E4.")), __jsx("div", {
  className: "footer-column grid-sixteen _2AKJF7ih68n2TcW3TIF8-t _152MAijd_UogerBKCVqZR_ _1lLHKI5v9AoCyeggtffvGZ",
  "data-reactid": "573",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "574",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "\uD140\uBE14\uBC85(\uC8FC) | \uB300\uD45C \uC5FC\uC7AC\uC2B9 105-87-52823 | \uC11C\uC6B8\uC2DC \uAC15\uB0A8\uAD6C \uAC15\uB0A8\uB300\uB85C 364, 12\uCE35 1201\uD638 (\uC5ED\uC0BC\uB3D9) | \uD1B5\uC2E0\uD310\uB9E4\uC5C5 2019-\uC11C\uC6B8\uAC15\uB0A8-00797 | \uB300\uD45C\uC804\uD654 02-6080-0760"), __jsx("span", {
  className: "_1NwnhTlynaDwYqlZ_SKgmG",
  "data-reactid": "575",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("span", {
  role: "img",
  "aria-labelledby": "copyright emoji",
  "data-reactid": "576",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "\xA9"), "2019 Tumblbug Inc."))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/admin/git/project-www/components/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "ScrollTop__ScrollTopBtnWrapper-j9uqn7-0 cKbfhA",
  "data-reactid": "3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("button", {
  className: "ScrollTop__ScrollTopBtn-j9uqn7-1 bcbYyv",
  "data-reactid": "4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\uCD5C\uC0C1\uC704\uB85C")), __jsx("i", {
  className: "_3EDOT6mnWfo2CobuYD5UO7 _2PY6DpDelT9jvKKFjCr7gd _14AOh5T6DdcgeGZ5YUV9uR _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})), __jsx("div", {
  "data-reactid": "7",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "SiteHeader__SiteHeaderWrapper-q8dvod-0 iSuAdB",
  "data-reactid": "8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "Header-ou4e17-0 cwcqcZ",
  "data-reactid": "9",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "Container-gci8y7-0 MskhC",
  "data-reactid": "10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "SiteHeader__SiteHeaderMenu-q8dvod-1 fMekoE",
  "data-reactid": "11",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "SiteHeader__LeftMenu-q8dvod-2 fbsOED",
  "data-reactid": "12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("button", {
  className: "SiteHeader__LinkButton-q8dvod-7 hLwNNy",
  "data-reactid": "13",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("i", {
  className: "_3ZgG-OSv0XE3y-h3oPaDsl _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "14",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("span", {
  className: "SiteHeader__ItemLabel-q8dvod-8 hWygls",
  "data-reactid": "15",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "\uD504\uB85C\uC81D\uD2B8 \uB458\uB7EC\uBCF4\uAE30")), __jsx("span", {
  className: "SiteHeader__ForMobile-q8dvod-9 ihCbfB",
  "data-reactid": "16",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("a", {
  className: "SiteHeader__LinkItem-q8dvod-6 dALTNz",
  href: "https://tumblbug.com/start",
  "data-reactid": "17",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("span", {
  className: "SiteHeader__ItemLabel-q8dvod-8 hWygls",
  "data-reactid": "18",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "\uD504\uB85C\uC81D\uD2B8 \uC62C\uB9AC\uAE30")))), __jsx("div", {
  className: "SiteHeader__CenterMenu-q8dvod-3 hbKGuE",
  "data-reactid": "19",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  className: "SiteHeader__ButtonLink-q8dvod-5 efdMbN",
  href: "https://halsaram.com/",
  "data-reactid": "20",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: "TumblbugLogo-sc-5rx33z-0 iDsnca",
  "data-reactid": "21",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("svg", {
  id: "halsaram_logo",
  viewbox: "0 0 107.89 28.39",
  "data-reactid": "22",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("title", {
  "data-reactid": "23",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Halsaram"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "halsaram"))))), __jsx("div", {
  className: "SiteHeader__RightMenu-q8dvod-4 cLNJqs",
  "data-reactid": "33",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("button", {
  className: "SiteHeader__SearchButton-q8dvod-13 hmmaSW Button-sc-1x93b2b-0 eFQBDO",
  "data-reactid": "34",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("a", {
  className: "q8dvod-5-SiteHeader__ButtonLink-ktApHV kGropT",
  href: "https://tumblbug.com/login?redirection=/",
  "data-reactid": "35",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("span", {
  className: "SiteHeader__ItemLabel-q8dvod-8 hWygls",
  "data-reactid": "36",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785"), __jsx("span", {
  className: "SiteHeader__ProfileImageWrapper-q8dvod-10 hcHNSW",
  "data-reactid": "37",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("span", {
  className: "ProfileImg-sc-1vio56c-0 beGvzJ",
  "data-reactid": "38",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Lower_Banner.js":
/*!************************************!*\
  !*** ./components/Lower_Banner.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/admin/git/project-www/components/Lower_Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Banner = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("a", {
  href: "https://tumblbug.com/start",
  "data-reactid": "513",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "ProjectStartBanner__ProjectStartBannerWrapper-i0c0cd-0 gOFdsx",
  "data-reactid": "514",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "ProjectStartBanner-i0c0cd-1 iNfKax",
  "data-reactid": "515",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "ProjectStartBanner__BannerBackground-i0c0cd-2 elUVQa",
  "data-reactid": "516",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("h2", {
  className: "ProjectStartBanner__Title-i0c0cd-3 caJFok",
  "data-reactid": "517",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "518",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\uB9C8\uC74C \uC18D \uD504\uB85C\uC81D\uD2B8 \uC544\uC774\uB514\uC5B4,\xA0"), __jsx("span", {
  "data-reactid": "519",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\uD140\uBE14\uBC85\uC5D0\uC11C \uD604\uC2E4\uB85C")), __jsx("p", {
  className: "ProjectStartBanner__Description-i0c0cd-4 BBLfj",
  "data-reactid": "520",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "521",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "\uD504\uB85C\uC81D\uD2B8\uB97C \uC704\uD55C \uC790\uAE08\uB3C4 \uB9C8\uB828\uD558\uACE0,\xA0"), __jsx("span", {
  "data-reactid": "522",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "\uB4E0\uB4E0\uD55C \uD6C4\uC6D0\uC790 \uB124\uD2B8\uC6CC\uD06C\uB3C4 \uD655\uBCF4\uD558\uC138\uC694"))))));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/admin/git/project-www/components/Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Main = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  class: "Container-gci8y7-0 MskhC",
  "data-reactid": "92",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "93",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  class: "Carousel__CarouselHeader-sc-72guw4-1 DOQRx",
  "data-reactid": "94",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("span", {
  class: "Carousel__CarouselTitle-sc-72guw4-2 dcUXGJ",
  "data-reactid": "95",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  class: "Carousel__Link-sc-72guw4-0 kCEWtQ",
  href: "collections/editorspick.html",
  "data-reactid": "96",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "\uC5D0\uB514\uD130 \uCD94\uCC9C \uD504\uB85C\uC81D\uD2B8"), __jsx("i", {
  class: "yv2X_NOjMYirwH0R23J17 WU1ox0-AeDX_zneKjnNMO _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "97",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("div", {
  class: "Carousel__CarouselButtons-sc-72guw4-3 lmJehc",
  "data-reactid": "98",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("button", {
  class: "Button-sc-1x93b2b-0 hioDQR",
  "data-reactid": "99",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("i", {
  class: "_36JoJH6uhmIKdE1bWDYUlM _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "100",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), __jsx("button", {
  class: "Button-sc-1x93b2b-0 hioDQR",
  "data-reactid": "101",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("i", {
  class: "WU1ox0-AeDX_zneKjnNMO _1XlDYEGI6NQt_YZkSA5u6N _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "102",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})))), __jsx("div", {
  class: "react-swipe-container carousel",
  "data-reactid": "103",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "104",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  class: "Carousel__CarouselContents-sc-72guw4-4 ibmRNI",
  "data-reactid": "105",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  class: "Carousel__Column-sc-72guw4-5 fpWFDE",
  "data-reactid": "106",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("a", {
  class: "ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG",
  href: "rabbit_calenderf09f.html?utm_source=tumblbug&utm_medium=internal&utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c",
  "data-reactid": "107",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("img", {
  class: "ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM",
  src: "../tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/007b6da4e73604f590568620636df9f45c1c385b/013ee619070f0e6d633fbff30e37b2c225628ba3/6b95e896-230e-46a9-9798-71934a6178a63e9d.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=500f5ccf67b471573672d80f9b615b93",
  alt: "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354 \uC774\uBBF8\uC9C0",
  "data-reactid": "108",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("div", {
  class: "ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu",
  "data-reactid": "109",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("div", {
  class: "ProjectItem__FundingTitle-j9emyg-9 bPQPya",
  "data-reactid": "110",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "111",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("h1", {
  class: "ProjectItem__ProjectTitle-j9emyg-2 fYikfb",
  "data-reactid": "112",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354")), __jsx("p", {
  class: "ProjectItem__CreatorName-j9emyg-3 kwVXIK",
  "data-reactid": "113",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "\uC988\uC138")), __jsx("svg", {
  class: "ProjectItem__PercentageLine-j9emyg-5 uGYjB",
  xmlns: "http://www.w3.org/2000/svg",
  "data-reactid": "114",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("rect", {
  x: "0",
  y: "0",
  fill: "#efefef",
  height: "2",
  width: "100%",
  "data-reactid": "115",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  height: "2",
  width: "55%",
  fill: "#fa6462",
  "data-reactid": "116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), __jsx("div", {
  class: "ProjectItem__FundingInfo-j9emyg-7 eGfkCC",
  "data-reactid": "117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "118",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "119",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("i", {
  class: "_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("span", {
  "data-reactid": "121",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "30"), "\uC77C \uB0A8\uC74C")), __jsx("div", {
  "data-reactid": "124",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("span", {
  class: "ProjectItem__FundingMoney-j9emyg-8 eFNjaj",
  "data-reactid": "125",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "1,952,000 \uC6D0"), __jsx("span", {
  class: "ProjectItem__FundingRate-j9emyg-4 ldNMzx",
  "data-reactid": "128",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "55 %")))))), __jsx("div", {
  class: "Carousel__Column-sc-72guw4-5 fpWFDE",
  "data-reactid": "106",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("a", {
  class: "ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG",
  href: "rabbit_calenderf09f.html?utm_source=tumblbug&utm_medium=internal&utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c",
  "data-reactid": "107",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("img", {
  class: "ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM",
  src: "../tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/007b6da4e73604f590568620636df9f45c1c385b/013ee619070f0e6d633fbff30e37b2c225628ba3/6b95e896-230e-46a9-9798-71934a6178a63e9d.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=500f5ccf67b471573672d80f9b615b93",
  alt: "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354 \uC774\uBBF8\uC9C0",
  "data-reactid": "108",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("div", {
  class: "ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu",
  "data-reactid": "109",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("div", {
  class: "ProjectItem__FundingTitle-j9emyg-9 bPQPya",
  "data-reactid": "110",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "111",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("h1", {
  class: "ProjectItem__ProjectTitle-j9emyg-2 fYikfb",
  "data-reactid": "112",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354")), __jsx("p", {
  class: "ProjectItem__CreatorName-j9emyg-3 kwVXIK",
  "data-reactid": "113",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\uC988\uC138")), __jsx("svg", {
  class: "ProjectItem__PercentageLine-j9emyg-5 uGYjB",
  xmlns: "http://www.w3.org/2000/svg",
  "data-reactid": "114",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("rect", {
  x: "0",
  y: "0",
  fill: "#efefef",
  height: "2",
  width: "100%",
  "data-reactid": "115",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  height: "2",
  width: "55%",
  fill: "#fa6462",
  "data-reactid": "116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
})), __jsx("div", {
  class: "ProjectItem__FundingInfo-j9emyg-7 eGfkCC",
  "data-reactid": "117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "118",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "119",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("i", {
  class: "_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), __jsx("span", {
  "data-reactid": "121",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "30"), "\uC77C \uB0A8\uC74C")), __jsx("div", {
  "data-reactid": "124",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("span", {
  class: "ProjectItem__FundingMoney-j9emyg-8 eFNjaj",
  "data-reactid": "125",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "1,952,000 \uC6D0"), __jsx("span", {
  class: "ProjectItem__FundingRate-j9emyg-4 ldNMzx",
  "data-reactid": "128",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "55 %")))))), __jsx("div", {
  class: "Carousel__Column-sc-72guw4-5 fpWFDE",
  "data-reactid": "106",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, __jsx("a", {
  class: "ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG",
  href: "rabbit_calenderf09f.html?utm_source=tumblbug&utm_medium=internal&utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c",
  "data-reactid": "107",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx("img", {
  class: "ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM",
  src: "../tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/007b6da4e73604f590568620636df9f45c1c385b/013ee619070f0e6d633fbff30e37b2c225628ba3/6b95e896-230e-46a9-9798-71934a6178a63e9d.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=500f5ccf67b471573672d80f9b615b93",
  alt: "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354 \uC774\uBBF8\uC9C0",
  "data-reactid": "108",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx("div", {
  class: "ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu",
  "data-reactid": "109",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("div", {
  class: "ProjectItem__FundingTitle-j9emyg-9 bPQPya",
  "data-reactid": "110",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "111",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("h1", {
  class: "ProjectItem__ProjectTitle-j9emyg-2 fYikfb",
  "data-reactid": "112",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354")), __jsx("p", {
  class: "ProjectItem__CreatorName-j9emyg-3 kwVXIK",
  "data-reactid": "113",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "\uC988\uC138")), __jsx("svg", {
  class: "ProjectItem__PercentageLine-j9emyg-5 uGYjB",
  xmlns: "http://www.w3.org/2000/svg",
  "data-reactid": "114",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("rect", {
  x: "0",
  y: "0",
  fill: "#efefef",
  height: "2",
  width: "100%",
  "data-reactid": "115",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  height: "2",
  width: "55%",
  fill: "#fa6462",
  "data-reactid": "116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
})), __jsx("div", {
  class: "ProjectItem__FundingInfo-j9emyg-7 eGfkCC",
  "data-reactid": "117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "118",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "119",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("i", {
  class: "_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}), __jsx("span", {
  "data-reactid": "121",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "30"), "\uC77C \uB0A8\uC74C")), __jsx("div", {
  "data-reactid": "124",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx("span", {
  class: "ProjectItem__FundingMoney-j9emyg-8 eFNjaj",
  "data-reactid": "125",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, "1,952,000 \uC6D0"), __jsx("span", {
  class: "ProjectItem__FundingRate-j9emyg-4 ldNMzx",
  "data-reactid": "128",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, "55 %")))))), __jsx("div", {
  class: "Carousel__Column-sc-72guw4-5 fpWFDE",
  "data-reactid": "106",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("a", {
  class: "ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG",
  href: "rabbit_calenderf09f.html?utm_source=tumblbug&utm_medium=internal&utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c",
  "data-reactid": "107",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("img", {
  class: "ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM",
  src: "../tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/007b6da4e73604f590568620636df9f45c1c385b/013ee619070f0e6d633fbff30e37b2c225628ba3/6b95e896-230e-46a9-9798-71934a6178a63e9d.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=500f5ccf67b471573672d80f9b615b93",
  alt: "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354 \uC774\uBBF8\uC9C0",
  "data-reactid": "108",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), __jsx("div", {
  class: "ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu",
  "data-reactid": "109",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("div", {
  class: "ProjectItem__FundingTitle-j9emyg-9 bPQPya",
  "data-reactid": "110",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "111",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("h1", {
  class: "ProjectItem__ProjectTitle-j9emyg-2 fYikfb",
  "data-reactid": "112",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354")), __jsx("p", {
  class: "ProjectItem__CreatorName-j9emyg-3 kwVXIK",
  "data-reactid": "113",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "\uC988\uC138")), __jsx("svg", {
  class: "ProjectItem__PercentageLine-j9emyg-5 uGYjB",
  xmlns: "http://www.w3.org/2000/svg",
  "data-reactid": "114",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, __jsx("rect", {
  x: "0",
  y: "0",
  fill: "#efefef",
  height: "2",
  width: "100%",
  "data-reactid": "115",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  height: "2",
  width: "55%",
  fill: "#fa6462",
  "data-reactid": "116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
})), __jsx("div", {
  class: "ProjectItem__FundingInfo-j9emyg-7 eGfkCC",
  "data-reactid": "117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "118",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "119",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("i", {
  class: "_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}), __jsx("span", {
  "data-reactid": "121",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "30"), "\uC77C \uB0A8\uC74C")), __jsx("div", {
  "data-reactid": "124",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx("span", {
  class: "ProjectItem__FundingMoney-j9emyg-8 eFNjaj",
  "data-reactid": "125",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "1,952,000 \uC6D0"), __jsx("span", {
  class: "ProjectItem__FundingRate-j9emyg-4 ldNMzx",
  "data-reactid": "128",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, "55 %")))))), __jsx("div", {
  class: "Carousel__Column-sc-72guw4-5 fpWFDE",
  "data-reactid": "106",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, __jsx("a", {
  class: "ProjectItem__ProjectItemCard-j9emyg-0 ksIgbG",
  href: "rabbit_calenderf09f.html?utm_source=tumblbug&utm_medium=internal&utm_campaign=%ed%85%80%eb%b8%94%eb%b2%85/%eb%a9%94%ec%9d%b8/%ec%97%90%eb%94%94%ed%84%b0%ec%b6%94%ec%b2%9c",
  "data-reactid": "107",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, __jsx("img", {
  class: "ProjectItem__ProjectCoverimage-j9emyg-6 eaBarM",
  src: "../tumblbug-pci.imgix.net/6e9a642e6e4d5d647835e62e1f0158aec00ba4ff/007b6da4e73604f590568620636df9f45c1c385b/013ee619070f0e6d633fbff30e37b2c225628ba3/6b95e896-230e-46a9-9798-71934a6178a63e9d.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=500f5ccf67b471573672d80f9b615b93",
  alt: "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354 \uC774\uBBF8\uC9C0",
  "data-reactid": "108",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}), __jsx("div", {
  class: "ProjectItem__ProjectTextWrapper-j9emyg-1 idMFxu",
  "data-reactid": "109",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, __jsx("div", {
  class: "ProjectItem__FundingTitle-j9emyg-9 bPQPya",
  "data-reactid": "110",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "111",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, __jsx("h1", {
  class: "ProjectItem__ProjectTitle-j9emyg-2 fYikfb",
  "data-reactid": "112",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, "\uBCC4\uD1A0\uB07C, \uB2EC\uD1A0\uB07C \uC77C\uB7EC\uC2A4\uD2B8 2020 \uCE98\uB9B0\uB354")), __jsx("p", {
  class: "ProjectItem__CreatorName-j9emyg-3 kwVXIK",
  "data-reactid": "113",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, "\uC988\uC138")), __jsx("svg", {
  class: "ProjectItem__PercentageLine-j9emyg-5 uGYjB",
  xmlns: "http://www.w3.org/2000/svg",
  "data-reactid": "114",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, __jsx("rect", {
  x: "0",
  y: "0",
  fill: "#efefef",
  height: "2",
  width: "100%",
  "data-reactid": "115",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}), __jsx("rect", {
  x: "0",
  y: "0",
  height: "2",
  width: "55%",
  fill: "#fa6462",
  "data-reactid": "116",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
})), __jsx("div", {
  class: "ProjectItem__FundingInfo-j9emyg-7 eGfkCC",
  "data-reactid": "117",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "118",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx("span", {
  "data-reactid": "119",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx("i", {
  class: "_2CeNIUhLMEIh6Reaatfs8t _1DLNFgQRrQNEosKFB0zOK5 _3fJsfvAPykJzj2xoMnxzWW _1QY7TzdLHKX3-BKPDNNYKF",
  "data-reactid": "120",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}), __jsx("span", {
  "data-reactid": "121",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, "30"), "\uC77C \uB0A8\uC74C")), __jsx("div", {
  "data-reactid": "124",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}, __jsx("span", {
  class: "ProjectItem__FundingMoney-j9emyg-8 eFNjaj",
  "data-reactid": "125",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, "1,952,000 \uC6D0"), __jsx("span", {
  class: "ProjectItem__FundingRate-j9emyg-4 ldNMzx",
  "data-reactid": "128",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, "55 %"))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/Main_Banner.js":
/*!***********************************!*\
  !*** ./components/Main_Banner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/admin/git/project-www/components/Main_Banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Banner = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "39",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "HomePage__HomeWrapper-o28q5c-0 kJZuAX",
  "data-reactid": "40",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "HeroWidget__CurrentHeroContainer-xxrhv3-0 SkcOB",
  "data-reactid": "41",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "react-swipe-container ",
  "data-reactid": "42",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  "data-reactid": "43",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "HeroWidget__HeroItem-xxrhv3-2 cghFRn",
  "data-reactid": "44",
  "data-index": "0",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("a", {
  href: "https://www.tumblbug.com/keykney?utm_source=tumblbug&utm_medium=internal&utm_campaign=%ED%85%80%EB%B8%94%EB%B2%85/%EB%A9%94%EC%9D%B8/%EB%B0%B0%EB%84%88",
  "data-reactid": "45",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("div", {
  className: "HeroWidget__HeroImg-xxrhv3-3 edlYZE",
  "data-reactid": "46",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "HeroWidget__HeroContainer-xxrhv3-4 ilpomk",
  "data-reactid": "47",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "HeroWidget__HeroTextWrapper-xxrhv3-5 ejvDHe",
  "data-reactid": "48",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("h1", {
  className: "HeroWidget__HeroTitle-xxrhv3-6 fmKiut",
  "data-reactid": "49",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "\uAC74\uC870\uD55C \uC77C\uC0C1,", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), "\uB2E4 \uBC18\uC0AC\uD569\uB2C8\uB2E4!"), __jsx("div", {
  className: "HeroWidget__HeroDescription-xxrhv3-7 armmr",
  "data-reactid": "50",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "\uB4DC\uB9BD\uB825 \uCDA9\uB9CC\uD55C \uC77C\uC0C1 \uB9CC\uD654\uAC00 '\uD0A4\uD06C\uB2C8'\uC758 \uCCAB \uC5D0\uC138\uC774"))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ "./components/Main.js");
/* harmony import */ var _components_Main_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Main_Banner */ "./components/Main_Banner.js");
/* harmony import */ var _components_Lower_Banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Lower_Banner */ "./components/Lower_Banner.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./pages/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/admin/git/project-www/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Index = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    id: "react-view",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx(_components_Main_Banner__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx(_components_Main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  })), __jsx(_components_Lower_Banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/style.css":
/*!*************************!*\
  !*** ./pages/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/admin/git/project-www/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map