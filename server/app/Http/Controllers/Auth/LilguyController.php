<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Lilguy;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LilguyController extends Controller
{
    /**
     * @param $imageData
     * @return string
     */
    private function saveImageAsPath($imageData): string
    {
        $fileName = uniqid('lilguy_', true) . '.webp';
        $filePath = 'images/' . $fileName;

        Storage::disk('public')->put($filePath, file_get_contents($imageData));

        return $filePath;
    }

    public function index() : JsonResponse
    {
        $lilguys = Lilguy::with('creator')->get();

        return response()->json($lilguys, 200);
    }

    public function show($id) : JsonResponse
    {
        $lilguy = Lilguy::with('creator')->findOrFail($id);

        return response()->json($lilguy, 200);
    }

    public function store(Request $request) : JsonResponse
    {
        $request->validate([
            'name' => 'required|string',
            'image' => 'required|string',
            'price' => 'required|numeric',
            'description' => 'nullable|string',
        ]);

        $imagePath = $this->saveImageAsPath($request->image);

        $userId = $request->user()->id;

        $lilguy = Lilguy::create([
            'creator_id' => $userId,
            'name' => $request->name,
            'image' => $imagePath,
            'price' => $request->price,
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
            'description' => 'nullable|string',
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
