import { Bars3Icon } from "@heroicons/react/24/solid"
import { Button } from "../Buttons/Button"

export const Header = ({ toggleSidebar, isSidebarOpen }) => {

  return(
    <header className="header absolute top-0 left-0 z-[50] bg-white w-full flex items-center shadow-md">
      <Button
        className="bg-transparent border-none"
        variant="default"
        label={<Bars3Icon className="h-6 w-6 text-slate-800 " />}
        onClick={toggleSidebar} />
      <h1 className="text-slate-800 text-2xl font-bold uppercase">Moontrip</h1>
    </header>
  )
}