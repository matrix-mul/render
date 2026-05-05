import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const cookie = await cookies();
    cookie.set({
      name: "session_token_anush",
      value: res.email,
      httpOnly: true,
    });
    return Response.json(
      { data: "cookie created succssefully" },
      { status: 200 },
    );
  } catch (error) {
    return new Response("It ain't here");
  }
}
