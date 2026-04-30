"use server";

import { cookies } from "next/headers";

export async function logoutUser() {
  try {
    const cookie = await cookies();
    cookie.delete("session_token_anush")
    return true;
  } catch (err) {
    console.error(err)
    return false
  }
}
