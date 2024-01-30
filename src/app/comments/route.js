import { comments } from "./data";

export async function GET(_req) {
  return Response.json(comments);
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