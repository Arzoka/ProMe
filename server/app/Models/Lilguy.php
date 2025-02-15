<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lilguy extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'creator_id',
        'name',
        'image',
        'price',
        'description',
    ];

    /**
     * @param $value
     * @return string
     */
    public function getImageAttribute($value)
    {
        return asset('storage/' . $value);
    }

    public function creator(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'creator_id');
    }
}
