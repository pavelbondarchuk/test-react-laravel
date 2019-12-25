<?php

namespace App\Model;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'updated_at'
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'headline', 'content', 'user_id',
    ];

    //
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
