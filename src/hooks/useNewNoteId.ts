import { useEffect, useState } from "react";
import { ensureNewNoteId } from "@/lib/notes";

export function useNewNoteId(enabled: boolean) {
  const [draftId, setDraftId] = useState<number | null>(null);

  useEffect(() => {
    if (enabled) {
      setDraftId(ensureNewNoteId());
    }
  }, [enabled]);

  return draftId;
}
