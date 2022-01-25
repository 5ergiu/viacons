<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactsStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     * @return array
     */
    public function rules(): array
    {
        return [
            'contact.name'    => 'required|max:255',
            'contact.email'   => 'required|email:rfc|max:255',
            'contact.subject' => 'required|max:255',
            'contact.message' => 'max:1000|nullable',
        ];
    }

    /**
     * Custom message for validation
     * @return array
     */
    public function messages(): array
    {
        return [
            'contact.name.required'    => __('validation.required', ['attribute' => __('contacts.name')]),
            'contact.name.max'         => __('validation.max.string', ['attribute' => __('contacts.name'), 'max' => 255]),
            'contact.email.required'   => __('validation.required', ['attribute' => __('contacts.email')]),
            'contact.email.email'      => __('validation.email', ['attribute' => __('contacts.email')]),
            'contact.email.max'        => __('validation.max.string', ['attribute' => __('contacts.email'), 'max' => 255]),
            'contact.subject.required' => __('validation.required', ['attribute' => __('contacts.subject')]),
            'contact.subject.max'      => __('validation.max.string', ['attribute' => __('contacts.message'), 'max' => 255]),
            'contact.message.max'      => __('validation.max.string', ['attribute' => __('contacts.message'), 'max' => 1000]),
        ];
    }
}
