import React from "react"
import DashDefault from "@/layouts/DashLayout";
import { PanelHeader } from "@/components/Panel/PanelHeader";
import Button from "@/components/button";
import ReactDropdown from "react-dropdown";
import Input from "@/components/forms/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { AddTaskForm } from "@/pages/components/tasks/AddTaskForm";

export default function TaskPage() {

  const filter = [
    {value: 'all', label: 'Todas', className: 'p-2'},
    {value: 'fav', label: 'Favoritas', className: 'p-2'},
    {value: 'done', label: 'Resueltas', className: 'p-2'}
  ]

  const sort = ['A-Z', 'Z-A']

  return(
    <div className="flex items-center">
      <div className="panel">
        <PanelHeader title="Tareas"/>
        <main className="flex items-start justify-between gap-4">
          <div className="w-1/4 p-2">
            <AddTaskForm />
          </div>
          <div className="w-3/4 relative p-2">
            <div className="filter flex items-start space-x-4">
              <ReactDropdown
                options={filter}
                placeholder="Filtrar"
                className="btn btn-filter"
              />
              <ReactDropdown
                options={sort}
                placeholder="Ordenar"
                className="btn btn-filter"
              />
              <form className="relative flex items-center border border-slate-300">
                <Input type="text" placeholder="Buscar tarea..." className="border-none !pr-0" />
                <Button variant="link" label={<MagnifyingGlassIcon className="w-5 h-5" />} className="border-none" />
              </form>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  )
}

TaskPage.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}