@extends('main')

@section('title') {{ __('labels.career') }} @endsection

@section('content')
    <div class="card">
        <div class="text-center mt-10">
            <h3 class="fs-2hx text-dark">{{ __('labels.career') }}</h3>
        </div>
        <div class="card-header justify-content-end border-0 pt-6 mb-5">
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
            <div class="row g-10">
                <div class="col-md-4">
                    <div class="card-xl-stretch me-md-6">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto1.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Inginer</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">
                                6500 RON
                            </div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                            <span class="text-muted">
                                                    Nov 08, 2021
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-xl-stretch mx-md-3">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto2.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Zidar</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">2500 RON</div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                            <span class="text-muted">
                                                Aug 20 2021
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-xl-stretch ms-md-6">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto2.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Sofer</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">2000 RON</div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                             <span class="text-muted">
                                                    Jan 21 2021
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-10">
                <div class="col-md-4">
                    <div class="card-xl-stretch me-md-6">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto1.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Inginer</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">
                                6500 RON
                            </div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                            <span class="text-muted">
                                                    Nov 08, 2021
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-xl-stretch mx-md-3">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto2.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Zidar</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">2500 RON</div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                            <span class="text-muted">
                                                Aug 20 2021
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-xl-stretch ms-md-6">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto2.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Sofer</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">2000 RON</div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                             <span class="text-muted">
                                                    Jan 21 2021
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-10">
                <div class="col-md-4">
                    <div class="card-xl-stretch me-md-6">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto1.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Inginer</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">
                                6500 RON
                            </div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                            <span class="text-muted">
                                                    Nov 08, 2021
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-xl-stretch mx-md-3">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto2.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Zidar</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">2500 RON</div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                            <span class="text-muted">
                                                Aug 20 2021
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card-xl-stretch ms-md-6">
                        <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto2.png') }}')"></div>
                        <div class="m-0">
                            <div class="d-flex">
                                <a href="#" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Sofer</a>
                                <div class="col-lg-3 d-flex justify-content-end ms-auto">
                                    <div class="card-toolbar">
                                        <button type="button" class="btn btn-sm btn-icon btn-icon-primary btn-active-light-primary me-n3" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                        <span class="svg-icon svg-icon-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                    <rect x="5" y="5" width="5" height="5" rx="1" fill="#000000"></rect>
                                                                    <rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                    <rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3"></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                        </button>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true" style="">
                                            <div class="menu-item px-3">
                                                <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">{{ __('actions.actions') }}</div>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.edit') }}
                                                </a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="" class="menu-link px-3">
                                                    {{ __('actions.delete') }}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">2000 RON</div>
                            <div class="fs-6 fw-bolder">
                                <div class="row">
                                    <div class="col-lg-9">
                                             <span class="text-muted">
                                                    Jan 21 2021
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
