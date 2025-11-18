<?php

namespace App\Http\Controllers;

/**
 * @OA\Info(
 *     title="TodoList API",
 *     version="1.1.0",
 *     description="Documention API For Backend TodoList (Laravel + Sanctum)"
 * ),
 * @OA\SecurityScheme(
 *     securityScheme="bearerAuth",
 *     type="http",
 *     scheme="bearer",
 *     bearerFormat="JWT"
 * )
 */
abstract class Controller
{
    //
}
