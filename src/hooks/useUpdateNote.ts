import { updateNoteAsync } from "@/actions/notes/queries";

export function useUpdateNote(noteId: number, cachedTitle: string, cachedContent: string): void {
  console.log("cachedTitle: " + cachedTitle);
  console.log("cachedContent: " + cachedContent);
  updateNoteAsync(noteId, cachedTitle, cachedContent);
}
