"use client"

import { useRouter } from "next/navigation"
import { resetNewNoteId } from "@/lib/notes"

export function useMenuContexts(): MenuContext[] {
  const router = useRouter()

  return [
    {
      name: "New",
      action: () => {
        router.push("/note")
      },
    },
    {
      name: "Search",
      action: () => router.push("/note/search"),
    },
  ]
}
