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

/***/ "./components/Repo.jsx":
/*!*****************************!*\
  !*** ./components/Repo.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);






const getLastUpdated = time => {
  return moment__WEBPACK_IMPORTED_MODULE_4___default()(time).fromNow();
};

const getLicense = license => {
  return license ? `${license.spdx_id} license` : '';
};

/* harmony default export */ __webpack_exports__["default"] = (({
  repo
}) => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2438330823" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2438330823" + " " + "basic-info"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-2438330823" + " " + "repo-title"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: `/detail?owner=${repo.owner.login}&name=${repo.name}`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-2438330823"
  }, repo.full_name))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2438330823" + " " + "repo-desc"
  }, repo.description), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2438330823" + " " + "other-info"
  }, repo.license ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2438330823" + " " + "license"
  }, getLicense(repo.license)) : null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2438330823" + " " + "last-updated"
  }, getLastUpdated(repo.updated_at)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2438330823" + " " + "open-issues"
  }, repo.open_issues_count, " open issues"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2438330823" + " " + "lang-star"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2438330823" + " " + "lang"
  }, repo.language), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-2438330823" + " " + "stars"
  }, repo.stargazers_count, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "star",
    theme: "filled"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2438330823"
  }, ".root.jsx-2438330823{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-2438330823>span.jsx-2438330823+span.jsx-2438330823{margin-left:10px;}.root.jsx-2438330823+.root.jsx-2438330823{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-2438330823{font-size:20px;}.lang-star.jsx-2438330823{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-2438330823>span.jsx-2438330823{width:120px;test-align:right;}.repo-desc.jsx-2438330823{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9SZXBvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ2tCLEFBR3dCLEFBSUksQUFHUyxBQUlYLEFBR0YsQUFHRCxBQUlBLFlBSEssR0FObkIsRUFQQSxTQUdtQixHQVduQixjQVZBLDRCQWFBLEdBckJnQyxBQWNoQyxtSEFiQSIsImZpbGUiOiIvVXNlcnMveWFuZ3NoYXNoYS9Eb3dubG9hZHMvd29ya3NwYWNlL2NvZGluZy9ub2RlanMvTmV4dEpzR2l0aHViL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvUmVwby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCB7IEljb24gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmNvbnN0IGdldExhc3RVcGRhdGVkID0gKHRpbWUpID0+IHtcbiAgcmV0dXJuIG1vbWVudCh0aW1lKS5mcm9tTm93KClcbn1cblxuY29uc3QgZ2V0TGljZW5zZSA9IChsaWNlbnNlKSA9PiB7XG4gIHJldHVybiBsaWNlbnNlID8gYCR7bGljZW5zZS5zcGR4X2lkfSBsaWNlbnNlYCA6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0ICh7IHJlcG8gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXNpYy1pbmZvXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvLXRpdGxlXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWw/b3duZXI9JHtyZXBvLm93bmVyLmxvZ2lufSZuYW1lPSR7cmVwby5uYW1lfWB9PlxuICAgICAgICAgICAgPGE+e3JlcG8uZnVsbF9uYW1lfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInJlcG8tZGVzY1wiPntyZXBvLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwib3RoZXItaW5mb1wiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcG8ubGljZW5zZSA/IDxzcGFuIGNsYXNzTmFtZT1cImxpY2Vuc2VcIj57Z2V0TGljZW5zZShyZXBvLmxpY2Vuc2UpfTwvc3Bhbj4gOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhc3QtdXBkYXRlZFwiPntnZXRMYXN0VXBkYXRlZChyZXBvLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGVuLWlzc3Vlc1wiPntyZXBvLm9wZW5faXNzdWVzX2NvdW50fSBvcGVuIGlzc3Vlczwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmctc3RhclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYW5nXCI+e3JlcG8ubGFuZ3VhZ2V9PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGFyc1wiPlxuICAgICAgICAgIHtyZXBvLnN0YXJnYXplcnNfY291bnR9IDxJY29uIHR5cGU9XCJzdGFyXCIgdGhlbWU9XCJmaWxsZWRcIiAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnJvb3R7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLm90aGVyLWluZm8gPiBzcGFuICsgc3BhbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucm9vdCArIC5yb290e1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yZXBvLXRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAubGFuZy1zdGFye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmxhbmctc3RhciA+IHNwYW57XG4gICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIHRlc3QtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5yZXBvLWRlc2Mge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/components/Repo.jsx */"));
});

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 即在客户端执行 又在服务端执行
const axios = __webpack_require__(/*! axios */ "axios");

