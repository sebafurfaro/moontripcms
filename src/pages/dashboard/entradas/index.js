import React from "react";
import axios from "axios";
import DashDefault from "@/layouts/DashLayout";
import { Tables } from "@/components/posts/Tables";
import { useFetch } from "@/hooks/useFetch";
import { PanelHeader } from "@/components/Panel/PanelHeader";
import { NoContent } from "@/components/NoContent";
import { useSweetAlert } from "@/hooks/useSweetAlert";

export default function PostsListPage() {
  const { data, refetch } = useFetch('/api/posts');
  const showAlert = useSweetAlert()

  const columns = ['Titulo', 'Imagen', 'Estado', 'Fecha y Hora', 'Acciones'];
  const excludedKeys = ['summary', 'resume'];

  const handleDelete = async (postId) => {
    try {
      await axios.delete('/api/posts', { params: { id: postId } });
      refetch();
    } catch (error) {
      showAlert(
        'Error!',
        'Ha ocurrido un error al eliminar',
        'error'
      )
    }
  }; 

  const handleStatusUpdate = async (postId) => {
    const newStatus = "success";
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  
    try {
      await axios.put('/api/posts', { id: postId, status: newStatus, updatedAt: formattedDate });
      refetch();
    } catch (error) {
      showAlert(
        'Error!',
        'Ha ocurrido un error al actualizar',
        'error'
      )
    }
  };

  if (!data) return null;

  return (
    <div className="flex items-center">
      <div className="panel">
        <PanelHeader
          label="Crear Nota"
          urlRedirect={'/dashboard/entradas/crear'}
          title="Todas las notas" />
        <main>
          {data.data.length > 0 ?
          <Tables
            dataBody={data.data}
            dataHead={columns}
            onDelete={handleDelete}
            onUpdateStatus={handleStatusUpdate}
            excludedKeys={excludedKeys}
          />
          :
          <NoContent name="entradas" />
          }
          </main>
      </div>
    </div>
  );
}

PostsListPage.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
};
