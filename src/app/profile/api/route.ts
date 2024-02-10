export const dynamic = "force-dynamic"

import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    console.log(requestHeaders.get("Authorization"))

    // or

    const headersList = headers()
    console.log(headersList.get('Authorization'))

    const theme1 = request.cookies.get("theme")
    // or
    const theme2 = cookies().get('theme');


    return new Response("<h1>Profile api data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}