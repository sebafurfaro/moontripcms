import { Accordion } from "../Accordion/Accordion"
const { NewspaperIcon, UsersIcon, UserCircleIcon, HomeIcon } = require("@heroicons/react/24/solid");

export const Sidebar = ({ hideSidebar, className }) => {

  const Management = [
    {
      title: 'Dashboard',
      icon: <HomeIcon className="w-5 h-5" />,
      hasDropdown: false,
      url: '/dashboard'
    },
    {
      title: 'Mi Cuenta',
      icon: <UserCircleIcon className="w-5 h-5" />,
      hasDropdown: false,
      url: '/dashboard/mi-cuenta'
    },
    {
      title: 'Entradas',
      icon: <NewspaperIcon className="w-5 h-5" />,
      hasDropdown: true,
      subItems: [
        {title: 'Listado', url: '/dashboard/entradas'},
        {title: 'Crear entrada', url: '/dashboard/entradas/crear'}
      ]
    },
    {
      title: 'Usuarios',
      icon: <UsersIcon className="w-5 h-5" />,
      hasDropdown: true,
      subItems: [
        {title: 'Todos', url: '/dashboard/usuarios'},
        {title: 'Registrar nuevo', url: '/dashboard/usuarios/registro'}
      ]
    },
  ]

  return(
    <div className={`${className} sidebar text-white flex flex-col items-start bg-[#2B3445]`}>
      <Accordion hideSidebar={hideSidebar} className={'space-y-4'} dropdownItems={Management} />
    </div>
  )

}