import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid"
import { Badges } from "../Badge"
import { Button } from "../Buttons/Button"

export const TablePost = ({ dataHead, dataBody, onDelete, onUpdateStatus }) => {

  return (
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
            {console.log(post.title, post._id)}
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
              <Button variant="default" label={<TrashIcon className="h-4 w-4" />} onClick={() => onDelete(post._id)} />
              <Button variant="default" label={<CheckIcon className="h-4 w-4" />} onClick={() => onUpdateStatus(post._id, post.status)} />
              <Button variant="default" label={<PencilIcon className="h-4 w-4" />} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
