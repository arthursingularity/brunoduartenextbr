export function GET(request) {
    return Response.json({
      geo: request.headers.get("x-vercel-ip-country"),
      ip: request.headers.get("x-real-ip"),
      forwarded: request.headers.get("x-forwarded-for"),
    });
  }