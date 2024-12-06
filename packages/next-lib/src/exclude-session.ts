"use server"

import { cookies } from "next/headers"

export async function excludeSession() {
  const c = await cookies()
  c.delete("user")
}