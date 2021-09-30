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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pads_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pads.js */ \"./components/Pads.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/fredericmasson/Documents/Code/freeCodeCamp/drummachine/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var drumPads = [{\n    keyId: 81,\n    keyName: \"Q\",\n    id: \"Clap\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3\"\n  }, {\n    keyId: 87,\n    keyName: \"W\",\n    id: \"Cymbals\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/461[kb]backhit-crash-glissdown.wav.mp3\"\n  }, {\n    keyId: 69,\n    keyName: \"E\",\n    id: \"eHit\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/64[kb]akaizap.wav.mp3\"\n  }, {\n    keyId: 65,\n    keyName: \"A\",\n    id: \"Snare\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3\"\n  }, {\n    keyId: 83,\n    keyName: \"S\",\n    id: \"Timbal\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/17[kb]TIMB2HIGH.WAV.mp3\"\n  }, {\n    keyId: 68,\n    keyName: \"D\",\n    id: \"Disco\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/26[kb]73.wav.mp3\"\n  }, {\n    keyId: 90,\n    keyName: \"Z\",\n    id: \"Crash\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/96[kb]909-bright-crash.wav.mp3\"\n  }, {\n    keyId: 88,\n    keyName: \"X\",\n    id: \"Kick\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/45[kb]iELECTRIBE-kick-1.wav.mp3\"\n  }, {\n    keyId: 67,\n    keyName: \"C\",\n    id: \"Toms\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/264[kb]ambient_tom_1.wav.mp3\"\n  }];\n\n  var displayed = function displayed(e, id, url) {\n    //console.log(url);\n    setKeyPress(id);\n    var audio = new Audio(url);\n    audio.play();\n  };\n\n  var handleKeyPress = function handleKeyPress(e) {\n    // console.log(e.key);\n    drumPads.map(function (_ref) {\n      var keyName = _ref.keyName,\n          id = _ref.id,\n          url = _ref.url;\n\n      if (e.key == keyName.toLowerCase()) {\n        var audio = new Audio(url);\n        audio.play();\n        setKeyPress(id);\n      }\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    window.addEventListener(\"keydown\", handleKeyPress);\n    return function () {\n      window.removeEventListener(\"keydown\", handleKeyPress);\n    };\n  }, []);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      keyPress = _useState[0],\n      setKeyPress = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    id: \"drum-machine\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Drum Machine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Pads_js__WEBPACK_IMPORTED_MODULE_1__.default, {\n          drumPads: drumPads,\n          displayed: displayed\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"text-center flex-1\",\n          id: \"display\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: \"bg-black text-white p-2 rounded-md w-44 h-10 m-auto\",\n            children: keyPress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"SLxsfI7XawrGm3QiOYqL/+ZrpTo=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FORDtBQU9BLEdBVEQ7O0FBV0FMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmaUIsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQ0wsY0FBbkM7QUFFQSxXQUFPLFlBQU07QUFDWkksTUFBQUEsTUFBTSxDQUFDRSxtQkFBUCxDQUEyQixTQUEzQixFQUFzQ04sY0FBdEM7QUFDQSxLQUZEO0FBR0EsR0FOUSxFQU1OLEVBTk0sQ0FBVDs7QUFRQSxrQkFBZ0NkLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU9xQixRQUFQO0FBQUEsTUFBaUJYLFdBQWpCOztBQUVBLHNCQUNDO0FBQUssTUFBRSxFQUFDLGNBQVI7QUFBQSw0QkFDQyw4REFBQyxrREFBRDtBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0M7QUFBQSw2QkFDQztBQUFLLGlCQUFTLEVBQUMsdUNBQWY7QUFBQSxnQ0FDQyw4REFBQyx3REFBRDtBQUFNLGtCQUFRLEVBQUVQLFFBQWhCO0FBQTBCLG1CQUFTLEVBQUVLO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsZUFHQztBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBb0MsWUFBRSxFQUFDLFNBQXZDO0FBQUEsaUNBQ0M7QUFBRyxxQkFBUyxFQUFDLHFEQUFiO0FBQUEsc0JBQ0VhO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUJBOztHQXpHdUJuQjs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUGFkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9QYWRzLmpzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IGRydW1QYWRzID0gW1xuXHRcdHtcblx0XHRcdGtleUlkOiA4MSxcblx0XHRcdGtleU5hbWU6IFwiUVwiLFxuXHRcdFx0aWQ6IFwiQ2xhcFwiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9DbGFwcy8xM1trYl03MDctY2xhcC53YXYubXAzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXlJZDogODcsXG5cdFx0XHRrZXlOYW1lOiBcIldcIixcblx0XHRcdGlkOiBcIkN5bWJhbHNcIixcblx0XHRcdHVybDogXCJodHRwczovL3NhbXBsZXN3YXAub3JnL3NhbXBsZXMtZ2hvc3QvRFJVTVMlMjAoU0lOR0xFJTIwSElUUykvQ3ltYmFscy80NjFba2JdYmFja2hpdC1jcmFzaC1nbGlzc2Rvd24ud2F2Lm1wM1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5SWQ6IDY5LFxuXHRcdFx0a2V5TmFtZTogXCJFXCIsXG5cdFx0XHRpZDogXCJlSGl0XCIsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9zYW1wbGVzd2FwLm9yZy9zYW1wbGVzLWdob3N0L0RSVU1TJTIwKFNJTkdMRSUyMEhJVFMpL0VsZWN0cm9uaWMlMjBIaXRzLzY0W2tiXWFrYWl6YXAud2F2Lm1wM1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5SWQ6IDY1LFxuXHRcdFx0a2V5TmFtZTogXCJBXCIsXG5cdFx0XHRpZDogXCJTbmFyZVwiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9TbmFyZXMvMzNba2JdOTA5c2Qud2F2Lm1wM1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5SWQ6IDgzLFxuXHRcdFx0a2V5TmFtZTogXCJTXCIsXG5cdFx0XHRpZDogXCJUaW1iYWxcIixcblx0XHRcdHVybDogXCJodHRwczovL3NhbXBsZXN3YXAub3JnL3NhbXBsZXMtZ2hvc3QvRFJVTVMlMjAoU0lOR0xFJTIwSElUUykvVGltYmFsZXMvMTdba2JdVElNQjJISUdILldBVi5tcDNcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleUlkOiA2OCxcblx0XHRcdGtleU5hbWU6IFwiRFwiLFxuXHRcdFx0aWQ6IFwiRGlzY29cIixcblx0XHRcdHVybDogXCJodHRwczovL3NhbXBsZXN3YXAub3JnL3NhbXBsZXMtZ2hvc3QvRFJVTVMlMjAoU0lOR0xFJTIwSElUUykvUHVuY2hlcyUyMEhpdHMlMjBEaXNjb2JsYXN0cy8yNltrYl03My53YXYubXAzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXlJZDogOTAsXG5cdFx0XHRrZXlOYW1lOiBcIlpcIixcblx0XHRcdGlkOiBcIkNyYXNoXCIsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9zYW1wbGVzd2FwLm9yZy9zYW1wbGVzLWdob3N0L0RSVU1TJTIwKFNJTkdMRSUyMEhJVFMpL0NyYXNoZXMvOTZba2JdOTA5LWJyaWdodC1jcmFzaC53YXYubXAzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXlJZDogODgsXG5cdFx0XHRrZXlOYW1lOiBcIlhcIixcblx0XHRcdGlkOiBcIktpY2tcIixcblx0XHRcdHVybDogXCJodHRwczovL3NhbXBsZXN3YXAub3JnL3NhbXBsZXMtZ2hvc3QvRFJVTVMlMjAoU0lOR0xFJTIwSElUUykvaUVsZWN0cmliZSUyMEtpY2tzLzQ1W2tiXWlFTEVDVFJJQkUta2ljay0xLndhdi5tcDNcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleUlkOiA2Nyxcblx0XHRcdGtleU5hbWU6IFwiQ1wiLFxuXHRcdFx0aWQ6IFwiVG9tc1wiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9Ub21zLzI2NFtrYl1hbWJpZW50X3RvbV8xLndhdi5tcDNcIixcblx0XHR9LFxuXHRdO1xuXG5cdGNvbnN0IGRpc3BsYXllZCA9IChlLCBpZCwgdXJsKSA9PiB7XG5cdFx0Ly9jb25zb2xlLmxvZyh1cmwpO1xuXHRcdHNldEtleVByZXNzKGlkKTtcblx0XHRjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh1cmwpO1xuXHRcdGF1ZGlvLnBsYXkoKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChlKSA9PiB7XG5cdFx0Ly8gY29uc29sZS5sb2coZS5rZXkpO1xuXHRcdGRydW1QYWRzLm1hcCgoeyBrZXlOYW1lLCBpZCwgdXJsIH0pID0+IHtcblx0XHRcdGlmIChlLmtleSA9PSBrZXlOYW1lLnRvTG93ZXJDYXNlKCkpIHtcblx0XHRcdFx0Y29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odXJsKTtcblx0XHRcdFx0YXVkaW8ucGxheSgpO1xuXHRcdFx0XHRzZXRLZXlQcmVzcyhpZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5UHJlc3MpO1xuXG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlQcmVzcyk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdGNvbnN0IFtrZXlQcmVzcywgc2V0S2V5UHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPSdkcnVtLW1hY2hpbmUnPlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDx0aXRsZT5EcnVtIE1hY2hpbmU8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXG5cdFx0XHQ8bWFpbj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTInPlxuXHRcdFx0XHRcdDxQYWRzIGRydW1QYWRzPXtkcnVtUGFkc30gZGlzcGxheWVkPXtkaXNwbGF5ZWR9IC8+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgZmxleC0xJyBpZD0nZGlzcGxheSc+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2JnLWJsYWNrIHRleHQtd2hpdGUgcC0yIHJvdW5kZWQtbWQgdy00NCBoLTEwIG0tYXV0byc+XG5cdFx0XHRcdFx0XHRcdHtrZXlQcmVzc31cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIlBhZHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJkcnVtUGFkcyIsImtleUlkIiwia2V5TmFtZSIsImlkIiwidXJsIiwiZGlzcGxheWVkIiwiZSIsInNldEtleVByZXNzIiwiYXVkaW8iLCJBdWRpbyIsInBsYXkiLCJoYW5kbGVLZXlQcmVzcyIsIm1hcCIsImtleSIsInRvTG93ZXJDYXNlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXlQcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});