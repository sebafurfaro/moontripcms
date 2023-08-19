import { PowerIcon } from "@heroicons/react/24/outline"

export const TopNav = ({ handleLogout }) => {
  return(
    <div className="pl-24 pr-4">
      <button className="ml-auto w-16 h-16 flex items-center justify-center hover:text-blue-500 transition-all duration-300" onClick={handleLogout}>
        <PowerIcon className="h-6 w-6" />
      </button>
    </div>
  )
}