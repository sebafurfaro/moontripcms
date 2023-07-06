import { useFetch } from "@/hooks/useFetch"
import { Brand } from "../../../components/Brand"
import Link from "next/link";

export const Header = () => {

  const { data, refetch } = useFetch('/api/siteconfig')

  if(!data) return null;

  console.log(data.data)

  return(
    <header className="fixed top-0 left-0 w-full bg-blue-500 text-white py-2 px-4">
      <nav className="flex items-center">
        {data.data.map((item) => (
          <Brand content={item.brand} />
        ))}
        <ul className="ml-auto flex items-center space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#productos">Productos</Link>
          </li>
          <li>
            <Link href="#servicios">Servicios</Link>
          </li>
          <li>
            <Link href="#contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}