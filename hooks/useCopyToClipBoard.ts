import { useCallback, useState } from "react";

export default function useCopyToClipBoard(){
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback( async (text: string) =>{
    try{
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      //Rest copied status
      setTimeout(() => setIsCopied(false), 1500)
    }catch(errors){
      console.log("faild to copy", errors)
      setIsCopied(false)
    }
  }, [])

  return [isCopied, copy] as const;
}