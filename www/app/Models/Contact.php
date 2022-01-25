<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    /** @var string[]  */
    protected $fillable = [
        'name',
        'email',
        'subject',
        'message',
    ];
}
