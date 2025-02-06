<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Lilguy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LilguyController extends Controller
{
    public function index() : JsonResponse
    {
        $lilguys = Lilguy::all();

        return response()->json($lilguys, 200);
    }

    public function show($id) : JsonResponse
    {
        $lilguy = Lilguy::findOrFail($id);

        return response()->json($lilguy, 200);
    }

    public function store(Request $request) : JsonResponse
    {
        $request->validate([
            'name' => 'required|string',
            'image' => 'required|string',
            'price' => 'required|numeric',
        ]);

        $userId = $request->user()->id;

        $lilguy = Lilguy::create([
            'name' => $request->input('name'),
            'image' => $request->input('image'),
            'price' => $request->input('price'),
            'creator_id' => $userId,
        ]);

        return response()->json($lilguy, 201);
    }

    public function update(Request $request, $id) : JsonResponse
    {
        $lilguy = Lilguy::findOrFail($id);

        $request->validate([
            'name' => 'nullable|string',
            'image' => 'nullable|string',
            'price' => 'nullable|numeric',
        ]);


        $lilguy->update($request->all());

        return response()->json($lilguy, 200);
    }

    public function destroy($id) : JsonResponse
    {
        $lilguy = Lilguy::findOrFail($id);
        $lilguy->delete();

        return response()->json(null, 204);
    }
}
