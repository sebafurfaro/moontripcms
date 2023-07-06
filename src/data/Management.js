const { NewspaperIcon, UsersIcon } = require("@heroicons/react/24/solid");

export const Management = [
  {
    title: 'Entradas',
    icon: <NewspaperIcon className="w-4 h-4" />,
    hasDropdown: true,
    subItems: [
      {title: 'Listado', url: '/dashboard/entradas'},
      {title: 'Crear entrada', url: '/dashboard/entradas/crear'}
    ]
  },
  {
    title: 'Usuarios',
    icon: <UsersIcon className="w-4 h-4" />,
    hasDropdown: true,
    subItems: [
      {title: 'Todos', url: '/dashboard/usuarios'},
      {title: 'Registrar nuevo', url: '/dashboard/usuarios/registro'}
    ]
  },
]