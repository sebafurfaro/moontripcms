export const Tab = ({ label, isActive, onClick }) => {
  return <button className={`tab ${isActive ? 'tab-active' : ''}`} onClick={onClick}>{label}</button>
}