"use server"

import { cookies } from "next/headers"

export async function getSession() {
  const c = await cookies()
  return c.has("user")
}