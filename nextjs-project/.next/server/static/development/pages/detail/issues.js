module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/detail/issues.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");






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
  }, Object(_lib_utils__WEBPACK_IMPORTED_MODULE_4__["getLastUpdated"])(repo.updated_at)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
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
  }, ".root.jsx-2438330823{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.other-info.jsx-2438330823>span.jsx-2438330823+span.jsx-2438330823{margin-left:10px;}.root.jsx-2438330823+.root.jsx-2438330823{border-top:1px solid #eee;padding-top:20px;}.repo-title.jsx-2438330823{font-size:20px;}.lang-star.jsx-2438330823{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.lang-star.jsx-2438330823>span.jsx-2438330823{width:120px;test-align:right;}.repo-desc.jsx-2438330823{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9SZXBvLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBR3dCLEFBSUksQUFHUyxBQUlYLEFBR0YsQUFHRCxBQUlBLFlBSEssR0FObkIsRUFQQSxTQUdtQixHQVduQixjQVZBLDRCQWFBLEdBckJnQyxBQWNoQyxtSEFiQSIsImZpbGUiOiIvVXNlcnMveWFuZ3NoYXNoYS9Eb3dubG9hZHMvd29ya3NwYWNlL2NvZGluZy9ub2RlanMvTmV4dEpzR2l0aHViL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvUmVwby5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vbGliL3V0aWxzJ1xuXG5jb25zdCBnZXRMaWNlbnNlID0gKGxpY2Vuc2UpID0+IHtcbiAgcmV0dXJuIGxpY2Vuc2UgPyBgJHtsaWNlbnNlLnNwZHhfaWR9IGxpY2Vuc2VgIDogJydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHsgcmVwbyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2ljLWluZm9cIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInJlcG8tdGl0bGVcIj5cbiAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbD9vd25lcj0ke3JlcG8ub3duZXIubG9naW59Jm5hbWU9JHtyZXBvLm5hbWV9YH0+XG4gICAgICAgICAgICA8YT57cmVwby5mdWxsX25hbWV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVwby1kZXNjXCI+e3JlcG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJvdGhlci1pbmZvXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVwby5saWNlbnNlID8gPHNwYW4gY2xhc3NOYW1lPVwibGljZW5zZVwiPntnZXRMaWNlbnNlKHJlcG8ubGljZW5zZSl9PC9zcGFuPiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFzdC11cGRhdGVkXCI+e2dldExhc3RVcGRhdGVkKHJlcG8udXBkYXRlZF9hdCl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wZW4taXNzdWVzXCI+e3JlcG8ub3Blbl9pc3N1ZXNfY291bnR9IG9wZW4gaXNzdWVzPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZy1zdGFyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhbmdcIj57cmVwby5sYW5ndWFnZX08L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXJzXCI+XG4gICAgICAgICAge3JlcG8uc3RhcmdhemVyc19jb3VudH0gPEljb24gdHlwZT1cInN0YXJcIiB0aGVtZT1cImZpbGxlZFwiIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm9vdHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgfVxuICAgICAgICAub3RoZXItaW5mbyA+IHNwYW4gKyBzcGFue1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb290ICsgLnJvb3R7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlcG8tdGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYW5nLXN0YXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAubGFuZy1zdGFyID4gc3BhbntcbiAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgdGVzdC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLnJlcG8tZGVzYyB7XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/components/Repo.jsx */"));
});

/***/ }),

/***/ "./components/SearchUser.jsx":
/*!***********************************!*\
  !*** ./components/SearchUser.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/debounce */ "lodash/debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_4__);






const Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a.Option;

const SearchUser = ({
  onChange,
  value
}) => {
  // { current: 0 }
  const lastFetchIdRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(0);
  const [fetching, setFetching] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [options, setOptions] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  const fetchUser = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(lodash_debounce__WEBPACK_IMPORTED_MODULE_3___default()(value => {
    console.log('fetching user', value);
    lastFetchIdRef.current += 1;
    const fetchId = lastFetchIdRef.current;
    setFetching(true);
    setOptions([]);
    _lib_api__WEBPACK_IMPORTED_MODULE_4___default.a.request({
      url: `/search/users?q=${value}`
    }).then(resp => {
      console.log('user', resp);

      if (fetchId !== lastFetchIdRef.current) {
        return;
      }

      const data = resp.data.items.map(user => ({
        text: user.login,
        value: user.login
      }));
      setFetching(false);
      setOptions(data);
    });
  }, 500), []);

  const handleChange = value => {
    setOptions([]);
    setFetching(false);
    onChange(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      width: 200
    },
    showSearch: true,
    notFoundContent: fetching ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small"
    }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, "nothing"),
    filterOption: false,
    placeholder: "\u521B\u5EFA\u8005",
    onChange: handleChange,
    value: value,
    onSearch: fetchUser,
    allowClear: true
  }, options.map(op => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Option, {
    value: op.value,
    key: op.value
  }, op.text)));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchUser);

