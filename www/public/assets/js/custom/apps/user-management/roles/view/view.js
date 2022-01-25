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

/***/ "./resources/theme/js/custom/apps/user-management/roles/view/view.js":
/*!***************************************************************************!*\
  !*** ./resources/theme/js/custom/apps/user-management/roles/view/view.js ***!
  \***************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersViewRole = function () {\n  // Shared variables\n  var datatable;\n  var table; // Init add schedule modal\n\n  var initViewRole = function initViewRole() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[3].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 5th column in table\n\n      dateRow[3].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 5,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 0\n      }, // Disable ordering on column 0 (checkbox)\n      {\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 4 (actions)\n      ]\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-roles-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Delete user\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-roles-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get customer name\n\n        var userName = parent.querySelectorAll('td')[1].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + userName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + userName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  }; // Init toggle toolbar\n\n\n  var initToggleToolbar = function initToggleToolbar() {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    var checkboxes = table.querySelectorAll('[type=\"checkbox\"]'); // Select elements\n\n    var deleteSelected = document.querySelector('[data-kt-view-roles-table-select=\"delete_selected\"]'); // Toggle delete selected toolbar\n\n    checkboxes.forEach(function (c) {\n      // Checkbox on click event\n      c.addEventListener('click', function () {\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    }); // Deleted selected rows\n\n    deleteSelected.addEventListener('click', function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected customers?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected customers!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove all selected customers\n            checkboxes.forEach(function (c) {\n              if (c.checked) {\n                datatable.row($(c.closest('tbody tr'))).remove().draw();\n              }\n            }); // Remove header checked box\n\n            var headerCheckbox = table.querySelectorAll('[type=\"checkbox\"]')[0];\n            headerCheckbox.checked = false;\n          }).then(function () {\n            toggleToolbars(); // Detect checked checkboxes\n\n            initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Selected customers was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Toggle toolbars\n\n\n  var toggleToolbars = function toggleToolbars() {\n    // Define variables\n    var toolbarBase = document.querySelector('[data-kt-view-roles-table-toolbar=\"base\"]');\n    var toolbarSelected = document.querySelector('[data-kt-view-roles-table-toolbar=\"selected\"]');\n    var selectedCount = document.querySelector('[data-kt-view-roles-table-select=\"selected_count\"]'); // Select refreshed checkbox DOM elements \n\n    var allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]'); // Detect checkboxes state & count\n\n    var checkedState = false;\n    var count = 0; // Count checked boxes\n\n    allCheckboxes.forEach(function (c) {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    }); // Toggle toolbars\n\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add('d-none');\n      toolbarSelected.classList.remove('d-none');\n    } else {\n      toolbarBase.classList.remove('d-none');\n      toolbarSelected.classList.add('d-none');\n    }\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      table = document.querySelector('#kt_roles_view_table');\n\n      if (!table) {\n        return;\n      }\n\n      initViewRole();\n      handleSearchDatatable();\n      handleDeleteRows();\n      initToggleToolbar();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersViewRole.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3JvbGVzL3ZpZXcvdmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBWTtBQUM5QjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxLQUFKLENBSDhCLENBSzlCOztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDckI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUIsVUFBdkIsQ0FBbEI7QUFFQUQsSUFBQUEsU0FBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQixVQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0YsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxVQUFNSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxTQUFaLEVBQXVCLGlCQUF2QixDQUFOLENBQWdEQyxNQUFoRCxFQUFqQixDQUZxQixDQUVzRDs7QUFDM0VKLE1BQUFBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssWUFBWCxDQUF3QixZQUF4QixFQUFzQ0osUUFBdEM7QUFDSCxLQUpELEVBSnFCLENBVXBCOztBQUNBUixJQUFBQSxTQUFTLEdBQUdhLENBQUMsQ0FBQ1osS0FBRCxDQUFELENBQVNhLFNBQVQsQ0FBbUI7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixlQUFTLEVBRm1CO0FBRzVCLG9CQUFjLENBSGM7QUFJNUIsc0JBQWdCLEtBSlk7QUFLNUIsb0JBQWMsQ0FDVjtBQUFFQyxRQUFBQSxTQUFTLEVBQUUsS0FBYjtBQUFvQkMsUUFBQUEsT0FBTyxFQUFFO0FBQTdCLE9BRFUsRUFDd0I7QUFDbEM7QUFBRUQsUUFBQUEsU0FBUyxFQUFFLEtBQWI7QUFBb0JDLFFBQUFBLE9BQU8sRUFBRTtBQUE3QixPQUZVLENBRXdCO0FBRnhCO0FBTGMs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O0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RsRSxNQUFBQSxLQUFLLEdBQUdrQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQVI7O0FBRUEsVUFBSSxDQUFDbkIsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFFREMsTUFBQUEsWUFBWTtBQUNaZSxNQUFBQSxxQkFBcUI7QUFDckJVLE1BQUFBLGdCQUFnQjtBQUNoQndCLE1BQUFBLGlCQUFpQjtBQUNwQjtBQWJFLEdBQVA7QUFlSCxDQXhOcUIsRUFBdEIsQyxDQTBOQTs7O0FBQ0FpQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN0RSxFQUFBQSxlQUFlLENBQUNvRSxJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3JvbGVzL3ZpZXcvdmlldy5qcz9jYjVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RVc2Vyc1ZpZXdSb2xlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNoYXJlZCB2YXJpYWJsZXNcbiAgICB2YXIgZGF0YXRhYmxlO1xuICAgIHZhciB0YWJsZTtcblxuICAgIC8vIEluaXQgYWRkIHNjaGVkdWxlIG1vZGFsXG4gICAgdmFyIGluaXRWaWV3Um9sZSA9ICgpID0+IHtcbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzNdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gNXRoIGNvbHVtbiBpbiB0YWJsZVxuICAgICAgICAgICAgZGF0ZVJvd1szXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICAvLyBJbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsL1xuICAgICAgICAgZGF0YXRhYmxlID0gJCh0YWJsZSkuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgXCJwYWdlTGVuZ3RoXCI6IDUsXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICdjb2x1bW5EZWZzJzogW1xuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogMCB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAwIChjaGVja2JveClcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDQgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gNCAoYWN0aW9ucylcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggRGF0YXRhYmxlIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvYXBpL3NlYXJjaCgpXG4gICAgdmFyIGhhbmRsZVNlYXJjaERhdGF0YWJsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtcm9sZXMtdGFibGUtZmlsdGVyPVwic2VhcmNoXCJdJyk7XG4gICAgICAgIGZpbHRlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBkYXRhdGFibGUuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKS5kcmF3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSB1c2VyXG4gICAgdmFyIGhhbmRsZURlbGV0ZVJvd3MgPSAoKSA9PiB7XG4gICAgICAgIC8vIFNlbGVjdCBhbGwgZGVsZXRlIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LXJvbGVzLXRhYmxlLWZpbHRlcj1cImRlbGV0ZV9yb3dcIl0nKTtcblxuICAgICAgICBkZWxldGVCdXR0b25zLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAvLyBEZWxldGUgYnV0dG9uIG9uIGNsaWNrXG4gICAgICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgcGFyZW50IHJvd1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgY3VzdG9tZXIgbmFtZVxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJOYW1lID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylbMV0uaW5uZXJUZXh0O1xuXG4gICAgICAgICAgICAgICAgLy8gU3dlZXRBbGVydDIgcG9wIHVwIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiICsgdXNlck5hbWUgKyBcIj9cIixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUhXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgZGVsZXRlZCBcIiArIHVzZXJOYW1lICsgXCIhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY3VycmVudCByb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQocGFyZW50KSkucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGN1c3RvbWVyTmFtZSArIFwiIHdhcyBub3QgZGVsZXRlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbml0IHRvZ2dsZSB0b29sYmFyXG4gICAgdmFyIGluaXRUb2dnbGVUb29sYmFyID0gKCkgPT4ge1xuICAgICAgICAvLyBUb2dnbGUgc2VsZWN0ZWQgYWN0aW9uIHRvb2xiYXJcbiAgICAgICAgLy8gU2VsZWN0IGFsbCBjaGVja2JveGVzXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJyk7XG5cbiAgICAgICAgLy8gU2VsZWN0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGRlbGV0ZVNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtdmlldy1yb2xlcy10YWJsZS1zZWxlY3Q9XCJkZWxldGVfc2VsZWN0ZWRcIl0nKTtcblxuICAgICAgICAvLyBUb2dnbGUgZGVsZXRlIHNlbGVjdGVkIHRvb2xiYXJcbiAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgLy8gQ2hlY2tib3ggb24gY2xpY2sgZXZlbnRcbiAgICAgICAgICAgIGMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRvb2xiYXJzKCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIERlbGV0ZWQgc2VsZWN0ZWQgcm93c1xuICAgICAgICBkZWxldGVTZWxlY3RlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFN3ZWV0QWxlcnQyIHBvcCB1cCAtLS0gb2ZmaWNpYWwgZG9jcyByZWZlcmVuY2U6IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgc2VsZWN0ZWQgY3VzdG9tZXJzP1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIGRlbGV0ZWQgYWxsIHNlbGVjdGVkIGN1c3RvbWVycyEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYWxsIHNlbGVjdGVkIGN1c3RvbWVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLnJvdygkKGMuY2xvc2VzdCgndGJvZHkgdHInKSkpLnJlbW92ZSgpLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGhlYWRlciBjaGVja2VkIGJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGVhZGVyQ2hlY2tib3ggPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCdbdHlwZT1cImNoZWNrYm94XCJdJylbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRvb2xiYXJzKCk7IC8vIERldGVjdCBjaGVja2VkIGNoZWNrYm94ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRUb2dnbGVUb29sYmFyKCk7IC8vIFJlLWluaXQgdG9vbGJhciB0byByZWNhbGN1bGF0ZSBjaGVja2JveGVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNlbGVjdGVkIGN1c3RvbWVycyB3YXMgbm90IGRlbGV0ZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBUb2dnbGUgdG9vbGJhcnNcbiAgICBjb25zdCB0b2dnbGVUb29sYmFycyA9ICgpID0+IHtcbiAgICAgICAgLy8gRGVmaW5lIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCB0b29sYmFyQmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXZpZXctcm9sZXMtdGFibGUtdG9vbGJhcj1cImJhc2VcIl0nKTtcbiAgICAgICAgY29uc3QgdG9vbGJhclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtdmlldy1yb2xlcy10YWJsZS10b29sYmFyPVwic2VsZWN0ZWRcIl0nKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXZpZXctcm9sZXMtdGFibGUtc2VsZWN0PVwic2VsZWN0ZWRfY291bnRcIl0nKTtcblxuICAgICAgICAvLyBTZWxlY3QgcmVmcmVzaGVkIGNoZWNrYm94IERPTSBlbGVtZW50cyBcbiAgICAgICAgY29uc3QgYWxsQ2hlY2tib3hlcyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICAgICAgICAvLyBEZXRlY3QgY2hlY2tib3hlcyBzdGF0ZSAmIGNvdW50XG4gICAgICAgIGxldCBjaGVja2VkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICAvLyBDb3VudCBjaGVja2VkIGJveGVzXG4gICAgICAgIGFsbENoZWNrYm94ZXMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgIGlmIChjLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB0b29sYmFyc1xuICAgICAgICBpZiAoY2hlY2tlZFN0YXRlKSB7XG4gICAgICAgICAgICBzZWxlY3RlZENvdW50LmlubmVySFRNTCA9IGNvdW50O1xuICAgICAgICAgICAgdG9vbGJhckJhc2UuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICB0b29sYmFyU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b29sYmFyQmFzZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHRvb2xiYXJTZWxlY3RlZC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBmdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3Rfcm9sZXNfdmlld190YWJsZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbml0Vmlld1JvbGUoKTtcbiAgICAgICAgICAgIGhhbmRsZVNlYXJjaERhdGF0YWJsZSgpO1xuICAgICAgICAgICAgaGFuZGxlRGVsZXRlUm93cygpO1xuICAgICAgICAgICAgaW5pdFRvZ2dsZVRvb2xiYXIoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVFVzZXJzVmlld1JvbGUuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUVXNlcnNWaWV3Um9sZSIsImRhdGF0YWJsZSIsInRhYmxlIiwiaW5pdFZpZXdSb2xlIiwidGFibGVSb3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyb3ciLCJkYXRlUm93IiwicmVhbERhdGUiLCJtb21lbnQiLCJpbm5lckhUTUwiLCJmb3JtYXQiLCJzZXRBdHRyaWJ1dGUiLCIkIiwiRGF0YVRhYmxlIiwib3JkZXJhYmxlIiwidGFyZ2V0cyIsImhhbmRsZVNlYXJjaERhdGF0YWJsZSIsImZpbHRlclNlYXJjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkcmF3IiwiaGFuZGxlRGVsZXRlUm93cyIsImRlbGV0ZUJ1dHRvbnMiLCJkIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwidXNlck5hbWUiLCJpbm5lclRleHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInJlbW92ZSIsImRpc21pc3MiLCJjdXN0b21lck5hbWUiLCJpbml0VG9nZ2xlVG9vbGJhciIsImNoZWNrYm94ZXMiLCJkZWxldGVTZWxlY3RlZCIsImMiLCJzZXRUaW1lb3V0IiwidG9nZ2xlVG9vbGJhcnMiLCJjaGVja2VkIiwiaGVhZGVyQ2hlY2tib3giLCJ0b29sYmFyQmFzZSIsInRvb2xiYXJTZWxlY3RlZCIsInNlbGVjdGVkQ291bnQiLCJhbGxDaGVja2JveGVzIiwiY2hlY2tlZFN0YXRlIiwiY291bnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/apps/user-management/roles/view/view.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/apps/user-management/roles/view/view.js"]();
/******/ 	
/******/ })()
;