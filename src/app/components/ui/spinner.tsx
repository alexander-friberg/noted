import SpinnerIcon from "../../assets/icons/Spin.svg"
import Image from "next/image"

export default function Spinner({className} : {
  className?: string
}) {
  return (
    <Image src={SpinnerIcon} alt="Loading" className={`animate-spin ${className}`}/>
  )
}