/***/ }),

/***/ "./components/with-repo-basic.jsx":
/*!****************************************!*\
  !*** ./components/with-repo-basic.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Repo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Repo */ "./components/Repo.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/repo-basic-cache */ "./lib/repo-basic-cache.js");











const isServer = "undefined" === 'undefined';
/* harmony default export */ __webpack_exports__["default"] = ((Comp, type = 'index') => {
  const makeQuery = queryObject => {
    const query = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_2___default()(queryObject).reduce((result, entry) => {
      result.push(entry.join('='));
      return result;
    }, []).join('&');

    return `?${query}`;
  };

  const WithDetail = (_ref) => {
    let {
      router,
      repoBasic
    } = _ref,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "repoBasic"]);

    const query = makeQuery(router.query);
    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
      if (!isServer) {
        Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_9__["cache"])(repoBasic);
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1251108973" + " " + "root"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1251108973" + " " + "repo-basic"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Repo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      repo: repoBasic
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1251108973" + " " + "tabs"
    }, type === 'index' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1251108973" + " " + "tab"
    }, "Readme") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: `/detail${query}`
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "jsx-1251108973" + " " + "tab index"
    }, "Readme")), type === 'issues' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: "jsx-1251108973" + " " + "tab"
    }, "Issues") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: `/detail/issues${query}`
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
      className: "jsx-1251108973" + " " + "tab issues"
    }, "Issues")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-1251108973"
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Comp, rest)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "1251108973"
    }, ".root.jsx-1251108973{padding-top:20px;}.repo-basic.jsx-1251108973{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1251108973+.tab.jsx-1251108973{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEb0IsQUFHOEIsQUFHSixBQU1JLGFBTEssSUFIeEIsQUFTQSxrQkFMcUIsbUJBQ0Qsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVwbyBmcm9tICcuL1JlcG8nXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXG5pbXBvcnQgeyBnZXQsIGNhY2hlIH0gZnJvbSAnLi4vbGliL3JlcG8tYmFzaWMtY2FjaGUnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGRlZmF1bHQgKENvbXAsIHR5cGUgPSAnaW5kZXgnKSA9PiB7XG5cbiAgY29uc3QgbWFrZVF1ZXJ5ID0gKHF1ZXJ5T2JqZWN0KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBPYmplY3QuZW50cmllcyhxdWVyeU9iamVjdClcbiAgICAucmVkdWNlKChyZXN1bHQsIGVudHJ5KSA9PiB7XG4gICAgICByZXN1bHQucHVzaChlbnRyeS5qb2luKCc9JykpXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfSwgW10pLmpvaW4oJyYnKVxuICAgIHJldHVybiBgPyR7cXVlcnl9YFxuICB9XG5cbiAgY29uc3QgV2l0aERldGFpbCA9ICh7IHJvdXRlciwgcmVwb0Jhc2ljLCAuLi5yZXN0IH0pID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IG1ha2VRdWVyeShyb3V0ZXIucXVlcnkpXG4gIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAoIWlzU2VydmVyKSB7XG4gICAgICAgIGNhY2hlKHJlcG9CYXNpYylcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXBvLWJhc2ljXCI+XG4gICAgICAgICAgPFJlcG8gcmVwbz17cmVwb0Jhc2ljfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFic1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlID09PSAnaW5kZXgnID8gXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPlJlYWRtZTwvc3Bhbj4gOlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbCR7cXVlcnl9YH0+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGFiIGluZGV4XCI+UmVhZG1lPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGUgPT09ICdpc3N1ZXMnID8gXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYlwiPklzc3Vlczwvc3Bhbj4gOlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2RldGFpbC9pc3N1ZXMke3F1ZXJ5fWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpc3N1ZXNcIj5Jc3N1ZXM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPENvbXAgey4uLnJlc3R9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJvb3Qge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgfSAgXG4gICAgICAgICAgLnJlcG8tYmFzaWMge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGFiICsgLnRhYiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBXaXRoRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG5cbiAgICBjb25zdCB7IHJvdXRlciwgY3R4IH0gPSBjb250ZXh0IFxuICAgIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuXG4gICAgY29uc3QgZnVsbF9uYW1lID0gYCR7b3duZXJ9LyR7bmFtZX1gXG4gIFxuICAgIGxldCBwYWdlRGF0YSA9IHt9XG4gICAgaWYgKENvbXAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBwYWdlRGF0YSA9IGF3YWl0IENvbXAuZ2V0SW5pdGlhbFByb3BzKGNvbnRleHQpXG4gICAgfVxuXG4gICAgaWYgKGdldChmdWxsX25hbWUpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXBvQmFzaWM6IGdldChmdWxsX25hbWUpLFxuICAgICAgICAuLi5wYWdlRGF0YVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlcG9CYXNpYyA9IGF3YWl0IGFwaS5yZXF1ZXN0KFxuICAgICAge1xuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfWAsXG4gICAgICB9LFxuICAgICAgY3R4LnJlcSxcbiAgICAgIGN0eC5yZXNcbiAgICApXG5cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxuICAgICAgLi4ucGFnZURhdGFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aFJvdXRlcihXaXRoRGV0YWlsKVxufSJdfQ== */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/components/with-repo-basic.jsx */"));
  };

  WithDetail.getInitialProps = async context => {
    const {
      router,
      ctx
    } = context;
    const {
      owner,
      name
    } = ctx.query;
    const full_name = `${owner}/${name}`;
    let pageData = {};

    if (Comp.getInitialProps) {
      pageData = await Comp.getInitialProps(context);
    }

    if (Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_9__["get"])(full_name)) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
        repoBasic: Object(_lib_repo_basic_cache__WEBPACK_IMPORTED_MODULE_9__["get"])(full_name)
      }, pageData);
    }

    const repoBasic = await _lib_api__WEBPACK_IMPORTED_MODULE_8___default.a.request({
      url: `/repos/${owner}/${name}`
    }, ctx.req, ctx.res);
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      repoBasic: repoBasic.data
    }, pageData);
  };

  return Object(next_router__WEBPACK_IMPORTED_MODULE_6__["withRouter"])(WithDetail);
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

