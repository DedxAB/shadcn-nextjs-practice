import { comments } from "../data";

export async function GET(_req, { params }) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}
