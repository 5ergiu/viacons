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

/***/ "./resources/theme/js/custom/documentation/general/toastr.js":
/*!*******************************************************************!*\
  !*** ./resources/theme/js/custom/documentation/general/toastr.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralToastr = function () {\n  // Private functions\n  var example1 = function example1() {\n    var i = -1;\n    var toastCount = 0;\n    var $toastlast;\n\n    var getMessage = function getMessage() {\n      var msgs = ['New order has been placed!', 'Are you the six fingered man?', 'Inconceivable!', 'I do not think that means what you think it means.', 'Have fun storming the castle!'];\n      i++;\n\n      if (i === msgs.length) {\n        i = 0;\n      }\n\n      return msgs[i];\n    };\n\n    var getMessageWithClearButton = function getMessageWithClearButton(msg) {\n      msg = msg ? msg : 'Clear itself?';\n      msg += '<br /><br /><button type=\"button\" class=\"btn btn-outline-light btn-sm\">Yes</button>';\n      return msg;\n    };\n\n    $('#showtoast').on('click', function () {\n      var shortCutFunction = $(\"#toastTypeGroup input:radio:checked\").val();\n      var msg = $('#message').val();\n      var title = $('#title').val() || '';\n      var $showDuration = $('#showDuration');\n      var $hideDuration = $('#hideDuration');\n      var $timeOut = $('#timeOut');\n      var $extendedTimeOut = $('#extendedTimeOut');\n      var $showEasing = $('#showEasing');\n      var $hideEasing = $('#hideEasing');\n      var $showMethod = $('#showMethod');\n      var $hideMethod = $('#hideMethod');\n      var toastIndex = toastCount++;\n      var addClear = $('#addClear').prop('checked');\n      toastr.options = {\n        closeButton: $('#closeButton').prop('checked'),\n        debug: $('#debugInfo').prop('checked'),\n        newestOnTop: $('#newestOnTop').prop('checked'),\n        progressBar: $('#progressBar').prop('checked'),\n        positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',\n        preventDuplicates: $('#preventDuplicates').prop('checked'),\n        onclick: null\n      };\n\n      if ($('#addBehaviorOnToastClick').prop('checked')) {\n        toastr.options.onclick = function () {\n          alert('You can perform some custom action after a toast goes away');\n        };\n      }\n\n      if ($showDuration.val().length) {\n        toastr.options.showDuration = $showDuration.val();\n      }\n\n      if ($hideDuration.val().length) {\n        toastr.options.hideDuration = $hideDuration.val();\n      }\n\n      if ($timeOut.val().length) {\n        toastr.options.timeOut = addClear ? 0 : $timeOut.val();\n      }\n\n      if ($extendedTimeOut.val().length) {\n        toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();\n      }\n\n      if ($showEasing.val().length) {\n        toastr.options.showEasing = $showEasing.val();\n      }\n\n      if ($hideEasing.val().length) {\n        toastr.options.hideEasing = $hideEasing.val();\n      }\n\n      if ($showMethod.val().length) {\n        toastr.options.showMethod = $showMethod.val();\n      }\n\n      if ($hideMethod.val().length) {\n        toastr.options.hideMethod = $hideMethod.val();\n      }\n\n      if (addClear) {\n        msg = getMessageWithClearButton(msg);\n        toastr.options.tapToDismiss = false;\n      }\n\n      if (!msg) {\n        msg = getMessage();\n      }\n\n      $('#toastrOptions').text('toastr.options = ' + JSON.stringify(toastr.options, null, 2) + ';' + '\\n\\ntoastr.' + shortCutFunction + '(\"' + msg + (title ? '\", \"' + title : '') + '\");');\n      var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists\n\n      $toastlast = $toast;\n\n      if (typeof $toast === 'undefined') {\n        return;\n      }\n\n      if ($toast.find('#okBtn').length) {\n        $toast.delegate('#okBtn', 'click', function () {\n          alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');\n          $toast.remove();\n        });\n      }\n\n      if ($toast.find('#surpriseBtn').length) {\n        $toast.delegate('#surpriseBtn', 'click', function () {\n          alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');\n        });\n      }\n\n      if ($toast.find('.clear').length) {\n        $toast.delegate('.clear', 'click', function () {\n          toastr.clear($toast, {\n            force: true\n          });\n        });\n      }\n    });\n\n    function getLastToast() {\n      return $toastlast;\n    }\n\n    $('#clearlasttoast').on('click', function () {\n      toastr.clear(getLastToast());\n    });\n    $('#cleartoasts').on('click', function () {\n      toastr.clear();\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralToastr.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC90b2FzdHIuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZUFBZSxHQUFHLFlBQVc7QUFDN0I7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFXO0FBQ3RCLFFBQUlDLENBQUMsR0FBRyxDQUFDLENBQVQ7QUFDQSxRQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQSxRQUFJQyxVQUFKOztBQUVBLFFBQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFDekIsVUFBSUMsSUFBSSxHQUFHLENBQ1AsNEJBRE8sRUFFUCwrQkFGTyxFQUdQLGdCQUhPLEVBSVAsb0RBSk8sRUFLUCwrQkFMTyxDQUFYO0FBT0FKLE1BQUFBLENBQUM7O0FBQ0QsVUFBSUEsQ0FBQyxLQUFLSSxJQUFJLENBQUNDLE1BQWYsRUFBdUI7QUFDbkJMLFFBQUFBLENBQUMsR0FBRyxDQUFKO0FBQ0g7O0FBRUQsYUFBT0ksSUFBSSxDQUFDSixDQUFELENBQVg7QUFDSCxLQWREOztBQWdCQSxRQUFJTSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQVVDLEdBQVYsRUFBZTtBQUMzQ0EsTUFBQUEsR0FBRyxHQUFHQSxHQUFHLEdBQUdBLEdBQUgsR0FBUyxlQUFsQjtBQUNBQSxNQUFBQSxHQUFHLElBQUkscUZBQVA7QUFDQSxhQUFPQSxHQUFQO0FBQ0gsS0FKRDs7QUFNQUMsSUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQkMsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQyxVQUFJQyxnQkFBZ0IsR0FBR0YsQ0FBQyxDQUFDLHFDQUFELENBQUQsQ0FBeUNHLEdBQXpDLEVBQXZCO0FBQ0EsVUFBSUosR0FBRyxHQUFHQyxDQUFDLENBQUMsVUFBRCxDQUFELENBQWNHLEdBQWQsRUFBVjtBQUNBLFVBQUlDLEtBQUssR0FBR0osQ0FBQyxDQUFDLFFBQUQsQ0FBRCxD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RkQ7QUFHQTVDLElBQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0JDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7QUFDdENlLE1BQUFBLE1BQU0sQ0FBQzBCLEtBQVA7QUFDSCxLQUZEO0FBR0gsR0FoSkQ7O0FBa0pBLFNBQU87QUFDSDtBQUNBRyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYnRELE1BQUFBLFFBQVE7QUFDWDtBQUpFLEdBQVA7QUFNSCxDQTFKcUIsRUFBdEIsQyxDQTRKQTs7O0FBQ0F1RCxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakN6RCxFQUFBQSxlQUFlLENBQUN1RCxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC90b2FzdHIuanM/NjQzNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUR2VuZXJhbFRvYXN0ciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHZhciB0b2FzdENvdW50ID0gMDtcbiAgICAgICAgdmFyICR0b2FzdGxhc3Q7XG5cbiAgICAgICAgdmFyIGdldE1lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbXNncyA9IFtcbiAgICAgICAgICAgICAgICAnTmV3IG9yZGVyIGhhcyBiZWVuIHBsYWNlZCEnLFxuICAgICAgICAgICAgICAgICdBcmUgeW91IHRoZSBzaXggZmluZ2VyZWQgbWFuPycsXG4gICAgICAgICAgICAgICAgJ0luY29uY2VpdmFibGUhJyxcbiAgICAgICAgICAgICAgICAnSSBkbyBub3QgdGhpbmsgdGhhdCBtZWFucyB3aGF0IHlvdSB0aGluayBpdCBtZWFucy4nLFxuICAgICAgICAgICAgICAgICdIYXZlIGZ1biBzdG9ybWluZyB0aGUgY2FzdGxlISdcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbXNncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG1zZ3NbaV07XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldE1lc3NhZ2VXaXRoQ2xlYXJCdXR0b24gPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICBtc2cgPSBtc2cgPyBtc2cgOiAnQ2xlYXIgaXRzZWxmPyc7XG4gICAgICAgICAgICBtc2cgKz0gJzxiciAvPjxiciAvPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1zbVwiPlllczwvYnV0dG9uPic7XG4gICAgICAgICAgICByZXR1cm4gbXNnO1xuICAgICAgICB9O1xuXG4gICAgICAgICQoJyNzaG93dG9hc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2hvcnRDdXRGdW5jdGlvbiA9ICQoXCIjdG9hc3RUeXBlR3JvdXAgaW5wdXQ6cmFkaW86Y2hlY2tlZFwiKS52YWwoKTtcbiAgICAgICAgICAgIHZhciBtc2cgPSAkKCcjbWVzc2FnZScpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gJCgnI3RpdGxlJykudmFsKCkgfHwgJyc7XG4gICAgICAgICAgICB2YXIgJHNob3dEdXJhdGlvbiA9ICQoJyNzaG93RHVyYXRpb24nKTtcbiAgICAgICAgICAgIHZhciAkaGlkZUR1cmF0aW9uID0gJCgnI2hpZGVEdXJhdGlvbicpO1xuICAgICAgICAgICAgdmFyICR0aW1lT3V0ID0gJCgnI3RpbWVPdXQnKTtcbiAgICAgICAgICAgIHZhciAkZXh0ZW5kZWRUaW1lT3V0ID0gJCgnI2V4dGVuZGVkVGltZU91dCcpO1xuICAgICAgICAgICAgdmFyICRzaG93RWFzaW5nID0gJCgnI3Nob3dFYXNpbmcnKTtcbiAgICAgICAgICAgIHZhciAkaGlkZUVhc2luZyA9ICQoJyNoaWRlRWFzaW5nJyk7XG4gICAgICAgICAgICB2YXIgJHNob3dNZXRob2QgPSAkKCcjc2hvd01ldGhvZCcpO1xuICAgICAgICAgICAgdmFyICRoaWRlTWV0aG9kID0gJCgnI2hpZGVNZXRob2QnKTtcbiAgICAgICAgICAgIHZhciB0b2FzdEluZGV4ID0gdG9hc3RDb3VudCsrO1xuICAgICAgICAgICAgdmFyIGFkZENsZWFyID0gJCgnI2FkZENsZWFyJykucHJvcCgnY2hlY2tlZCcpO1xuXG4gICAgICAgICAgICB0b2FzdHIub3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbjogJCgnI2Nsb3NlQnV0dG9uJykucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAgICAgICAgIGRlYnVnOiAkKCcjZGVidWdJbmZvJykucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAgICAgICAgIG5ld2VzdE9uVG9wOiAkKCcjbmV3ZXN0T25Ub3AnKS5wcm9wKCdjaGVja2VkJyksXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXI6ICQoJyNwcm9ncmVzc0JhcicpLnByb3AoJ2NoZWNrZWQnKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNsYXNzOiAkKCcjcG9zaXRpb25Hcm91cCBpbnB1dDpyYWRpbzpjaGVja2VkJykudmFsKCkgfHwgJ3RvYXN0LXRvcC1yaWdodCcsXG4gICAgICAgICAgICAgICAgcHJldmVudER1cGxpY2F0ZXM6ICQoJyNwcmV2ZW50RHVwbGljYXRlcycpLnByb3AoJ2NoZWNrZWQnKSxcbiAgICAgICAgICAgICAgICBvbmNsaWNrOiBudWxsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoJCgnI2FkZEJlaGF2aW9yT25Ub2FzdENsaWNrJykucHJvcCgnY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBjYW4gcGVyZm9ybSBzb21lIGN1c3RvbSBhY3Rpb24gYWZ0ZXIgYSB0b2FzdCBnb2VzIGF3YXknKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNob3dEdXJhdGlvbi52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5zaG93RHVyYXRpb24gPSAkc2hvd0R1cmF0aW9uLnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGhpZGVEdXJhdGlvbi52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5oaWRlRHVyYXRpb24gPSAkaGlkZUR1cmF0aW9uLnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHRpbWVPdXQudmFsKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMudGltZU91dCA9IGFkZENsZWFyID8gMCA6ICR0aW1lT3V0LnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGV4dGVuZGVkVGltZU91dC52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQgPSBhZGRDbGVhciA/IDAgOiAkZXh0ZW5kZWRUaW1lT3V0LnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNob3dFYXNpbmcudmFsKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMuc2hvd0Vhc2luZyA9ICRzaG93RWFzaW5nLnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGhpZGVFYXNpbmcudmFsKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMuaGlkZUVhc2luZyA9ICRoaWRlRWFzaW5nLnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHNob3dNZXRob2QudmFsKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMuc2hvd01ldGhvZCA9ICRzaG93TWV0aG9kLnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGhpZGVNZXRob2QudmFsKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMuaGlkZU1ldGhvZCA9ICRoaWRlTWV0aG9kLnZhbCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWRkQ2xlYXIpIHtcbiAgICAgICAgICAgICAgICBtc2cgPSBnZXRNZXNzYWdlV2l0aENsZWFyQnV0dG9uKG1zZyk7XG4gICAgICAgICAgICAgICAgdG9hc3RyLm9wdGlvbnMudGFwVG9EaXNtaXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1zZykge1xuICAgICAgICAgICAgICAgIG1zZyA9IGdldE1lc3NhZ2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnI3RvYXN0ck9wdGlvbnMnKS50ZXh0KFxuICAgICAgICAgICAgICAgICAgICAndG9hc3RyLm9wdGlvbnMgPSAnXG4gICAgICAgICAgICAgICAgICAgICsgSlNPTi5zdHJpbmdpZnkodG9hc3RyLm9wdGlvbnMsIG51bGwsIDIpXG4gICAgICAgICAgICAgICAgICAgICsgJzsnXG4gICAgICAgICAgICAgICAgICAgICsgJ1xcblxcbnRvYXN0ci4nXG4gICAgICAgICAgICAgICAgICAgICsgc2hvcnRDdXRGdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICArICcoXCInXG4gICAgICAgICAgICAgICAgICAgICsgbXNnXG4gICAgICAgICAgICAgICAgICAgICsgKHRpdGxlID8gJ1wiLCBcIicgKyB0aXRsZSA6ICcnKVxuICAgICAgICAgICAgICAgICAgICArICdcIik7J1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdmFyICR0b2FzdCA9IHRvYXN0cltzaG9ydEN1dEZ1bmN0aW9uXShtc2csIHRpdGxlKTsgLy8gV2lyZSB1cCBhbiBldmVudCBoYW5kbGVyIHRvIGEgYnV0dG9uIGluIHRoZSB0b2FzdCwgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAkdG9hc3RsYXN0ID0gJHRvYXN0O1xuXG4gICAgICAgICAgICBpZih0eXBlb2YgJHRvYXN0ID09PSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJHRvYXN0LmZpbmQoJyNva0J0bicpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICR0b2FzdC5kZWxlZ2F0ZSgnI29rQnRuJywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgneW91IGNsaWNrZWQgbWUuIGkgd2FzIHRvYXN0ICMnICsgdG9hc3RJbmRleCArICcuIGdvb2RieWUhJyk7XG4gICAgICAgICAgICAgICAgICAgICR0b2FzdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgkdG9hc3QuZmluZCgnI3N1cnByaXNlQnRuJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHRvYXN0LmRlbGVnYXRlKCcjc3VycHJpc2VCdG4nLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdTdXJwcmlzZSEgeW91IGNsaWNrZWQgbWUuIGkgd2FzIHRvYXN0ICMnICsgdG9hc3RJbmRleCArICcuIFlvdSBjb3VsZCBwZXJmb3JtIGFuIGFjdGlvbiBoZXJlLicpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCR0b2FzdC5maW5kKCcuY2xlYXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkdG9hc3QuZGVsZWdhdGUoJy5jbGVhcicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmNsZWFyKCR0b2FzdCwgeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TGFzdFRvYXN0KCl7XG4gICAgICAgICAgICByZXR1cm4gJHRvYXN0bGFzdDtcbiAgICAgICAgfVxuICAgICAgICAkKCcjY2xlYXJsYXN0dG9hc3QnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2FzdHIuY2xlYXIoZ2V0TGFzdFRvYXN0KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnI2NsZWFydG9hc3RzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdG9hc3RyLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlMSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RHZW5lcmFsVG9hc3RyLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbFRvYXN0ciIsImV4YW1wbGUxIiwiaSIsInRvYXN0Q291bnQiLCIkdG9hc3RsYXN0IiwiZ2V0TWVzc2FnZSIsIm1zZ3MiLCJsZW5ndGgiLCJnZXRNZXNzYWdlV2l0aENsZWFyQnV0dG9uIiwibXNnIiwiJCIsIm9uIiwic2hvcnRDdXRGdW5jdGlvbiIsInZhbCIsInRpdGxlIiwiJHNob3dEdXJhdGlvbiIsIiRoaWRlRHVyYXRpb24iLCIkdGltZU91dCIsIiRleHRlbmRlZFRpbWVPdXQiLCIkc2hvd0Vhc2luZyIsIiRoaWRlRWFzaW5nIiwiJHNob3dNZXRob2QiLCIkaGlkZU1ldGhvZCIsInRvYXN0SW5kZXgiLCJhZGRDbGVhciIsInByb3AiLCJ0b2FzdHIiLCJvcHRpb25zIiwiY2xvc2VCdXR0b24iLCJkZWJ1ZyIsIm5ld2VzdE9uVG9wIiwicHJvZ3Jlc3NCYXIiLCJwb3NpdGlvbkNsYXNzIiwicHJldmVudER1cGxpY2F0ZXMiLCJvbmNsaWNrIiwiYWxlcnQiLCJzaG93RHVyYXRpb24iLCJoaWRlRHVyYXRpb24iLCJ0aW1lT3V0IiwiZXh0ZW5kZWRUaW1lT3V0Iiwic2hvd0Vhc2luZyIsImhpZGVFYXNpbmciLCJzaG93TWV0aG9kIiwiaGlkZU1ldGhvZCIsInRhcFRvRGlzbWlzcyIsInRleHQiLCJKU09OIiwic3RyaW5naWZ5IiwiJHRvYXN0IiwiZmluZCIsImRlbGVnYXRlIiwicmVtb3ZlIiwiY2xlYXIiLCJmb3JjZSIsImdldExhc3RUb2FzdCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/documentation/general/toastr.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/documentation/general/toastr.js"]();
/******/ 	
/******/ })()
;