import { prisma } from "@/lib/prisma";

export async function getNoteById(id: string) {
  const noteId = parseInt(id, 10)
  const note = await prisma.note.findUnique({where: {id: noteId}})
  if (note === null) {
    throw new Error("No note found.")
  }

  return note
}
