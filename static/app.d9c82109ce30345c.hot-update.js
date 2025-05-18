"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/axios.js":
/*!**********************!*\
  !*** ./src/axios.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/lib/axios.js\");\n\n\n// تنظیم baseURL برای axios\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = 'http://localhost:8000';\n\n// تنظیم headers پیش‌فرض\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';\n\n// تنظیم interceptor برای حذف invoice از مسیر\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].interceptors.request.use(config => {\n  // اگر مسیر با /invoice شروع شود، آن را حذف کن\n  if (config.url.startsWith('/invoice')) {\n    config.url = config.url.replace('/invoice', '');\n  }\n  return config;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXhpb3MuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvYXhpb3MuanM/ZDJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG4vLyDYqtmG2LjbjNmFIGJhc2VVUkwg2KjYsdin24wgYXhpb3NcclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnXHJcblxyXG4vLyDYqtmG2LjbjNmFIGhlYWRlcnMg2b7bjNi04oCM2YHYsdi2XHJcbmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblxyXG4vLyDYqtmG2LjbjNmFIGludGVyY2VwdG9yINio2LHYp9uMINit2LDZgSBpbnZvaWNlINin2LIg2YXYs9uM2LFcclxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGNvbmZpZyA9PiB7XHJcbiAgICAvLyDYp9qv2LEg2YXYs9uM2LEg2KjYpyAvaW52b2ljZSDYtNix2YjYuSDYtNmI2K/YjCDYotmGINix2Kcg2K3YsNmBINqp2YZcclxuICAgIGlmIChjb25maWcudXJsLnN0YXJ0c1dpdGgoJy9pbnZvaWNlJykpIHtcclxuICAgICAgICBjb25maWcudXJsID0gY29uZmlnLnVybC5yZXBsYWNlKCcvaW52b2ljZScsICcnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbmZpZ1xyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3MgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/axios.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "8046e02f2394d324"; }
/******/ }();
/******/ 
/******/ }
);