const github_base_url = 'https://api.github.com';

const requestGithub = async (method, url, data, headers) => {
  return await axios({
    method,
    url: `${github_base_url}${url}`,
    data,
    headers
  });
};

const isServer = "undefined" === 'undefined';

const request = async ({
  method = 'GET',
  url,
  data = {}
}, req, res) => {
  if (!url) {
    throw Error('url must provide');
  }

  if (isServer) {
    const session = req.session;
    const githubAuth = session.githubAuth || {};
    const headers = {};

    if (githubAuth.access_token) {
      headers['Authorization'] = `${githubAuth.token_type} ${githubAuth.access_token}`;
    }

    return await requestGithub(method, url, data, headers);
  } else {
    // /github/search/respos
    return await axios({
      method,
      url: `/github${url}`,
      data
    });
  }
};

module.exports = {
  request,
  requestGithub
};

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
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
const IntersectionObserver =  false ? undefined : null;

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
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

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
        // ignore click if it's outside our scope
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
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

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
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
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
Link.defaultProps = {
  prefetch: true
};

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

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
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
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "antd/lib/row");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination */ "antd/lib/pagination");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/list */ "antd/lib/list");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Repo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Repo */ "./components/Repo.jsx");












const api = __webpack_require__(/*! ../lib/api */ "./lib/api.js");


const LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Python'];
const SORT_TYPES = [{
  name: 'Best Match'
}, {
  name: 'Most Stars',
  value: 'stars',
  order: 'desc'
}, {
  name: 'Fewest Stars',
  value: 'stars',
  order: 'asc'
}, {
  name: 'Most Forks',
  value: 'forks',
  order: 'desc'
}, {
  name: 'Fewest Forks',
  value: 'forks',
  order: 'asc'
}];
/**
 *  sort: 排序方式
 *  order: 排序顺序
 *  lang：仓库的项目开发语言
 *  page: 分页页面
 * */

const selectedItemStyle = {
  borderLeft: '2px solid #e36209'
};

const noop = () => {};

const per_page = 20;
const FilterLink = Object(react__WEBPACK_IMPORTED_MODULE_7__["memo"])(({
  name,
  query,
  lang,
  sort,
  order,
  page
}) => {
  const doSearch = () => {
    next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push({
      pathname: '/search',
      query: {
        query: queryS,
        lang,
        sort,
        order
      }
    });
  };

  let queryString = `?query=${query}`;
  if (lang) queryString += `&lang=${lang}`;
  if (sort) queryString += `&sort=${sort}&order=${order || 'desc'}`;
  if (page) queryString += `&page=${page}`;
  queryString += `&per_page=${per_page}`;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: `/search${queryString}`
  }, Object(react__WEBPACK_IMPORTED_MODULE_7__["isValidElement"])(name) ? name : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null, name));
});

