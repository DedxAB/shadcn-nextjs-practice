import { NextResponse } from "next/server";

export async function GET(_req) {
  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
  });
}

// export async function GET(_req, res) {
//   res.setHeader("Set-Cookie", `time=${new Date().toLocaleTimeString()}`);
//   res.status(200).end();
//   return res;
// }
