import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma"

export async function getUserWithNotes(inputName: string){
  const user = await prisma.user.findFirst({
    where: { 
      name: inputName 
    },
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
