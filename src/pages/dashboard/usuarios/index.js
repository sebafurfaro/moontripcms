import React from "react"
import DashDefault from "@/layouts/DashLayout"
import { useFetch } from "@/hooks/useFetch"
import { TableCustomers } from "@/components/customer/TableCustomers"
import { PanelHeader } from "@/components/Panel/PanelHeader"

export default function CustomersPage() {

  const { data, refetch } = useFetch('/api/customers')

  const columns = ['Nombre', 'Teléfono', 'Email', 'Username', 'Acciones']

  const handleDelete = () => {
    console.log('click delete')
  }

  const handleEdit = ( ) => {
    console.log('click edit')
  }

  if(!data) return null;

  return(
    <div className="flex items-center">
      <div className="mx-auto rounded-md shadow-md bg-white p-5 w-full min-h-screen">
        <PanelHeader
          title="Todos los Usuarios"
          className="btn-info"
          variant="link"
          urlRedirect="/dashboard/usuarios/registro"
          label="Crear nuevo" />
        <main>
          <TableCustomers
            dataBody={data.data}
            dataHead={columns}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </main>
      </div>
    </div>
  )
}

CustomersPage.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}