"use client"

import { useRouter } from "next/navigation"
import { resetNewNoteId } from "@/lib/notes"

export function useMenuContexts(): MenuContext[] {
  const router = useRouter()

  return [
    {
      name: "New",
      action: () => {
        resetNewNoteId()
        router.push("/note/new")
      },
    },
    {
      name: "Search",
      action: () => router.push("/note/search"),
    },
  ]
}
