<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class ProjectsController extends Controller
{
    /**
     * @return View
     */
    public function index(): View
    {
        $projects = [
            [
                "name"     => "Reabilitare drum judetean DJ 244C",
                "location" => "DN24B(Husi) - Padureni -Leosti - Valeni - Urlati",
                "started"  => "14 Dec 2020",
                "finished" => "12 Oct 2021",
            ],
            [
                "name"     => "Reabilitare drum judetean DJ 159E",
                "location" => "Girceni - (DJ 159)",
                "started"  => "12 Ian 2018",
                "finished" => "12 Mar 2021",
            ],
            [
                "name"     => "Modernizare strazi rurale in sat Viisoara",
                "location" => "Comuna Viisoara, Judetul Vaslui",
                "started"  => "05 Feb 2015",
                "finished" => "07 Nov 2018",
            ],
            [
                "name"     => "Modernizare strazi in Bogdanesti",
                "location" => "comuna Bogdanesti, judetul Vaslui",
                "started"  => "05 Feb 2015",
                "finished" => "07 Nov 2018",
            ],
            [
                "name"     => "Modernizare drum comunal DC 37",
                "location" => "Hoceni - Grumezoaia, comuna Hoceni",
                "started"  => "12 Ian 2018",
                "finished" => "12 Mar 2021",
            ],
            [
                "name"     => "Reabilitare drum judetean DJ 244C",
                "location" => "DN24B(Husi) - Padureni -Leosti - Valeni - Urlati",
                "started"  => "14 Dec 2020",
                "finished" => "12 Oct 2021",
            ],
            [
                "name"     => "Modernizare drum comnual DC40 din DN24A, DC 40A",
                "location" => "Dlocalitatea Broscotesti",
                "started"  => "12 Ian 2018",
                "finished" => "12 Mar 2021",
            ],
            [
                "name"     => "Reabilitare drum judetean DJ 244C",
                "location" => "DN24B(Husi) - Padureni -Leosti - Valeni - Urlati",
                "started"  => "14 Dec 2020",
                "finished" => "12 Oct 2021",
            ],
            [
                "name"     => "Modernizare drum comunal DC 37",
                "location" => "Hoceni - Grumezoaia, comuna Hoceni",
                "started"  => "05 Feb 2015",
                "finished" => "07 Nov 2018",
            ],
            [
                "name"     => "Modernizare strazi rurale in sat Viisoara",
                "location" => "comuna Bogdanesti, judetul Vaslui",
                "started"  => "12 Ian 2018",
                "finished" => "12 Mar 2021",
            ],
        ];

        return view('projects.index', compact('projects'));
    }
}
