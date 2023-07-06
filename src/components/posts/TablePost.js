import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid"
import { Badges } from "../Badge"
import { Button } from "../Buttons/Button"

export const TablePost = ({ dataHead, dataBody, onDelete, onUpdateStatus }) => {

  console.log({dataBody})
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
        {dataBody.map((post, index) => (
          <tr className="tbody-tr" key={index}>
            <td className="tbody-td">
              <img
                src={post.urlImage}
                alt={post.title}
                className="object-cover !w-16 !h-16" />
            </td>
            <td className="tbody-td">{post.title}</td>
            <td className="tbody-td">
              <Badges variant={post.status} />
            </td>
            <td className="tbody-td space-x-2">
              <button className="btn btn-default" onClick={() => onDelete(post._id)}><TrashIcon className="h-4 w-4" /></button>
              <button className="btn btn-default" onClick={() => onUpdateStatus(post._id, "newStatus")}><CheckIcon className="h-4 w-4" /></button>
              <button className="btn btn-default"><PencilIcon className="h-4 w-4" /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}