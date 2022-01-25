<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewsStoreUpdateRequest extends FormRequest
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
            'news.title'    => 'required|max:255',
            'news.description'    => 'required|max:1000',
        ];
    }

    /**
     * Custom message for validation
     * @return array
     */
    public function messages(): array
    {
        return [
            'news.title.required'       => __('validation.required', ['attribute' => __('news.title')]),
            'news.title.max'            => __('validation.max.string', ['attribute' => __('news.title'), 'max' => 255]),
            'news.description.required' => __('validation.required', ['attribute' => __('news.description')]),
            'news.description.max'      => __('validation.max.string', ['attribute' => __('news.description'), 'max' => 1000]),
        ];
    }
}
