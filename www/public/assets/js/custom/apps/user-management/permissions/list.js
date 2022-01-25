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

/***/ "./resources/theme/js/custom/apps/user-management/permissions/list.js":
/*!****************************************************************************!*\
  !*** ./resources/theme/js/custom/apps/user-management/permissions/list.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersPermissionsList = function () {\n  // Shared variables\n  var datatable;\n  var table; // Init add schedule modal\n\n  var initPermissionsList = function initPermissionsList() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[2].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 2nd column in table\n\n      dateRow[2].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      'columnDefs': [{\n        orderable: false,\n        targets: 1\n      }, // Disable ordering on column 1 (assigned)\n      {\n        orderable: false,\n        targets: 3\n      } // Disable ordering on column 3 (actions)\n      ]\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-permissions-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Delete user\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-permissions-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get permission name\n\n        var permissionName = parent.querySelectorAll('td')[0].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + permissionName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + permissionName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      table = document.querySelector('#kt_permissions_table');\n\n      if (!table) {\n        return;\n      }\n\n      initPermissionsList();\n      handleSearchDatatable();\n      handleDeleteRows();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersPermissionsList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvdGhlbWUvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3Blcm1pc3Npb25zL2xpc3QuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsc0JBQXNCLEdBQUcsWUFBWTtBQUNyQztBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxLQUFKLENBSHFDLENBS3JDOztBQUNBLE1BQUlDLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBTTtBQUM1QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0YsS0FBSyxDQUFDRyxnQkFBTixDQUF1QixVQUF2QixDQUFsQjtBQUVBRCxJQUFBQSxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3JCLFVBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRixnQkFBSixDQUFxQixJQUFyQixDQUFoQjtBQUNBLFVBQU1JLFFBQVEsR0FBR0MsTUFBTSxDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFNBQVosRUFBdUIsaUJBQXZCLENBQU4sQ0FBZ0RDLE1BQWhELEVBQWpCLENBRnFCLENBRXNEOztBQUMzRUosTUFBQUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDSixRQUF0QztBQUNILEtBSkQsRUFKNEIsQ0FVM0I7O0FBQ0FSLElBQUFBLFNBQVMsR0FBR2EsQ0FBQyxDQUFDWixLQUFELENBQUQsQ0FBU2EsU0FBVCxDQUFtQjtBQUM1QixjQUFRLEtBRG9CO0FBRTVCLGVBQVMsRUFGbUI7QUFHNUIsb0JBQWMsQ0FDVjtBQUFFQyxRQUFBQSxTQUFTLEVBQUUsS0FBYjtBQUFvQkMsUUFBQUEsT0FBTyxFQUFFO0FBQTdCLE9BRFUsRUFDd0I7QUFDbEM7QUFBRUQsUUFBQUEsU0FBUyxFQUFFLEtBQWI7QUFBb0JDLFFBQUFBLE9BQU8sRUFBRTtBQUE3QixPQUZVLENBRXdCO0FBRnhCO0FBSGMsS0FBbkIsQ0FBWjtBQVFKLEdBbkJELENBTnFD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QUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZGxELE1BQUFBLEtBQUssR0FBR2tCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBUjs7QUFFQSxVQUFJLENBQUNuQixLQUFMLEVBQVk7QUFDUjtBQUNIOztBQUVEQyxNQUFBQSxtQkFBbUI7QUFDbkJlLE1BQUFBLHFCQUFxQjtBQUNyQlUsTUFBQUEsZ0JBQWdCO0FBQ25CO0FBWkUsR0FBUDtBQWNILENBNUc0QixFQUE3QixDLENBOEdBOzs7QUFDQXlCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3RELEVBQUFBLHNCQUFzQixDQUFDb0QsSUFBdkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3RoZW1lL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9wZXJtaXNzaW9ucy9saXN0LmpzP2FjYzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFVzZXJzUGVybWlzc2lvbnNMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNoYXJlZCB2YXJpYWJsZXNcbiAgICB2YXIgZGF0YXRhYmxlO1xuICAgIHZhciB0YWJsZTtcblxuICAgIC8vIEluaXQgYWRkIHNjaGVkdWxlIG1vZGFsXG4gICAgdmFyIGluaXRQZXJtaXNzaW9uc0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIC8vIFNldCBkYXRlIGRhdGEgb3JkZXJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcblxuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZVJvd1syXS5pbm5lckhUTUwsIFwiREQgTU1NIFlZWVksIExUXCIpLmZvcm1hdCgpOyAvLyBzZWxlY3QgZGF0ZSBmcm9tIDJuZCBjb2x1bW4gaW4gdGFibGVcbiAgICAgICAgICAgIGRhdGVSb3dbMl0uc2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyJywgcmVhbERhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cbiAgICAgICAgIGRhdGF0YWJsZSA9ICQodGFibGUpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcbiAgICAgICAgICAgICdjb2x1bW5EZWZzJzogW1xuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogMSB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAxIChhc3NpZ25lZClcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDMgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gMyAoYWN0aW9ucylcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBTZWFyY2ggRGF0YXRhYmxlIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9yZWZlcmVuY2UvYXBpL3NlYXJjaCgpXG4gICAgdmFyIGhhbmRsZVNlYXJjaERhdGF0YWJsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZmlsdGVyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcGVybWlzc2lvbnMtdGFibGUtZmlsdGVyPVwic2VhcmNoXCJdJyk7XG4gICAgICAgIGZpbHRlclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBkYXRhdGFibGUuc2VhcmNoKGUudGFyZ2V0LnZhbHVlKS5kcmF3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlbGV0ZSB1c2VyXG4gICAgdmFyIGhhbmRsZURlbGV0ZVJvd3MgPSAoKSA9PiB7XG4gICAgICAgIC8vIFNlbGVjdCBhbGwgZGVsZXRlIGJ1dHRvbnNcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LXBlcm1pc3Npb25zLXRhYmxlLWZpbHRlcj1cImRlbGV0ZV9yb3dcIl0nKTtcblxuICAgICAgICBkZWxldGVCdXR0b25zLmZvckVhY2goZCA9PiB7XG4gICAgICAgICAgICAvLyBEZWxldGUgYnV0dG9uIG9uIGNsaWNrXG4gICAgICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZWxlY3QgcGFyZW50IHJvd1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBHZXQgcGVybWlzc2lvbiBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybWlzc2lvbk5hbWUgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKVswXS5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTd2VldEFsZXJ0MiBwb3AgdXAgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyBwZXJtaXNzaW9uTmFtZSArIFwiP1wiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSFcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBkZWxldGVkIFwiICsgcGVybWlzc2lvbk5hbWUgKyBcIiEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJyZW50IHJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5yb3coJChwYXJlbnQpKS5yZW1vdmUoKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY3VzdG9tZXJOYW1lICsgXCIgd2FzIG5vdCBkZWxldGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIGZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9wZXJtaXNzaW9uc190YWJsZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbml0UGVybWlzc2lvbnNMaXN0KCk7XG4gICAgICAgICAgICBoYW5kbGVTZWFyY2hEYXRhdGFibGUoKTtcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZVJvd3MoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVFVzZXJzUGVybWlzc2lvbnNMaXN0LmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVFVzZXJzUGVybWlzc2lvbnNMaXN0IiwiZGF0YXRhYmxlIiwidGFibGUiLCJpbml0UGVybWlzc2lvbnNMaXN0IiwidGFibGVSb3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyb3ciLCJkYXRlUm93IiwicmVhbERhdGUiLCJtb21lbnQiLCJpbm5lckhUTUwiLCJmb3JtYXQiLCJzZXRBdHRyaWJ1dGUiLCIkIiwiRGF0YVRhYmxlIiwib3JkZXJhYmxlIiwidGFyZ2V0cyIsImhhbmRsZVNlYXJjaERhdGF0YWJsZSIsImZpbHRlclNlYXJjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkcmF3IiwiaGFuZGxlRGVsZXRlUm93cyIsImRlbGV0ZUJ1dHRvbnMiLCJkIiwicHJldmVudERlZmF1bHQiLCJwYXJlbnQiLCJjbG9zZXN0IiwicGVybWlzc2lvbk5hbWUiLCJpbm5lclRleHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInJlbW92ZSIsImRpc21pc3MiLCJjdXN0b21lck5hbWUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/theme/js/custom/apps/user-management/permissions/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/theme/js/custom/apps/user-management/permissions/list.js"]();
/******/ 	
/******/ })()
;