//import { Button } from "./button/Button"

export const Cards = ({ image, title, sintesis }) => {
  return(
    <div className="bg-white rounded-md shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-24 object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <h2 className="font-semibold">{title}</h2>
        <p>{sintesis}</p>
        {/* <Button variant="info" label="Ver más" /> */}
      </div>
    </div>
  )
}