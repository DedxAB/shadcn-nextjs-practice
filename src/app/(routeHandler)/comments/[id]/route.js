import { comments } from "../data";

export async function GET(_req, { params }) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(req, { params }) {
  // This is one way using find
  /*
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  const { text } = await req.json();
  comment.text = text;
  return Response.json(comment);
  */
  // Another way using the index
  const { text } = await req.json();
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}
