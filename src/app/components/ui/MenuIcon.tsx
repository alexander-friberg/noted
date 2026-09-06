"use client"


interface MenuIconProps {
  open: boolean
  onToggle: () => void
  className?: string
}

export default function MenuIcon({ open, onToggle, className = "" }: MenuIconProps) {

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-label="Toggle menu"
      onClick={onToggle}
      className={className}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        {/* left vertical */}
        <line
          x1="6" y1="6" x2="6" y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transform-fill transition-transform duration-300 ease-out ${
            open ? "translate-1.5 rotate-90" : "translate-y-0 rotate-0"
          }`}
        />
        {/* diagonal */}
        <line
          x1="6" y1="6" x2="18" y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transform-fill transition-transform duration-300 ease-out ${
            open ? "-rotate-45" : "rotate-0"
          }`}
        />
        {/* right vertical */}
        <line
          x1="18" y1="6" x2="18" y2="18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`origin-center transform-fill transition-transform duration-300 ease-out ${
            open ? "-translate-1.5 rotate-90" : "translate-y-0 rotate-0"
          }`}
        />
      </svg>
    </button>
  )
}