/***/ "./lib/repo-basic-cache.js":
/*!*********************************!*\
  !*** ./lib/repo-basic-cache.js ***!
  \*********************************/
/*! exports provided: get, cache, cacheArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cache", function() { return cache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheArray", function() { return cacheArray; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lru-cache */ "lru-cache");
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lru_cache__WEBPACK_IMPORTED_MODULE_1__);


const REPO_CACHE = new lru_cache__WEBPACK_IMPORTED_MODULE_1___default.a({
  maxAge: 1000 * 60 * 60
}); // facebook/react

const get = full_name => {
  return REPO_CACHE.get(full_name);
};
const cache = repo => {
  const full_name = repo.full_name;
  return REPO_CACHE.set(full_name, repo);
};
const cacheArray = repos => {
  if (repos && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(repos)) {
    repos.forEach(repo => cache(repo));
  }
};

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: getLastUpdated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastUpdated", function() { return getLastUpdated; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const getLastUpdated = time => {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).fromNow();
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/entries.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/entries */ "core-js/library/fn/object/entries");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
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

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin */ "antd/lib/spin");
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/avatar */ "antd/lib/avatar");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _components_SearchUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SearchUser */ "./components/SearchUser.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");













const MdRenderer = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx")],
    modules: ['../../components/MarkdownRenderer']
  }
});

