<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = $request->user()->categories()->get();
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'color' => 'nullable|string|max:20',
        ]);

        $category = $request->user()->categories()->create($data);

        return response()->json($category, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        $this->authorizeUser($category);
        return $category;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $this->authorizeUser($category);

        $data = $request->validate([
            'name' => 'sometimes|required|string|max:100',
            'color' => 'nullable|string|max:20',
        ]);

        $category->update($data);
        return response()->json($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $this->authorizeUser($category);

        $category->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }

    private function authorizeUser(Category $category)
    {
        if ($category->user_id !== auth()->id()) {
            abort(403, 'Unauthorized');
        }
    }
}
