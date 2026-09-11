import { Note } from "@/generated/prisma/client";
import { EditParagraph, EditTitle, Meta } from "./ui/text";
import { useNoteDraft } from "@/hooks/useNoteDraft";
import { useNoteSync } from "@/hooks/useNoteSync";
import { formatDate } from "@/lib/date";

export default function NoteEditor({ note, isNewNote }: {
  note: Note
  isNewNote: boolean
}) {

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
