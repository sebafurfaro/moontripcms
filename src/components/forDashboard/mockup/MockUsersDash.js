import { Avatar } from "@/components/Avatar"
import { ProgressBars } from "@/components/ProgressBars"
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid"

export const MockUsersDash = () => {

  const users = [
    {avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'John Doe', country: 'Bulgaria', total: 20, publish: 4, pending: 16 },
    {avatar: 'https://www.w3schools.com/w3images/avatar5.png', name: 'Pablo Marmol', country: 'Argentina', total: 35, publish: 22, pending: 13 },
    {avatar: 'https://www.w3schools.com/w3images/avatar3.png', name: 'Dick Wolf', country: 'Uruguay', total: 20, publish: 8, pending: 12 }
  ]

  return(
    <>
    {users.map((user, index) => (
        <div key={index} className={`col-span-2 col-start-${index * 2 + 1}`}>
          <div className="card space-y-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Avatar
                  url={user.avatar}
                  name={user.name}
                  variant="circle" />
                <div className="flex flex-col">
                  <h2 className="font-medium text-2xl">{user.name}</h2>
                  <span className="text-sm muted">{user.country}</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="w-4 h-4" />
            </div>
            <div className="flex flex-col space-y-3 w-full">
              <span className="text-sm">Pendientes</span>
              <ProgressBars variant="" />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}