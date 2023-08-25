import Tooltip from "@/components/Tooltip"

export const SideNavTab = ({ title, label, isActive, onClick }) => {
  return(
    <Tooltip text={title}>
      <button
        className={`w-16 h-16 flex items-center justify-center transition-all duration-300 ease-in-out ${isActive ? 'text-slate-900' : 'text-slate-900/20'}`}
        onClick={onClick}>
          {label}
      </button>
    </Tooltip>
  )
}