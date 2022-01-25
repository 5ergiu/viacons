<?php

namespace App\Services;

use App\Helpers\LoggerHelper;
use App\Http\Requests\ContactsStoreRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Throwable;

class ContactsService
{
    /**
     * @param ContactsStoreRequest $request
     * @return RedirectResponse
     */
    public function handleStore(ContactsStoreRequest $request): RedirectResponse
    {
        $isValidReCaptcha = $this->validateRecaptcha($request);
        if(!$isValidReCaptcha) {
            return redirect()
                ->back()
                ->with('error', __('contacts.messageNotSent'));
        }

        try {
            Contact::create($request->get('contact'));
            return redirect()
                ->route('contact.create')
                ->with('success', __('contacts.thankYouMessage'));
        } catch (Throwable $e) {
            new LoggerHelper($e);
        }
        return redirect()
            ->back()
            ->withErrors(['contact' => __('labels.genericError')]);
    }

    /**
     * Method used to validate Google Recaptcha.
     *
     * @param $request
     * @return bool|RedirectResponse
     */
    private function validateRecaptcha($request): bool|RedirectResponse
    {
        $captchaId       = $request->input('g-recaptcha-response');
        $responseCaptcha = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . config('app.googleRecaptcha') . '&response=' . $captchaId));
        return $responseCaptcha->success;
    }
}
