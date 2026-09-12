import { useEffect, useRef } from "react";

export default function useDebounce(func: () => void, deps: any[], time: number) {
  const timer = useRef(setTimeout(() => { }, time))

  useEffect(() => {
    console.log("useDebounce called")
    timer.current =
      setTimeout(() => {
        func()
      }, time)
    return () => clearTimeout(timer.current)
  }, [...deps]
  )
}
