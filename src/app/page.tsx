import NoteList from "./components/NoteList";
import { getUserWithNotes, UserWithNotes } from "@/actions/user-actions";
import { Title, Meta } from "./components/ui/text";
import { formatDate } from "@/lib/date";
import Menu from "./components/Menu";
import { cookies } from "next/headers"
import LoginBootstrap from "./components/LoginBootstrap"

export default async function Home() {
  const date = new Date()
  const user: UserWithNotes = await getUserWithNotes('dev') 
  const cookieStore = await cookies()
  const isLoggedIn = Boolean(cookieStore.get('userId'))

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background">
      {!isLoggedIn && <LoginBootstrap userId={user.id} />}
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-12 sm:items-start">
        <div className=" flex flex-col justify-start border-b-2 border-foreground pb-4">
          <Title>NOTED</Title>
          <Meta>{user.name} | {formatDate(date)}</Meta>
        </div>
        <NoteList userNotes={user.notes} user={user.name}/>
        <div className="flex flex-col w-full h-fit  items-end ">
          <Menu />
        </div>
      </main>
    </div>
  );
}

