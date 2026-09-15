export function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="font-salma text-4xl text-foreground text-nowrap">{children}</h1>
}

export function EditTitle({ value, onChange}: {
  value: string | null
  onChange: (v:string) => void
}) {
  return <input value={value} onChange={(e) => onChange(e.target.value)}className="font-salma text-4xl text-foreground text-nowrap"></input>
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="font-salma text-2xl text-foreground">{children}</p>
}

export function EditParagraph({ value, onChange }: { 
  value: string  | null
  onChange: (v:string) => void
}) {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} className="font-salma text-2xl text-foreground h-full w-full"></textarea>
}

export function Footer({ children }: { children: React.ReactNode }) {
  return <span className="font-salma text-sm text-foreground/60 text-nowrap">{children}</span>
}

export function Text({ children }: { children: React.ReactNode }) {
  return <span className="font-salma text-base text-foreground text-nowrap">{children}</span>
}

export function Meta({ children }: { children: React.ReactNode }) {
  return <span className="font-salma text-base text-foreground/60 text-nowrap">{children}</span>
}