const IssueDetail = ({
  issue
}) => {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2169885453" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MdRenderer, {
    content: issue.body
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2169885453" + " " + "actions"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "\u6253\u5F00Issue\u8BA8\u8BBA\u9875\u9762")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2169885453"
  }, ".root.jsx-2169885453{background:#fafafa;padding:20px;}.actions.jsx-2169885453{text-aligin:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmdCLEFBRzRCLEFBSUQsa0JBQ3BCLENBSmUsYUFDZiIsImZpbGUiOiIvVXNlcnMveWFuZ3NoYXNoYS9Eb3dubG9hZHMvd29ya3NwYWNlL2NvZGluZy9ub2RlanMvTmV4dEpzR2l0aHViL25leHRqcy1wcm9qZWN0L3BhZ2VzL2RldGFpbC9pc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uLCBTZWxlY3QsIFNwaW4gfSBmcm9tICdhbnRkJ1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuaW1wb3J0IFdpdGhSZXBvQmFzaWMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93aXRoLXJlcG8tYmFzaWMnXG5pbXBvcnQgU2VhcmNoVXNlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlYXJjaFVzZXInXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL2xpYi9hcGknXG5pbXBvcnQgeyBnZXRMYXN0VXBkYXRlZCB9IGZyb20gJy4uLy4uL2xpYi91dGlscydcblxuY29uc3QgTWRSZW5kZXJlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyZXInKSlcblxuXG5jb25zdCBJc3N1ZURldGFpbCA9ICh7IGlzc3VlIH0pID0+IHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiID5cbiAgICA8TWRSZW5kZXJlciBjb250ZW50PXtpc3N1ZS5ib2R5fSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+5omT5byASXNzdWXorqjorrrpobXpnaI8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucm9vdCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB9ICBcbiAgICAgIC5hY3Rpb25zIHtcbiAgICAgICAgdGV4dC1hbGlnaW46IHJpZ2h0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG59XG5cbmNvbnN0IElzc3VlSXRlbSA9ICh7IGlzc3VlIH0pID0+IHtcblxuICBjb25zdCBbc2hvd0RldGFpbCwgc2V0U2hvd0RldGFpbF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCB0b2dnbGVTaG93RGV0YWlsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsID0+ICFkZXRhaWwpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVcIj5cbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiIFxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiIFxuICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAxMCwgdG9wOiAxMH19XG4gICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgc2hvd0RldGFpbCA/ICfpmpDol48nIDogJ+afpeeciycgfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cbiAgICAgICAgICA8QXZhdGFyICBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cbiAgICAgICAgICA8aDY+XG4gICAgICAgICAgICA8c3Bhbj57aXNzdWUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cbiAgICAgICAgICAgIDxzcGFuPlVwZGF0ZWQgYXQge2dldExhc3RVcGRhdGVkKGlzc3VlLnVwZGF0ZWRfYXQpfTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmlzc3VlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIH0gIFxuICAgICAgICAgIC5pc3N1ZTpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXNzdWUgKyAuaXNzdWUge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5tYWluLWluZm8gPiBoNiB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zdWItaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgeyBzaG93RGV0YWlsID8gPElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz4gOiBudWxsIH1cbiAgICA8L2Rpdj5cbiAgICBcbiAgKVxufVxuXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uXG5jb25zdCBJc3N1ZXMgPSAoeyBpbml0aWFsSXNzdWVzLCBsYWJlbHMsIG93bmVyLCBuYW1lIH0pID0+IHtcblxuICBjb25zdCBbY3JlYXRvciwgc2V0Q3JlYXRvcl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbbGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaXNzdWVzLCBzZXRJc3N1ZXNdID0gdXNlU3RhdGUoaW5pdGlhbElzc3VlcylcbiAgY29uc3QgW2ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVDcmVhdG9yQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xuICAgIHNldENyZWF0b3IodmFsdWUpXG4gIH0sIFtdKVxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBzZXRTdGF0ZSh2YWx1ZSlcbiAgfSwgW10pXG4gIGNvbnN0IGhhbmRsZUxhYmVsQ2hhbmdlID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4ge1xuICAgIHNldExhYmVsKHZhbHVlKVxuICB9LCBbXSlcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEZldGNoaW5nKHRydWUpXG4gICAgYXBpLnJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3VlcyR7bWFrZVF1ZXJ5KFxuICAgICAgICAgIGNyZWF0b3IsXG4gICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgKX1gLFxuICAgICAgfVxuICAgICkudGhlbihyZXNwID0+IHtcbiAgICAgIHNldElzc3VlcyhyZXNwLmRhdGEpXG4gICAgICBzZXRGZXRjaGluZyhmYWxzZSlcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICBzZXRGZXRjaGluZyhmYWxzZSlcbiAgICB9KVxuICB9LCBbb3duZXIsIG5hbWUsIGNyZWF0b3IsIHN0YXRlLCBsYWJlbF0pXG5cbiAgY29uc3QgbWFrZVF1ZXJ5ID0gKGNyZWF0b3IsIHN0YXRlLCBsYWJlbHMpID0+IHtcbiAgICBsZXQgY3JlYXRvclN0ciA9IGNyZWF0b3IgPyBgY3JlYXRvcj0ke2NyZWF0b3J9YCA6ICcnXG4gICAgbGV0IHN0YXRlU3RyID0gc3RhdGUgPyBgc3RhdGU9JHtzdGF0ZX1gIDogJydcbiAgICBsZXQgbGFiZWxTdHIgPSAnJ1xuICAgIGlmIChsYWJlbHMgJiYgbGFiZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxhYmVsU3RyID0gYGxhYmVscz0ke2xhYmVscy5qb2luKCcsJyl9YFxuICAgIH1cbiAgICBjb25zdCBhcnIgPSBbXVxuICAgIGlmIChjcmVhdG9yU3RyKSBhcnIucHVzaChjcmVhdG9yU3RyKVxuICAgIGlmIChzdGF0ZVN0cikgYXJyLnB1c2goc3RhdGVTdHIpXG4gICAgaWYgKGxhYmVsU3RyKSBhcnIucHVzaChsYWJlbFN0cilcbiAgICByZXR1cm4gYD8ke2Fyci5qb2luKCcmJyl9YFxuICAgIFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgIDxTZWFyY2hVc2VyIFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDcmVhdG9yQ2hhbmdlfSBcbiAgICAgICAgICB2YWx1ZT17Y3JlYXRvcn0gXG4gICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLnirbmgIFcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17c3RhdGV9XG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogMjAwLCBtYXJnaW5MZWZ0OiAyMH19XG4gICAgICAgID5cbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYWxsXCI+YWxsPC9PcHRpb24+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIm9wZW5cIj5vcGVuPC9PcHRpb24+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNsb3NlZFwiPmNsb3NlZDwvT3B0aW9uPlxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPFNlbGVjdCBcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwibGFiZWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVMYWJlbENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17bGFiZWx9XG4gICAgICAgICAgc3R5bGU9e3tmbGV4R3JvdzogMSwgbWFyZ2luTGVmdDogMjAsIG1hcmdpblJpZ2h0OiAyMH19XG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbHMubWFwKGxhID0+IFxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPXtsYS5uYW1lfSBrZXk9e2xhLmlkfT5cbiAgICAgICAgICAgICAgICB7bGEubmFtZX1cbiAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH1cbiAgICAgICAgICBkaXNhYmxlZD17ZmV0Y2hpbmd9XG4gICAgICAgID7mkJzntKI8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge1xuICAgICAgICBmZXRjaGluZyA/IDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjxTcGluIC8+PC9kaXY+IDpcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZXNcIj5cbiAgICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZSA9PiA8SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmlzc3VlcyB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9ICBcbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgY3R4IH0pID0+IHtcbiAgY29uc3QgeyBvd25lciwgbmFtZSB9ID0gY3R4LnF1ZXJ5XG4gIGNvbnN0IGZldGNocyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBhd2FpdCBhcGkucmVxdWVzdChcbiAgICAgIHtcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxuICAgICAgfSxcbiAgICAgIGN0eC5yZXEsXG4gICAgICBjdHgucmVzXG4gICAgKSxcbiAgICBhd2FpdCBhcGkucmVxdWVzdChcbiAgICAgIHtcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vbGFiZWxzYFxuICAgICAgfSwgXG4gICAgICBjdHgucmVxLFxuICAgICAgY3R4LnJlc1xuICAgIClcbiAgXSlcblxuICByZXR1cm4ge1xuICAgIG93bmVyLFxuICAgIG5hbWUsXG4gICAgaW5pdGlhbElzc3VlczogZmV0Y2hzWzBdLmRhdGEsXG4gICAgbGFiZWxzOiBmZXRjaHNbMV0uZGF0YVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhSZXBvQmFzaWMoSXNzdWVzLCAnaXNzdWVzJykiXX0= */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/pages/detail/issues.js */"));
};

