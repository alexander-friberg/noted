import NoteView from "@/app/components/NoteView"
import { getNoteById } from "@/actions/notes/queries"


export default async function NotePage({params} : {params: Promise<{id: string}> }) {
  const { id } = await params
  return(

    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-12 bg-white dark:bg-black sm:items-start">
        <NoteView note={await getNoteById(id)} />
      </main>
    </div>
  )
}
