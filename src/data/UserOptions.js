const { HomeIcon, UserCircleIcon } = require("@heroicons/react/24/solid");

export const UserOptions = [
  {
    title: 'Dashboard',
    icon: <HomeIcon className="w-4 h-4" />,
    hasDropdown: false,
    url: '/dashboard'
  },
  {
    title: 'Mi Cuenta',
    icon: <UserCircleIcon className="w-4 h-4" />,
    hasDropdown: false,
    url: '/dashboard/mi-cuenta'
  }
];