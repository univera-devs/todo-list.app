<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoryController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/category",
     *     summary="Get All Categories",
     *     tags={"Category"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response=200,description="Successful Response"),
     *     @OA\Response(response=401,description="Unauthenticated")
     * )
     */

    public function index(Request $request)
    {
        $user = $request->user();

        if (!$user) {
            return response()->json([
                'message' => 'Unauthenticated.'
            ], 401);
        }

        $categories = $user->categories()->get();

        return response()->json($categories, 200);
    }


    /**
     * @OA\Post(
     *     path="/api/category",
     *     summary="Create New Category",
     *     tags={"Category"},
     *     security={{"bearerAuth":{}}},
     *
     *     @OA\RequestBody(
     *         required=true,
     *         description="Category data",
     *         @OA\JsonContent(
     *             required={"name","color"},
     *             @OA\Property(property="name", type="string", maxLength=255, example="Work"),
     *             @OA\Property(property="color", type="string", maxLength=20, example="#ff5733")
     *         )
     *     ),
     *     @OA\Response(response=201,description="Created Successfully"),
     *     @OA\Response(response=401,description="Unauthenticated"),
     *     @OA\Response(response=422,description="Validation error")
     * )
     */

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:100',
            'color' => 'required|string|max:20',
        ]);

        $category = $request->user()->categories()->create($data);

        return response()->json($category, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/category/{id}",
     *     summary="Show Details Category",
     *     tags={"Category"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="category_id", @OA\Schema(type="integer")),
     *     @OA\Response(response=200,description="Successful response"),
     *     @OA\Response(response=404,description="Not Found"),
     *     @OA\Response(response=401,description="Unauthenticated")
     * )
     */

    public function show(Category $category)
    {
        $this->authorizeUser($category);
        return $category;
    }

    /**
     * @OA\Put(
     *     path="/api/category/{id}",
     *     summary="Update Category",
     *     tags={"Category"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         description="Category data",
     *         @OA\JsonContent(
     *             required={"name","color"},
     *             @OA\Property(property="name", type="string",example="Work"),
     *             @OA\Property(property="color", type="string",example="#ff5733")
     *         )
     *     ),
     *     @OA\Response(response=200,description="Updated Successfully"),
     *     @OA\Response(response=401,description="Unauthenticated"),
     *     @OA\Response(response=422,description="Validation error")
     * )
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
     * @OA\Delete(
     *     path="/api/category/{id}",
     *     summary="Delete Category",
     *     tags={"Category"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Deleted Successfully"),
     *     @OA\Response(response=401,description="Unauthenticated"),
     *     @OA\Response(response=422,description="Validation error")
     * )
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
