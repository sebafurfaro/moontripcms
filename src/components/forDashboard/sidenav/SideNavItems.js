import { HomeIcon, UserCircleIcon, NewspaperIcon, SquaresPlusIcon} from "@heroicons/react/24/solid";

export const SideNavItems = [
  {
    id: 0,
    label: <HomeIcon className="w-5 h-5" />,
    title: 'Dashboard',
    url: '/dashboard'
  },
  {
    id: 1,
    label: <UserCircleIcon className="w-5 h-5" />,
    title: 'Mi Cuenta',
    url: '/dashboard/mi-cuenta'
  },
  {
    id: 2,
    label: <NewspaperIcon className="w-5 h-5" />,
    title: 'Entradas',
    url: '/dashboard/entradas'
  },
  {
    id: 3, 
    label: <SquaresPlusIcon className="w-5 h-5" />,
    title: 'Tareas',
    url: '/dashboard/tareas'
  }
]