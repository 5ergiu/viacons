@extends('main')

@section('title') {{ __('labels.career') }} @endsection

@section('content')

    <div class="card">
        <div class="card-header justify-content-end border-0 pt-6">
            <div class="card-toolbar">
                <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                    <span class="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black"></rect>
                            <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black"></rect>
                        </svg>
                    </span>
                        {{ __('careers.addJob') }}
                    </button>
                </div>
                <div class="modal fade" id="kt_modal_add_user" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered mw-650px">
                        <div class="modal-content">
                            <div class="modal-header" id="kt_modal_add_user_header">
                                <h2 class="fw-bolder">
                                    {{ __('careers.addJob') }}
                                </h2>
                                <div class="btn btn-icon btn-sm btn-active-icon-primary" data-kt-users-modal-action="close" data-bs-dismiss="modal">
                                <span class="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
                                    </svg>
                                </span>
                                </div>
                            </div>
                            <div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                <form id="kt_modal_add_user_form" class="form fv-plugins-bootstrap5 fv-plugins-framework" action="#">
                                    <div class="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header" data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px" style="max-height: 675px;">
                                        <div class="fv-row mb-7 fv-plugins-icon-container">
                                            <label class="required fw-bold fs-6 mb-2" for="title">
                                                {{ __('careers.title') }}
                                            </label>
                                            <input type="text" name="job[title]" class="form-control form-control-solid mb-3 mb-lg-0" id="title">
                                        </div>
                                        <div class="fv-row mb-7 fv-plugins-icon-container">
                                            <label for="description" class="required fw-bold fs-6 mb-2">
                                                {{ __('careers.description') }}
                                            </label><br/>
                                            <textarea name="job[description]" id="description" cols="43" rows="5" style="border-color: #ddd"></textarea>
                                        </div>
                                        <div class="fv-row mb-7 fv-plugins-icon-container">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label class="required fw-bold fs-6 mb-2" for="jobSalary">
                                                        {{ __('careers.salary') }}
                                                    </label>
                                                    <input type="text" name="job[salary]" class="form-control form-control-solid mb-3 mb-lg-0" id="jobSalary">
                                                </div>
                                                <div class="col-lg-6">
                                                    <label class="required fw-bold fs-6 mb-2" for="jobVacancies">
                                                        {{ __('careers.vacancies') }}
                                                    </label>
                                                    <input type="text" name="job[vacancies]" class="form-control form-control-solid mb-3 mb-lg-0" id="jobVacancies">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fv-row mb-7 fv-plugins-icon-container">
                                        <label for="description" class="required fw-bold fs-6 mb-2" for="jobExpires">
                                            {{ __('careers.expires') }}
                                        </label><br/>
                                        <input class="form-control form-control-solid mb-3 mb-lg-0"
                                               type="datetime-local" id="jobExpires"
                                               name="job[expires]" value="2021-10-28T00:00"
                                               min="2021-10-28T00:00" max="2025-06-14T00:00">
                                    </div>
                                    <div class="text-center pt-15">
                                        <button type="reset" class="btn btn-light me-3" data-kt-users-modal-action="cancel">
                                            {{ __('actions.reset') }}
                                        </button>
                                        <button type="submit" class="btn btn-primary" data-kt-users-modal-action="submit">
                                            <span class="indicator-label">{{ __('careers.addJob') }}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div id="kt_table_users_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                <div class="table-responsive">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer" id="kt_table_users">
                        <thead>
                        <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                            <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1">
                                {{ __('careers.title') }}
                            </th>
                            <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1">
                                {{ __('careers.expires') }}
                            </th>
                            <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1">
                                {{ __('careers.salary') }}
                            </th><th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1">
                                {{ __('careers.status') }}
                            </th>
                            <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1">
                                {{ __('careers.vacancies') }}
                            </th>
                            <th class="text-end min-w-100px sorting_disabled" rowspan="1" colspan="1">
                                {{ __('actions.actions') }}
                            </th>
                        </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                        @foreach($jobs as $job)
                            <tr>
                                <td>
                                    <div class="d-flex flex-column">
                                        <a href="{{ route('career.show', $job['id']) }}" class="text-hover-primary mb-1">
                                            {{ $job['job_title'] }}
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    {{ $job['expires'] }}
                                </td>
                                <td style="color:#7865EB">
                                    {{ $job['salary'] }}
                                </td>
                                <td>
                                    <div class="badge badge-light-{{$job['status'] == 'Active' ? 'success' : 'danger'}} fw-bolder">
                                        {{ $job['status'] }}
                                    </div>
                                </td>
                                <td>
                                    {{ $job['openings'] }}
                                </td>
                                <td class="text-end">
                                    <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        {{ __('actions.actions') }}
                                        <span class="svg-icon svg-icon-5 m-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black"></path>
                                        </svg>
                                    </span>
                                    </a>
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                        <div class="menu-item px-3">
                                            <a href="" class="menu-link px-3">
                                                {{ __('actions.edit') }}
                                            </a>
                                        </div>
                                        <div class="menu-item px-3">
                                            <a href="" class="menu-link px-3">
                                                {{ __('careers.deactivate') }}
                                            </a>
                                        </div>
                                        <div class="menu-item px-3">
                                            <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">
                                                {{ __('actions.delete') }}
                                            </a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                    </div>
                    <div class="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                        <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                            <ul class="pagination">
                                <li class="paginate_button page-item previous disabled" id="kt_table_users_previous">
                                    <a href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link">
                                        <i class="previous"></i>
                                    </a>
                                </li>
                                <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="2" tabindex="0" class="page-link">2</a></li>
                                <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="3" tabindex="0" class="page-link">3</a></li>
                                <li class="paginate_button page-item next" id="kt_table_users_next"><a href="#" aria-controls="kt_table_users" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
