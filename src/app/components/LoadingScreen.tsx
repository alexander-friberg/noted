import Spinner from "./ui/spinner"

export default function LoadingScreen() {
  return(

    <div className="flex h-screen items-center justify-center bg-background">
      <div className="flex flex-row gap-4 items-center ">
        <Spinner scale="scale-40" />
      </div>
    </div>
  )
}
