<footer class="footer mt-3 container-xxl" id="kt_footer">
    <div class="d-flex flex-column flex-lg-row flex-lg-wrap justify-content-center justify-content-lg-between align-items-center p-3 fw-bold"
         style="background-color: #fff;border-top-left-radius: 0.65rem;border-top-right-radius:0.65rem;"
    >
        <div class="d-flex align-items-center">
            <div>
                <img class="me-3 h-auto" src="{{ asset('logo.png') }}" alt="" width="100px" />
            </div>
            <div>
                <p class="fw-bold">
                    {{ __('labels.officeHours') }}: 09:00 - 18:00
                </p>
                <a class="d-block mb-2" href="tel:+40 726 205 206">
                    <i class="fas fa-phone"></i>
                    +40 235 481 227
                </a>
                <a class="d-block mb-2" href="mailto:office@viacons.com?Subject=Hello" target="_top" title="Send us an email">
                    <i class="far fa-envelope"></i>
                    office@viacons.com
                </a>
                <p class="fw-bold pt-2">
                    {{ config('app.name') }} S.R.L &copy; {{ date('Y') }}
                </p>
            </div>
        </div>
        <div class="flex-grow-1 d-flex flex-column flex-xl-row justify-content-between align-items-center">
            <div class="flex-grow-1 d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 my-4">
                <a href="#termsModal" data-bs-toggle="modal" data-bs-target="#termsModal">
                    {{ __('labels.terms') }}
                </a>
                <span class="d-none d-sm-inline-block">|</span>
                <a href="#privacyModal" data-bs-toggle="modal" data-bs-target="#privacyModal">
                    {{ __('labels.privacy') }}
                </a>
                <span class="d-none d-sm-inline-block">|</span>
                <a href="{{ route('contact.create') }}">
                    {{ __('labels.contact') }}
                </a>
            </div>
            <ul class="footer__social list-unstyled d-flex mb-0 gap-5">
                <li>
                    <a href="https://www.facebook.com/people/VIACONS-RUTIER/100057571776176/" target="_blank" title="Facebook">
                        <img src="{{ asset('static/social/facebook.svg') }}" width="35px" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=HPD9ZN4e3t0" target="_blank" title="Youtube">
                        <img src="{{ asset('static/social/youtube.svg') }}" width="35px" alt="Facebook" />
                    </a>
                </li>
                <li>
                    <a href="https://m.me/viacons" target="_blank" title="Messenger">
                        <img src="{{ asset('static/social/messenger.svg') }}" width="35px" alt="Messenger" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+040235481227" target="_blank" title="Whatsapp">
                        <img src="{{ asset('static/social/whatsapp.svg') }}" width="35px" alt="Whatsapp" />
                    </a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/GBF36WoxhQd3ZKHE9" target="_blank" title="Google Maps">
                        <img src="{{ asset('static/social/maps.svg') }}" width=30px" alt="Maps" />
                    </a>
                </li>
            </ul>
        </div>
        {{--  Terms + Privacy modals  --}}
        <div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="termsModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    @include("elements.terms.ro")
                </div>
            </div>
        </div>
        <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    @include("elements.privacy.ro")
                </div>
            </div>
        </div>
    </div>
</footer>

<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
    <span class="svg-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
            <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
        </svg>
    </span>
</div>
