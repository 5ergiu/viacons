<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class EquipmentsController
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        $equipments = [
            [
                'image' => 'static/equipment/auto2.png',
                'article' => 'Autoutilitară NG3  ( B-20-VUS) IVECO 450',
                'units' => '2',
                'capacity' => '83 kw',
            ],
            [
                'image' => 'static/equipment/auto3.png',
                'article' => 'Autoutilitară N3  ( B-101- VIA) DAF 81 450',
                'units' => '2',
                'capacity' => '45 kw',
            ],
            [
                'image' => 'static/equipment/auto1.png',
                'article' => 'Semiremorcă 04 (VS-99-VIA) KASBOHRER',
                'units' => '7',
                'capacity' => '45 kw',
            ],
            [
                'image' => 'static/equipment/auto3.png',
                'article' => 'Autoturism M1 (VS-10-VIA) Subaru Forester',
                'units' => '1',
                'capacity' => '83 kw',
            ],
            [
                'image' => 'static/equipment/auto2.png',
                'article' => 'Automobil mixt (VS-12-SDN) AB',
                'units' => '4',
                'capacity' => '158 kw',
            ],

        ];

        return view('equipment.index', compact('equipments'));
    }
}
