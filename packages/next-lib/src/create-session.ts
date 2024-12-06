"use server"

import { cookies } from "next/headers"

export async function createSession() {
  const c = await cookies()
  c.set("user", "")
}