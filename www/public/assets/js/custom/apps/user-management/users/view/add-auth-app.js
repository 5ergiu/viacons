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

/***/ "./resources/theme/js/custom/apps/user-management/users/view/add-auth-app.js":
/*!***********************************************************************************!*\
  !*** ./resources/theme/js/custom/apps/user-management/users/view/add-auth-app.js ***!
  \***********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersAddAuthApp = function () {\n  // Shared variables\n  var element = document.getElementById('kt_modal_add_auth_app');\n  var modal = new bootstrap.Modal(element); // Init add schedule modal\n\n  var initAddAuthApp = function initAddAuthApp() {\n    // Close button handler\n    var closeButton = element.querySelector('[data-kt-users-modal-action=\"close\"]');\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to close?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, close it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          modal.hide(); // Hide modal\t\t\t\t\n        }\n      });\n    });\n  }; // QR code to text code swapper\n\n\n  var initCodeSwap = function initCodeSwap() {\n    var qrCode = element.querySelector('[ data-kt-add-auth-action=\"qr-code\"]');\n    var textCode = element.querySelector('[ data-kt-add-auth-action=\"text-code\"]');\n    var qrCodeButton = element.querySelector('[ data-kt-add-auth-action=\"qr-code-button\"]');\n    var textCodeButton = element.querySelector('[ data-kt-add-auth-action=\"text-code-button\"]');\n    var qrCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"qr-code-label\"]');\n    var textCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"text-code-label\"]');\n\n    var toggleClass = function toggleClass() {\n      qrCode.classList.toggle('d-none');\n      qrCodeButton.classList.toggle('d-none');\n      qrCodeLabel.classList.toggle('d-none');\n      textCode.classList.toggle('d-none');\n      textCodeButton.classList.toggle('d-none');\n      textCodeLabel.classList.toggle('d-none');\n    }; // Swap to text code handler\n\n\n    textCodeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      toggleClass();\n    });\n    qrCodeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      toggleClass();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      initAddAuthApp();\n      initCodeSwap();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersAddAuthApp.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL3ZpZXcvYWRkLWF1dGgtYXBwLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVk7QUFDaEM7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3Qix1QkFBeEIsQ0FBaEI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFkLENBQW9CTCxPQUFwQixDQUFkLENBSGdDLENBS2hDOztBQUNBLE1BQUlNLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUV2QjtBQUNBLFFBQU1DLFdBQVcsR0FBR1AsT0FBTyxDQUFDUSxhQUFSLENBQXNCLHNDQUF0QixDQUFwQjtBQUNBRCxJQUFBQSxXQUFXLENBQUNFLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQUFDLENBQUMsRUFBSTtBQUN2Q0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFDLE1BQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLFFBQUFBLElBQUksRUFBRSx1Q0FEQTtBQUVOQyxRQUFBQSxJQUFJLEVBQUUsU0FGQTtBQUdOQyxRQUFBQSxnQkFBZ0IsRUFBRSxJQUhaO0FBSU5DLFFBQUFBLGNBQWMsRUFBRSxLQUpWO0FBS05DLFFBQUFBLGlCQUFpQixFQUFFLGdCQUxiO0FBTU5DLFFBQUFBLGdCQUFnQixFQUFFLFlBTlo7QUFPTkMsUUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFVBQUFBLGFBQWEsRUFBRSxpQkFETjtBQUVUQyxVQUFBQSxZQUFZLEVBQUU7QUFGTDtBQVBQLE9BQVYsRUFXR0MsSUFYSCxDQVdRLFVBQVVDLE1BQVYsRUFBa0I7QUFDdEIsWUFBSUEsTUFBTSxDQUFDQyxLQUFYLEVBQWtCO0FBQ2R0QixVQUFBQSxLQUFLLENBQUN1QixJQUFOLEdBRGMsQ0FDQTtBQUNqQjtBQUNKLE9BZkQ7QUFnQkgsS0FuQkQ7QUFxQkgsR0F6QkQsQ0FOZ0MsQ0FpQ2hDOzs7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3JCLFFBQU1DLE1BQU0sR0FBRzVCLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQixzQ0FBdEIsQ0FBZjtBQUNBLFFBQU1xQixRQUFRLEdBQUc3QixPQUFPLENBQUNRLGFBQVIsQ0FBc0Isd0NBQXRCLENBQWpCO0FBQ0EsUUFBTXNCLFlBQVksR0FBRzlCLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQiw2Q0FBdEIsQ0FBckI7QUFDQSxRQUFNdUIsY0FBYyxHQUFHL0IsT0FBTyxDQUFDUSxhQUFSLENBQXNCLCtDQUF0QixDQUF2QjtBQUNBLFFBQU13QixXQUFXLEdBQUdoQyxPQUFPLENBQUNRLGFBQVIsQ0FBc0IsNENBQXRCLENBQXBCO0FBQ0EsUUFBTXlCLGFBQWEsR0FBR2pDLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQiw4Q0FBdEIsQ0FBdEI7O0FBRUEsUUFBTTBCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDckJOLE1BQUFBLE1BQU0sQ0FBQ08sU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsUUFBeEI7QUFDQU4sTUFBQUEsWUFBWSxDQUFDSyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixRQUE5QjtBQUNBSixNQUFBQSxXQUFXLENBQUNHLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0FQLE1BQUFBLFFBQVEsQ0FBQ00sU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsUUFBMUI7QUFDQUwsTUFBQUEsY0FBYyxDQUFDSSxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxRQUFoQztBQUNBSCxNQUFBQSxhQUFhLENBQUNFLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFFBQS9CO0FBQ0gsS0FQRCxDQVJxQixDQWlCckI7OztBQUNBTCxJQUFBQSxjQUFjLENBQUN0QixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxVQUFBQyxDQUFDLEVBQUc7QUFDekNBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBdUIsTUFBQUEsV0FBVztBQUNkLEtBSkQ7QUFNQUosSUFBQUEsWUFBWSxDQUFDckIsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBQUMsQ0FBQyxFQUFHO0FBQ3ZDQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQXVCLE1BQUFBLFdBQVc7QUFDZCxLQUpEO0FBS0gsR0E3QkQ7O0FBK0JBLFNBQU87QUFDSDtBQUNBRyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZC9CLE1BQUFBLGNBQWM7QUFDZHFCLE1BQUFBLFlBQVk7QUFDZjtBQUxFLEdBQVA7QUFPSCxDQXhFdUIsRUFBeEIsQyxDQTBFQTs7O0FBQ0FXLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3hDLEVBQUFBLGlCQUFpQixDQUFDc0MsSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RoZW1lL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy92aWV3L2FkZC1hdXRoLWFwcC5qcz9lZmI2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RVc2Vyc0FkZEF1dGhBcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfbW9kYWxfYWRkX2F1dGhfYXBwJyk7XG4gICAgY29uc3QgbW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGVsZW1lbnQpO1xuXG4gICAgLy8gSW5pdCBhZGQgc2NoZWR1bGUgbW9kYWxcbiAgICB2YXIgaW5pdEFkZEF1dGhBcHAgPSAoKSA9PiB7XG5cbiAgICAgICAgLy8gQ2xvc2UgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXVzZXJzLW1vZGFsLWFjdGlvbj1cImNsb3NlXCJdJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2xvc2U/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBjbG9zZSBpdCFcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuaGlkZSgpOyAvLyBIaWRlIG1vZGFsXHRcdFx0XHRcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gUVIgY29kZSB0byB0ZXh0IGNvZGUgc3dhcHBlclxuICAgIHZhciBpbml0Q29kZVN3YXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHFyQ29kZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignWyBkYXRhLWt0LWFkZC1hdXRoLWFjdGlvbj1cInFyLWNvZGVcIl0nKTtcbiAgICAgICAgY29uc3QgdGV4dENvZGUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1sgZGF0YS1rdC1hZGQtYXV0aC1hY3Rpb249XCJ0ZXh0LWNvZGVcIl0nKTtcbiAgICAgICAgY29uc3QgcXJDb2RlQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwicXItY29kZS1idXR0b25cIl0nKTtcbiAgICAgICAgY29uc3QgdGV4dENvZGVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1sgZGF0YS1rdC1hZGQtYXV0aC1hY3Rpb249XCJ0ZXh0LWNvZGUtYnV0dG9uXCJdJyk7XG4gICAgICAgIGNvbnN0IHFyQ29kZUxhYmVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwicXItY29kZS1sYWJlbFwiXScpO1xuICAgICAgICBjb25zdCB0ZXh0Q29kZUxhYmVsID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwidGV4dC1jb2RlLWxhYmVsXCJdJyk7XG5cbiAgICAgICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSAoKSA9PntcbiAgICAgICAgICAgIHFyQ29kZS5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHFyQ29kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHFyQ29kZUxhYmVsLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgdGV4dENvZGUuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB0ZXh0Q29kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHRleHRDb2RlTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTd2FwIHRvIHRleHQgY29kZSBoYW5kbGVyXG4gICAgICAgIHRleHRDb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcXJDb2RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIGZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0QWRkQXV0aEFwcCgpO1xuICAgICAgICAgICAgaW5pdENvZGVTd2FwKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RVc2Vyc0FkZEF1dGhBcHAuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUVXNlcnNBZGRBdXRoQXBwIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2RhbCIsImJvb3RzdHJhcCIsIk1vZGFsIiwiaW5pdEFkZEF1dGhBcHAiLCJjbG9zZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJ2YWx1ZSIsImhpZGUiLCJpbml0Q29kZVN3YXAiLCJxckNvZGUiLCJ0ZXh0Q29kZSIsInFyQ29kZUJ1dHRvbiIsInRleHRDb2RlQnV0dG9uIiwicXJDb2RlTGFiZWwiLCJ0ZXh0Q29kZUxhYmVsIiwidG9nZ2xlQ2xhc3MiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/apps/user-management/users/view/add-auth-app.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/apps/user-management/users/view/add-auth-app.js"]();
/******/ 	
/******/ })()
;