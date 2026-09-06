import NoteView from "@/app/components/NoteView"
import { getNote } from "@/actions/notes/queries"
import { notFound } from "next/navigation"


export default async function NotePage({params} : {params: Promise<{id: string}> }) {
  const { id } = await params
  const noteId = Number(id)

  const note = await getNote(noteId)

  if (!note) {
    notFound()
  }

  return(

    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-12 sm:items-start">
        <NoteView note={note} isNewNote={false} />
      </main>
    </div>
  )
}
