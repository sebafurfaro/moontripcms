import { PanelHeader } from "@/components/Panel/PanelHeader";
import { TablePost, Tables } from "@/components/posts/Tables";
import { useFetch } from "@/hooks/useFetch"
import DashLayout from "@/layouts/DashLayout"

export default function PublishPostPage() {
  const { data, refetch } = useFetch('/api/posts')
  if (!data) return null;

  const successPosts = data.data.filter((post) => post.status === 'success')
  
  const columns = ['ID', 'Titulo', 'Imagen', 'Estado', 'Fecha de publicación'];
  
  

  return(
    <div className="flex items-center flex-col">
      <div className="panel">
        <PanelHeader title="Entradas publicadas" />
        <main>
          <Tables
            dataHead={columns}
            dataBody={successPosts}
            hasStatus={false}
          />
        </main>
      </div>
    </div>
  )

}

PublishPostPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}