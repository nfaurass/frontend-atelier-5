<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('file')) {
            $path = $request->file('file')->store('uploads');
            return response()->json(['path' => $path], 201);
        }
        return response()->json(['error' => 'No file uploaded'], 400);
    }

    public function index()
    {
        $files = Storage::files('uploads');
        return response()->json($files);
    }
}
