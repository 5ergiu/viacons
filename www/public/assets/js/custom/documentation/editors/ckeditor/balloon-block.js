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

/***/ "./resources/theme/js/custom/documentation/editors/ckeditor/balloon-block.js":
/*!***********************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/editors/ckeditor/balloon-block.js ***!
  \***********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsCKEditorBalloonBlock = function () {\n  // Private functions\n  var exampleBalloonBlock = function exampleBalloonBlock() {\n    BalloonEditor.create(document.querySelector('#kt_docs_ckeditor_balloon_block')).then(function (editor) {\n      console.log(editor);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBalloonBlock();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorBalloonBlock.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy9ja2VkaXRvci9iYWxsb29uLWJsb2NrLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDJCQUEyQixHQUFHLFlBQVk7QUFDMUM7QUFDQSxNQUFJQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQVk7QUFDbENDLElBQUFBLGFBQWEsQ0FDUkMsTUFETCxDQUNZQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUNBQXZCLENBRFosRUFFS0MsSUFGTCxDQUVVLFVBQUFDLE1BQU0sRUFBSTtBQUNaQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNILEtBSkwsV0FLVyxVQUFBRyxLQUFLLEVBQUk7QUFDWkYsTUFBQUEsT0FBTyxDQUFDRSxLQUFSLENBQWNBLEtBQWQ7QUFDSCxLQVBMO0FBUUgsR0FURDs7QUFXQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RWLE1BQUFBLG1CQUFtQjtBQUN0QjtBQUpFLEdBQVA7QUFNSCxDQW5CaUMsRUFBbEMsQyxDQXFCQTs7O0FBQ0FXLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2IsRUFBQUEsMkJBQTJCLENBQUNXLElBQTVCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy90aGVtZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL2NrZWRpdG9yL2JhbGxvb24tYmxvY2suanM/ZTI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNDS0VkaXRvckJhbGxvb25CbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQmFsbG9vbkJsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBCYWxsb29uRWRpdG9yXG4gICAgICAgICAgICAuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9kb2NzX2NrZWRpdG9yX2JhbGxvb25fYmxvY2snKSlcbiAgICAgICAgICAgIC50aGVuKGVkaXRvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWRpdG9yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFsbG9vbkJsb2NrKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3Jtc0NLRWRpdG9yQmFsbG9vbkJsb2NrLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURm9ybXNDS0VkaXRvckJhbGxvb25CbG9jayIsImV4YW1wbGVCYWxsb29uQmxvY2siLCJCYWxsb29uRWRpdG9yIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGhlbiIsImVkaXRvciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/editors/ckeditor/balloon-block.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/editors/ckeditor/balloon-block.js"]();
/******/ 	
/******/ })()
;