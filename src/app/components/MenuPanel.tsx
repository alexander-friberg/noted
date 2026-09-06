import MenuItem from "./ui/MenuItem";

export default function MenuPanel({open} : {open: boolean}) {
  
  const searchNotes: MenuContext = {name: "Search", route: "note/search"}
  const newNote: MenuContext = {name: "New", route: "note/new"}
  const contexts: MenuContext[] = [newNote, searchNotes]

  return(
    <div className={`flex flex-col justify-center transition-all gap-1 duration-300 ease-out 
      ${open ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0 pointer-events-none"}`}>

      {contexts.map((con) => (
        <MenuItem key={con.route} context={con} />
      ))}
    </div>
  )
}
