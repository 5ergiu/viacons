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

/***/ "./resources/theme/js/custom/documentation/charts/google-charts/pie.js":
/*!*****************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/charts/google-charts/pie.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartPieDemo = function () {\n  // Private functions\n  var examplePie = function examplePie() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      var data = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['Work', 11], ['Eat', 2], ['Commute', 2], ['Watch TV', 2], ['Sleep', 7]]);\n      var options = {\n        title: 'My Daily Activities',\n        colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n      };\n      var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));\n      chart.draw(data, options); // Example of a doughnut chart\n      // var options = {\n      //     pieHole: 0.4,\n      //     colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']\n      // };\n      // var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie'));\n      // chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      examplePie();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartPieDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2dvb2dsZS1jaGFydHMvcGllLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVk7QUFDbkM7QUFDQSxNQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGVBQVosRUFBNkIsR0FBN0IsRUFBa0M7QUFDOUJDLE1BQUFBLFFBQVEsRUFBRSxDQUFDLFdBQUQsRUFBYyxLQUFkLEVBQXFCLE1BQXJCO0FBRG9CLEtBQWxDO0FBSUFGLElBQUFBLE1BQU0sQ0FBQ0csaUJBQVAsQ0FBeUIsWUFBWTtBQUNqQyxVQUFJQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ssYUFBUCxDQUFxQkMsZ0JBQXJCLENBQXNDLENBQzdDLENBQUMsTUFBRCxFQUFTLGVBQVQsQ0FENkMsRUFFN0MsQ0FBQyxNQUFELEVBQVMsRUFBVCxDQUY2QyxFQUc3QyxDQUFDLEtBQUQsRUFBUSxDQUFSLENBSDZDLEVBSTdDLENBQUMsU0FBRCxFQUFZLENBQVosQ0FKNkMsRUFLN0MsQ0FBQyxVQUFELEVBQWEsQ0FBYixDQUw2QyxFQU03QyxDQUFDLE9BQUQsRUFBVSxDQUFWLENBTjZDLENBQXRDLENBQVg7QUFTQSxVQUFJQyxPQUFPLEdBQUc7QUFDVkMsUUFBQUEsS0FBSyxFQUFFLHFCQURHO0FBRVZDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEVBQTZDLFNBQTdDLEVBQXdELFNBQXhEO0FBRkUsT0FBZDtBQUtBLFVBQUlDLEtBQUssR0FBRyxJQUFJVixNQUFNLENBQUNLLGFBQVAsQ0FBcUJNLFFBQXpCLENBQWtDQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMEJBQXhCLENBQWxDLENBQVo7QUFDQUgsTUFBQUEsS0FBSyxDQUFDSSxJQUFOLENBQVdWLElBQVgsRUFBaUJHLE9BQWpCLEVBaEJpQyxDQWtCakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDSCxLQTFCRDtBQTJCSCxHQWpDRDs7QUFtQ0EsU0FBTztBQUNIO0FBQ0FRLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkaEIsTUFBQUEsVUFBVTtBQUNiO0FBSkUsR0FBUDtBQU1ILENBM0MwQixFQUEzQixDLENBNkNBOzs7QUFDQWlCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ25CLEVBQUFBLG9CQUFvQixDQUFDaUIsSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RoZW1lL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2NoYXJ0cy9nb29nbGUtY2hhcnRzL3BpZS5qcz9kNTVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHb29nbGVDaGFydFBpZURlbW8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZVBpZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gR09PR0xFIENIQVJUUyBJTklUXG4gICAgICAgIGdvb2dsZS5sb2FkKCd2aXN1YWxpemF0aW9uJywgJzEnLCB7XG4gICAgICAgICAgICBwYWNrYWdlczogWydjb3JlY2hhcnQnLCAnYmFyJywgJ2xpbmUnXVxuICAgICAgICB9KTtcblxuICAgICAgICBnb29nbGUuc2V0T25Mb2FkQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBnb29nbGUudmlzdWFsaXphdGlvbi5hcnJheVRvRGF0YVRhYmxlKFtcbiAgICAgICAgICAgICAgICBbJ1Rhc2snLCAnSG91cnMgcGVyIERheSddLFxuICAgICAgICAgICAgICAgIFsnV29yaycsIDExXSxcbiAgICAgICAgICAgICAgICBbJ0VhdCcsIDJdLFxuICAgICAgICAgICAgICAgIFsnQ29tbXV0ZScsIDJdLFxuICAgICAgICAgICAgICAgIFsnV2F0Y2ggVFYnLCAyXSxcbiAgICAgICAgICAgICAgICBbJ1NsZWVwJywgN11cbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ015IERhaWx5IEFjdGl2aXRpZXMnLFxuICAgICAgICAgICAgICAgIGNvbG9yczogWycjZmUzOTk1JywgJyNmNmFhMzMnLCAnIzZlNGZmNScsICcjMmFiZTgxJywgJyNjN2QyZTcnLCAnIzU5M2FlMSddXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUGllQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZ29vZ2xlX2NoYXJ0X3BpZScpKTtcbiAgICAgICAgICAgIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIEV4YW1wbGUgb2YgYSBkb3VnaG51dCBjaGFydFxuICAgICAgICAgICAgLy8gdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyAgICAgcGllSG9sZTogMC40LFxuICAgICAgICAgICAgLy8gICAgIGNvbG9yczogWycjZmUzOTk1JywgJyNmNmFhMzMnLCAnIzZlNGZmNScsICcjMmFiZTgxJywgJyNjN2QyZTcnLCAnIzU5M2FlMSddXG4gICAgICAgICAgICAvLyB9O1xuXG4gICAgICAgICAgICAvLyB2YXIgY2hhcnQgPSBuZXcgZ29vZ2xlLnZpc3VhbGl6YXRpb24uUGllQ2hhcnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZ29vZ2xlX2NoYXJ0X3BpZScpKTtcbiAgICAgICAgICAgIC8vIGNoYXJ0LmRyYXcoZGF0YSwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZVBpZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUR29vZ2xlQ2hhcnRQaWVEZW1vLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR29vZ2xlQ2hhcnRQaWVEZW1vIiwiZXhhbXBsZVBpZSIsImdvb2dsZSIsImxvYWQiLCJwYWNrYWdlcyIsInNldE9uTG9hZENhbGxiYWNrIiwiZGF0YSIsInZpc3VhbGl6YXRpb24iLCJhcnJheVRvRGF0YVRhYmxlIiwib3B0aW9ucyIsInRpdGxlIiwiY29sb3JzIiwiY2hhcnQiLCJQaWVDaGFydCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/charts/google-charts/pie.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/charts/google-charts/pie.js"]();
/******/ 	
/******/ })()
;