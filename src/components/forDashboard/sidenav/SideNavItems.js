import { HomeIcon, UserCircleIcon, NewspaperIcon, UsersIcon } from "@heroicons/react/24/solid";
import { EyeIcon, ExclamationCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export const SideNavItems = [
  {
    id: 0,
    label: <HomeIcon className="w-5 h-5" />,
    title: 'Dashboard',
    url: '/dashboard',
    hasDropdown: false
  },
  {
    id: 1,
    label: <UserCircleIcon className="w-5 h-5" />,
    title: 'Mi Cuenta',
    url: '/dashboard/mi-cuenta',
    hasDropdown: false
  },
  {
    id: 2,
    label: <NewspaperIcon className="w-5 h-5" />,
    title: 'Todas las Entradas',
    url: '/dashboard/entradas',
    hasDropdown: true,
    subItems: [
      {title: 'Publicadas', url: '/dashboard/entradas/publicadas', icon: <EyeIcon className="h-5 w-5" />},
      {title: 'Pendientes', url: '/dashboard/entradas/pendientes', icon: <ExclamationCircleIcon className="h-5 w-5" />},
      {title: 'Crear entrada', url: '/dashboard/entradas/crear', icon: <PlusCircleIcon className="h-5 w-5" />}
    ]
  },
  {
    id: 3, 
    label: <UsersIcon className="w-5 h-5" />,
    title: 'Usuarios',
    url: '/dashboard/usuarios',
    hasDropdown: true,
    subItems: [
      {title: 'Registrar nuevo', url: '/dashboard/usuarios/registro', icon: <PlusCircleIcon className="h-5 w-5" />}
    ]
  }
]