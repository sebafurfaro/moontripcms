import Input from "@/components/forms/Input"
import { PowerIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const LogOutButton = ({ logout }) => {
  return(
    <button className="ml-auto w-16 h-16 flex items-center justify-center hover:text-blue-500 transition-all duration-300" onClick={logout}>
      <PowerIcon className="h-6 w-6" />
    </button>
  )
}

const SearchForm = () => {
  return(
    <form className="relative">
      <button className="absolute top-0 bottom-0 left-2 my-auto z-20">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
      <Input
        type="text"
        name="search"
        placeholder="Buscar..."
        className="pl-8 !bg-transparent !border-0 placeholder:text-sm"
      />
    </form>
  )
}

export const TopNav = ({ handleLogout }) => {
  return(
    <div className="pl-28 pr-4 flex items-center justify-between">
      <SearchForm />
      <LogOutButton logout={handleLogout}/>
    </div>
  )
}