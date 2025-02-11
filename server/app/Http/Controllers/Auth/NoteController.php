<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Note;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class NoteController extends Controller
{
    public function index() : JsonResponse
    {
        $notes = Note::where('user_id', auth()->id())->get();
        return response()->json($notes, 200);
    }

    public function show($id) : JsonResponse
    {
        $note = Note::with('segments')->find($id);

        if (!$note) {
            return response()->json('Note not found', 404);
        }

        return response()->json($note, 200);
    }

    public function store(Request $request) : JsonResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
        ]);

        $note = Note::create($request->all());

        return response()->json($note, 201);
    }

    public function update(Request $request, $id) : JsonResponse
    {
        $note = Note::findOrFail($id);
        $note->update($request->all());

        return response()->json($note, 200);
    }

    public function destroy($id) : JsonResponse
    {
        $note = Note::findOrFail($id);
        $note->delete();

        return response()->json(null, 204);
    }
}
