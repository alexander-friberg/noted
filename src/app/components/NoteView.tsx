"use server"

import { Note } from "@/generated/prisma/client";
import NoteEditor from "./NoteEditor";
import { createNoteAsync } from "@/actions/notes/queries";
import { redirect } from "next/navigation";

export default async function NoteView({ note }: { note: Note | null }) {

  if (!note) {
    note = await createNoteAsync();
    redirect(`/note/${note.id}`);
  }


  return (
    <NoteEditor note={note} />
  )
}

