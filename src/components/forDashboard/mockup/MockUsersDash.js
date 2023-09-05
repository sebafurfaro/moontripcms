import Avatar from "@/components/avatar"
import ProgressBar from "@/components/progressbar"
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid"

export const MockUsersDash = () => {

  const users = [
    {avatar: 'https://www.w3schools.com/w3images/avatar2.png', name: 'Hank Voight', country: 'Bulgaria', total: 20, publish: 40, pending: 60, summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum autem facilis reiciendis aut. Architecto sapiente numquam odio autem ipsa. Facilis at amet est voluptas laborum? Nam ea ipsam debitis libero.' },
    {avatar: 'https://www.w3schools.com/w3images/avatar5.png', name: 'Erin Lindsay', country: 'Argentina', total: 35, publish: 75, pending: 25, summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum autem facilis reiciendis aut. Architecto sapiente numquam odio autem ipsa. Facilis at amet est voluptas laborum? Nam ea ipsam debitis libero.' },
    {avatar: 'https://www.w3schools.com/w3images/avatar3.png', name: 'Alvin Olinsky', country: 'Uruguay', total: 20, publish: 55, pending: 45,summary: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum autem facilis reiciendis aut. Architecto sapiente numquam odio autem ipsa. Facilis at amet est voluptas laborum? Nam ea ipsam debitis libero.' }
  ]

  return(
    <>
    {users.map((user, index) => (
        <div key={index}>
          <div className="card space-y-6">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center space-x-2">
                <Avatar
                  url={user.avatar}
                  name={user.name}
                  variant="circle"
                  className="!w-14 !h-14" />
                <div className="flex flex-col">
                  <h2 className="font-normal text-xl">{user.name}</h2>
                  <span className="text-sm muted">{user.country}</span>
                </div>
              </div>
              <EllipsisVerticalIcon className="w-8 h-8 cursor-pointer" />
            </div>
            <div className="mb-4">{user.summary}</div>
            <div className="flex flex-col space-y-3 w-full">
              <span className="text-sm">Publicadas</span>
              <ProgressBar variant="success" value={user.publish} />
              <span className="text-sm">Pendientes</span>
              <ProgressBar variant="warning" value={user.pending} />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}