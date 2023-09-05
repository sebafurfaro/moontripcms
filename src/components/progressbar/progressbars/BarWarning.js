export const BarWarning = ({ className, value }) => {
  return(
    <div className="progress bg-orange-200">
      <div
        style={{
          width: `${value}%`
        }}
        className={`${className} progress-bar bg-orange-500`}></div>
    </div>
  )
}