const IssueItem = ({
  issue
}) => {
  const [showDetail, setShowDetail] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    setShowDetail(detail => !detail);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-3118405156" + " " + "issue"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? '隐藏' : '查看'), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-3118405156" + " " + "avatar"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-3118405156" + " " + "main-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
    className: "jsx-3118405156"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-3118405156"
  }, issue.title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-3118405156" + " " + "sub-info"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-3118405156"
  }, "Updated at ", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["getLastUpdated"])(issue.updated_at)))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "3118405156"
  }, ".issue.jsx-3118405156{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-3118405156:hover{background:#fafafa;}.issue.jsx-3118405156+.issue.jsx-3118405156{border-top:1px solid #eee;}.main-info.jsx-3118405156>h6.jsx-3118405156{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-3118405156{margin-right:20px;}.sub-info.jsx-3118405156{margin-bottom:0;}.sub-info.jsx-3118405156>span.jsx-3118405156+span.jsx-3118405156{display:inline;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRG9CLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdELGVBQ0UsQ0FYRixBQVFqQixFQUhBLENBWEEsT0FHQSxLQUlxQixDQVdKLGVBQ2pCLEdBWEEsd0JBYm9CLGtCQUNMLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL3lhbmdzaGFzaGEvRG93bmxvYWRzL3dvcmtzcGFjZS9jb2Rpbmcvbm9kZWpzL05leHRKc0dpdGh1Yi9uZXh0anMtcHJvamVjdC9wYWdlcy9kZXRhaWwvaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBXaXRoUmVwb0Jhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljJ1xuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgZ2V0TGFzdFVwZGF0ZWQgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXG5cbmNvbnN0IE1kUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcmVyJykpXG5cblxuY29uc3QgSXNzdWVEZXRhaWwgPSAoeyBpc3N1ZSB9KSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIiA+XG4gICAgPE1kUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPuaJk+W8gElzc3Vl6K6o6K666aG16Z2iPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnJvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgfSAgXG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ2luOiByaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxufVxuXG5jb25zdCBJc3N1ZUl0ZW0gPSAoeyBpc3N1ZSB9KSA9PiB7XG5cbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcbiAgICAgICAgICBzaXplPVwic21hbGxcIiBcbiAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XG4gICAgICAgID5cbiAgICAgICAgICB7IHNob3dEZXRhaWwgPyAn6ZqQ6JePJyA6ICfmn6XnnIsnIH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgPEF2YXRhciAgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgPGg2PlxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pc3N1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgc2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbCB9XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cblxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvblxuY29uc3QgSXNzdWVzID0gKHsgaW5pdGlhbElzc3VlcywgbGFiZWxzLCBvd25lciwgbmFtZSB9KSA9PiB7XG5cbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRpYWxJc3N1ZXMpXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxuICB9LCBbXSlcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgc2V0U3RhdGUodmFsdWUpXG4gIH0sIFtdKVxuICBjb25zdCBoYW5kbGVMYWJlbENoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBzZXRMYWJlbCh2YWx1ZSlcbiAgfSwgW10pXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGZXRjaGluZyh0cnVlKVxuICAgIGFwaS5yZXF1ZXN0KFxuICAgICAge1xuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShcbiAgICAgICAgICBjcmVhdG9yLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICl9YCxcbiAgICAgIH1cbiAgICApLnRoZW4ocmVzcCA9PiB7XG4gICAgICBzZXRJc3N1ZXMocmVzcC5kYXRhKVxuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXG4gICAgfSlcbiAgfSwgW293bmVyLCBuYW1lLCBjcmVhdG9yLCBzdGF0ZSwgbGFiZWxdKVxuXG4gIGNvbnN0IG1ha2VRdWVyeSA9IChjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSA9PiB7XG4gICAgbGV0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJ1xuICAgIGxldCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnXG4gICAgbGV0IGxhYmVsU3RyID0gJydcbiAgICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSB7XG4gICAgICBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWBcbiAgICB9XG4gICAgY29uc3QgYXJyID0gW11cbiAgICBpZiAoY3JlYXRvclN0cikgYXJyLnB1c2goY3JlYXRvclN0cilcbiAgICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKVxuICAgIGlmIChsYWJlbFN0cikgYXJyLnB1c2gobGFiZWxTdHIpXG4gICAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWBcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICA8U2VhcmNoVXNlciBcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ3JlYXRvckNoYW5nZX0gXG4gICAgICAgICAgdmFsdWU9e2NyZWF0b3J9IFxuICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImFsbFwiPmFsbDwvT3B0aW9uPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvT3B0aW9uPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L09wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhYmVsXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2xhYmVsfVxuICAgICAgICAgIHN0eWxlPXt7ZmxleEdyb3c6IDEsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5SaWdodDogMjB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWxzLm1hcChsYSA9PiBcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGEubmFtZX0ga2V5PXtsYS5pZH0+XG4gICAgICAgICAgICAgICAge2xhLm5hbWV9XG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgZGlzYWJsZWQ9e2ZldGNoaW5nfVxuICAgICAgICA+5pCc57SiPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgZmV0Y2hpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48U3BpbiAvPjwvZGl2PiA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pc3N1ZXMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfSAgXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuICBjb25zdCBmZXRjaHMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcbiAgICAgIH0sXG4gICAgICBjdHgucmVxLFxuICAgICAgY3R4LnJlc1xuICAgICksXG4gICAgYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcbiAgICAgIH0sIFxuICAgICAgY3R4LnJlcSxcbiAgICAgIGN0eC5yZXNcbiAgICApXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBvd25lcixcbiAgICBuYW1lLFxuICAgIGluaXRpYWxJc3N1ZXM6IGZldGNoc1swXS5kYXRhLFxuICAgIGxhYmVsczogZmV0Y2hzWzFdLmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpIl19 */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/pages/detail/issues.js */")), showDetail ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueDetail, {
    issue: issue
  }) : null);
};

const Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a.Option;

const Issues = ({
  initialIssues,
  labels,
  owner,
  name
}) => {
  const [creator, setCreator] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])();
  const [state, setState] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])();
  const [label, setLabel] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])([]);
  const [issues, setIssues] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(initialIssues);
  const [fetching, setFetching] = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const handleCreatorChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(value => {
    setCreator(value);
  }, []);
  const handleStateChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(value => {
    setState(value);
  }, []);
  const handleLabelChange = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(value => {
    setLabel(value);
  }, []);
  const handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(() => {
    setFetching(true);
    _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
      url: `/repos/${owner}/${name}/issues${makeQuery(creator, state, label)}`
    }).then(resp => {
      setIssues(resp.data);
      setFetching(false);
    }).catch(err => {
      console.error(err);
      setFetching(false);
    });
  }, [owner, name, creator, state, label]);

  const makeQuery = (creator, state, labels) => {
    let creatorStr = creator ? `creator=${creator}` : '';
    let stateStr = state ? `state=${state}` : '';
    let labelStr = '';

    if (labels && labels.length > 0) {
      labelStr = `labels=${labels.join(',')}`;
    }

    const arr = [];
    if (creatorStr) arr.push(creatorStr);
    if (stateStr) arr.push(stateStr);
    if (labelStr) arr.push(labelStr);
    return `?${arr.join('&')}`;
  };

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1191597580" + " " + "root"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1191597580" + " " + "search"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SearchUser__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: handleCreatorChange,
    value: creator
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    placeholder: "\u72B6\u6001",
    onChange: handleStateChange,
    value: state,
    style: {
      width: 200,
      marginLeft: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
    value: "all"
  }, "all"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
    value: "open"
  }, "open"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
    value: "closed"
  }, "closed")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mode: "multiple",
    placeholder: "label",
    onChange: handleLabelChange,
    value: label,
    style: {
      flexGrow: 1,
      marginLeft: 20,
      marginRight: 20
    }
  }, labels.map(la => react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Option, {
    value: la.name,
    key: la.id
  }, la.name))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "primary",
    onClick: handleSearch,
    disabled: fetching
  }, "\u641C\u7D22")), fetching ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1191597580" + " " + "loading"
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_1___default.a, null)) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-1191597580" + " " + "issues"
  }, issues.map(issue => react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueItem, {
    issue: issue,
    key: issue.id
  }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "1191597580"
  }, ".issues.jsx-1191597580{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-1191597580{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-1191597580{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvcGFnZXMvZGV0YWlsL2lzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErTGtCLEFBR2lDLEFBTVQsQUFHQSxhQUNBLFNBVEssa0JBQ0MsbUJBQ0gsZUFJbEIsQ0FIQSxZQU9xQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiL1VzZXJzL3lhbmdzaGFzaGEvRG93bmxvYWRzL3dvcmtzcGFjZS9jb2Rpbmcvbm9kZWpzL05leHRKc0dpdGh1Yi9uZXh0anMtcHJvamVjdC9wYWdlcy9kZXRhaWwvaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiwgU2VsZWN0LCBTcGluIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcbmltcG9ydCBXaXRoUmVwb0Jhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljJ1xuaW1wb3J0IFNlYXJjaFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hVc2VyJ1xuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xuaW1wb3J0IHsgZ2V0TGFzdFVwZGF0ZWQgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXG5cbmNvbnN0IE1kUmVuZGVyZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcmVyJykpXG5cblxuY29uc3QgSXNzdWVEZXRhaWwgPSAoeyBpc3N1ZSB9KSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIiA+XG4gICAgPE1kUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIj5cbiAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPuaJk+W8gElzc3Vl6K6o6K666aG16Z2iPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnJvb3Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgfSAgXG4gICAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ2luOiByaWdodDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxufVxuXG5jb25zdCBJc3N1ZUl0ZW0gPSAoeyBpc3N1ZSB9KSA9PiB7XG5cbiAgY29uc3QgW3Nob3dEZXRhaWwsIHNldFNob3dEZXRhaWxdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRTaG93RGV0YWlsKGRldGFpbCA9PiAhZGV0YWlsKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcbiAgICAgICAgICBzaXplPVwic21hbGxcIiBcbiAgICAgICAgICBzdHlsZT17e3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogMTAsIHRvcDogMTB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XG4gICAgICAgID5cbiAgICAgICAgICB7IHNob3dEZXRhaWwgPyAn6ZqQ6JePJyA6ICfmn6XnnIsnIH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyXCI+XG4gICAgICAgICAgPEF2YXRhciAgc3JjPXtpc3N1ZS51c2VyLmF2YXRhcl91cmx9IHNoYXBlPVwic3F1YXJlXCIgc2l6ZT17NTB9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1pbmZvXCI+XG4gICAgICAgICAgPGg2PlxuICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XG4gICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5pc3N1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICB9ICBcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdmF0YXIge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3ViLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1Yi1pbmZvID4gc3BhbiArIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsgc2hvd0RldGFpbCA/IDxJc3N1ZURldGFpbCBpc3N1ZT17aXNzdWV9IC8+IDogbnVsbCB9XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cblxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvblxuY29uc3QgSXNzdWVzID0gKHsgaW5pdGlhbElzc3VlcywgbGFiZWxzLCBvd25lciwgbmFtZSB9KSA9PiB7XG5cbiAgY29uc3QgW2NyZWF0b3IsIHNldENyZWF0b3JdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzc3Vlcywgc2V0SXNzdWVzXSA9IHVzZVN0YXRlKGluaXRpYWxJc3N1ZXMpXG4gIGNvbnN0IFtmZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRvckNoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBzZXRDcmVhdG9yKHZhbHVlKVxuICB9LCBbXSlcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSB1c2VDYWxsYmFjayh2YWx1ZSA9PiB7XG4gICAgc2V0U3RhdGUodmFsdWUpXG4gIH0sIFtdKVxuICBjb25zdCBoYW5kbGVMYWJlbENoYW5nZSA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICBzZXRMYWJlbCh2YWx1ZSlcbiAgfSwgW10pXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRGZXRjaGluZyh0cnVlKVxuICAgIGFwaS5yZXF1ZXN0KFxuICAgICAge1xuICAgICAgICB1cmw6IGAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXMke21ha2VRdWVyeShcbiAgICAgICAgICBjcmVhdG9yLFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGxhYmVsXG4gICAgICAgICl9YCxcbiAgICAgIH1cbiAgICApLnRoZW4ocmVzcCA9PiB7XG4gICAgICBzZXRJc3N1ZXMocmVzcC5kYXRhKVxuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpXG4gICAgfSlcbiAgfSwgW293bmVyLCBuYW1lLCBjcmVhdG9yLCBzdGF0ZSwgbGFiZWxdKVxuXG4gIGNvbnN0IG1ha2VRdWVyeSA9IChjcmVhdG9yLCBzdGF0ZSwgbGFiZWxzKSA9PiB7XG4gICAgbGV0IGNyZWF0b3JTdHIgPSBjcmVhdG9yID8gYGNyZWF0b3I9JHtjcmVhdG9yfWAgOiAnJ1xuICAgIGxldCBzdGF0ZVN0ciA9IHN0YXRlID8gYHN0YXRlPSR7c3RhdGV9YCA6ICcnXG4gICAgbGV0IGxhYmVsU3RyID0gJydcbiAgICBpZiAobGFiZWxzICYmIGxhYmVscy5sZW5ndGggPiAwKSB7XG4gICAgICBsYWJlbFN0ciA9IGBsYWJlbHM9JHtsYWJlbHMuam9pbignLCcpfWBcbiAgICB9XG4gICAgY29uc3QgYXJyID0gW11cbiAgICBpZiAoY3JlYXRvclN0cikgYXJyLnB1c2goY3JlYXRvclN0cilcbiAgICBpZiAoc3RhdGVTdHIpIGFyci5wdXNoKHN0YXRlU3RyKVxuICAgIGlmIChsYWJlbFN0cikgYXJyLnB1c2gobGFiZWxTdHIpXG4gICAgcmV0dXJuIGA/JHthcnIuam9pbignJicpfWBcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICA8U2VhcmNoVXNlciBcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ3JlYXRvckNoYW5nZX0gXG4gICAgICAgICAgdmFsdWU9e2NyZWF0b3J9IFxuICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0IFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54q25oCBXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3N0YXRlfVxuICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IDIwMCwgbWFyZ2luTGVmdDogMjB9fVxuICAgICAgICA+XG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImFsbFwiPmFsbDwvT3B0aW9uPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJvcGVuXCI+b3BlbjwvT3B0aW9uPlxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjbG9zZWRcIj5jbG9zZWQ8L09wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxTZWxlY3QgXG4gICAgICAgICAgbW9kZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhYmVsXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTGFiZWxDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e2xhYmVsfVxuICAgICAgICAgIHN0eWxlPXt7ZmxleEdyb3c6IDEsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5SaWdodDogMjB9fVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbGFiZWxzLm1hcChsYSA9PiBcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17bGEubmFtZX0ga2V5PXtsYS5pZH0+XG4gICAgICAgICAgICAgICAge2xhLm5hbWV9XG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZWFyY2h9XG4gICAgICAgICAgZGlzYWJsZWQ9e2ZldGNoaW5nfVxuICAgICAgICA+5pCc57SiPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgZmV0Y2hpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48U3BpbiAvPjwvZGl2PiA6XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XG4gICAgICAgICAge2lzc3Vlcy5tYXAoaXNzdWUgPT4gPElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5pc3N1ZXMge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfSAgXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvYWRpbmcge1xuICAgICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuSXNzdWVzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IGN0eCB9KSA9PiB7XG4gIGNvbnN0IHsgb3duZXIsIG5hbWUgfSA9IGN0eC5xdWVyeVxuICBjb25zdCBmZXRjaHMgPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2lzc3Vlc2BcbiAgICAgIH0sXG4gICAgICBjdHgucmVxLFxuICAgICAgY3R4LnJlc1xuICAgICksXG4gICAgYXdhaXQgYXBpLnJlcXVlc3QoXG4gICAgICB7XG4gICAgICAgIHVybDogYC9yZXBvcy8ke293bmVyfS8ke25hbWV9L2xhYmVsc2BcbiAgICAgIH0sIFxuICAgICAgY3R4LnJlcSxcbiAgICAgIGN0eC5yZXNcbiAgICApXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBvd25lcixcbiAgICBuYW1lLFxuICAgIGluaXRpYWxJc3N1ZXM6IGZldGNoc1swXS5kYXRhLFxuICAgIGxhYmVsczogZmV0Y2hzWzFdLmRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaXRoUmVwb0Jhc2ljKElzc3VlcywgJ2lzc3VlcycpIl19 */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/pages/detail/issues.js */"));
};

