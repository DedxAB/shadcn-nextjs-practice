import { comments } from "./data";

// # Handling with searchParams in Next JS
export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

// ## we cannot do this in Next JS
// export async function GET() {
//   return {
//     body: JSON.stringify(comments),
//     headers: { "Content-Type": "application/json" },
//     status: 200,
//   };
// }

// ## We cannot do this in Next JS
// export async function GET(req, res) {
//   return res.status(200).json(comments);
// }

export async function POST(req) {
  const { text } = await req.json();
  const newComment = {
    id: comments.length + 1,
    text,
  };
  comments.push(newComment);
  // return Response.json(newComment);

  // or do below

  return new Response(JSON.stringify(newComment), {
    headers: {
      "content-type": "application/json",
    },
    status: 201,
  });
}