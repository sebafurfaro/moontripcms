export const TabPanel = ({ children, isActive }) => {
  return <div className={`tab-panel ${isActive ? 'tab-panel-active block' : 'hidden'}`}>{children}</div>
}
