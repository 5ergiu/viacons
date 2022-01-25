@extends('main')

@section('title') {{ __('labels.contact') }} @endsection

@section('content')
    <div class="card card-page">
        <div class="card-body p-lg-17">
            <div class="row">
                <div class="col-lg-7 mx-auto mb-15">
                    <h3 class="text-center fs-2hx text-dark mb-5">
                        {{ __('labels.contact') }}
                    </h3>
                    <h4 class="text-center mb-10">
                        {{ __('contacts.contactUs') }}
                    </h4>
                    <form class="col-lg-12" action="{{ route('contact.store') }}" method="post">
                        @if(session('success'))
                            <div class="alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row align-items-center p-5 mb-10 border border-success">
                            <span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path>
                                    <path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path>
                                </svg>
                            </span>
                                <div class="d-flex flex-column pe-0 pe-sm-10">
                                    <h4 class="fw-bold">{{ __('contacts.messageSent') }}</h4>
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
                        @if(session('error'))
                            <div class="alert alert-dismissible bg-light-danger d-flex flex-column flex-sm-row align-items-center p-5 mb-10 border border-danger">
                            <span class="svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="black"></path>
                                <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="black"></path>
                            </svg>
                        </span>
                                <div class="d-flex flex-column pe-0 pe-sm-10">
                                    <h4 class="fw-bold">{{ __('contacts.messageNotSent') }}</h4>
                                    <span>{{ __('contacts.invalidReCaptcha') }}</span>
                                </div>
                                <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                            <span class="svg-icon svg-icon-1 svg-icon-danger">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
                                </svg>
                            </span>
                                </button>
                            </div>
                        @endif
                        @csrf
                        <div class="row">
                            <div class="col-sm-6 mb-4">
                                <label for="contactName" class="required form-label">{{ __('contacts.name') }}</label>
                                <input name="contact[name]" type="text" class="form-control @error('contact.name') is-invalid @enderror"
                                       id="contactName" value="{{ old('contact.name') }}" required />
                                @error('contact.name') @include('elements.errorMessage') @enderror
                            </div>
                            <div class="col-sm-6 mb-4">
                                <label for="contactEmail" class="required form-label">{{ __('contacts.email') }}</label>
                                <input name="contact[email]" type="text" class="form-control @error('contact.email') is-invalid @enderror"
                                       id="contactEmail" value="{{ old('contact.email') }}" required />
                                @error('contact.email') @include('elements.errorMessage') @enderror
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-4">
                                <label for="contactSubject" class="required form-label">{{ __('contacts.subject') }}</label>
                                <input name="contact[subject]" type="text" class="form-control @error('contact.subject') is-invalid @enderror"
                                       id="contactSubject" value="{{ old('contact.subject') }}" required />
                                @error('contact.subject') @include('elements.errorMessage') @enderror
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="form-label">{{ __('contacts.message') }}</label>
                            <textarea class="form-control @error('contact.message') is-invalid @enderror"
                                      placeholder="{{ __('contacts.messageText') }}..." name="contact[message]" id="message"
                                      maxlength="255" style="height: 150px">{{ old('contact.message') }}</textarea>
                            @error('contact.message') @include('elements.errorMessage') @enderror
                        </div>
                        <div class="mb-4">
                            <div class="row">
                                <div class="col-md-12 text-right">
                                    <div class="g-recaptcha" data-sitekey="{{ env('GOOGLE_RECAPTCHA_KEY' )}}"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-success">{{ __('actions.send') }}</button>
                        </div>
                    </form>
                </div>
                <div class="google-map">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.319049479251!2d28.123017015870353!3d46.659961779133305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ca1bdd5742a7ef%3A0xd56d4d6aabb863c6!2sViacons%20Rutier!5e0!3m2!1sen!2sro!4v1635363351770!5m2!1sen!2sro" width="600" height="450" style="border:0;" allowfullscreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script src='https://www.google.com/recaptcha/api.js'></script>
@endpush
