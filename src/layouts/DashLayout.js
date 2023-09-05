import { SideNav } from "@/components/forDashboard/SideNav"
import { SideNavItems } from "@/components/forDashboard/sidenav/SideNavItems"
import { TopNav } from "@/components/forDashboard/topnav/TopNav"
import { useRouter } from "next/router"
import React from "react"

const DashDefault = ({ children }) => {

  const route = useRouter()

  const handleLogout = () => {
    route.replace('/login')
  }

  return(
    <div className="relative bg-[#f8f8f8]">
      <div className="layout w-full min-h-screen overflow-x-hidden">
        <SideNav pills={SideNavItems} />
        <TopNav handleLogout={handleLogout} />
        <main className="pl-24 transition-all duration-500 ease-in-out">
          <div className="pl-4">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashDefault;