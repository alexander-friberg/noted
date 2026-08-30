"use client"
import { prisma } from "@/lib/prisma"
import { useState } from "react"
import { Note } from "@/generated/prisma/browser"


export function NoteList({userNotes, user} : {userNotes: Note[]; user: string}) {
  const [notes, setNotes] = useState<Note[]>(userNotes)

  return(
    <div className="flex flex-col items-start py-4 px-1 gap-2 w-full ">
      {notes.map((note, i) => (
        <div className="flex flex-row w-full h-fit font-salma 
          items-center text-nowrap gap-2 p-2 justify-between 
          border-2 border-white transition duration-150 hover:-translate-x-1">
          <div className="flex gap-2 items-center">
            <span>{note.title}</span>
            <span className="text-gray-400 text-sm">by {user}</span>
          </div>
          <span className="text-gray-400 text-sm">{note.createdAt.toLocaleDateString()}</span>
        </div>
      ))}
    </div>
  )

}

export default NoteList
