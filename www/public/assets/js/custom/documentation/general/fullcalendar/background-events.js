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

/***/ "./resources/theme/js/custom/documentation/general/fullcalendar/background-events.js":
/*!*******************************************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/general/fullcalendar/background-events.js ***!
  \*******************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralFullCalendarEventsDemos = function () {\n  // Private functions\n  var exampleBackgroundEvents = function exampleBackgroundEvents() {\n    // Define colors\n    var green = KTUtil.getCssVariableValue('--bs-active-success');\n    var red = KTUtil.getCssVariableValue('--bs-active-danger'); // Initialize Fullcalendar -- for more info please visit the official site: https://fullcalendar.io/demos\n\n    var calendarEl = document.getElementById('kt_docs_fullcalendar_background_events');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'\n      },\n      initialDate: '2020-09-12',\n      navLinks: true,\n      // can click day/week names to navigate views\n      businessHours: true,\n      // display business hours\n      editable: true,\n      selectable: true,\n      events: [{\n        title: 'Business Lunch',\n        start: '2020-09-03T13:00:00',\n        constraint: 'businessHours'\n      }, {\n        title: 'Meeting',\n        start: '2020-09-13T11:00:00',\n        constraint: 'availableForMeeting',\n        // defined below\n        color: green\n      }, {\n        title: 'Conference',\n        start: '2020-09-18',\n        end: '2020-09-20'\n      }, {\n        title: 'Party',\n        start: '2020-09-29T20:00:00'\n      }, // areas where \"Meeting\" must be dropped\n      {\n        groupId: 'availableForMeeting',\n        start: '2020-09-11',\n        end: '2020-09-11',\n        display: 'background'\n      }, {\n        groupId: 'availableForMeeting',\n        start: '2020-09-13',\n        end: '2020-09-13',\n        display: 'background'\n      }, // red areas where no events can be dropped\n      {\n        start: '2020-09-24',\n        end: '2020-09-28',\n        overlap: false,\n        display: 'background',\n        color: red\n      }, {\n        start: '2020-09-06',\n        end: '2020-09-08',\n        overlap: false,\n        display: 'background',\n        color: red\n      }]\n    });\n    calendar.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBackgroundEvents();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralFullCalendarEventsDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9mdWxsY2FsZW5kYXIvYmFja2dyb3VuZC1ldmVudHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0NBQWdDLEdBQUcsWUFBVztBQUNqRDtBQUVBLE1BQUlDLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBVztBQUN4QztBQUNBLFFBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixxQkFBM0IsQ0FBWjtBQUNBLFFBQUlDLEdBQUcsR0FBR0YsTUFBTSxDQUFDQyxtQkFBUCxDQUEyQixvQkFBM0IsQ0FBVixDQUh3QyxDQUt4Qzs7QUFDQSxRQUFJRSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix3Q0FBeEIsQ0FBakI7QUFFQSxRQUFJQyxRQUFRLEdBQUcsSUFBSUMsWUFBWSxDQUFDQyxRQUFqQixDQUEwQkwsVUFBMUIsRUFBc0M7QUFDcERNLE1BQUFBLGFBQWEsRUFBRTtBQUNkQyxRQUFBQSxJQUFJLEVBQUUsaUJBRFE7QUFFZEMsUUFBQUEsTUFBTSxFQUFFLE9BRk07QUFHZEMsUUFBQUEsS0FBSyxFQUFFO0FBSE8sT0FEcUM7QUFNcERDLE1BQUFBLFdBQVcsRUFBRSxZQU51QztBQU9wREMsTUFBQUEsUUFBUSxFQUFFLElBUDBDO0FBT3BDO0FBQ2hCQyxNQUFBQSxhQUFhLEVBQUUsSUFScUM7QUFRL0I7QUFDckJDLE1BQUFBLFFBQVEsRUFBRSxJQVQwQztBQVVwREMsTUFBQUEsVUFBVSxFQUFFLElBVndDO0FBV3BEQyxNQUFBQSxNQUFNLEVBQUUsQ0FBQztBQUNQQyxRQUFBQSxLQUFLLEVBQUUsZ0JBREE7QUFFUEMsUUFBQUEsS0FBSyxFQUFFLHFCQUZBO0FBR1BDLFFBQUFBLFVBQVUsRUFBRTtBQUhMLE9BQUQsRUFLUDtBQUNDRixRQUFBQSxLQUFLLEVBQUUsU0FEUjtBQUVDQyxRQUFBQSxLQUFLLEVBQUUscUJBRlI7QUFHQ0MsUUFBQUEsVUFBVSxFQUFFLHFCQUhiO0FBR29DO0FBQ25DQyxRQUFBQSxLQUFLLEVBQUV2QjtBQUpSLE9BTE8sRUFXUDtBQUNDb0IsUUFBQUEsS0FBSyxFQUFFLFlBRFI7QUFFQ0MsUUFBQUEsS0FBSyxFQUFFLFlBRlI7QUFHQ0csUUFBQUEsR0FBRyxFQUFFO0FBSE4sT0FYTyxFQWdCUDtBQUNDSixRQUFBQSxLQUFLLEVBQUUsT0FEUjtBQUVDQyxRQUFBQSxLQUFLLEVBQUU7QUFGUixPQWhCTyxFQXFCUDtBQUNBO0FBQ0NJLFFBQUFBLE9BQU8sRUFBRSxxQkFEVjtBQUVDSixRQUFBQSxLQUFLLEVBQUUsWUFGUjtBQUdDRyxRQUFBQSxHQUFHLEVBQUUsWUFITjtBQUlDRSxRQUFBQSxPQUFPLEVBQUU7QUFKVixPQXRCTyxFQTRCUDtBQUNDRCxRQUFBQSxPQUFPLEVBQUUscUJBRFY7QUFFQ0osUUFBQUEsS0FBSyxFQUFFLFlBRlI7QUFHQ0csUUFBQUEsR0FBRyxFQUFFLFlBSE47QUFJQ0UsUUFBQUEsT0FBTyxFQUFFO0FBSlYsT0E1Qk8sRUFtQ1A7QUFDQTtBQUNDTCxRQUFBQSxLQUFLLEVBQUUsWUFEUjtBQUVDRyxRQUFBQSxHQUFHLEVBQUUsWUFGTjtBQUdDRyxRQUFBQSxPQUFPLEVBQUUsS0FIVjtBQUlDRCxRQUFBQSxPQUFPLEVBQUUsWUFKVjtBQUtDSCxRQUFBQSxLQUFLLEVBQUVwQjtBQUxSLE9BcENPLEVBMkNQO0FBQ0NrQixRQUFBQSxLQUFLLEVBQUUsWUFEUjtBQUVDRyxRQUFBQSxHQUFHLEVBQUUsWUFGTjtBQUdDRyxRQUFBQSxPQUFPLEVBQUUsS0FIVjtBQUlDRCxRQUFBQSxPQUFPLEVBQUUsWUFKVjtBQUtDSCxRQUFBQSxLQUFLLEVBQUVwQjtBQUxSLE9BM0NPO0FBWDRDLEtBQXRDLENBQWY7QUFnRUFJLElBQUFBLFFBQVEsQ0FBQ3FCLE1BQVQ7QUFDQSxHQXpFRDs7QUEyRUEsU0FBTztBQUNOO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNoQjlCLE1BQUFBLHVCQUF1QjtBQUN2QjtBQUpLLEdBQVA7QUFNQSxDQXBGc0MsRUFBdkMsQyxDQXNGQTs7O0FBQ0FFLE1BQU0sQ0FBQzZCLGtCQUFQLENBQTBCLFlBQVc7QUFDcENoQyxFQUFBQSxnQ0FBZ0MsQ0FBQytCLElBQWpDO0FBQ0EsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy90aGVtZS9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2Z1bGxjYWxlbmRhci9iYWNrZ3JvdW5kLWV2ZW50cy5qcz9mNmUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsRnVsbENhbGVuZGFyRXZlbnRzRGVtb3MgPSBmdW5jdGlvbigpIHtcblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcblxuXHR2YXIgZXhhbXBsZUJhY2tncm91bmRFdmVudHMgPSBmdW5jdGlvbigpIHtcblx0XHQvLyBEZWZpbmUgY29sb3JzXG5cdFx0dmFyIGdyZWVuID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLXN1Y2Nlc3MnKTtcblx0XHR2YXIgcmVkID0gS1RVdGlsLmdldENzc1ZhcmlhYmxlVmFsdWUoJy0tYnMtYWN0aXZlLWRhbmdlcicpO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBGdWxsY2FsZW5kYXIgLS0gZm9yIG1vcmUgaW5mbyBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHNpdGU6IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RlbW9zXG5cdFx0dmFyIGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mdWxsY2FsZW5kYXJfYmFja2dyb3VuZF9ldmVudHMnKTtcblxuXHRcdHZhciBjYWxlbmRhciA9IG5ldyBGdWxsQ2FsZW5kYXIuQ2FsZW5kYXIoY2FsZW5kYXJFbCwge1xuXHRcdFx0aGVhZGVyVG9vbGJhcjoge1xuXHRcdFx0XHRsZWZ0OiAncHJldixuZXh0IHRvZGF5Jyxcblx0XHRcdFx0Y2VudGVyOiAndGl0bGUnLFxuXHRcdFx0XHRyaWdodDogJ2RheUdyaWRNb250aCx0aW1lR3JpZFdlZWssdGltZUdyaWREYXksbGlzdE1vbnRoJ1xuXHRcdFx0fSxcblx0XHRcdGluaXRpYWxEYXRlOiAnMjAyMC0wOS0xMicsXG5cdFx0XHRuYXZMaW5rczogdHJ1ZSwgLy8gY2FuIGNsaWNrIGRheS93ZWVrIG5hbWVzIHRvIG5hdmlnYXRlIHZpZXdzXG5cdFx0XHRidXNpbmVzc0hvdXJzOiB0cnVlLCAvLyBkaXNwbGF5IGJ1c2luZXNzIGhvdXJzXG5cdFx0XHRlZGl0YWJsZTogdHJ1ZSxcblx0XHRcdHNlbGVjdGFibGU6IHRydWUsXG5cdFx0XHRldmVudHM6IFt7XG5cdFx0XHRcdFx0dGl0bGU6ICdCdXNpbmVzcyBMdW5jaCcsXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTAzVDEzOjAwOjAwJyxcblx0XHRcdFx0XHRjb25zdHJhaW50OiAnYnVzaW5lc3NIb3Vycydcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiAnTWVldGluZycsXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTEzVDExOjAwOjAwJyxcblx0XHRcdFx0XHRjb25zdHJhaW50OiAnYXZhaWxhYmxlRm9yTWVldGluZycsIC8vIGRlZmluZWQgYmVsb3dcblx0XHRcdFx0XHRjb2xvcjogZ3JlZW5cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRpdGxlOiAnQ29uZmVyZW5jZScsXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTE4Jyxcblx0XHRcdFx0XHRlbmQ6ICcyMDIwLTA5LTIwJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6ICdQYXJ0eScsXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTI5VDIwOjAwOjAwJ1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIGFyZWFzIHdoZXJlIFwiTWVldGluZ1wiIG11c3QgYmUgZHJvcHBlZFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Z3JvdXBJZDogJ2F2YWlsYWJsZUZvck1lZXRpbmcnLFxuXHRcdFx0XHRcdHN0YXJ0OiAnMjAyMC0wOS0xMScsXG5cdFx0XHRcdFx0ZW5kOiAnMjAyMC0wOS0xMScsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2JhY2tncm91bmQnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Z3JvdXBJZDogJ2F2YWlsYWJsZUZvck1lZXRpbmcnLFxuXHRcdFx0XHRcdHN0YXJ0OiAnMjAyMC0wOS0xMycsXG5cdFx0XHRcdFx0ZW5kOiAnMjAyMC0wOS0xMycsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2JhY2tncm91bmQnLFxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIHJlZCBhcmVhcyB3aGVyZSBubyBldmVudHMgY2FuIGJlIGRyb3BwZWRcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAnMjAyMC0wOS0yNCcsXG5cdFx0XHRcdFx0ZW5kOiAnMjAyMC0wOS0yOCcsXG5cdFx0XHRcdFx0b3ZlcmxhcDogZmFsc2UsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2JhY2tncm91bmQnLFxuXHRcdFx0XHRcdGNvbG9yOiByZWRcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAnMjAyMC0wOS0wNicsXG5cdFx0XHRcdFx0ZW5kOiAnMjAyMC0wOS0wOCcsXG5cdFx0XHRcdFx0b3ZlcmxhcDogZmFsc2UsXG5cdFx0XHRcdFx0ZGlzcGxheTogJ2JhY2tncm91bmQnLFxuXHRcdFx0XHRcdGNvbG9yOiByZWRcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXG5cdFx0Y2FsZW5kYXIucmVuZGVyKCk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC8vIFB1YmxpYyBGdW5jdGlvbnNcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdGV4YW1wbGVCYWNrZ3JvdW5kRXZlbnRzKCk7XG5cdFx0fVxuXHR9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcblx0S1RHZW5lcmFsRnVsbENhbGVuZGFyRXZlbnRzRGVtb3MuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUR2VuZXJhbEZ1bGxDYWxlbmRhckV2ZW50c0RlbW9zIiwiZXhhbXBsZUJhY2tncm91bmRFdmVudHMiLCJncmVlbiIsIktUVXRpbCIsImdldENzc1ZhcmlhYmxlVmFsdWUiLCJyZWQiLCJjYWxlbmRhckVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNhbGVuZGFyIiwiRnVsbENhbGVuZGFyIiwiQ2FsZW5kYXIiLCJoZWFkZXJUb29sYmFyIiwibGVmdCIsImNlbnRlciIsInJpZ2h0IiwiaW5pdGlhbERhdGUiLCJuYXZMaW5rcyIsImJ1c2luZXNzSG91cnMiLCJlZGl0YWJsZSIsInNlbGVjdGFibGUiLCJldmVudHMiLCJ0aXRsZSIsInN0YXJ0IiwiY29uc3RyYWludCIsImNvbG9yIiwiZW5kIiwiZ3JvdXBJZCIsImRpc3BsYXkiLCJvdmVybGFwIiwicmVuZGVyIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/general/fullcalendar/background-events.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/general/fullcalendar/background-events.js"]();
/******/ 	
/******/ })()
;