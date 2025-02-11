<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Attachment;
use App\Models\Note;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class NoteController extends Controller
{

    private function isFile($content) : bool
    {
        return substr($content, 0, 22) === '[START-FILE-REFERENCE]' && substr($content, -20) === '[END-FILE-REFERENCE]';
    }

    private function getParsedFile($content) : Attachment
    {
        $attachmentId = substr($content, 25, -20);
        $attachment = Attachment::with('file')->find($attachmentId);
        return $attachment;
    }

    public function index() : JsonResponse
    {
        $notes = Note::where('user_id', auth()->id())->get();

        return response()->json($notes, 200);
    }

    public function show($id) : JsonResponse
    {
        //        $note = Note::where('user_id', auth()->id())->find($id)->with('segments')->first();
        $note = Note::where('user_id', auth()->id())->with('segments')->find($id);

        if (!$note)
        {
            return response()->json('Note not found', 404);
        }

        $segments = $note->segments->sortBy('index')->map(function ($segment)
            {
                $isFile = $this->isFile($segment->content);

                return [
                    'id'      => $segment->id,
                    'note_id' => $segment->note_id,
                    'index'   => $segment->index,
                    'content' => $isFile ? $this->getParsedFile($segment->content) : $segment->content,
                    'is_file' => $isFile,
                ];
            });

        $noteWithSegments = [
            'id'       => $note->id,
            'title'    => $note->title,
            'segments' => $segments,
        ];

        return response()->json($noteWithSegments, 200);
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
