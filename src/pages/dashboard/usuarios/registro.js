import React from "react"
import DashDefault from "@/layouts/DashLayout"
import { RegisterCustomerForm } from "@/components/customer/RegisterCustomerForm"
import { PanelHeader } from "@/components/Panel/PanelHeader"

export default function CustomerRegister() {
  return(
    <div className="flex items-center">
      <div className="mx-auto rounded-md shadow-md bg-white p-5 w-full min-h-screen">
        <PanelHeader
          title="Nuevo Usuario"
        />
        <main>
          <RegisterCustomerForm />
        </main>
      </div>
    </div>
  )
}

CustomerRegister.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}