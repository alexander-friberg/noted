"use server"

import { prisma } from "@/lib/prisma";
import setDefaultTitle from "@/lib/utils/setDefaultTitle";
import { getCurrentUser } from "../auth-actions";

export async function getNote(id: number) {
  return await prisma.note.findUnique({ where: { id } })
}

export async function updateNoteAsync(
  id: number,
  title: string = setDefaultTitle(),
  content?: string) {

  return await prisma.note.update({
    where: { id },
    data: {
      title,
      content,
    },
  })
}

export async function createNoteAsync(
  title: string = setDefaultTitle(),
  content?: string) {
  const user = await getCurrentUser()
  return await prisma.note.create({
    data: {
      authorId: user.id,
      title,
      content,
    },
  })
}

export async function getNotesAsync(authorId: number) {
  return await prisma.note.findMany({
    where: {
      authorId,
    },
    orderBy: {
      modifiedAt: "desc",
    },
  })
}

export async function deleteNoteAsync(id: number) {
  return await prisma.note.delete({
    where: {
      id,
    },
  })
}
