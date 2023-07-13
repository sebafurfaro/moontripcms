import { useState, useEffect } from 'react'
import axios from 'axios'
import { Bars3Icon, PowerIcon, SparklesIcon } from "@heroicons/react/24/solid"
import { Avatar } from "../Avatar"

export const Header = ({ closeSidebar, handleLogout }) => {

  const [ userData, setUserData ] = useState({})
  const [ showLogout, setShowLogout ] = useState(false)

  useEffect(() => {
    const fetchUserData = async (e) => {
      try {
        const username = localStorage.getItem('username')
        const response = await axios.get("/api/customers", {
          params: {
            username: username
          }
        })
        const { data } = response
        setUserData(data)
      } catch (error) {
        console.error('Error al obtener los datos de usuario', error)
      }
    }
    
    fetchUserData()
  }, [])

  // const handleMenuLogout = () => {
  //   setShowLogout(!showLogout)
  // }

  if (!userData.data) return null;

  return(
    <header className="header pr-5 absolute top-0 left-0 z-[50] bg-white w-full flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <button
          className="bg-transparent border-none"
          onClick={closeSidebar}
        ><Bars3Icon className="h-6 w-6 text-slate-800 " /></button>
        <h1 className="text-slate-800 text-2xl font-bold uppercase">Moontrip</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Avatar variant="circle" url={userData.data[0].avatar} name={userData.data[0].name} />
        <button
          className="rounded-full bg-transparent border-transparent hover:shadow-inner"
          onClick={handleLogout}
        ><PowerIcon className='h-4 w-4 text-sky-600' /></button>
      </div>
    </header>
  )
}