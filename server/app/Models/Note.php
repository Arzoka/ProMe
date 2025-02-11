<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['title'];

    public function segments() : \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Segment::class);
    }
}
