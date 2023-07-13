import React from "react";
import axios from "axios";
import DashDefault from "@/layouts/DashLayout";
import { TablePost } from "@/components/posts/TablePost";
import { useFetch } from "@/hooks/useFetch";
import { PanelHeader } from "@/components/Panel/PanelHeader";

export default function PostsListPage() {
  const { data, refetch } = useFetch('/api/posts');

  const columns = ['Imagen', 'Titulo', 'Estado', 'Acciones'];

  const handleDelete = async (postId) => {
    try {
      await axios.delete('/api/posts', { params: { id: postId } });
      refetch();
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  }; 

  const handleStatusUpdate = async (postId) => {
    const newStatus = "success";
    try {
      await axios.put('/api/posts', { id: postId, status: newStatus });
      refetch();
      console.log("Post status updated successfully");
    } catch (error) {
      console.error("Failed to update post status", error);
    }
  };  

  if (!data) return null;

  return (
    <div className="flex items-center">
      <div className="mx-auto rounded-md shadow-md bg-white p-5 w-full min-h-screen">
        <PanelHeader
          title="Todas las notas"
          className="btn-info"
          variantButton="link"
          urlRedirect="/dashboard/entradas/crear"
          label="Crear nueva" />
        <main>
          <TablePost
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
