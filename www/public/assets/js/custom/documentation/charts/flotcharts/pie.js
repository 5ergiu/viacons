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

/***/ "./resources/theme/js/custom/documentation/charts/flotcharts/pie.js":
/*!**************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/charts/flotcharts/pie.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFlotDemoPie = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    var data = [{\n      label: \"CSS\",\n      data: 10,\n      color: KTUtil.getCssVariableValue('--bs-active-primary')\n    }, {\n      label: \"HTML5\",\n      data: 40,\n      color: KTUtil.getCssVariableValue('--bs-active-success')\n    }, {\n      label: \"PHP\",\n      data: 30,\n      color: KTUtil.getCssVariableValue('--bs-active-danger')\n    }, {\n      label: \"Angular\",\n      data: 20,\n      color: KTUtil.getCssVariableValue('--bs-active-warning')\n    }];\n    $.plot($(\"#kt_docs_flot_pie\"), data, {\n      series: {\n        pie: {\n          show: true\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFlotDemoPie.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2Zsb3RjaGFydHMvcGllLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGFBQWEsR0FBRyxZQUFZO0FBQzVCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUN6QixRQUFJQyxJQUFJLEdBQUcsQ0FDUDtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkQsTUFBQUEsSUFBSSxFQUFFLEVBQXRCO0FBQTBCRSxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIscUJBQTNCO0FBQWpDLEtBRE8sRUFFUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQkQsTUFBQUEsSUFBSSxFQUFFLEVBQXhCO0FBQTRCRSxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIscUJBQTNCO0FBQW5DLEtBRk8sRUFHUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsS0FBVDtBQUFnQkQsTUFBQUEsSUFBSSxFQUFFLEVBQXRCO0FBQTBCRSxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsb0JBQTNCO0FBQWpDLEtBSE8sRUFJUDtBQUFFSCxNQUFBQSxLQUFLLEVBQUUsU0FBVDtBQUFvQkQsTUFBQUEsSUFBSSxFQUFFLEVBQTFCO0FBQThCRSxNQUFBQSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIscUJBQTNCO0FBQXJDLEtBSk8sQ0FBWDtBQU9BQyxJQUFBQSxDQUFDLENBQUNDLElBQUYsQ0FBT0QsQ0FBQyxDQUFDLG1CQUFELENBQVIsRUFBK0JMLElBQS9CLEVBQXFDO0FBQ2pDTyxNQUFBQSxNQUFNLEVBQUU7QUFDSkMsUUFBQUEsR0FBRyxFQUFFO0FBQ0RDLFVBQUFBLElBQUksRUFBRTtBQURMO0FBREQ7QUFEeUIsS0FBckM7QUFPSCxHQWZEOztBQWlCQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RYLE1BQUFBLFVBQVU7QUFDYjtBQUpFLEdBQVA7QUFNSCxDQXpCbUIsRUFBcEIsQyxDQTJCQTs7O0FBQ0FJLE1BQU0sQ0FBQ1Esa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2IsRUFBQUEsYUFBYSxDQUFDWSxJQUFkO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy90aGVtZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9jaGFydHMvZmxvdGNoYXJ0cy9waWUuanM/MGRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURmxvdERlbW9QaWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZVBpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkNTU1wiLCBkYXRhOiAxMCwgY29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1wcmltYXJ5JykgfSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiSFRNTDVcIiwgZGF0YTogNDAsIGNvbG9yOiBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtc3VjY2VzcycpIH0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIlBIUFwiLCBkYXRhOiAzMCwgY29sb3I6IEtUVXRpbC5nZXRDc3NWYXJpYWJsZVZhbHVlKCctLWJzLWFjdGl2ZS1kYW5nZXInKSB9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCJBbmd1bGFyXCIsIGRhdGE6IDIwLCBjb2xvcjogS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXdhcm5pbmcnKSB9XG4gICAgICAgIF07XG5cbiAgICAgICAgJC5wbG90KCQoXCIja3RfZG9jc19mbG90X3BpZVwiKSwgZGF0YSwge1xuICAgICAgICAgICAgc2VyaWVzOiB7XG4gICAgICAgICAgICAgICAgcGllOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZVBpZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURmxvdERlbW9QaWUuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGbG90RGVtb1BpZSIsImV4YW1wbGVQaWUiLCJkYXRhIiwibGFiZWwiLCJjb2xvciIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCIkIiwicGxvdCIsInNlcmllcyIsInBpZSIsInNob3ciLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/charts/flotcharts/pie.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/charts/flotcharts/pie.js"]();
/******/ 	
/******/ })()
;