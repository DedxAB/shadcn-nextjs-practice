import { comments } from "../data";

export async function GET(_req, { params }) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

// Update
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

// Delete
export async function DELETE(_req, { params }) {
  const { id } = params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  const deletedComment = comments.splice(index, 1);
  // return Response.json(deletedComment);
  // return Response.json({ message: "Comment deleted successfully" });
  return new Response(JSON.stringify(deletedComment), {
    headers: {
      "content-type": "application/json",
    },
    status: 200,
  });
}
