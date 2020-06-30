<?php

namespace App\Http\Requests\Host;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:120',
//            'desc' => '',
            'address' => 'required|string',
            'latitude' => 'required',
            'longitude' => 'required',
            'cost_electric' => 'required',
            'cost_water' => 'required',
            'date_payment' => 'required',
            'date_note_electric' => 'required',
            'date_note_water' => 'required',
            'floors' => 'required',
        ];
    }
}
