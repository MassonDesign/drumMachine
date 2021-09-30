"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Pads.js":
/*!****************************!*\
  !*** ./components/Pads.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/fredericmasson/Documents/Code/freeCodeCamp/drummachine/components/Pads.js\";\n\n\nfunction Pads(_ref) {\n  var _this = this;\n\n  var drumPads = _ref.drumPads,\n      displayed = _ref.displayed;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-cols-3 flex-auto\",\n    children: drumPads.map(function (_ref2) {\n      var keyId = _ref2.keyId,\n          keyName = _ref2.keyName,\n          id = _ref2.id,\n          url = _ref2.url;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: id,\n        className: \"drum-pad p-2 bg-purple-500 m-2 rounded-md text-center cursor-pointer\",\n        onClick: function onClick(e) {\n          return displayed(e, id, url);\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n          src: url,\n          className: \"clip\",\n          id: id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"font-semibold text-xl text-white\",\n          children: keyName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 6\n        }, _this)]\n      }, keyId, true, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 5\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 3\n  }, this);\n}\n\n_c = Pads;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pads);\n\nvar _c;\n\n$RefreshReg$(_c, \"Pads\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLElBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3RDLHNCQUNDO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUEsY0FDRUQsUUFBUSxDQUFDRSxHQUFULENBQWE7QUFBQSxVQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxVQUFVQyxPQUFWLFNBQVVBLE9BQVY7QUFBQSxVQUFtQkMsRUFBbkIsU0FBbUJBLEVBQW5CO0FBQUEsVUFBdUJDLEdBQXZCLFNBQXVCQSxHQUF2QjtBQUFBLDBCQUNiO0FBRUMsVUFBRSxFQUFFRCxFQUZMO0FBR0MsaUJBQVMsRUFBQyxzRUFIWDtBQUlDLGVBQU8sRUFBRSxpQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPTixTQUFTLENBQUNNLENBQUQsRUFBSUYsRUFBSixFQUFRQyxHQUFSLENBQWhCO0FBQUEsU0FKVjtBQUFBLGdDQU1DO0FBQU8sYUFBRyxFQUFFQSxHQUFaO0FBQWlCLG1CQUFTLEVBQUMsTUFBM0I7QUFBa0MsWUFBRSxFQUFFRDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5ELGVBT0M7QUFBRyxtQkFBUyxFQUFDLGtDQUFiO0FBQUEsb0JBQWlERDtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBEO0FBQUEsU0FDTUQsS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGE7QUFBQSxLQUFiO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0tBaEJRSjtBQWtCVCwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZHMuanM/NDIyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBQYWRzKHsgZHJ1bVBhZHMsIGRpc3BsYXllZCB9KSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzLTMgZmxleC1hdXRvJz5cblx0XHRcdHtkcnVtUGFkcy5tYXAoKHsga2V5SWQsIGtleU5hbWUsIGlkLCB1cmwgfSkgPT4gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0a2V5PXtrZXlJZH1cblx0XHRcdFx0XHRpZD17aWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdkcnVtLXBhZCBwLTIgYmctcHVycGxlLTUwMCBtLTIgcm91bmRlZC1tZCB0ZXh0LWNlbnRlciBjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gZGlzcGxheWVkKGUsIGlkLCB1cmwpfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGF1ZGlvIHNyYz17dXJsfSBjbGFzc05hbWU9J2NsaXAnIGlkPXtpZH0gLz5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LXdoaXRlJz57a2V5TmFtZX08L3A+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZHM7XG4iXSwibmFtZXMiOlsiUGFkcyIsImRydW1QYWRzIiwiZGlzcGxheWVkIiwibWFwIiwia2V5SWQiLCJrZXlOYW1lIiwiaWQiLCJ1cmwiLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pads.js\n");

/***/ })

});