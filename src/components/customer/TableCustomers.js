import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid"
import { Avatar } from "../Avatar"

export const TableCustomers = ({ dataHead, dataBody, onDelete }) => {

  return(
    <table className="table">
      <thead>
        <tr className="thead-tr">
          {dataHead.map((itemHead, index) => (
            <th className="thead-th" key={index}>{itemHead}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataBody.map((customer, index) => (
          <tr className="tbody-tr" key={index}>
            <td className="tbody-td">
              <div className="flex items-center space-x-2">
                <Avatar variant="circle" name={customer.name} url={customer.avatar} />
                <span className="font-semibold ml-2">{customer.name}</span>
              </div>
            </td>
            <td className="tbody-td">{customer.phone}</td>
            <td className="tbody-td">{customer.email}</td>
            <td className="tbody-td">{customer.username}</td>
            <td className="tbody-td space-x-2">
              <button className="btn btn-default" onClick={() => onDelete(post._id)}><TrashIcon className="h-4 w-4" /></button>
              <button className="btn btn-default"><PencilIcon className="h-4 w-4" /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}