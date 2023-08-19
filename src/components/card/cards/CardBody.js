export const CardBody = ({ title, summary }) => {
  return(
    <div className="flex flex-col space-y-3">
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="font-light text-sm">{summary}</p>
    </div>
  )
}