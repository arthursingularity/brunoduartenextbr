import { NextResponse } from "next/server";

export const runtime = "edge";

export function middleware(request) {
    console.log("Geo detectado:", request.geo);
    console.log("País detectado:", request.geo?.country);
    
    const country = request.geo?.country || "BR";

    if (country === "BR") {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = "/blocked";
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: "/:path*",
};
