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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Pads_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Pads.js */ \"./components/Pads.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/fredericmasson/Documents/Code/freeCodeCamp/drummachine/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var drumPads = [{\n    keyId: 81,\n    keyName: \"Q\",\n    id: \"Clap\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]707-clap.wav.mp3\"\n  }, {\n    keyId: 87,\n    keyName: \"W\",\n    id: \"Cymbals\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Cymbals/461[kb]backhit-crash-glissdown.wav.mp3\"\n  }, {\n    keyId: 69,\n    keyName: \"E\",\n    id: \"eHit\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Electronic%20Hits/64[kb]akaizap.wav.mp3\"\n  }, {\n    keyId: 65,\n    keyName: \"A\",\n    id: \"Snare\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/33[kb]909sd.wav.mp3\"\n  }, {\n    keyId: 83,\n    keyName: \"S\",\n    id: \"Timbal\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Timbales/17[kb]TIMB2HIGH.WAV.mp3\"\n  }, {\n    keyId: 68,\n    keyName: \"D\",\n    id: \"Disco\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/26[kb]73.wav.mp3\"\n  }, {\n    keyId: 90,\n    keyName: \"Z\",\n    id: \"Crash\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/96[kb]909-bright-crash.wav.mp3\"\n  }, {\n    keyId: 88,\n    keyName: \"X\",\n    id: \"Kick\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/iElectribe%20Kicks/45[kb]iELECTRIBE-kick-1.wav.mp3\"\n  }, {\n    keyId: 67,\n    keyName: \"C\",\n    id: \"Toms\",\n    url: \"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/264[kb]ambient_tom_1.wav.mp3\"\n  }];\n\n  var displayed = function displayed(e, id, url) {\n    console.log(url);\n    setKeyPress(id);\n    var audio = new Audio(url);\n    audio.play();\n  };\n\n  var handleKeyPress = function handleKeyPress(e) {\n    console.log(e.key); // if (e.key == drumPads.keyName) {\n    // \tconst audio = new Audio(drumPads.url);\n    // \taudio.play();\n    // \tsetKeyPress(drumPads.id);\n    // }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    window.addEventListener(\"keydown\", handleKeyPress);\n    return function () {\n      window.removeEventListener(\"keydown\", handleKeyPress);\n    };\n  }, []);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"),\n      keyPress = _useState[0],\n      setKeyPress = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    id: \"drum-machine\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"title\", {\n        children: \"Drum Machine\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between p-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_Pads_js__WEBPACK_IMPORTED_MODULE_1__.default, {\n          drumPads: drumPads,\n          displayed: displayed\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 6\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"text-center flex-1\",\n          id: \"display\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            className: \"bg-black text-white p-2 rounded-md w-44 m-auto\",\n            children: keyPress\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"SLxsfI7XawrGm3QiOYqL/+ZrpTo=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVQ7O0FBUUEsa0JBQWdDaEIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT3FCLFFBQVA7QUFBQSxNQUFpQlQsV0FBakI7O0FBRUEsc0JBQ0M7QUFBSyxNQUFFLEVBQUMsY0FBUjtBQUFBLDRCQUNDLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQztBQUFBLDZCQUNDO0FBQUssaUJBQVMsRUFBQyx1Q0FBZjtBQUFBLGdDQUNDLDhEQUFDLHdEQUFEO0FBQU0sa0JBQVEsRUFBRVQsUUFBaEI7QUFBMEIsbUJBQVMsRUFBRUs7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxlQUdDO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFvQyxZQUFFLEVBQUMsU0FBdkM7QUFBQSxpQ0FDQztBQUFHLHFCQUFTLEVBQUMsZ0RBQWI7QUFBQSxzQkFDRWE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7O0dBdkd1Qm5COztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQYWRzIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZHMuanNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgZHJ1bVBhZHMgPSBbXG5cdFx0e1xuXHRcdFx0a2V5SWQ6IDgxLFxuXHRcdFx0a2V5TmFtZTogXCJRXCIsXG5cdFx0XHRpZDogXCJDbGFwXCIsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9zYW1wbGVzd2FwLm9yZy9zYW1wbGVzLWdob3N0L0RSVU1TJTIwKFNJTkdMRSUyMEhJVFMpL0NsYXBzLzEzW2tiXTcwNy1jbGFwLndhdi5tcDNcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleUlkOiA4Nyxcblx0XHRcdGtleU5hbWU6IFwiV1wiLFxuXHRcdFx0aWQ6IFwiQ3ltYmFsc1wiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9DeW1iYWxzLzQ2MVtrYl1iYWNraGl0LWNyYXNoLWdsaXNzZG93bi53YXYubXAzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXlJZDogNjksXG5cdFx0XHRrZXlOYW1lOiBcIkVcIixcblx0XHRcdGlkOiBcImVIaXRcIixcblx0XHRcdHVybDogXCJodHRwczovL3NhbXBsZXN3YXAub3JnL3NhbXBsZXMtZ2hvc3QvRFJVTVMlMjAoU0lOR0xFJTIwSElUUykvRWxlY3Ryb25pYyUyMEhpdHMvNjRba2JdYWthaXphcC53YXYubXAzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXlJZDogNjUsXG5cdFx0XHRrZXlOYW1lOiBcIkFcIixcblx0XHRcdGlkOiBcIlNuYXJlXCIsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9zYW1wbGVzd2FwLm9yZy9zYW1wbGVzLWdob3N0L0RSVU1TJTIwKFNJTkdMRSUyMEhJVFMpL1NuYXJlcy8zM1trYl05MDlzZC53YXYubXAzXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRrZXlJZDogODMsXG5cdFx0XHRrZXlOYW1lOiBcIlNcIixcblx0XHRcdGlkOiBcIlRpbWJhbFwiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9UaW1iYWxlcy8xN1trYl1USU1CMkhJR0guV0FWLm1wM1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5SWQ6IDY4LFxuXHRcdFx0a2V5TmFtZTogXCJEXCIsXG5cdFx0XHRpZDogXCJEaXNjb1wiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9QdW5jaGVzJTIwSGl0cyUyMERpc2NvYmxhc3RzLzI2W2tiXTczLndhdi5tcDNcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleUlkOiA5MCxcblx0XHRcdGtleU5hbWU6IFwiWlwiLFxuXHRcdFx0aWQ6IFwiQ3Jhc2hcIixcblx0XHRcdHVybDogXCJodHRwczovL3NhbXBsZXN3YXAub3JnL3NhbXBsZXMtZ2hvc3QvRFJVTVMlMjAoU0lOR0xFJTIwSElUUykvQ3Jhc2hlcy85NltrYl05MDktYnJpZ2h0LWNyYXNoLndhdi5tcDNcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGtleUlkOiA4OCxcblx0XHRcdGtleU5hbWU6IFwiWFwiLFxuXHRcdFx0aWQ6IFwiS2lja1wiLFxuXHRcdFx0dXJsOiBcImh0dHBzOi8vc2FtcGxlc3dhcC5vcmcvc2FtcGxlcy1naG9zdC9EUlVNUyUyMChTSU5HTEUlMjBISVRTKS9pRWxlY3RyaWJlJTIwS2lja3MvNDVba2JdaUVMRUNUUklCRS1raWNrLTEud2F2Lm1wM1wiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0a2V5SWQ6IDY3LFxuXHRcdFx0a2V5TmFtZTogXCJDXCIsXG5cdFx0XHRpZDogXCJUb21zXCIsXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9zYW1wbGVzd2FwLm9yZy9zYW1wbGVzLWdob3N0L0RSVU1TJTIwKFNJTkdMRSUyMEhJVFMpL1RvbXMvMjY0W2tiXWFtYmllbnRfdG9tXzEud2F2Lm1wM1wiLFxuXHRcdH0sXG5cdF07XG5cblx0Y29uc3QgZGlzcGxheWVkID0gKGUsIGlkLCB1cmwpID0+IHtcblx0XHRjb25zb2xlLmxvZyh1cmwpO1xuXHRcdHNldEtleVByZXNzKGlkKTtcblx0XHRjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh1cmwpO1xuXHRcdGF1ZGlvLnBsYXkoKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChlKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZS5rZXkpO1xuXHRcdC8vIGlmIChlLmtleSA9PSBkcnVtUGFkcy5rZXlOYW1lKSB7XG5cdFx0Ly8gXHRjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyhkcnVtUGFkcy51cmwpO1xuXHRcdC8vIFx0YXVkaW8ucGxheSgpO1xuXHRcdC8vIFx0c2V0S2V5UHJlc3MoZHJ1bVBhZHMuaWQpO1xuXHRcdC8vIH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlQcmVzcyk7XG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleVByZXNzKTtcblx0XHR9O1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgW2tleVByZXNzLCBzZXRLZXlQcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9J2RydW0tbWFjaGluZSc+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkRydW0gTWFjaGluZTwvdGl0bGU+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxtYWluPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMic+XG5cdFx0XHRcdFx0PFBhZHMgZHJ1bVBhZHM9e2RydW1QYWRzfSBkaXNwbGF5ZWQ9e2Rpc3BsYXllZH0gLz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciBmbGV4LTEnIGlkPSdkaXNwbGF5Jz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nYmctYmxhY2sgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC1tZCB3LTQ0IG0tYXV0byc+XG5cdFx0XHRcdFx0XHRcdHtrZXlQcmVzc31cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIlBhZHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhvbWUiLCJkcnVtUGFkcyIsImtleUlkIiwia2V5TmFtZSIsImlkIiwidXJsIiwiZGlzcGxheWVkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRLZXlQcmVzcyIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiaGFuZGxlS2V5UHJlc3MiLCJrZXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleVByZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});