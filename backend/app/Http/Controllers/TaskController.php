<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{

    /**
     * @OA\Get(
     *     path="/api/tasks",
     *     summary="Get All Tasks",
     *     tags={"Task"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Response(response=200,description="Successful Response"),
     *     @OA\Response(response=401,description="Unauthenticated")
     * )
     */

    public function index(Request $request)
    {
        $tasks = $request->user()->tasks()->with('category')->get();

        return response()->json($tasks);
    }

    /**
     * @OA\Post(
     *     path="/api/tasks",
     *     summary="Create New Task",
     *     tags={"Task"},
     *     security={{"bearerAuth":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         description="Task data",
     *         @OA\JsonContent(
     *             required={"title"},
     *             @OA\Property(property="title",type="string", example="Finish docs"),
     *             @OA\Property(property="description", type="string", example="Write Swagger docs for API"),
     *             @OA\Property(property="category_id", type="integer", example=1),
     *             @OA\Property(property="status", type="string", enum={"pending", "done"}, example="pending"),
     *             @OA\Property(property="due_date", type="string", format="date-time", example="2025-12-01 10:00:00"),
     *             @OA\Property(property="reminder_at", type="string", format="date-time", example="2025-12-07 10:00:00"),
     *             @OA\Property(property="priority", type="string", enum={"low","medium","high"}, example="high"),
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
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'in:pending,done',
            'due_date' => 'nullable|date',
            'reminder_at' => 'nullable|date',
            'priority' => 'nullable|in:low,medium,high',
        ]);
        $task = $request->user()->tasks()->create($data);
        return response()->json($task, 201);
    }

    /**
     * @OA\Get(
     *     path="/api/tasks/{id}",
     *     summary="Show Details Task",
     *     tags={"Task"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, description="task_id", @OA\Schema(type="integer")),
     *     @OA\Response(response=200,description="Successful response"),
     *     @OA\Response(response=404,description="Not Found"),
     *     @OA\Response(response=401,description="Unauthenticated")
     * )
     */
    public function show(Task $task)
    {
        $this->authorizeUser($task);
        return  $task->load('category');
    }

    /**
     * @OA\Put(
     *     path="/api/tasks/{id}",
     *     summary="Update Task",
     *     tags={"Task"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\RequestBody(
     *         required=true,
     *         description="Task data",
     *         @OA\JsonContent(
     *             @OA\Property(property="title",type="string", example="Finish docs"),
     *             @OA\Property(property="description", type="string", example="Write Swagger docs for API"),
     *             @OA\Property(property="category_id", type="integer", example=1),
     *             @OA\Property(property="status", type="string", enum={"pending", "done"}, example="done"),
     *             @OA\Property(property="due_date", type="string", format="date-time", example="2025-12-01 10:00:00"),
     *             @OA\Property(property="reminder_at", type="string", format="date-time", example="2025-12-07 10:00:00"),
     *             @OA\Property(property="priority", type="string", enum={"low","medium","high"}, example="high"),
     *             @OA\Property(property="reminder_sent", type="boolean", example=0),
     *         )
     *     ),
     *     @OA\Response(response=200,description="Updated Successfully"),
     *     @OA\Response(response=401,description="Unauthenticated"),
     *     @OA\Response(response=422,description="Validation error")
     * )
     */
    public function update(Request $request, Task $task)
    {
        $this->authorizeUser($task);
        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'category_id' => 'nullable|exists:categories,id',
            'status' => 'in:pending,done',
            'due_date' => 'nullable|date',
            'reminder_at' => 'nullable|date',
            'priority' => 'nullable|in:low,medium,high',
            'reminder_sent' => 'nullable|boolean',
        ]);
        $task->update($data);

        return response()->json($task);
    }

    /**
     * @OA\Delete(
     *     path="/api/tasks/{id}",
     *     summary="Delete Task",
     *     tags={"Task"},
     *     security={{"bearerAuth":{}}},
     *     @OA\Parameter(name="id", in="path", required=true, @OA\Schema(type="integer")),
     *     @OA\Response(response=200, description="Deleted Successfully"),
     *     @OA\Response(response=401,description="Unauthenticated"),
     *     @OA\Response(response=422,description="Validation error")
     * )
     */
    public function destroy(Task $task)
    {
        $this->authorizeUser($task);
        $task->delete();
        return response()->json(['message' => 'Deleted successfully']);
    }
    private function authorizeUser(Task $task)
    {
        if ($task->user_id !== auth()->id()) {
            abort(403, 'Unauthorized');
        }
    }
}
