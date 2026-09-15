"use client"
import MenuIcon from "./ui/MenuIcon";
import MenuPanel from "./MenuPanel";
import { useState } from "react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <div className="flex flex-col w-fit h-fit items-center justify-center gap-2">
      <MenuPanel open={menuOpen} />
      <MenuIcon open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
    </div>
  )

}
