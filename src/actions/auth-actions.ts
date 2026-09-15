"use server"
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function setUserCookies(userId: number) {
  const cookieStore = await cookies()
  cookieStore.set('userId', `${userId}`, {httpOnly: true})
}

export async function getCurrentUser() {
  const cookieStore = await cookies()
  const userId = cookieStore.get("userId")?.value
  if (!userId) {
    throw new Error("Not logged in")
  }
  return prisma.user.findUniqueOrThrow({
    where: { id: Number(userId) },
  })
}
