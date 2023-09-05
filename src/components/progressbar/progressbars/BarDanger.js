export const BarDanger = ({ className, value }) => {
  return(
    <div className="progress bg-red-200">
      <div
        style={{
          width: `${value}%`
        }}
        className={`${className} progress-bar bg-red-500`}></div>
    </div>
  )
}