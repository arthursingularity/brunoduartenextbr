import { NextResponse } from "next/server";

export const runtime = "edge";

export function middleware(request) {
    const country = request.geo?.country;

    // Se não for BR, bloqueia
    if (country !== "BR") {
        const url = request.nextUrl.clone();
        url.pathname = "/blocked"; // página de bloqueio
        return NextResponse.rewrite(url);
    }

    // Se for BR, libera o acesso
    return NextResponse.next();
}

export const config = {
    matcher: "/:path*", // aplica em todas as rotas
};
