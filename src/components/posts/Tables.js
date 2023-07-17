import { Badges } from "../Badge";
import Button from "../button";
import { CheckIcon, PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

export const Tables = ({ dataHead, dataBody, onDelete, onUpdateStatus, className, hasStatus }) => {
  // Create an array of keys to exclude from rendering
  const excludedKeys = ['summary', 'resume'];

  // Filter out the excluded keys from the object entries
  const filteredDataBody = dataBody.map(item => {
    const filteredItem = {};
    Object.entries(item).forEach(([key, value]) => {
      if (!excludedKeys.includes(key)) {
        filteredItem[key] = value;
      }
    });
    return filteredItem;
  });

  return (
    <table style={{ borderCollapse: 'collapse' }} className={`${className} border border-solid border-slate-200 m-0 p-0 w-full`}>
      <thead>
        <tr className="border-b border-solid border-slate-200">
          <th className="w-fit text-left px-2 py-3"><input type="checkbox" name="" id="" /></th>
          {dataHead.map((item, index) => (
            <th className="text-left px-2 py-3" scope="col" key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredDataBody.map((item, index) => (
          <tr key={index} className="border-b w-fit border-solid border-slate-200 odd:bg-slate-100 dark:odd:bg-slate-600 hover:odd:bg-slate-50 dark:hover:odd:bg-slate-700/80 hover:even:bg-slate-50 dark:hover:even:bg-slate-600/80 last:border-0 cursor-pointer">
            <td className="w-[2%] px-2 py-3"><input type="checkbox" name="" id="" /></td>
            {Object.entries(item).map(([key, value], innerIndex) => {
              if (key === 'status') {
                return (
                  <td className="px-2 py-3" key={innerIndex}>
                    <Badges variant={value} title={value === 'pending' ? 'Sin publicar' : 'Publicada'} />
                  </td>
                );
              } else if (key === 'urlImage') {
                return (
                  <td className="px-2 py-3" key={innerIndex}>
                    <img src={value} alt={item.title} className="object-cover !w-16 !h-16" />
                  </td>
                );
              } else {
                return (
                  <td className="px-2 py-3" key={innerIndex}>
                    {value}
                  </td>
                );
              }
            })}
            {onDelete && onUpdateStatus && (
              <td className="px-2 py-3 flex items-center space-x-2" width="20%">
                <Button variant="info" label={<CheckIcon className="h-4 w-4" />} onClick={() => onUpdateStatus(item._id, item.status)} />
                <Button variant="info" label={<TrashIcon className="h-4 w-4" />} onClick={() => onDelete(item._id)} />
                <Button variant="info" label={<PencilIcon className="h-4 w-4" />} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
