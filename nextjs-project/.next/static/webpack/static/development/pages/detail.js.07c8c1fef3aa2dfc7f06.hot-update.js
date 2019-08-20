webpackHotUpdate("static/development/pages/detail.js",{

/***/ "./components/WithRepoBasic.jsx":
/*!**************************************!*\
  !*** ./components/WithRepoBasic.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _repo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./repo */ "./components/repo.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_10__);











/* harmony default export */ __webpack_exports__["default"] = (function (Comp) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'index';

  var makeQuery = function makeQuery(queryObject) {
    var query = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_4___default()(queryObject).reduce(function (result, entry) {
      result.push(entry.join('='));
      return result;
    }, []).join('&');

    return "?".concat(query);
  };

  var WithDetail = function WithDetail(_ref) {
    var router = _ref.router,
        repoBasic = _ref.repoBasic,
        rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["router", "repoBasic"]);

    var query = makeQuery(router.query);
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1251108973" + " " + "root"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1251108973" + " " + "repo-basic"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_repo__WEBPACK_IMPORTED_MODULE_9__["default"], {
      repo: repoBasic
    }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1251108973" + " " + "tabs"
    }, type === 'index' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1251108973"
    }, "Readme") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/detail".concat(query)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-1251108973" + " " + "tab index"
    }, "Readme")), type === 'issues' ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
      className: "jsx-1251108973"
    }, "Issues") : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/detail/issues".concat(query)
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
      className: "jsx-1251108973" + " " + "tab issues"
    }, "Issues")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: "jsx-1251108973"
    }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Comp, rest)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
      id: "1251108973"
    }, ".root.jsx-1251108973{padding-top:20px;}.repo-basic.jsx-1251108973{padding:20px;border:1px solid #eee;margin-bottom:20px;border-radius:5px;}.tab.jsx-1251108973+.tab.jsx-1251108973{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95YW5nc2hhc2hhL0Rvd25sb2Fkcy93b3Jrc3BhY2UvY29kaW5nL25vZGVqcy9OZXh0SnNHaXRodWIvbmV4dGpzLXByb2plY3QvY29tcG9uZW50cy9XaXRoUmVwb0Jhc2ljLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBRzhCLEFBR0osQUFNSSxhQUxLLElBSHhCLEFBU0Esa0JBTHFCLG1CQUNELGtCQUNwQiIsImZpbGUiOiIvVXNlcnMveWFuZ3NoYXNoYS9Eb3dubG9hZHMvd29ya3NwYWNlL2NvZGluZy9ub2RlanMvTmV4dEpzR2l0aHViL25leHRqcy1wcm9qZWN0L2NvbXBvbmVudHMvV2l0aFJlcG9CYXNpYy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVwbyBmcm9tICcuL3JlcG8nXG5pbXBvcnQgYXBpIGZyb20gJy4uL2xpYi9hcGknXG5cbmV4cG9ydCBkZWZhdWx0IChDb21wLCB0eXBlID0gJ2luZGV4JykgPT4ge1xuXG4gIGNvbnN0IG1ha2VRdWVyeSA9IChxdWVyeU9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmVudHJpZXMocXVlcnlPYmplY3QpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBlbnRyeSkgPT4ge1xuICAgICAgcmVzdWx0LnB1c2goZW50cnkuam9pbignPScpKVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sIFtdKS5qb2luKCcmJylcbiAgICByZXR1cm4gYD8ke3F1ZXJ5fWBcbiAgfVxuXG4gIGNvbnN0IFdpdGhEZXRhaWwgPSAoeyByb3V0ZXIsIHJlcG9CYXNpYywgLi4ucmVzdCB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnkgPSBtYWtlUXVlcnkocm91dGVyLnF1ZXJ5KVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwby1iYXNpY1wiPlxuICAgICAgICAgIDxSZXBvIHJlcG89e3JlcG9CYXNpY30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnNcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZSA9PT0gJ2luZGV4JyA/IFxuICAgICAgICAgICAgICA8c3Bhbj5SZWFkbWU8L3NwYW4+IDpcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwke3F1ZXJ5fWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRhYiBpbmRleFwiPlJlYWRtZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0eXBlID09PSAnaXNzdWVzJyA/IFxuICAgICAgICAgICAgICA8c3Bhbj5Jc3N1ZXM8L3NwYW4+IDpcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kZXRhaWwvaXNzdWVzJHtxdWVyeX1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0YWIgaXNzdWVzXCI+SXNzdWVzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb21wIHsuLi5yZXN0fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5yb290IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIH0gIFxuICAgICAgICAgIC5yZXBvLWJhc2ljIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhYiArIC50YWIge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgV2l0aERldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xuXG4gICAgY29uc3QgeyByb3V0ZXIsIGN0eCB9ID0gY29udGV4dCBcbiAgICBjb25zdCB7IG93bmVyLCBuYW1lIH0gPSBjdHgucXVlcnlcbiAgICBjb25zdCByZXBvQmFzaWMgPSBhd2FpdCBhcGkucmVxdWVzdChcbiAgICAgIHtcbiAgICAgICAgdXJsOiBgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX1gLFxuICAgICAgfSxcbiAgICAgIGN0eC5yZXEsXG4gICAgICBjdHgucmVzXG4gICAgKVxuICBcbiAgICBsZXQgcGFnZURhdGEgPSB7fVxuICAgIGlmIChDb21wLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZURhdGEgPSBhd2FpdCBDb21wLmdldEluaXRpYWxQcm9wcyhjb250ZXh0KVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZXBvQmFzaWM6IHJlcG9CYXNpYy5kYXRhLFxuICAgICAgLi4ucGFnZURhdGFcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd2l0aFJvdXRlcihXaXRoRGV0YWlsKVxufSJdfQ== */\n/*@ sourceURL=/Users/yangshasha/Downloads/workspace/coding/nodejs/NextJsGithub/nextjs-project/components/WithRepoBasic.jsx */"));
  };

  WithDetail.getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
      var router, ctx, _ctx$query, owner, name, repoBasic, pageData;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              router = context.router, ctx = context.ctx;
              _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
              _context.next = 4;
              return _lib_api__WEBPACK_IMPORTED_MODULE_10___default.a.request({
                url: "/repos/".concat(owner, "/").concat(name)
              }, ctx.req, ctx.res);

            case 4:
              repoBasic = _context.sent;
              pageData = {};

              if (!Comp.getInitialProps) {
                _context.next = 10;
                break;
              }

              _context.next = 9;
              return Comp.getInitialProps(context);

            case 9:
              pageData = _context.sent;

            case 10:
              return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
                repoBasic: repoBasic.data
              }, pageData));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(WithDetail);
});

/***/ })

})
//# sourceMappingURL=detail.js.07c8c1fef3aa2dfc7f06.hot-update.js.map