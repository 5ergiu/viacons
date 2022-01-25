<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class CareersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index(): View
    {
        return view('career.index');
    }

    public function adminIndex(): View
    {
        $jobs = [
            [
                'id' => 1,
                'job_title' => 'Inginer',
                'expires' => 'Peste 2 zile',
                'salary' => '2500 RON',
                'status' => 'Active',
                'openings' => 2,
            ],
            [
                'id' => 2,
                'job_title' => 'Zidar',
                'expires' => 'Peste 30 de zile',
                'salary' => '6500 RON',
                'status' => 'Inactive',
                'openings' => 1,
            ],
            [
                'id' => 3,
                'job_title' => 'Șofer',
                'expires' => 'Peste 2 zile',
                'salary' => '1500 RON',
                'status' => 'Active',
                'openings' => 3,
            ],
            [
                'id' => 4,
                'job_title' => 'Macaragiu',
                'expires' => 'Pe 24 Decembrie, 2021',
                'salary' => '4250 RON',
                'status' => 'Active',
                'openings' => 1,
            ],
            [
                'id' => 5,
                'job_title' => 'Fierar',
                'expires' => 'Pe 24 Decembrie, 2022',
                'salary' => '4250 RON',
                'status' => 'Active',
                'openings' => 1,
            ],

        ];

        return view('admin.careers', compact('jobs'));
    }

    /**
     * Display the specified resource.
     * @return View
     */
    public function show(): View
    {
        $job = [
            'job_title' => 'Fierar',
            'job_details1' => "Cautam fierar pentru echipa noastra din Belgia. Candidatul ideal trebuie sa aiba experienta in constructii."
                . " Disponibil sa calatoreasca in Belgia. Persoana organizata care poate lucra in echipa si care a mai lucrat in Belgia/Germania."
                . " Cunoscator de limba franceza/engleza(optional).",
            'job_details2' => "Descrierea jobului : Constructii la rosu in Belgia. Program de lucru intr-un singur schimb. Oferim: Salariu net de 11 Euro/h.- negociabil."
                . " Echipament de munca conform normelor de protectia muncii din tara respectiva. Societatea oferta transport si cazare.",
            'expires' => 'Pe 24 Decembrie, 2022',
            'salary' => '4250 RON',
            'status' => 'Active',
            'openings' => 1,
        ];

        return view('career.show', compact('job'));
    }
}
