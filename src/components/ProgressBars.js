export const ProgressBars = (props) => {

  const { variant, value } = props;

  switch(variant) {
    case 'danger':
      return(
        <div className="relative flex rounded-full bg-red-300 w-full h-2">
          <div style={{
            width: `${value}%`
          }} className={`absolute top-0 left-0 bottom-0 my-auto rounded-full bg-red-500 h-1.5`}></div>
        </div>
      )
    case 'success':
      return(
        <div className="relative flex rounded-full bg-green-300 w-full h-2">
          <div style={{
            width: `${value}%`
          }} className={`absolute top-0 left-0 bottom-0 my-auto rounded-full bg-green-500 h-1.5`}></div>
        </div>
      )
    case 'warning':
      return(
        <div className="relative flex rounded-full bg-yellow-300 w-full h-2">
          <div style={{
            width: `${value}%`
          }} className={`absolute top-0 left-0 bottom-0 my-auto rounded-full bg-yellow-500 h-1.5`}></div>
        </div>
      )
    case 'info':
      return(
        <div className="relative flex rounded-full bg-blue-300 w-full h-2">
          <div style={{
            width: `${value}%`
          }} className={`absolute top-0 left-0 bottom-0 my-auto rounded-full bg-blue-500 h-1.5`}></div>
        </div>
      )
  }

}