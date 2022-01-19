<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PokemonCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'name' => $request->name,
            'weight' => $request->weight,
            'height' => $request->height,
            'evolvesto' => $request->evolvesto,
            'evolvesfrom' => $request->evolvesfrom,
            'origin' => $request->origin
        ];
    }
}
