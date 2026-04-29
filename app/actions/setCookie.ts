"use server";

import { cookies } from "next/headers";

export async function loginUser(token: string) {
  try {
    const cookie = await cookies();
    cookie.set({
      name: "session_token_anush",
      value: token,
      httpOnly: true,
      path: "/",
    });
    return true;
  } catch (err) {
    console.error(err)
    return false
  }
}
