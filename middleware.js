import { NextResponse } from "next/server";

export const runtime = "edge";

export function middleware(request) {
    // A forma 100% confiável na Vercel:
    const country = request.headers.get("x-vercel-ip-country") || "UNKNOWN";

    console.log("Country header:", country);

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
