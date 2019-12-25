<?php

namespace App\Http\Controllers;

use App\Model\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     *  @OA\Get(
     *        tags={"Post"},
     *        path="/api/posts",
     *        description="List post",
     *        @OA\Response(response="default", description="list post")
     *     )
     */
    public function index(Request $request)
    {
        return Post::with('user')->paginate($request->input('limit', 20));
    }
}
