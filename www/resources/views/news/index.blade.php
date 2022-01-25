@extends('main')

@section('title') {{ __('labels.news') }} @endsection

@section('content')
    <div class="card">
        <div class="card-header justify-content-end border-0 pt-6">
            <div class="card-toolbar">
                <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                    <a type="button" class="btn btn-primary" href="{{ route('news.create') }}">
                    <span class="svg-icon svg-icon-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black"></rect>
                            <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black"></rect>
                        </svg>
                    </span>
                        {{ __('news.addNews') }}
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div class="mb-16">
                <div class="text-center mb-12">
                    <h3 class="fs-2hx text-dark mb-5">{{ __('news.news') }}</h3>
                    <div class="fs-5 text-muted fw-bold">
                        {{ __('news.readNews') }}
                    </div>
                </div>
                <div class="row g-10">
                    @if(session('success'))
                        <div class="alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row align-items-center p-5 mb-10 border border-success">
                            <span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                </svg>
                            </span>
                            <div class="d-flex flex-column pe-0 pe-sm-10">
                                <span>{{ session('success') }}</span>
                            </div>
                            <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                                <span class="svg-icon svg-icon-1 svg-icon-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    @endif
                    <div class="row g-10">
                        <div class="col-md-4">
                            <div class="card-xl-stretch me-md-6">
                                <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/equipment/auto1.png') }}')"></div>
                                <div class="m-0">
                                    <div class="d-flex">
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Întotdeauna podurile au fost pentru noi o provocare! </a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                        De această dată construim un pod peste Pârâul Urdești care face legătura Străzii Nr. 7 cu drumul de exploatare agricolă, către Dealul Viilor.
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
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">PADURENI . Dezvoltarea retelei rutiere!</a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">FELICITARI echipei VIACONS ! Multumim PRIMARIA PADURENI , DIACONU  T. Si C. L. Dezvoltarea retelei rutiere! Viacons rutier Vaslui</div>
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
                                <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/about/directorGeneral.jpg') }}')"></div>
                                <div class="m-0">
                                    <div class="d-flex">
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">FELICITARI echipei VIACONS ! Multumim PRIMARIA PADURENI , DIACONU  T. Si C. L.</a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">De această dată construim un pod peste Pârâul Urdești care face legătura Străzii Nr. 7 cu drumul de exploatare agricolă, către Dealul Viilor.</div>
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
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Întotdeauna podurile au fost pentru noi o provocare! </a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                        De această dată construim un pod peste Pârâul Urdești care face legătura Străzii Nr. 7 cu drumul de exploatare agricolă, către Dealul Viilor.
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
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">PADURENI . Dezvoltarea retelei rutiere!</a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">FELICITARI echipei VIACONS ! Multumim PRIMARIA PADURENI , DIACONU  T. Si C. L. Dezvoltarea retelei rutiere! Viacons rutier Vaslui</div>
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
                                <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/about/directorGeneral.jpg') }}')"></div>
                                <div class="m-0">
                                    <div class="d-flex">
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">FELICITARI echipei VIACONS ! Multumim PRIMARIA PADURENI , DIACONU  T. Si C. L.</a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">De această dată construim un pod peste Pârâul Urdești care face legătura Străzii Nr. 7 cu drumul de exploatare agricolă, către Dealul Viilor.</div>
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
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">Întotdeauna podurile au fost pentru noi o provocare! </a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                        De această dată construim un pod peste Pârâul Urdești care face legătura Străzii Nr. 7 cu drumul de exploatare agricolă, către Dealul Viilor.
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
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">PADURENI . Dezvoltarea retelei rutiere!</a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">FELICITARI echipei VIACONS ! Multumim PRIMARIA PADURENI , DIACONU  T. Si C. L. Dezvoltarea retelei rutiere! Viacons rutier Vaslui</div>
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
                                <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px mb-2" style="background-image:url('{{ asset('static/about/directorGeneral.jpg') }}')"></div>
                                <div class="m-0">
                                    <div class="d-flex">
                                        <a href="/news/details" class="fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base">FELICITARI echipei VIACONS ! Multumim PRIMARIA PADURENI , DIACONU  T. Si C. L.</a>
                                        <div class="col-lg-3 d-flex justify-content-end">
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
                                    <div class="fw-bold fs-5 text-gray-600 text-dark mt-3 mb-5">De această dată construim un pod peste Pârâul Urdești care face legătura Străzii Nr. 7 cu drumul de exploatare agricolă, către Dealul Viilor.</div>
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
        </div>
    </div>
@endsection
