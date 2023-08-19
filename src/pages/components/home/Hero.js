import { useState } from "react"
import Link from "next/link"
import { CheckCircleIcon, ChevronRightIcon, Square2StackIcon } from "@heroicons/react/24/outline"

export const Hero = () => {

  const [ isTextCopied, setIsTextCopied ] = useState(false)

  const handleCopyClipboard = () => {
    const codeEl = document.querySelector('[data-code]')
    if (codeEl) {
      const codeToCopy = codeEl.textContent
      navigator.clipboard
        .writeText(codeToCopy)
        .then(setIsTextCopied(true))
        .catch((error) => console.error(error))
    }
  }

  return(
    <section className="flex items-center justify-center py-28 text-white">
      <div className="flex flex-col items-center text-center mx-auto max-w-lg">
        <h1 className="text-7xl tracking-wide font-light mb-8">Build the web you want</h1>
        <h6 className="text-xl mb-4">Moontrip is the all-in-one CMS for all the technologies. Pull your content from anywhere and deploy everywhere, al powered by your favorite UI components and libraries</h6>
        <div className="flex items-center space-x-8">
          <Link className="rounded-full font-medium bg-white text-violet-600 px-6 py-2" href="#">Get Started</Link>
          <div className="flex items-center bg-zinc-900 pl-3">
            {isTextCopied ? <CheckCircleIcon className="w-6 text-green-500" /> :  <ChevronRightIcon className="w-6" />}
            <code data-code className="ml-2 flex-1 text-left leading-none">npm create moontrip@latest</code>
            <button onClick={handleCopyClipboard} className="block p-4 transition hover:scale-110 active:scale-100 active:transition-none">
              <Square2StackIcon className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}