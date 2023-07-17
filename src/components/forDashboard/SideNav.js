import React, { useEffect, useState } from "react"
import axios from "axios"
import { SideNavTab } from "./sidenav/SideNavTab"
import { SideNavPanel } from "./sidenav/SideNavPanel"
import { Avatar } from "../Avatar"
import { PowerIcon } from "@heroicons/react/24/solid"
import { Accordion } from "../Accordion/Accordion"
import Link from "next/link"
import { useRouter } from "next/router"

export const SideNav = ({ pills, handleLogout }) => {

  const [ activeIndex, setActiveIndex ] = useState(pills[0].id)
  const [ userData, setUserData ] = useState({})
  const router = useRouter()

  const handlePillClick = (pillId) => {
    setActiveIndex(pillId)
    router.push(pills[pillId].url)
  }

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

  if (!userData.data) return null;


  return(
    <nav className="fixed top-0 left-0 flex flex-row h-screen w-fit shadow-lg">
      <div className="flex flex-col w-16 bg-slate-900 text-white ">
        <div className="w-16 h-16 bg-indigo-500 flex items-center justify-center">
          <img src="../brand.png" className="w-14" />
        </div>
        {pills.map((item) => (
          <SideNavTab
            key={item.id}
            label={item.label}
            url={item.url}
            isActive={activeIndex === item.id}
            onClick={() => handlePillClick(item.id)} />
        ))}
        <div className="absolute bottom-0 flex flex-col">
          <button className="w-16 h-16 flex items-center justify-center hover:bg-blue-500" onClick={handleLogout}>
            <PowerIcon className='h-6 w-6' />
          </button>
          <Avatar className="!w-16 !h-16" variant="square" url={userData.data[0].avatar} name={userData.data[0].name} />
        </div>
      </div>
      <div className="w-[200px] h-screen bg-slate-200">
        <div className="h-14 w-full flex items-center justify-center px-5">
          <h1 className="font-semibold text-xl hidden">Moontrip</h1>
        </div>
        {pills.map((panel) => (
          <SideNavPanel key={panel.id} isActive={activeIndex === panel.id}>
            {panel.hasDropdown === true ? (
              <div className="flex flex-col space-y-6 mt-3">
                {panel.subItems.map((subItem, index) => (
                  <Link className="flex items-center space-x-2" key={index} href={subItem.url}>
                    <span>{subItem.icon}</span>
                    <span className="font-semibold">{subItem.title}</span>
                  </Link>
                ))}
              </div>
            ) : (
              <Link className="flex items-center space-x-2 mt-3" href={panel.url}>
                <span>{panel.label}</span>
                <span className="font-semibold">{panel.title}</span>
              </Link>
            )}
          </SideNavPanel>
        ))}
      </div>
    </nav>
  )
}