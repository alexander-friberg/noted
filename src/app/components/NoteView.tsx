"use client"

import { Note } from "@/generated/prisma/client";
import { createDraftNote } from "@/lib/notes";
import NoteEditor from "./NoteEditor";
import { useNewNoteId } from "@/hooks/useNewNoteId";

export default function NoteView({ note, isNewNote }: { note: Note | null, isNewNote: boolean }) {
    const draftId = useNewNoteId(!note)

    if (!note && draftId === null) {
        return null
    }

    const activeNote = note ?? createDraftNote(draftId!)

    return (
        <NoteEditor note={activeNote} isNewNote={isNewNote} />
    )
}

