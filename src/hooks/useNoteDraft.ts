import { Note } from "@/generated/prisma/client"
import { loadDraft, saveDraft } from "@/lib/notes"
import { useEffect, useState } from "react"

export function useNoteDraft(note: Note) {
    const [title, setTitle] = useState(note.title)
    const [content, setContent] = useState(note.content)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const draft = loadDraft(note.id)

        if (draft) {
            setTitle(draft.title)
            setContent(draft.content)
        }

        setLoaded(true)
    }, [note.id])

    useEffect(() => {
        if (!loaded) return

        saveDraft(note, title, content)
    }, [note, title, content, loaded])

    return {
        title,
        content,
        setTitle,
        setContent,
    }
}
