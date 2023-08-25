import { HomeIcon, UserCircleIcon, NewspaperIcon, UsersIcon, BuildingStorefrontIcon} from "@heroicons/react/24/solid";
import { EyeIcon, ExclamationCircleIcon, PlusCircleIcon, DocumentPlusIcon, FolderIcon } from "@heroicons/react/24/outline";

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
    title: 'Entradas',
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
  },
  // {
  //   id: 4,
  //   label: <BuildingStorefrontIcon className="w-5 h-5" />,
  //   title: 'Proyecto',
  //   url: '/dashboard/proyecto',
  //   hasDropdown: true,
  //   subItems: [
  //     {title: 'Servicios', url: '/dashboard/proyecto/servicios', icon: <FolderIcon className="h-5 w-5" />},
  //     {title: 'Agregar Servicio', url: '/dashboard/proyecto/servicios/crear-servicio', icon: <DocumentPlusIcon className="h-5 w-5" />},
  //     {title: 'Promociones', url: '/dashboard/proyecto/promociones', icon: <FolderIcon className="h-5 w-5" />},
  //     {title: 'Agregar Promoción', url: '/dashboard/proyecto/promociones/crear-promocion', icon: <DocumentPlusIcon className="h-5 w-5" />},
  //     {title: 'Planes', url: '/dashboard/proyecto/planes', icon: <FolderIcon className="h-5 w-5" />},
  //     {title: 'Agregar Plan', url: '/dashboard/proyecto/planes/crear-plan', icon: <DocumentPlusIcon className="h-5 w-5" />}
  //   ]
  // }
]