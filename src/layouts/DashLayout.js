import { useState } from "react"
import { Header } from "@/components/forDashboard/Header";
import { Sidebar } from "@/components/forDashboard/Sidebar";
import React from "react";

const DashDefault = ({ children }) => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return(
    <div className="relative bg-slate-100">
      <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="w-full min-h-screen grid grid-cols-12 overflow-x-hidden pt-11">
        <Sidebar className={`col-span-2 transition-transform duration-500 ease-in-out`} />
        <main className={`col-span-10 transition-all duration-500 ease-in-out`}>
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default DashDefault;