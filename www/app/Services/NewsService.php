<?php

namespace App\Services;

use App\Helpers\LoggerHelper;
use App\Http\Requests\NewsStoreUpdateRequest;
use App\Models\News;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Throwable;

class NewsService
{
    /**
     * @param NewsStoreUpdateRequest $request
     * @return RedirectResponse
     */
    public function handleStore(NewsStoreUpdateRequest $request): RedirectResponse
    {

        dd($request->get('news'));

        try {
            News::create($request->get('news'));
            return redirect()
                ->back()
                ->with('success', __('news.successfullyAdded'));
        } catch (Throwable $e) {
            new LoggerHelper($e);
        }
        return redirect()
            ->back()
            ->withErrors(['contact' => __('labels.genericError')]);
    }

    /**
     * Delete the model from the database.
     * @param News $news
     * @return RedirectResponse
     */
    public function handleDestroy(News $news): RedirectResponse
    {
        try {
            $news->delete();
            return redirect()->route('news.index')
                ->with('success', __('news.successfullyDeleted'))
                ;
        } catch (Throwable $e) {
            DB::rollback();
            new LoggerHelper($e);
        }

        return redirect()
            ->back()
            ->withErrors(['contact' => __('labels.genericError')])
            ;
    }
}
