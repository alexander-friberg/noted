"use client"
import { Note } from "@/generated/prisma/client";
import { EditParagraph, EditTitle, Meta } from "./ui/text";
import { formatDate } from "@/lib/date";
import { useEffect, useRef, useState } from "react";
import { useUpdateNote } from "@/hooks/useUpdateNote";

export default function NoteEditor({ note }: {
  note: Note
}) {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const cachedTitle = useRef(note.title);
  const cachedContent = useRef(note.content);

  useEffect(() => {
    console.log("hej");
    const thing = setTimeout(() => {
      if (!cachedTitle.current || !cachedContent.current || !title || !content) return;
      cachedTitle.current = title;
      cachedContent.current = content;
      useUpdateNote(note.id, title, content);
      console.log("ran useUpdateNote hook")
    }, 800);

    return () => clearTimeout(thing);
  }, [title, content])

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
