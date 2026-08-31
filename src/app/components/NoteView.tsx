import { Note } from "@/generated/prisma/client";
import { Paragraph, Title, Meta } from "./ui/text"
import { formatDate } from "@/lib/date";

export default async function NoteView({note} : {note: Note}) {

  return(
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-row w-full h-[20vh] items-center justify-between border-b border-b-foreground/60">
        <Title>{note.title}</Title>
        <Meta>{formatDate(note.createdAt)}</Meta>
      </div>
      <div className="flex h-full w-full overflow-y-scroll">
        <Paragraph>{note.content}</Paragraph>
      </div>
    </div>
  )
}
