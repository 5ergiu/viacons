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

/***/ "./resources/theme/js/custom/documentation/charts/google-charts/line.js":
/*!******************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/charts/google-charts/line.js ***!
  \******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGoogleChartLineDemo = function () {\n  // Private functions\n  var exampleLine = function exampleLine() {\n    // GOOGLE CHARTS INIT\n    google.load('visualization', '1', {\n      packages: ['corechart', 'bar', 'line']\n    });\n    google.setOnLoadCallback(function () {\n      // LINE CHART\n      var data = new google.visualization.DataTable();\n      data.addColumn('number', 'Day');\n      data.addColumn('number', 'Guardians of the Galaxy');\n      data.addColumn('number', 'The Avengers');\n      data.addColumn('number', 'Transformers: Age of Extinction');\n      data.addRows([[1, 37.8, 80.8, 41.8], [2, 30.9, 69.5, 32.4], [3, 25.4, 57, 25.7], [4, 11.7, 18.8, 10.5], [5, 11.9, 17.6, 10.4], [6, 8.8, 13.6, 7.7], [7, 7.6, 12.3, 9.6], [8, 12.3, 29.2, 10.6], [9, 16.9, 42.9, 14.8], [10, 12.8, 30.9, 11.6], [11, 5.3, 7.9, 4.7], [12, 6.6, 8.4, 5.2], [13, 4.8, 6.3, 3.6], [14, 4.2, 6.2, 3.4]]);\n      var options = {\n        chart: {\n          title: 'Box Office Earnings in First Two Weeks of Opening',\n          subtitle: 'in millions of dollars (USD)'\n        },\n        colors: ['#6e4ff5', '#f6aa33', '#fe3995']\n      };\n      var chart = new google.charts.Line(document.getElementById('kt_docs_google_chart_line'));\n      chart.draw(data, options);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleLine();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGoogleChartLineDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2dvb2dsZS1jaGFydHMvbGluZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFZO0FBQ3BDO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBWTtBQUMxQjtBQUNBQyxJQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWSxlQUFaLEVBQTZCLEdBQTdCLEVBQWtDO0FBQzlCQyxNQUFBQSxRQUFRLEVBQUUsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQjtBQURvQixLQUFsQztBQUlBRixJQUFBQSxNQUFNLENBQUNHLGlCQUFQLENBQXlCLFlBQVk7QUFDakM7QUFDQSxVQUFJQyxJQUFJLEdBQUcsSUFBSUosTUFBTSxDQUFDSyxhQUFQLENBQXFCQyxTQUF6QixFQUFYO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlLFFBQWYsRUFBeUIsS0FBekI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWUsUUFBZixFQUF5Qix5QkFBekI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWUsUUFBZixFQUF5QixjQUF6QjtBQUNBSCxNQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCLGlDQUF6QjtBQUVBSCxNQUFBQSxJQUFJLENBQUNJLE9BQUwsQ0FBYSxDQUNULENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLENBRFMsRUFFVCxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixDQUZTLEVBR1QsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLEVBQVYsRUFBYyxJQUFkLENBSFMsRUFJVCxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixDQUpTLEVBS1QsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FMUyxFQU1ULENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxJQUFULEVBQWUsR0FBZixDQU5TLEVBT1QsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLElBQVQsRUFBZSxHQUFmLENBUFMsRUFRVCxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixDQVJTLEVBU1QsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsQ0FUUyxFQVVULENBQUMsRUFBRCxFQUFLLElBQUwsRUFBVyxJQUFYLEVBQWlCLElBQWpCLENBVlMsRUFXVCxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsQ0FYUyxFQVlULENBQUMsRUFBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLEVBQWUsR0FBZixDQVpTLEVBYVQsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxHQUFmLENBYlMsRUFjVCxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsQ0FkUyxDQUFiO0FBaUJBLFVBQUlDLE9BQU8sR0FBRztBQUNWQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsS0FBSyxFQUFFLG1EQURKO0FBRUhDLFVBQUFBLFFBQVEsRUFBRTtBQUZQLFNBREc7QUFLVkMsUUFBQUEsTUFBTSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkI7QUFMRSxPQUFkO0FBUUEsVUFBSUgsS0FBSyxHQUFHLElBQUlWLE1BQU0sQ0FBQ2MsTUFBUCxDQUFjQyxJQUFsQixDQUF1QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixDQUF2QixDQUFaO0FBQ0FQLE1BQUFBLEtBQUssQ0FBQ1EsSUFBTixDQUFXZCxJQUFYLEVBQWlCSyxPQUFqQjtBQUNILEtBbkNEO0FBb0NILEdBMUNEOztBQTRDQSxTQUFPO0FBQ0g7QUFDQVUsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RwQixNQUFBQSxXQUFXO0FBQ2Q7QUFKRSxHQUFQO0FBTUgsQ0FwRDJCLEVBQTVCLEMsQ0FzREE7OztBQUNBcUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDdkIsRUFBQUEscUJBQXFCLENBQUNxQixJQUF0QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vY2hhcnRzL2dvb2dsZS1jaGFydHMvbGluZS5qcz9hY2Y1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHb29nbGVDaGFydExpbmVEZW1vID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVMaW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBHT09HTEUgQ0hBUlRTIElOSVRcbiAgICAgICAgZ29vZ2xlLmxvYWQoJ3Zpc3VhbGl6YXRpb24nLCAnMScsIHtcbiAgICAgICAgICAgIHBhY2thZ2VzOiBbJ2NvcmVjaGFydCcsICdiYXInLCAnbGluZSddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdvb2dsZS5zZXRPbkxvYWRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBMSU5FIENIQVJUXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBnb29nbGUudmlzdWFsaXphdGlvbi5EYXRhVGFibGUoKTtcbiAgICAgICAgICAgIGRhdGEuYWRkQ29sdW1uKCdudW1iZXInLCAnRGF5Jyk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJ0d1YXJkaWFucyBvZiB0aGUgR2FsYXh5Jyk7XG4gICAgICAgICAgICBkYXRhLmFkZENvbHVtbignbnVtYmVyJywgJ1RoZSBBdmVuZ2VycycpO1xuICAgICAgICAgICAgZGF0YS5hZGRDb2x1bW4oJ251bWJlcicsICdUcmFuc2Zvcm1lcnM6IEFnZSBvZiBFeHRpbmN0aW9uJyk7XG5cbiAgICAgICAgICAgIGRhdGEuYWRkUm93cyhbXG4gICAgICAgICAgICAgICAgWzEsIDM3LjgsIDgwLjgsIDQxLjhdLFxuICAgICAgICAgICAgICAgIFsyLCAzMC45LCA2OS41LCAzMi40XSxcbiAgICAgICAgICAgICAgICBbMywgMjUuNCwgNTcsIDI1LjddLFxuICAgICAgICAgICAgICAgIFs0LCAxMS43LCAxOC44LCAxMC41XSxcbiAgICAgICAgICAgICAgICBbNSwgMTEuOSwgMTcuNiwgMTAuNF0sXG4gICAgICAgICAgICAgICAgWzYsIDguOCwgMTMuNiwgNy43XSxcbiAgICAgICAgICAgICAgICBbNywgNy42LCAxMi4zLCA5LjZdLFxuICAgICAgICAgICAgICAgIFs4LCAxMi4zLCAyOS4yLCAxMC42XSxcbiAgICAgICAgICAgICAgICBbOSwgMTYuOSwgNDIuOSwgMTQuOF0sXG4gICAgICAgICAgICAgICAgWzEwLCAxMi44LCAzMC45LCAxMS42XSxcbiAgICAgICAgICAgICAgICBbMTEsIDUuMywgNy45LCA0LjddLFxuICAgICAgICAgICAgICAgIFsxMiwgNi42LCA4LjQsIDUuMl0sXG4gICAgICAgICAgICAgICAgWzEzLCA0LjgsIDYuMywgMy42XSxcbiAgICAgICAgICAgICAgICBbMTQsIDQuMiwgNi4yLCAzLjRdXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCb3ggT2ZmaWNlIEVhcm5pbmdzIGluIEZpcnN0IFR3byBXZWVrcyBvZiBPcGVuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgc3VidGl0bGU6ICdpbiBtaWxsaW9ucyBvZiBkb2xsYXJzIChVU0QpJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sb3JzOiBbJyM2ZTRmZjUnLCAnI2Y2YWEzMycsICcjZmUzOTk1J11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjaGFydCA9IG5ldyBnb29nbGUuY2hhcnRzLkxpbmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZ29vZ2xlX2NoYXJ0X2xpbmUnKSk7XG4gICAgICAgICAgICBjaGFydC5kcmF3KGRhdGEsIG9wdGlvbnMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVMaW5lKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RHb29nbGVDaGFydExpbmVEZW1vLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR29vZ2xlQ2hhcnRMaW5lRGVtbyIsImV4YW1wbGVMaW5lIiwiZ29vZ2xlIiwibG9hZCIsInBhY2thZ2VzIiwic2V0T25Mb2FkQ2FsbGJhY2siLCJkYXRhIiwidmlzdWFsaXphdGlvbiIsIkRhdGFUYWJsZSIsImFkZENvbHVtbiIsImFkZFJvd3MiLCJvcHRpb25zIiwiY2hhcnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY29sb3JzIiwiY2hhcnRzIiwiTGluZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkcmF3IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/charts/google-charts/line.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/charts/google-charts/line.js"]();
/******/ 	
/******/ })()
;