export const BarInfo = ({ className, value }) => {
  return(
    <div className="progress bg-blue-200">
      <div
        style={{
          width: `${value}%`
        }}
        className={`${className} progress-bar bg-blue-500`}></div>
    </div>
  )
}