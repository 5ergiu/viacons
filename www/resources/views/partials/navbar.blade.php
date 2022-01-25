<div id="kt_header" class="header align-items-stretch mb-5" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
    <div class="container-xxl d-flex align-items-center">
        <div class="d-flex align-items-center d-lg-none ms-n2 me-3" title="Show aside menu">
            <div class="btn btn-icon btn-custom w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                <span class="svg-icon svg-icon-2x">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
                        <path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
                    </svg>
                </span>
            </div>
        </div>
        <div class="header-logo me-5 me-md-10 flex-grow-1 flex-lg-grow-0">
            <a href="{{ route('home') }}">
                <img alt="Logo" src="{{ asset('wh-logo.png') }}" class="h-50px h-lg-50px logo-default" />
                <img alt="Logo" src="{{ asset('rh-logo.png') }}" class="h-50px h-lg-50px logo-sticky" />
            </a>
        </div>
        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <div class="d-flex align-items-stretch" id="kt_header_nav">
                <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                    <div class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                        <div class="menu-item me-lg-1 {{ request()->is('/') ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('home') }}">
                                {{ __('labels.home') }}
                            </a>
                        </div>

                        <div class="menu-item me-lg-1 {{ request()->segment(1) === 'projects' ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('projects.index') }}">
                                {{ __('labels.projects.trans') }}
                            </a>
                        </div>
                        <div class="menu-item me-lg-1 {{ request()->segment(1) === 'news' ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('news.index') }}">
                                {{ __('labels.news') }}
                            </a>
                        </div>
                        <div class="menu-item me-lg-1 {{ request()->segment(1) === 'equipment' ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('equipment.index') }}">
                                {{ __('labels.equipment') }}
                            </a>
                        </div>
                        <div class="menu-item me-lg-1 {{ request()->segment(1) === 'career' ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('career.index') }}">
                                {{ __('labels.career') }}
                            </a>
                        </div>
                        <div class="menu-item me-lg-1 {{ request()->segment(1) === 'about-us' ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('about.index') }}">
                                {{ __('labels.aboutUs') }}
                            </a>
                        </div>
                        <div class="menu-item me-lg-1 {{ request()->segment(1) === 'contact' ? 'here' : null }}">
                            <a class="menu-link py-3" href="{{ route('contact.create') }}">
                                {{ __('labels.contact') }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex align-items-stretch flex-shrink-0">
                <div class="d-flex align-items-stretch flex-shrink-0">
                    <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                        <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <img alt="Pic" src="{{ asset('static/photo.png') }}" style="object-fit: cover" />
                        </div>
                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                            <div class="menu-item px-5">
                                <a href="{{ route('news.index') }}" class="menu-link px-5">{{ __('labels.news') }}</a>
                            </div>
                            <div class="menu-item px-5">
                                <a href="{{ route('admin.careers') }}" class="menu-link px-5">{{ __('labels.career') }}</a>
                            </div>
                            <div class="menu-item px-5">
                                <a href="{{ route('equipment.index') }}" class="menu-link px-5">{{ __('labels.equipment') }}</a>
                            </div>
                            <div class="separator my-2"></div>
                            <div class="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                <a href="#" class="menu-link px-5">
                                    <span class="menu-title position-relative">Language
                                        <span class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                            English
                                            <img class="w-15px h-15px rounded-1 ms-2" src="{{ asset('assets/media/flags/united-states.svg') }}" alt="" />
                                        </span>
                                    </span>
                                </a>
                                <div class="menu-sub menu-sub-dropdown w-175px py-4">
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5 active">
                                            <span class="symbol symbol-20px me-4">
                                                <img class="rounded-1" src="{{ asset('assets/media/flags/united-states.svg') }}" alt="" />
                                            </span>
                                            English
                                        </a>
                                    </div>
                                    <div class="menu-item px-3">
                                        <a href="#" class="menu-link d-flex px-5">
                                            <span class="symbol symbol-20px me-4">
                                                <img class="rounded-1" src="{{ asset('assets/media/flags/romania.svg') }}" alt="" />
                                            </span>
                                            Romanian
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-item px-5">
                                <a href="#" class="menu-link px-5">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
