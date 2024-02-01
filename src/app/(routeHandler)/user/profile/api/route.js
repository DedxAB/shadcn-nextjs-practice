export async function GET(request) {
  const requestHeader = new Headers(request.headers);
  const token = requestHeader.get("Authorization");
  console.log(token);
  return new Response(`<h1>Profile Api data</h1>`, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
