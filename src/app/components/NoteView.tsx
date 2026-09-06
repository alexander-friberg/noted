"use client"

import { Note } from "@/generated/prisma/client";
import { EditParagraph, Meta, EditTitle } from "./ui/text"
import { formatDate } from "@/lib/date";
import { useEffect, useState } from "react";
import { loadDraft, saveDraft } from "@/lib/notes";
import { useNoteDraft } from "@/hooks/useNoteDraft";
import { useNoteSync } from "@/hooks/useNoteSync";


export default function NoteView({ note, isNewNote }: { note: Note | null, isNewNote: boolean }) {
    if (!note) {
        note = createDraftNote()
    }

    const {
        title,
        content,
        setTitle,
        setContent,
    } = useNoteDraft(note)

    useNoteSync(note, content, isNewNote, title)

    return (
        <div className="flex flex-col w-full h-full gap-4">
            <div className="flex flex-row w-full h-[20vh] items-center justify-between border-b border-b-foreground/60">
                <EditTitle value={title} onChange={setTitle} />
                <Meta>{formatDate(note.createdAt)}</Meta>
            </div>

            <div className="flex h-full w-full overflow-y-scroll">
                <EditParagraph value={content} onChange={setContent} />
            </div>
        </div>
    )
}

function createDraftNote(): Note {
  return {
    id: 0,
    title: "",
    content: "",
    createdAt: new Date(),
    modifiedAt: new Date(),
    authorId: 0,
  }
}
