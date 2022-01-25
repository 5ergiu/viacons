<?php

namespace App\Http\Controllers;

use App\Http\Requests\NewsStoreUpdateRequest;
use App\Models\News;
use App\Services\NewsService;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;

class NewsController extends Controller
{
    /**
     * Class constructor.
     * @param NewsService $newsService
     */
    public function __construct(
        private NewsService $newsService
    ) {}

    /**
     * Display a listing of the resource.
     * @return View
     */
    public function index(): View
    {
        return view('news.index');
    }

    /**
     * Show the form for creating a new resource.
     * @return View
     */
    public function create(): View
    {
        return view('news.change');
    }

    /**
     * Display the specified resource.
     * @param News $news
     * @return View
     */
    public function show(News $news): View
    {
        if($news->image == NULL) {
            $news->image = 'assets/media/equipment/auto2.png';
        }
        return view('news.show', compact('news'));
    }

    /**
     * Store a newly created resource in storage.
     * @param NewsStoreUpdateRequest $request
     * @return RedirectResponse
     */
    public function store(NewsStoreUpdateRequest $request): RedirectResponse
    {
        return $this->newsService->handleStore($request);
    }

    public function edit(News $news): View
    {
        return view('news.show', compact('news'));
    }

    /**
     * Update the specified resource in storage.
     * @param NewsStoreUpdateRequest $request
     * @param News $news
     * @return RedirectResponse
     */
    public function update(NewsStoreUpdateRequest $request, News $news): RedirectResponse
    {
        // TODO create edit in service
        return $this->newsService->handleStore($request, $news);
    }

    /**
     * Delete the model from the database.
     * @param News $news
     * @return RedirectResponse
     */
    public function destroy(News $news): RedirectResponse
    {
        return $this->newsService->handleDestroy($news);
    }
}
