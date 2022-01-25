@extends('main')

@section('title') {{ __('labels.aboutUs') }} @endsection

@section('content')
    <div class="card">
        <div class="card-header border-0 pt-6">
            <div class="card-title">
                <div class="d-flex align-items-center position-relative my-1">
                    <a href="/career"type="button" class="btn btn-secondary">
                        {{ __('actions.back') }}
                    </a>
                </div>
            </div>
            <div class="card-toolbar">
                <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_add_user">
                        {{ __('actions.edit') }}
                    </button>
                </div>
                <div class="modal fade" id="kt_modal_add_user" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered mw-650px">
                        <div class="modal-content">
                            <div class="modal-header" id="kt_modal_add_user_header">
                                <h2 class="fw-bolder">
                                    {{ __('actions.edit') }}
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
                                            <label class="required fw-bold fs-6 mb-2" for="jobTitle">
                                                {{ __('careers.title') }}
                                            </label>
                                            <input type="text" name="job[title]" class="form-control form-control-solid mb-3 mb-lg-0" id="jobTitle" value="{{ $job['job_title'] }}">
                                        </div>
                                        <div class="fv-row mb-7 fv-plugins-icon-container">
                                            <label for="jobDescription" class="required fw-bold fs-6 mb-2">
                                                {{ __('careers.summary') }}
                                            </label><br/>
                                            <textarea name="job[description]" id="jobDescription" cols="43" rows="5" style="border-color: #ddd">{{ $job['job_details1'] }}{{ $job['job_details1'] }}</textarea>
                                        </div>
                                        <div class="fv-row mb-7 fv-plugins-icon-container">
                                            <label for="jobDescription" class="required fw-bold fs-6 mb-2">
                                                {{ __('careers.description') }}
                                            </label><br/>
                                            <textarea name="job[description]" id="jobDescription" cols="43" rows="5" style="border-color: #ddd">{{ $job['job_details1'] }}</textarea>
                                        </div>
                                        <div class="fv-row mb-7 fv-plugins-icon-container">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label class="required fw-bold fs-6 mb-2" for="jobSalary">
                                                        {{ __('careers.salary') }}
                                                    </label>
                                                    <input type="text" name="job[salary]" class="form-control form-control-solid mb-3 mb-lg-0" id="jobSalary" value="{{ $job['salary'] }}">
                                                </div>
                                                <div class="col-lg-6">
                                                    <label class="required fw-bold fs-6 mb-2" for="jobVacancies">
                                                        {{ __('careers.vacancies') }}
                                                    </label>
                                                    <input type="text" name="job[vacancies]" class="form-control form-control-solid mb-3 mb-lg-0" id="jobVacancies" value="{{ $job['openings'] }}">
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="jobDescription" class="required fw-bold fs-6 mb-2" for="jobExpires">
                                                        {{ __('careers.expires') }}
                                                    </label><br/>
                                                    <input class="form-control form-control-solid mb-3 mb-lg-0"
                                                           type="datetime-local" id="jobExpires"
                                                           name="job[expires]" value="2021-12-24T00:00"
                                                           min="2021-10-28T00:00" max="2025-06-14T00:00">
                                                </div>
                                                <div class="col-lg-6">
                                                    <label class="required fw-bold fs-6 mb-2" for="jobStatus">
                                                        {{ __('careers.status') }}
                                                    </label>
                                                    <select class="form-control form-control-solid form-select" aria-label="Default select example">
                                                        <option selected>{{ __('careers.active') }}</option>
                                                        <option value="1">{{ __('careers.inactive') }}</option>
                                                        <option value="2">{{ __('careers.deleted') }}</option>
                                                        <option value="3">{{ __('careers.hidden') }}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center pt-15">
                                        <button type="reset" class="btn btn-light me-3" data-kt-users-modal-action="cancel">
                                            {{ __('actions.reset') }}
                                        </button>
                                        <button type="submit" class="btn btn-primary" data-kt-users-modal-action="submit">
                                            <span class="indicator-label">{{ __('actions.send') }}</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body p-lg-17">
            <div class="mb-10">
                <div class="mb-10">
                    <h3 class="fs-2hx text-dark mb-5">{{ $job['job_title'] }}</h3>
                </div>
                <div class="fs-5 fw-bold text-gray-600 mb-10">
                    <p class="text-dark">
                        {{ __('careers.summary') }}
                    </p>
                    <p>
                        {{ $job['job_details1'] }}
                    </p>
                    <p class="text-dark">
                        {{ __('careers.description') }}
                    </p>
                    <p>
                        {{ $job['job_details2'] }}
                    </p>
                </div>
                <div class="mb-10">
                    {{ __('careers.expires') }} : {{ $job['expires'] }}
                </div>
                <div class="mb-10">
                    {{ __('careers.salary') }} : <span style="color:#7865EB">{{ $job['salary'] }}</span>
                </div>
                <div class="mb-10">
                    <p class="mb-5">
                        {{ __('careers.vacancies') }} : {{ $job['openings'] }}
                    </p>
                </div>
                <div class="badge badge-light-{{$job['status'] == 'Active' ? 'success' : 'danger'}} fw-bolder">
                    {{ __('careers.status') }} : {{ $job['status'] }}
                </div>
            </div>
            <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black"></rect>
                        <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black"></rect>
                        <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black"></rect>
                    </svg>
                </span>
                <div class="d-flex flex-stack flex-grow-1">
                    <div class="fw-bold">
                        <h4 class="text-gray-900 fw-bolder">{{ __('careers.joinTeam') }}</h4>
                        <div class="fs-6 text-gray-700">{{ __('careers.applyDescription') }}
                            <a class="fw-bolder" href="">{{ __('careers.applyOnline') }}</a>.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
