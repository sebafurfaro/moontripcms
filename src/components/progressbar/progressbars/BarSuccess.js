export const BarSuccess = ({ className, value }) => {
  return(
    <div className="progress bg-green-200">
      <div
        style={{
          width: `${value}%`
        }}
        className={`${className} progress-bar bg-green-500`}></div>
    </div>
  )
}