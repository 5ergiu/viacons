@extends('main')

@section('title') {{ __('labels.news') }} @endsection

@section('content')
    <div class="card">
        <div class="card-header border-0 pt-6">
            <div class="card-title">
                <div class="d-flex align-items-center position-relative my-1">
                    <a href="{{ route('news.index') }}" type="button" class="btn btn-secondary">
                        {{ __('actions.back') }}
                    </a>
                </div>
            </div>
        </div>
        <div class="card-body p-lg-17">

            <div class="col-lg-7 mx-auto mb-15">
                <h2 class="fw-bolder mb-10">
                    {{ __('news.addNews') }}
                </h2>
                <form enctype="multipart/form-data" class="form fv-plugins-bootstrap5 fv-plugins-framework" method="POST" action="{{ route('news.store') }}">
                    @if(session('success'))
                        <div class="alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row align-items-center p-5 mb-10 border border-success">
                            <span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                </svg>
                            </span>
                            <div class="d-flex flex-column pe-0 pe-sm-10">
                                <h4 class="fw-bold">{{ __('news.added') }}</h4>
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
                    @csrf
                    <div class="d-flex flex-column scroll-y me-n7 pe-7" id="kt_modal_add_user_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_add_user_header" data-kt-scroll-wrappers="#kt_modal_add_user_scroll" data-kt-scroll-offset="300px" style="max-height: 675px;">
                        <div class="fv-row mb-7 fv-plugins-icon-container">
                            <label class="required fw-bold fs-6 mb-2" for="title">
                                {{ __('news.title') }}
                            </label>
                            <input value="{{ old('news.title') }}"
                                   required
                                   type="text"
                                   name="news[title]"
                                   class="form-control form-control-solid mb-3 mb-lg-0 @error('news.title') is-invalid @enderror"
                                   id="title"
                            />
                            @error('news.title') @include('elements.errorMessage') @enderror
                        </div>
                        <div class="fv-row mb-7 fv-plugins-icon-container">
                            <label for="description" class="required fw-bold fs-6 mb-2">
                                {{ __('news.description') }}
                            </label><br/>
                            <textarea required class="@error('news.description') is-invalid @enderror"
                                      name="news[description]" id="description" cols="58" rows="10" maxlength="1000" style="border-color: #ddd"></textarea>
                            @error('news.description') @include('elements.errorMessage') @enderror
                        </div>
                        {{--                        <div class="fv-row mb-7 fv-plugins-icon-container">--}}
                        {{--                            <label for="description" class="fw-bold fs-6 mb-2">--}}
                        {{--                                {{ __('news.image') }}--}}
                        {{--                            </label><br/>--}}
                        {{--                            <input class="form-control form-control-solid mb-3 mb-lg-0" type="file" name="news[image]" accept=".png, .jpg, .jpeg" />--}}
                        {{--                        </div>--}}
                    </div>
                    <div class="text-center pt-15">
                        <button type="reset" class="btn btn-light me-3" data-kt-users-modal-action="cancel">
                            {{ __('actions.reset') }}
                        </button>
                        <button type="submit" class="btn btn-primary" data-kt-users-modal-action="submit">
                            <span class="indicator-label">adauga stire</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
