@extends('main')

@section('title') {{ __('labels.aboutUs') }} @endsection

@section('content')
    <div class="card">
        <div class="card-body p-lg-17">
            <div class="mb-10">
                <div class="text-center mb-10">
                    <h3 class="fs-2hx text-dark mb-5">{{ __('labels.aboutUs') }}</h3>
                    <h4>{{ __('about.intro.header') }}</h4>
                </div>
                <div class="fs-5 fw-bold text-gray-600 mb-10">
                    <p class="mb-5">
                        <span class="text-dark">{{ config('app.name') }}</span> {{ __('about.intro.about') }}
                    </p>
                    <p class="mb-5">
                        {{ __('about.intro.projects') }}
                    </p>
                    <p class="mb-5">
                        {{ __('about.intro.activity') }}
                    </p>
                </div>
                <div class="mb-10">
                    <img class="w-100 card-rounded" src="{{ asset('static/home/home.jpg') }}" alt="" style="object-fit: cover" />
                </div>
            </div>
            <div class="mb-10">
                <div class="text-center mb-12">
                    <h3 class="fs-2hx text-dark mb-5">{{ __('about.activity.trans') }}</h3>
                </div>
                <div class="fw-bolder text-gray-700 fs-5 mb-10">
                    <p class="d-flex align-items-center">
                        <i class="fa fa-genderless text-danger fs-2 me-2"></i>
                        <span>{{ __('about.activity.list.0') }}</span>
                    </p>
                    <p class="d-flex align-items-center">
                        <i class="fa fa-genderless text-success fs-2 me-2"></i>
                        <span>{{ __('about.activity.list.1') }}</span>
                    </p>
                    <p class="d-flex align-items-center">
                        <i class="fa fa-genderless text-primary fs-2 me-2"></i>
                        <span>{{ __('about.activity.list.2') }}</span>
                    </p>
                </div>
                <div class="fs-5 fw-bold text-gray-600 mb-10">
                    <p class="mb-5">
                        {{ __('about.activity.from') }}
                    </p>
                    <p class="mb-5">
                        {{ __('about.activity.objective') }}
                    </p>
                </div>
            </div>
            <div>
                <div class="text-center mb-12">
                    <h3 class="fs-2hx text-dark mb-5">{{ __('about.team.trans') }}</h3>
                </div>
                <div class="row justify-content-between g-10 mb-5">
                    <div class="col-md-4">
                        <div class="card-xl-stretch me-md-6">
                            <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px" style="background-image:url('{{ asset('static/about/directorGeneral.jpg') }}')"></div>
                            <div class="m-0">
                                <p class="fs-4 text-dark fw-bolder mb-0 mt-2">{{ __('about.team.titles.engineer') }} Ioan Ciomaga</p>
                                <p class="fs-5 fw-bolder text-gray-600">{{ __('about.team.titles.ceo') }}</p>
                                <p class="fs-5 fw-bold text-gray-600">
                                    {{ __('about.team.colleges.construction') }} <br />
                                    {{ __('about.team.universities.asachi') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-xl-stretch me-md-6">
                            <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px" style="background-image:url('{{ asset('static/about/directorTehnic.jpg') }}')"></div>
                            <div class="m-0">
                                <p class="fs-4 text-dark fw-bolder mb-0 mt-2">{{ __('about.team.titles.engineer') }} Daniel Dobrea</p>
                                <p class="fs-5 fw-bolder text-gray-600">{{ __('about.team.titles.technicalDirector') }}</p>
                                <p class="fs-5 fw-bold text-gray-600">
                                    {{ __('about.team.colleges.construction') }} <br />
                                    {{ __('about.team.universities.asachi') }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-xl-stretch me-md-6">
                            <div class="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-225px" style="background-image:url('{{ asset('static/about/directorEconomic.jpg') }}')"></div>
                            <div class="m-0">
                                <p class="fs-4 text-dark fw-bolder mb-0 mt-2">{{ __('about.team.titles.economist') }} Georgică Aciobăniţei</p>
                                <p class="fs-5 fw-bolder text-gray-600">{{ __('about.team.titles.economicManager') }}</p>
                                <p class="fs-5 fw-bold text-gray-600">
                                    {{ __('about.team.colleges.economics') }} <br />
                                    {{ __('about.team.universities.cuza') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4>{{ __('about.team.mAndP') }}</h4>
                <p class="fs-5 fw-bold text-gray-600">
                    {{ __('about.team.mAndPText') }}
                </p>
            </div>
        </div>
    </div>
@endsection
