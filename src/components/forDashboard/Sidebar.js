import { Accordion } from "../Accordion/Accordion"
import { Management } from "@/data/Management"
import { UserOptions } from "@/data/UserOptions"


export const Sidebar = ({ className }) => {


  return(
    <div className={`${className} text-white flex flex-col items-start pb-4 px-6 bg-[#2B3445]`}>
      <h2 className="my-3 uppercase">Admin</h2>
      <Accordion dropdownItems={UserOptions} />
      <h2 className="my-3 uppercase border-t border-solid border-slate-600 pt-3 w-full">Vendor</h2>
      <Accordion dropdownItems={Management} />
    </div>
  )

}