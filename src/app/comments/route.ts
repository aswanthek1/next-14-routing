import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query')
    const filterdComments = query ? comments.filter((item) => item.text.includes(query)) : comments
    return Response.json(filterdComments);
}

export async function Post(request: Request) {
    const comment = await request.json();
    const commentObj = {
        id: comments.length + 1,
        text: comment?.text
    }
    comments.push(commentObj)
    return new Response(JSON.stringify(commentObj), {
        headers: {
            "Content-Type": 'application/json',
        },
        status: 201
    })
}