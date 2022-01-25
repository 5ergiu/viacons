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

/***/ "./resources/theme/js/custom/documentation/general/jstree/ajax.js":
/*!************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/general/jstree/ajax.js ***!
  \************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTJSTreeAjax = function () {\n  // Private functions\n  var exampleAjax = function exampleAjax() {\n    $(\"#kt_docs_jstree_ajax\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': {\n          'url': function url(node) {\n            return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint\n          },\n          'data': function data(node) {\n            return {\n              'parent': node.id\n            };\n          }\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo3\"\n      },\n      \"plugins\": [\"dnd\", \"state\", \"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAjax();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeAjax.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvYWpheC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxZQUFZLEdBQUcsWUFBVztBQUMxQjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVc7QUFDekJDLElBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCQyxNQUExQixDQUFpQztBQUM3QixjQUFRO0FBQ0osa0JBQVU7QUFDTix3QkFBYztBQURSLFNBRE47QUFJSjtBQUNBLDBCQUFrQixJQUxkO0FBTUosZ0JBQVE7QUFDSixpQkFBTyxhQUFTQyxJQUFULEVBQWU7QUFDbEIsbUJBQU8seURBQVAsQ0FEa0IsQ0FDZ0Q7QUFDckUsV0FIRztBQUlKLGtCQUFRLGNBQVNBLElBQVQsRUFBZTtBQUNuQixtQkFBTztBQUNILHdCQUFVQSxJQUFJLENBQUNDO0FBRFosYUFBUDtBQUdIO0FBUkc7QUFOSixPQURxQjtBQWtCN0IsZUFBUztBQUNMLG1CQUFXO0FBQ1Asa0JBQVE7QUFERCxTQUROO0FBSUwsZ0JBQVE7QUFDSixrQkFBUTtBQURKO0FBSkgsT0FsQm9CO0FBMEI3QixlQUFTO0FBQ0wsZUFBTztBQURGLE9BMUJvQjtBQTZCN0IsaUJBQVcsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixPQUFqQjtBQTdCa0IsS0FBakM7QUErQkgsR0FoQ0Q7O0FBa0NBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYkwsTUFBQUEsV0FBVztBQUNkO0FBSkUsR0FBUDtBQU1ILENBMUNrQixFQUFuQixDLENBNENBOzs7QUFDQU0sTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDUixFQUFBQSxZQUFZLENBQUNNLElBQWI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RoZW1lL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2FqYXguanM/N2Q3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSlNUcmVlQWpheCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVBamF4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIja3RfZG9jc19qc3RyZWVfYWpheFwiKS5qc3RyZWUoe1xuICAgICAgICAgICAgXCJjb3JlXCI6IHtcbiAgICAgICAgICAgICAgICBcInRoZW1lc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gc28gdGhhdCBjcmVhdGUgd29ya3NcbiAgICAgICAgICAgICAgICBcImNoZWNrX2NhbGxiYWNrXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiB7XG4gICAgICAgICAgICAgICAgICAgICd1cmwnOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcHJldmlldy5rZWVudGhlbWVzLmNvbS9hcGkvanN0cmVlL2FqYXhfZGF0YS5waHAnOyAvLyBEZW1vIEFQSSBlbmRwb2ludCAtLSBSZXBsYWNlIHRoaXMgVVJMIHdpdGggeW91ciBzZXQgZW5kcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYXJlbnQnOiBub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZXNcIjoge1xuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWZvbGRlciB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmaWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZmlsZSAgdGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCJkZW1vM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwbHVnaW5zXCI6IFtcImRuZFwiLCBcInN0YXRlXCIsIFwidHlwZXNcIl1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVBamF4KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEpTVHJlZUFqYXguaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RKU1RyZWVBamF4IiwiZXhhbXBsZUFqYXgiLCIkIiwianN0cmVlIiwibm9kZSIsImlkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/general/jstree/ajax.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/general/jstree/ajax.js"]();
/******/ 	
/******/ })()
;