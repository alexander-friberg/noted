import { Note } from "@/generated/prisma/client"

const NEW_NOTE_ID_KEY = "new-note-draft-id"

export function loadDraft(noteId: number): Note | null {
    const storedDraft = sessionStorage.getItem(`note-draft-${noteId}`)

    if (!storedDraft) {
        return null
    }

    return JSON.parse(storedDraft)
}

export function saveDraft(
    note: Note,
    title: string | null,
    content: string | null) {
    const draft = {
        ...note,
        title,
        content,
    }

    sessionStorage.setItem(
        `note-draft-${note.id}`,
        JSON.stringify(draft)
    )
}

export function resetNewNoteId(): number {
    const id = Date.now()
    sessionStorage.setItem(NEW_NOTE_ID_KEY, String(id))
    return id
}

export function ensureNewNoteId(): number {
    const existing = sessionStorage.getItem(NEW_NOTE_ID_KEY)
    if (existing) return Number(existing)
    return resetNewNoteId()
}

export function clearNewNoteId() {
    sessionStorage.removeItem(NEW_NOTE_ID_KEY)
}


export function createDraftNote(newId: number): Note {
    return {
        id: newId,
        title: "",
        content: "",
        createdAt: new Date(),
        modifiedAt: new Date(),
        authorId: 0,
    }
}
