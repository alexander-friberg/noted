import { useEffect, useRef } from "react"
import { Note } from "@/generated/prisma/client"
import { createNote, updateNote } from "../actions/notes/queries"

export function useNoteSync(
  note: Note,
  content: string,
  isNewNote: boolean,
  title: string,
) {
  const titleRef = useRef(title)
  const contentRef = useRef(content)
  titleRef.current = title
  contentRef.current = content

  useEffect(() => {
    return () => {
      if (isNewNote) {
        const hasContent = titleRef.current.trim() !== "" || contentRef.current.trim() !== ""
        if (!hasContent) return
        createNote(titleRef.current, contentRef.current)
      } else {
        updateNote(note.id, titleRef.current, contentRef.current)
      }
    }
  }, [note.id])
}
