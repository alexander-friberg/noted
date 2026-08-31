import { Months } from "@/app/enums"

export function formatDate(date: Date): string {
  return `${date.getDate()} ${Object.values(Months).at(date.getMonth())} ${date.getFullYear()}`
}
