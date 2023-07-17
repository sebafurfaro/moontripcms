export const SideNavPanel = ({ children, isActive }) => {
  return <div className={`pt-4 px-6 ${isActive ? 'block' : 'hidden'}`}>{children}</div>
}