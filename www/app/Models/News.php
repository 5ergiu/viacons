<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    /** @var string */
    protected $table = 'news';

    /** @var string[]  */
    protected $fillable = [
        'title',
        'description',
        'status',
        'image',
    ];
}
