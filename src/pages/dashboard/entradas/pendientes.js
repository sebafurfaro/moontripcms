import { PanelHeader } from "@/components/Panel/PanelHeader";
import { TablePost, Tables } from "@/components/posts/Tables";
import { useFetch } from "@/hooks/useFetch"
import DashLayout from "@/layouts/DashLayout"

export default function PendingPostPage() {
  const { data, refetch } = useFetch('/api/posts')
  if (!data) return null;

  const pendingPosts = data.data.filter((post) => post.status === 'pending')
  
  const columns = ['ID', 'Titulo', 'Imagen', 'Estado', 'Fecha de publicación'];
  
  

  return(
    <div className="flex items-center flex-col">
      <div className="panel">
        <PanelHeader title="Entradas pendientes de publicación" />
        <main>
          <Tables
            dataHead={columns}
            dataBody={pendingPosts}
            hasStatus={false}
          />
        </main>
      </div>
    </div>
  )

}

PendingPostPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}