"use client"
import { Note } from "@/generated/prisma/browser"
import { Footer, Text} from "./ui/text";

export function NoteList({userNotes, user} : {userNotes: Note[]; user: string}) {

  return(
    <div className="flex flex-col items-start py-4 px-1 gap-2 w-full ">
      {userNotes.map((note, _) => (
        <div className="flex flex-row w-full h-fit items-center text-nowrap gap-2 p-2 justify-between border-2 border-foreground transition duration-150 hover:-translate-x-1">
          <div className="flex gap-2 items-center">
            <Text>{note.title}</Text>
            <Footer>by {user}</Footer>
          </div>
          <Footer>{note.createdAt.toLocaleDateString()}</Footer>
        </div>
      ))}
    </div>
  )

}

export default NoteList
