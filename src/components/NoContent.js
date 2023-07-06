import { NoSymbolIcon } from "@heroicons/react/24/solid"

export const NoContent = ({ name }) => {
  return(
    <div className="flex flex-col items-center space-y-3">
      <NoSymbolIcon className="h-20 w-20 text-red-600" />
      <h2 className="font-bold uppercase text-2xl">No hay datos disponibles</h2>
      <span className="text-base">No se encontraron {name} disponibles</span>
    </div>
  )
}