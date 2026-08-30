import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma"

export async function getUserWithNotes(){
  //TODO: implement parameter to which user to get
  const user = await prisma.user.findFirst({
    include: {
      notes: true
    }
  })
  if (user === null) {
    throw new Error("No user found.")
  }

  return user
}

export type UserWithNotes = Awaited<ReturnType<typeof getUserWithNotes>>
