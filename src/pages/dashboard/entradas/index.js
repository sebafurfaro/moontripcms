import React from "react";
import axios from "axios";
import DashDefault from "@/layouts/DashLayout";
import { TablePost, Tables } from "@/components/posts/Tables";
import { useFetch } from "@/hooks/useFetch";
import { PanelHeader } from "@/components/Panel/PanelHeader";
import { NoContent } from "@/components/NoContent";

export default function PostsListPage() {
  const { data, refetch } = useFetch('/api/posts');

  const columns = ['ID', 'Titulo', 'Imagen', 'Estado', 'Acciones'];

  const handleDelete = async (postId) => {
    try {
      await axios.delete('/api/posts', { params: { id: postId } });
      refetch();
    } catch (error) {
    }
  }; 

  const handleStatusUpdate = async (postId) => {
    const newStatus = "success";
    const currentDate = new Date().toISOString(); // Get the current date and time
  
    try {
      await axios.put('/api/posts', { id: postId, status: newStatus, updatedAt: currentDate });
      refetch();
    } catch (error) {
      // Handle error
    }
  };

  if (!data) return null;

  return (
    <div className="flex items-center">
      <div className="panel">
        <PanelHeader
          title="Todas las notas" />
        <main>
          <Tables
          dataBody={data.data}
          dataHead={columns}
          onDelete={handleDelete}
          onUpdateStatus={handleStatusUpdate}
          />
          </main>
      </div>
    </div>
  );
}

PostsListPage.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
};
