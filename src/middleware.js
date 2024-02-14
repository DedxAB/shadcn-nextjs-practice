import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  return response;

  //   if (request.nextUrl.pathname === "/time") {
  //     return NextResponse.redirect(new URL("/", request.url));
  //     return NextResponse.rewrite(new URL("/", request.url));
  //   }
  //   return NextResponse.redirect(new URL("/", request.url));
}
// export const config = {
//   matcher: "/time",
// };