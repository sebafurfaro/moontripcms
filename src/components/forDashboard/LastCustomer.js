import { useFetch } from "@/hooks/useFetch"
import { Cards } from "../Cards"
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"

export const LastCustomer = () => {

  // const { data, refetch } = useFetch('/api/customers')
  // const customers = data.data

  // const valuesArray = Object.values(customers)
  // const lastItem = valuesArray[valuesArray.length - 1]

  // if(!lastItem) return null;

  return(
    <div className="rounded-md shadow-lg p-4 bg-gradient-to-r from-green-500 to-yellow-200 max-w-sm">
      {/* <div className="grid grid-cols-3 items-end">
        <div className="col-span-2">
          <h2 className="font-semibold text-slate-700">Bienvenida {lastItem.name}!</h2>
          <h4 className="text-slate-700">Necesitas ponerte en contacto?</h4>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-3">
              <EnvelopeIcon  className="h-4 w-4 text-white" />
              {lastItem.email}
            </div>
            <div className="flex space-x-3">
              <PhoneIcon  className="h-4 w-4 text-white" />
              {lastItem.phone}
            </div>
          </div>
        </div>
        <img
          className="w-full max-w-[100px] object-cover rounded-full"
          src={lastItem.avatar}
          alt={lastItem.name} />
      </div> */}
    </div>
  )
}