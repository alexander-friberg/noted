
import NoteView from "@/app/components/NoteView"

export default async function NewNotePage() {

  return(

    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-12 sm:items-start">
        <NoteView note={null} isNewNote={true} />
      </main>
    </div>
  )
}
