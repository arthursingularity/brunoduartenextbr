import { NextResponse } from "next/server";

export function middleware(request) {
  const country = request.geo?.country || "UNKNOWN";

  // Permite acesso para os EUA
  if (country === "BR") {
    return NextResponse.next();
  }

  // Redireciona para uma página de bloqueio
  const url = request.nextUrl.clone();
  url.pathname = "/blocked";
  return NextResponse.rewrite(url);

  // Se preferir bloquear com erro 403:
  // return new NextResponse("Acesso bloqueado", { status: 403 });
}

export const config = {
  matcher: "/:path*", // aplica em todas as rotas
};