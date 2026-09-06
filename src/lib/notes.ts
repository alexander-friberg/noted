import { Note } from "@/generated/prisma/client"

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
