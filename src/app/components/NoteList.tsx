"use client"
import { Note } from "@/generated/prisma/browser"
import { Footer, Text} from "./ui/text";
import Link from "next/link";

export function NoteList({userNotes, user} : {userNotes: Note[]; user: string}) {

  return(
    <div className="flex flex-col items-start py-4 px-1 gap-2 w-full overflow-y-auto ">
      {userNotes.map((note, i) => (
      <Link href={`note/${note.id}`}
        className="flex w-full h-full"
        key={i}>
        <div className="flex flex-row w-full h-fit items-center text-nowrap gap-2 p-2 justify-between border-2 border-foreground transition duration-150 hover:-translate-x-1">
          <div className="flex gap-4 items-center">
            <Text>{note.title}</Text>
            <Footer>by {user}</Footer>
          </div>
          <Footer>{note.createdAt.toLocaleDateString()}</Footer>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default NoteList