Issues.getInitialProps = async ({
  ctx
}) => {
  const {
    owner,
    name
  } = ctx.query;
  const fetchs = await _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.all([await _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
    url: `/repos/${owner}/${name}/issues`
  }, ctx.req, ctx.res), await _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
    url: `/repos/${owner}/${name}/labels`
  }, ctx.req, ctx.res)]);
  return {
    owner,
    name,
    initialIssues: fetchs[0].data,
    labels: fetchs[1].data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_8__["default"])(Issues, 'issues'));

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/detail/issues.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/pages/detail/issues.js */"./pages/detail/issues.js");


/***/ }),

/***/ "antd/lib/avatar":
/*!**********************************!*\
  !*** external "antd/lib/avatar" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/spin":
/*!********************************!*\
  !*** external "antd/lib/spin" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

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

/***/ "core-js/library/fn/object/entries":
/*!****************************************************!*\
  !*** external "core-js/library/fn/object/entries" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/entries");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

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

/***/ "lodash/debounce":
/*!**********************************!*\
  !*** external "lodash/debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),

/***/ "lru-cache":
/*!****************************!*\
  !*** external "lru-cache" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lru-cache");

/***/ }),

/***/ "markdown-it":
/*!******************************!*\
  !*** external "markdown-it" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("markdown-it");

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

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
//# sourceMappingURL=issues.js.map