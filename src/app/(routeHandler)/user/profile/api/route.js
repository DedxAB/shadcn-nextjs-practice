import { headers, cookies } from "next/headers";

export async function GET(request) {
  const requestHeader = new Headers(request.headers);
  const headerList = headers();

  console.log(requestHeader.get("Authorization"));
  console.log(headerList.get("Authorization"));

  // cookie
  const theme = request.cookies.get("theme");
  console.log(theme);

  cookies().set("resultPerPage", "20");
  console.log(cookies().get("resultPerPage"));
  cookies().delete("theme");

  return new Response("<h1>Profile api data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
