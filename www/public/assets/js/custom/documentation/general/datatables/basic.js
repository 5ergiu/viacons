/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/theme/js/custom/documentation/general/datatables/basic.js":
/*!*****************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/general/datatables/basic.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDatatablesBasic = function () {\n  // Private functions\n  var _initExample1 = function _initExample1() {\n    $(\"#kt_datatable_example_1\").DataTable();\n  };\n\n  var _initExample2 = function _initExample2() {\n    $(\"#kt_datatable_example_2\").DataTable({\n      \"scrollY\": \"500px\",\n      \"scrollCollapse\": true,\n      \"paging\": false,\n      \"dom\": \"<'table-responsive'tr>\"\n    });\n  };\n\n  var _initExample3 = function _initExample3() {\n    $(\"#kt_datatable_example_3\").DataTable({\n      \"scrollX\": true\n    });\n  };\n\n  var _initExample4 = function _initExample4() {\n    $(\"#kt_datatable_example_4\").DataTable({\n      \"scrollY\": 300,\n      \"scrollX\": true\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      _initExample1();\n\n      _initExample2();\n\n      _initExample3();\n\n      _initExample4();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDatatablesBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kYXRhdGFibGVzL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVk7QUFDaEM7QUFFQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVc7QUFDM0JDLElBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxTQUE3QjtBQUNILEdBRkQ7O0FBSUEsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCRixJQUFBQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsU0FBN0IsQ0FBdUM7QUFDbkMsaUJBQWtCLE9BRGlCO0FBRW5DLHdCQUFrQixJQUZpQjtBQUduQyxnQkFBa0IsS0FIaUI7QUFJbkMsYUFBUztBQUowQixLQUF2QztBQU1ILEdBUEQ7O0FBU0EsTUFBSUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCSCxJQUFBQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsU0FBN0IsQ0FBdUM7QUFDbkMsaUJBQVc7QUFEd0IsS0FBdkM7QUFHSCxHQUpEOztBQU1BLE1BQUlHLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQkosSUFBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLFNBQTdCLENBQXVDO0FBQ25DLGlCQUFXLEdBRHdCO0FBRW5DLGlCQUFXO0FBRndCLEtBQXZDO0FBSUgsR0FMRCxDQXRCZ0MsQ0E2QmhDOzs7QUFDQSxTQUFPO0FBQ0hJLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkTixNQUFBQSxhQUFhOztBQUNiRyxNQUFBQSxhQUFhOztBQUNiQyxNQUFBQSxhQUFhOztBQUNiQyxNQUFBQSxhQUFhO0FBQ2hCO0FBTkUsR0FBUDtBQVFILENBdEN1QixFQUF4QixDLENBd0NBOzs7QUFDQUUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDVCxFQUFBQSxpQkFBaUIsQ0FBQ08sSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RoZW1lL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZGF0YXRhYmxlcy9iYXNpYy5qcz8yMWJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1REYXRhdGFibGVzQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcblxuICAgIHZhciBfaW5pdEV4YW1wbGUxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIja3RfZGF0YXRhYmxlX2V4YW1wbGVfMVwiKS5EYXRhVGFibGUoKTtcbiAgICB9XG5cbiAgICB2YXIgX2luaXRFeGFtcGxlMiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzJcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwic2Nyb2xsWVwiOiAgICAgICAgXCI1MDBweFwiLFxuICAgICAgICAgICAgXCJzY3JvbGxDb2xsYXBzZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJwYWdpbmdcIjogICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIFwiZG9tXCI6ICAgXCI8J3RhYmxlLXJlc3BvbnNpdmUndHI+XCIgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBfaW5pdEV4YW1wbGUzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIja3RfZGF0YXRhYmxlX2V4YW1wbGVfM1wiKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgXCJzY3JvbGxYXCI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIF9pbml0RXhhbXBsZTQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV80XCIpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBcInNjcm9sbFlcIjogMzAwLFxuICAgICAgICAgICAgXCJzY3JvbGxYXCI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSAgXG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTEoKTtcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTIoKTtcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTMoKTtcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1REYXRhdGFibGVzQmFzaWMuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktURGF0YXRhYmxlc0Jhc2ljIiwiX2luaXRFeGFtcGxlMSIsIiQiLCJEYXRhVGFibGUiLCJfaW5pdEV4YW1wbGUyIiwiX2luaXRFeGFtcGxlMyIsIl9pbml0RXhhbXBsZTQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/general/datatables/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/general/datatables/basic.js"]();
/******/ 	
/******/ })()
;