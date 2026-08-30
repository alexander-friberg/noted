import { Months } from "./enums";
import NoteList from "./components/NoteList";
import { getUserWithNotes, UserWithNotes } from "@/actions/user-actions";


export default async function Home() {
  const date = new Date()
  const user: UserWithNotes = await getUserWithNotes()
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start py-12 px-12 bg-white dark:bg-black sm:items-start">
        <div className=" flex flex-col justify-start border-b-2 border-b-white pb-4">
          <h1 className="font-salma text-4xl ">NOTED</h1>
          <span className="text-gray-300">{date.getDate()} {Object.values(Months).at(date.getMonth())} {date.getFullYear()}</span>
        </div>
        <NoteList userNotes={user.notes} user={user.name}/>
      </main>
    </div>
  );
}
