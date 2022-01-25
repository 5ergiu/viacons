@extends('main')

@section('meta')
    <meta name="description" content="Viacons rutier Vaslui">
@endsection

@section('title') {{ __('labels.home') }} @endsection

@section('content')
    <div class="card">

        <div class="tns tns-default my-5">
            <div data-tns="true" data-tns-loop="true" data-tns-swipe-angle="false" data-tns-speed="2000" data-tns-autoplay="true" data-tns-autoplay-timeout="18000" data-tns-controls="true" data-tns-nav="false" data-tns-items="1" data-tns-center="false" data-tns-dots="false" data-tns-prev-button="#kt_team_slider_prev" data-tns-next-button="#kt_team_slider_next">
                <div class="d-flex justify-content-center align-items-center">
                    <img class="w-75 card-rounded" src="{{ asset('static/home/home.jpg') }}" alt="" style="object-fit: cover; max-height: 415px;" />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img class="w-75 card-rounded" src="{{ asset('static/news/pod.jpg') }}" alt="" style="object-fit: cover; max-height: 415px;" />
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <img class="w-75 card-rounded" src="{{ asset('static/news/tirs1.jpg') }}" alt="" style="object-fit: cover; max-height: 415px;" />
                </div>
            </div>
            <button class="btn btn-icon btn-active-color-primary" id="kt_team_slider_prev">
                <span class="svg-icon svg-icon-3x">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="black" />
                    </svg>
                </span>
            </button>
            <button class="btn btn-icon btn-active-color-primary" id="kt_team_slider_next">
                <span class="svg-icon svg-icon-3x">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="black" />
                    </svg>
                </span>
            </button>
        </div>
        <div class="card-body">
            <div class="fs-5 fw-bold text-gray-600 mb-10">
                <p class="mb-5">
                    {{ __('about.intro.activity18') }} <br />
                </p>
                <p>
                    {{ __('about.intro.businessFigure') }} <br />
                </p>
            </div>
            <div class="card bg-light mb-10">
                <div class="card-body py-15">
                    <div class="d-flex justify-content-around flex-wrap gap-5">
                        <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
                            <div class="text-center">
                                <span class="svg-icon svg-icon-primary svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M3 6C2.4 6 2 5.6 2 5V3C2 2.4 2.4 2 3 2H5C5.6 2 6 2.4 6 3C6 3.6 5.6 4 5 4H4V5C4 5.6 3.6 6 3 6ZM22 5V3C22 2.4 21.6 2 21 2H19C18.4 2 18 2.4 18 3C18 3.6 18.4 4 19 4H20V5C20 5.6 20.4 6 21 6C21.6 6 22 5.6 22 5ZM6 21C6 20.4 5.6 20 5 20H4V19C4 18.4 3.6 18 3 18C2.4 18 2 18.4 2 19V21C2 21.6 2.4 22 3 22H5C5.6 22 6 21.6 6 21ZM22 21V19C22 18.4 21.6 18 21 18C20.4 18 20 18.4 20 19V20H19C18.4 20 18 20.4 18 21C18 21.6 18.4 22 19 22H21C21.6 22 22 21.6 22 21ZM16 11V9C16 6.8 14.2 5 12 5C9.8 5 8 6.8 8 9V11C7.2 11 6.5 11.7 6.5 12.5C6.5 13.3 7.2 14 8 14V15C8 17.2 9.8 19 12 19C14.2 19 16 17.2 16 15V14C16.8 14 17.5 13.3 17.5 12.5C17.5 11.7 16.8 11 16 11ZM13.4 15C13.7 15 14 15.3 13.9 15.6C13.6 16.4 12.9 17 12 17C11.1 17 10.4 16.5 10.1 15.7C10 15.4 10.2 15 10.6 15H13.4Z" fill="black"/>
                                        <path d="M9.2 12.9C9.1 12.8 9.10001 12.7 9.10001 12.6C9.00001 12.2 9.3 11.7 9.7 11.6C10.1 11.5 10.6 11.8 10.7 12.2C10.7 12.3 10.7 12.4 10.7 12.5L9.2 12.9ZM14.8 12.9C14.9 12.8 14.9 12.7 14.9 12.6C15 12.2 14.7 11.7 14.3 11.6C13.9 11.5 13.4 11.8 13.3 12.2C13.3 12.3 13.3 12.4 13.3 12.5L14.8 12.9ZM16 7.29998C16.3 6.99998 16.5 6.69998 16.7 6.29998C16.3 6.29998 15.8 6.30001 15.4 6.20001C15 6.10001 14.7 5.90001 14.4 5.70001C13.8 5.20001 13 5.00002 12.2 4.90002C9.9 4.80002 8.10001 6.79997 8.10001 9.09997V11.4C8.90001 10.7 9.40001 9.8 9.60001 9C11 9.1 13.4 8.69998 14.5 8.29998C14.7 9.39998 15.3 10.5 16.1 11.4V9C16.1 8.5 16 8 15.8 7.5C15.8 7.5 15.9 7.39998 16 7.29998Z" fill="black"/>
                                    </svg>
                                </span>
                                <div class="mt-1">
                                    <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center justify-content-center">
                                        <div class="min-w-70px" data-kt-countup="true" data-kt-countup-value="832" data-kt-countup-duration="5">0</div>
                                        +
                                    </div>
                                    <span class="text-gray-600 fw-bold fs-5 lh-0">{{ __('about.intro.statistics.clients') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
                            <div class="text-center">
                                <span class="svg-icon svg-icon-success svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black"/>
                                        <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black"/>
                                    </svg>
                                </span>
                                <div class="mt-1">
                                    <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center justify-content-center">
                                        <div class="min-w-50px" data-kt-countup="true" data-kt-countup-value="394" data-kt-countup-duration="5">0</div>
                                        +
                                    </div>
                                    <span class="text-gray-600 fw-bold fs-5 lh-0">{{ __('about.intro.statistics.projects.finished') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
                            <div class="text-center">
                                <span class="svg-icon svg-icon-info svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="black"/>
                                        <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="black"/>
                                    </svg>
                                </span>
                                <div class="mt-1">
                                    <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center justify-content-center">
                                        <div class="min-w-50px" data-kt-countup="true" data-kt-countup-value="42" data-kt-countup-duration="5">0</div>
                                        +
                                    </div>
                                    <span class="text-gray-600 fw-bold fs-5 lh-0">{{ __('about.intro.statistics.projects.ongoing') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="octagon d-flex flex-center h-200px w-200px bg-white mx-2">
                            <div class="text-center">
                                <span class="svg-icon svg-icon-danger svg-icon-2hx">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M3.20001 5.91897L16.9 3.01895C17.4 2.91895 18 3.219 18.1 3.819L19.2 9.01895L3.20001 5.91897Z" fill="black"/>
                                        <path opacity="0.3" d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21C21.6 10.9189 22 11.3189 22 11.9189V15.9189C22 16.5189 21.6 16.9189 21 16.9189H16C14.3 16.9189 13 15.6189 13 13.9189ZM16 12.4189C15.2 12.4189 14.5 13.1189 14.5 13.9189C14.5 14.7189 15.2 15.4189 16 15.4189C16.8 15.4189 17.5 14.7189 17.5 13.9189C17.5 13.1189 16.8 12.4189 16 12.4189Z" fill="black"/>
                                        <path d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21V7.91895C21 6.81895 20.1 5.91895 19 5.91895H3C2.4 5.91895 2 6.31895 2 6.91895V20.9189C2 21.5189 2.4 21.9189 3 21.9189H19C20.1 21.9189 21 21.0189 21 19.9189V16.9189H16C14.3 16.9189 13 15.6189 13 13.9189Z" fill="black"/>
                                    </svg>
                                </span>
                                <div class="mt-1">
                                    <div class="fs-lg-2hx fs-2x fw-bolder text-gray-800 d-flex align-items-center justify-content-center">
                                        <div class="min-w-50px" data-kt-countup="true" data-kt-countup-value="1.5" data-kt-countup-duration="5" data-kt-countup-decimal-places="1">0</div>
                                        M+
                                    </div>
                                    <span class="text-gray-600 fw-bold fs-5 lh-0">{{ __('about.intro.statistics.beneficiaries') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-16">
                <div class="text-center mb-12 mt-10">
                    <h3 class="fs-2hx text-dark mb-5">Ultimele stiri</h3>
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
@endsection
