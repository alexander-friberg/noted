"use client"
import { useEffect } from "react"
import { setUserCookies } from "@/actions/auth-actions"

export default function LoginBootstrap({ userId }: { userId: number }) {
  useEffect(() => {
    setUserCookies(userId)
  }, [userId])
  return null
}