const Search = ({
  router,
  repos
}) => {
  const querys = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, router.query);

  const {
    lang,
    sort,
    order,
    page
  } = router.query; // console.log(repos)

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-1000625733" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    gutter: 20
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 6
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-1000625733" + " " + "list-header"
    }, "\u8BED\u8A00"),
    style: {
      marginBottom: 20
    },
    dataSource: LANGUAGES,
    renderItem: item => {
      const selected = lang === item;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1000625733"
      }, item) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, querys, {
        lang: item,
        name: item
      })));
    }
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bordered: true,
    header: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
      className: "jsx-1000625733" + " " + "list-header"
    }, "\u6392\u5E8F"),
    dataSource: SORT_TYPES,
    renderItem: item => {
      let selected = false;

      if (item.name === 'Best Match' && !sort) {
        selected = true;
      } else if (item.value === sort && item.order === order) {
        selected = true;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
        style: selected ? selectedItemStyle : null
      }, selected ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-1000625733"
      }, item.name) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, querys, {
        sort: item.value,
        order: item.order,
        name: item.name
      })));
    }
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    span: 18
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
    className: "jsx-1000625733" + " " + "repos-title"
  }, repos.total_count, " \u4E2A\u4ED3\u5E93"), repos.items.map(repo => react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Repo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    repo: repo,
    key: repo.id
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-1000625733" + " " + "pagination"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    pageSize: per_page,
    current: Number(page) || 1,
    total: repos.total_count > 1000 ? 1000 : repos.total_count,
    onChange: noop,
    itemRender: (page, type, ol) => {
      const p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1;
      const name = type === 'page' ? page : ol;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(FilterLink, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__["default"])({}, querys, {
        page: p,
        name: name
      }));
    }
  })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "1000625733"
  }, ".root.jsx-1000625733{padding:20px 0;}.list-header.jsx-1000625733{font-weight:800;font-size:16px;}.repos-title.jsx-1000625733{border-bottom:1px solid #eee;font-size:24px;line-height:50px;}.pagination.jsx-1000625733{margin:20px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZKa0IsQUFHMEIsQUFHQyxBQUlhLEFBS2YsY0FDaEIsQ0FaQSxDQUdpQixhQUlBLEVBSGpCLGFBSW1CLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMveWFuZ3NoYXNoYS9Eb3dubG9hZHMvd29ya3NwYWNlL2NvZGluZy9ub2RlanMvTmV4dEpzR2l0aHViL25leHRqcy1wcm9qZWN0L3BhZ2VzL3NlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIGlzVmFsaWRFbGVtZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFJvdywgQ29sLCBMaXN0LCBQYWdpbmF0aW9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmNvbnN0IGFwaSA9IHJlcXVpcmUoJy4uL2xpYi9hcGknKVxuXG5pbXBvcnQgUmVwbyBmcm9tICcuLi9jb21wb25lbnRzL1JlcG8nXG5cbmNvbnN0IExBTkdVQUdFUyA9IFsnSmF2YVNjcmlwdCcsICdIVE1MJywgJ0NTUycsICdUeXBlU2NyaXB0JywgJ0phdmEnLCAnUHl0aG9uJ11cbmNvbnN0IFNPUlRfVFlQRVMgPSBbXG4gIHtcbiAgICBuYW1lOiAnQmVzdCBNYXRjaCdcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNb3N0IFN0YXJzJyxcbiAgICB2YWx1ZTogJ3N0YXJzJyxcbiAgICBvcmRlcjogJ2Rlc2MnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmV3ZXN0IFN0YXJzJyxcbiAgICB2YWx1ZTogJ3N0YXJzJyxcbiAgICBvcmRlcjogJ2FzYydcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdNb3N0IEZvcmtzJyxcbiAgICB2YWx1ZTogJ2ZvcmtzJyxcbiAgICBvcmRlcjogJ2Rlc2MnXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmV3ZXN0IEZvcmtzJyxcbiAgICB2YWx1ZTogJ2ZvcmtzJyxcbiAgICBvcmRlcjogJ2FzYydcbiAgfVxuXVxuXG4vKipcbiAqICBzb3J0OiDmjpLluo/mlrnlvI9cbiAqICBvcmRlcjog5o6S5bqP6aG65bqPXG4gKiAgbGFuZ++8muS7k+W6k+eahOmhueebruW8gOWPkeivreiogFxuICogIHBhZ2U6IOWIhumhtemhtemdolxuICogKi8gXG5cbmNvbnN0IHNlbGVjdGVkSXRlbVN0eWxlID0ge1xuICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNlMzYyMDknXG59XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fVxuXG5jb25zdCBwZXJfcGFnZSA9IDIwXG5cbmNvbnN0IEZpbHRlckxpbmsgPSBtZW1vKCh7bmFtZSwgcXVlcnksIGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlfSkgPT4ge1xuICBjb25zdCBkb1NlYXJjaCA9ICgpID0+IHtcbiAgICBSb3V0ZXIucHVzaCh7XG4gICAgICBwYXRobmFtZTogJy9zZWFyY2gnLFxuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcXVlcnk6IHF1ZXJ5UyxcbiAgICAgICAgbGFuZyxcbiAgICAgICAgc29ydCxcbiAgICAgICAgb3JkZXJcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGxldCBxdWVyeVN0cmluZyA9IGA/cXVlcnk9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgJmxhbmc9JHtsYW5nfWBcbiAgaWYgKHNvcnQpIHF1ZXJ5U3RyaW5nICs9IGAmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXIgfHwgJ2Rlc2MnfWBcbiAgaWYgKHBhZ2UpIHF1ZXJ5U3RyaW5nICs9IGAmcGFnZT0ke3BhZ2V9YCBcblxuICBxdWVyeVN0cmluZyArPSBgJnBlcl9wYWdlPSR7cGVyX3BhZ2V9YFxuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17YC9zZWFyY2gke3F1ZXJ5U3RyaW5nfWB9PlxuICAgICAge2lzVmFsaWRFbGVtZW50KG5hbWUpID8gbmFtZSA6IDxhPntuYW1lfTwvYT59XG4gICAgPC9MaW5rPlxuICApXG59KVxuXG5jb25zdCBTZWFyY2ggPSAoeyByb3V0ZXIsIHJlcG9zIH0pID0+IHtcbiAgY29uc3QgeyAuLi5xdWVyeXMgfSA9IHJvdXRlci5xdWVyeVxuICBjb25zdCB7IGxhbmcsIHNvcnQsIG9yZGVyLCBwYWdlIH0gPSByb3V0ZXIucXVlcnlcbiAgLy8gY29uc29sZS5sb2cocmVwb3MpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8Um93IGd1dHRlcj17MjB9PlxuICAgICAgICA8Q29sIHNwYW49ezZ9PlxuICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgaGVhZGVyPXs8c3BhbiBjbGFzc05hbWU9XCJsaXN0LWhlYWRlclwiPuivreiogDwvc3Bhbj59XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19XG4gICAgICAgICAgICBkYXRhU291cmNlPXtMQU5HVUFHRVN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBsYW5nID09PSBpdGVtXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW19PC9zcGFuPiA6IFxuICAgICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayBcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ucXVlcnlzfVxuICAgICAgICAgICAgICAgICAgICAgIGxhbmc9e2l0ZW19ICBcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGJvcmRlcmVkXG4gICAgICAgICAgICBoZWFkZXI9ezxzcGFuIGNsYXNzTmFtZT1cImxpc3QtaGVhZGVyXCI+5o6S5bqPPC9zcGFuPn1cbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e1NPUlRfVFlQRVN9XG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gZmFsc2VcbiAgICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gJ0Jlc3QgTWF0Y2gnICYmICFzb3J0KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSA9PT0gc29ydCAmJiBpdGVtLm9yZGVyID09PSBvcmRlcikge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17c2VsZWN0ZWQgPyBzZWxlY3RlZEl0ZW1TdHlsZSA6IG51bGx9PlxuICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZCA/IFxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+IDogXG4gICAgICAgICAgICAgICAgICA8RmlsdGVyTGluayBcbiAgICAgICAgICAgICAgICAgICAgey4uLnF1ZXJ5c31cbiAgICAgICAgICAgICAgICAgICAgc29ydD17aXRlbS52YWx1ZX0gIFxuICAgICAgICAgICAgICAgICAgICBvcmRlcj17aXRlbS5vcmRlcn0gXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezE4fT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJyZXBvcy10aXRsZVwiPntyZXBvcy50b3RhbF9jb3VudH0g5Liq5LuT5bqTPC9oMz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVwb3MuaXRlbXMubWFwKHJlcG8gPT4gKFxuICAgICAgICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG99IGtleT17cmVwby5pZH0gLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZT17cGVyX3BhZ2V9XG4gICAgICAgICAgICAgICAgY3VycmVudD17TnVtYmVyKHBhZ2UpIHx8IDF9XG4gICAgICAgICAgICAgICAgdG90YWw9e3JlcG9zLnRvdGFsX2NvdW50ID4gMTAwMCA/IDEwMDAgOiByZXBvcy50b3RhbF9jb3VudH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bm9vcH1cbiAgICAgICAgICAgICAgICBpdGVtUmVuZGVyPXsocGFnZSwgdHlwZSwgb2wpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0eXBlID09PSAncGFnZScgPyBwYWdlIDogdHlwZSA9PT0gJ3ByZXYnID8gcGFnZSAtIDEgOiBwYWdlICsgMVxuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHR5cGUgPT09ICdwYWdlJyA/IHBhZ2UgOiBvbFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGaWx0ZXJMaW5rIHsuLi5xdWVyeXN9IHBhZ2U9e3B9IG5hbWU9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgfX1cblxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yb290IHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxpc3QtaGVhZGVyIHtcbiAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAucmVwb3MtdGl0bGUge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICAucGFnaW5hdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5TZWFyY2guZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBxdWVyeSwgc29ydCwgbGFuZywgb3JkZXIsIHBhZ2UgfSA9IGN0eC5xdWVyeVxuICBpZiAoIXF1ZXJ5KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcG9zOiB7XG4gICAgICAgIHRvdGFsX2NvdW50OiAwXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vID9xPXJlYWN0K2xhbmd1YWdlOmphdmFzY3JpcHQmc29ydD1zdGFycyZvcmRlcj1kZXNjJnBhZ2U9MlxuICBsZXQgcXVlcnlTdHJpbmcgPSBgP3E9JHtxdWVyeX1gXG4gIGlmIChsYW5nKSBxdWVyeVN0cmluZyArPSBgK2xhbmd1YWdlOiR7bGFuZ31gXG4gIGlmIChzb3J0KSBxdWVyeVN0cmluZyArPSBgJnNvcnQ9JHtzb3J0fSZvcmRlcj0ke29yZGVyIHx8ICdkZXNjJ31gXG4gIGlmIChwYWdlKSBxdWVyeVN0cmluZyArPSBgJnBhZ2U9JHtwYWdlfWBcblxuICBxdWVyeVN0cmluZyArPSBgJnBlcl9wYWdlPSR7cGVyX3BhZ2V9YFxuXG4gIFxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkucmVxdWVzdChcbiAgICB7XG4gICAgICB1cmw6IGAvc2VhcmNoL3JlcG9zaXRvcmllcyR7cXVlcnlTdHJpbmd9YFxuICAgIH0sIFxuICAgIGN0eC5yZXEsIFxuICAgIGN0eC5yZXNcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcmVwb3M6IHJlc3VsdC5kYXRhXG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU2VhcmNoKSJdfQ== */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/pages/search.js */"));
};

Search.getInitialProps = async ({
  ctx
}) => {
  const {
    query,
    sort,
    lang,
    order,
    page
  } = ctx.query;

  if (!query) {
    return {
      repos: {
        total_count: 0
      }
    };
  } // ?q=react+language:javascript&sort=stars&order=desc&page=2


  let queryString = `?q=${query}`;
  if (lang) queryString += `+language:${lang}`;
  if (sort) queryString += `&sort=${sort}&order=${order || 'desc'}`;
  if (page) queryString += `&page=${page}`;
  queryString += `&per_page=${per_page}`;
  const result = await api.request({
    url: `/search/repositories${queryString}`
  }, ctx.req, ctx.res);
  return {
    repos: result.data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Search));

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/pages/search.js */"./pages/search.js");


/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/list":
/*!********************************!*\
  !*** external "antd/lib/list" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/list");

/***/ }),

/***/ "antd/lib/pagination":
/*!**************************************!*\
  !*** external "antd/lib/pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ "antd/lib/row":
/*!*******************************!*\
  !*** external "antd/lib/row" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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
//# sourceMappingURL=search.js.map