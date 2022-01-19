<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pokemon;
use App\Http\Resources\PokemonCollection;

class PokemonsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Pokemon::all(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($request)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pokemon = Pokemon::create([
           'name' => $request->name,
            'weight' => $request->weight,
            'height' => $request->height,
            'evolvesto' => $request->evolvesto,
            'evolvesfrom' => $request->evolvesfrom,
            'origin' => $request->origin
        ]);

        return response($pokemon, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return PokemonCollection::collection(Pokemon::findOrFail($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $pokemon = Pokemon::findOrFail($id);
        $pokemon->update([
            'name' => $request->name,
            'weight' => $request->weight,
            'height' => $request->height,
            'evolvesto' => $request->evolvesto,
            'evolvesfrom' => $request->evolvesfrom,
            'origin' => $request->origin
        ]);
        $pokemon->save();

        return response($pokemon, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $pokemon = Pokemon::find($id);
        return response($pokemon->delete(), 200);
    }
}
