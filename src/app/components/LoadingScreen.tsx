import Spinner from "./ui/spinner"
import { Title } from "./ui/text"

export default function LoadingScreen() {
  return(

    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-row gap-4 items-center ">
        <Spinner className="w-6 h-6" />
        <Title>Loading...</Title>
      </div>
    </div>
  )
}
