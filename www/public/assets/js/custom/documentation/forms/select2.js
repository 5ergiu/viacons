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

/***/ "./resources/theme/js/custom/documentation/forms/select2.js":
/*!******************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/forms/select2.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsSelect2Demo = function () {\n  // Private functions\n  var exampleCountry = function exampleCountry() {\n    // Format options\n    var format = function format(item) {\n      if (!item.id) {\n        return item.text;\n      }\n\n      var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-country');\n      var img = $(\"<img>\", {\n        \"class\": \"rounded-circle me-2\",\n        width: 26,\n        src: url\n      });\n      var span = $(\"<span>\", {\n        text: \" \" + item.text\n      });\n      span.prepend(img);\n      return span;\n    }; // Init Select2 --- more info: https://select2.org/\n\n\n    $('#kt_docs_select2_country').select2({\n      templateResult: function templateResult(item) {\n        return format(item);\n      }\n    });\n  };\n\n  var exampleUsers = function exampleUsers() {\n    // Format options\n    var format = function format(item) {\n      if (!item.id) {\n        return item.text;\n      }\n\n      var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-user');\n      var img = $(\"<img>\", {\n        \"class\": \"rounded-circle me-2\",\n        width: 26,\n        src: url\n      });\n      var span = $(\"<span>\", {\n        text: \" \" + item.text\n      });\n      span.prepend(img);\n      return span;\n    }; // Init Select2 --- more info: https://select2.org/\n\n\n    $('#kt_docs_select2_users').select2({\n      templateResult: function templateResult(item) {\n        return format(item);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCountry();\n      exampleUsers();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsSelect2Demo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvc2VsZWN0Mi5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFZO0FBQ2pDO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQzdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3JCLFVBQUksQ0FBQ0EsSUFBSSxDQUFDQyxFQUFWLEVBQWM7QUFDVixlQUFPRCxJQUFJLENBQUNFLElBQVo7QUFDSDs7QUFFRCxVQUFJQyxHQUFHLEdBQUdDLE9BQU8sR0FBRyxRQUFWLEdBQXFCSixJQUFJLENBQUNLLE9BQUwsQ0FBYUMsWUFBYixDQUEwQix5QkFBMUIsQ0FBL0I7QUFDQSxVQUFJQyxHQUFHLEdBQUdDLENBQUMsQ0FBQyxPQUFELEVBQVU7QUFDakIsaUJBQU8scUJBRFU7QUFFakJDLFFBQUFBLEtBQUssRUFBRSxFQUZVO0FBR2pCQyxRQUFBQSxHQUFHLEVBQUVQO0FBSFksT0FBVixDQUFYO0FBS0EsVUFBSVEsSUFBSSxHQUFHSCxDQUFDLENBQUMsUUFBRCxFQUFXO0FBQ25CTixRQUFBQSxJQUFJLEVBQUUsTUFBTUYsSUFBSSxDQUFDRTtBQURFLE9BQVgsQ0FBWjtBQUdBUyxNQUFBQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUwsR0FBYjtBQUNBLGFBQU9JLElBQVA7QUFDSCxLQWhCRCxDQUY2QixDQW9CN0I7OztBQUNBSCxJQUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QkssT0FBOUIsQ0FBc0M7QUFDbENDLE1BQUFBLGNBQWMsRUFBRSx3QkFBVWQsSUFBVixFQUFnQjtBQUM1QixlQUFPRCxNQUFNLENBQUNDLElBQUQsQ0FBYjtBQUNIO0FBSGlDLEtBQXRDO0FBS0gsR0ExQkQ7O0FBNEJBLE1BQU1lLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVk7QUFDN0I7QUFDQSxRQUFNaEIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3JCLFVBQUksQ0FBQ0EsSUFBSSxDQUFDQyxFQUFWLEVBQWM7QUFDVixlQUFPRCxJQUFJLENBQUNFLElBQVo7QUFDSDs7QUFFRCxVQUFJQyxHQUFHLEdBQUdDLE9BQU8sR0FBRyxRQUFWLEdBQXFCSixJQUFJLENBQUNLLE9BQUwsQ0FBYUMsWUFBYixDQUEwQixzQkFBMUIsQ0FBL0I7QUFDQSxVQUFJQyxHQUFHLEdBQUdDLENBQUMsQ0FBQyxPQUFELEVBQVU7QUFDakIsaUJBQU8scUJBRFU7QUFFakJDLFFBQUFBLEtBQUssRUFBRSxFQUZVO0FBR2pCQyxRQUFBQSxHQUFHLEVBQUVQO0FBSFksT0FBVixDQUFYO0FBS0EsVUFBSVEsSUFBSSxHQUFHSCxDQUFDLENBQUMsUUFBRCxFQUFXO0FBQ25CTixRQUFBQSxJQUFJLEVBQUUsTUFBTUYsSUFBSSxDQUFDRTtBQURFLE9BQVgsQ0FBWjtBQUdBUyxNQUFBQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUwsR0FBYjtBQUNBLGFBQU9JLElBQVA7QUFDSCxLQWhCRCxDQUY2QixDQW9CN0I7OztBQUNBSCxJQUFBQSxDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QkssT0FBNUIsQ0FBb0M7QUFDaENDLE1BQUFBLGNBQWMsRUFBRSx3QkFBVWQsSUFBVixFQUFnQjtBQUM1QixlQUFPRCxNQUFNLENBQUNDLElBQUQsQ0FBYjtBQUNIO0FBSCtCLEtBQXBDO0FBS0gsR0ExQkQ7O0FBNEJBLFNBQU87QUFDSDtBQUNBZ0IsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RsQixNQUFBQSxjQUFjO0FBQ2RpQixNQUFBQSxZQUFZO0FBQ2Y7QUFMRSxHQUFQO0FBT0gsQ0FqRXdCLEVBQXpCLEMsQ0FtRUE7OztBQUNBRSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENyQixFQUFBQSxrQkFBa0IsQ0FBQ21CLElBQW5CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy90aGVtZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9zZWxlY3QyLmpzP2NhZjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zU2VsZWN0MkRlbW8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUNvdW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEZvcm1hdCBvcHRpb25zXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdXJsID0gaG9zdFVybCArICdtZWRpYS8nICsgaXRlbS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1zZWxlY3QyLWNvdW50cnknKTtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKFwiPGltZz5cIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInJvdW5kZWQtY2lyY2xlIG1lLTJcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYsXG4gICAgICAgICAgICAgICAgc3JjOiB1cmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHNwYW4gPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiBcIiArIGl0ZW0udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFuLnByZXBlbmQoaW1nKTtcbiAgICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBTZWxlY3QyIC0tLSBtb3JlIGluZm86IGh0dHBzOi8vc2VsZWN0Mi5vcmcvXG4gICAgICAgICQoJyNrdF9kb2NzX3NlbGVjdDJfY291bnRyeScpLnNlbGVjdDIoe1xuICAgICAgICAgICAgdGVtcGxhdGVSZXN1bHQ6IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZXhhbXBsZVVzZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBGb3JtYXQgb3B0aW9uc1xuICAgICAgICBjb25zdCBmb3JtYXQgPSAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGV4dDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHVybCA9IGhvc3RVcmwgKyAnbWVkaWEvJyArIGl0ZW0uZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEta3Qtc2VsZWN0Mi11c2VyJyk7XG4gICAgICAgICAgICB2YXIgaW1nID0gJChcIjxpbWc+XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJyb3VuZGVkLWNpcmNsZSBtZS0yXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2LFxuICAgICAgICAgICAgICAgIHNyYzogdXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBzcGFuID0gJChcIjxzcGFuPlwiLCB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCIgXCIgKyBpdGVtLnRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3Bhbi5wcmVwZW5kKGltZyk7XG4gICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgU2VsZWN0MiAtLS0gbW9yZSBpbmZvOiBodHRwczovL3NlbGVjdDIub3JnL1xuICAgICAgICAkKCcja3RfZG9jc19zZWxlY3QyX3VzZXJzJykuc2VsZWN0Mih7XG4gICAgICAgICAgICB0ZW1wbGF0ZVJlc3VsdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVDb3VudHJ5KCk7XG4gICAgICAgICAgICBleGFtcGxlVXNlcnMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEZvcm1zU2VsZWN0MkRlbW8uaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc1NlbGVjdDJEZW1vIiwiZXhhbXBsZUNvdW50cnkiLCJmb3JtYXQiLCJpdGVtIiwiaWQiLCJ0ZXh0IiwidXJsIiwiaG9zdFVybCIsImVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJpbWciLCIkIiwid2lkdGgiLCJzcmMiLCJzcGFuIiwicHJlcGVuZCIsInNlbGVjdDIiLCJ0ZW1wbGF0ZVJlc3VsdCIsImV4YW1wbGVVc2VycyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/forms/select2.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/forms/select2.js"]();
/******/ 	
/******/ })()
;