@extends('main')

@section('title') {{ __('labels.equipment') }} @endsection

@section('content')
    <div class="card">
        <div class="card-body p-lg-17">
            <div class="mb-10">
                <div class="text-center mb-10">
                    <h3 class="fs-2hx text-dark mb-5">{{ __('equipments.title') }}</h3>
                    <h4><span class="text-dark">{{ config('app.name') }}</span> {{ __('equipments.intro') }}</h4>
                </div>
                <div class="fs-5 fw-bold text-gray-600 mb-10">
                    <p class="mb-5">
                        <span class="text-dark">{{ config('app.name') }}</span> {{ nl2br(__('equipments.details.part1')) }}
                    </p>
                    <p class="mb-5">
                        {{ nl2br(__('equipments.details.part2')) }}
                    </p>
                    <p class="mb-5">
                        {{ nl2br(__('equipments.details.part3')) }}
                    </p>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table align-middle table-row-bordered table-row-dashed gy-5" id="kt_table_widget_1">
                    <tbody>
                    <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                        <th>{{ __('equipments.article') }}</th>
                        <th></th>
                        <th>{{ __('equipments.units') }}</th>
                        <th>{{ __('equipments.capacity') }}</th>
                    </tr>
                    @foreach($equipments as $equipment)
                        <tr>
                            <td>
                                <div class="cursor-pointer symbol symbol-70px symbol-md-70px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                    <img alt="Pic" src="{{ $equipment['image'] }}" style="object-fit: cover" />
                                </div>
                            </td>
                            <td>
                                {{ $equipment['article'] }}
                            </td>
                            <td>
                                {{ $equipment['units'] }}
                            </td>
                            <td>
                                {{ $equipment['capacity'] }}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
