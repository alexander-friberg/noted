import SpinnerIcon from "../../assets/icons/Dots.svg"

export default function Spinner({scale} : {
  scale?: string
}) {
  return (
    <SpinnerIcon className={`animate-spin text-foreground/60 ${scale}`}/>
  )
}
