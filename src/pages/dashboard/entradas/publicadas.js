import { NoContent } from "@/components/NoContent";
import { PanelHeader } from "@/components/Panel/PanelHeader";
import { Tables } from "@/components/posts/Tables";
import { useFetch } from "@/hooks/useFetch"
import DashLayout from "@/layouts/DashLayout"

export default function PublishPostPage() {
  const { data, refetch } = useFetch('/api/posts')
  if (!data) return null;

  const successPosts = data.data.filter((post) => post.status === 'success')
  
  const columns = ['Titulo', 'Imagen', 'Estado', 'Actualizada el:'];
  const excludedKeys = ['resume', 'summary']
  
  

  return(
    <div className="flex items-center flex-col">
      <div className="panel">
        <PanelHeader title="Entradas publicadas" />
        <main>
          {successPosts.length > 0 ?
          <Tables
            dataHead={columns}
            dataBody={successPosts}
            excludedKeys={excludedKeys}
          />
          :
          <NoContent name="publicadas" />
          }
        </main>
      </div>
    </div>
  )

}

PublishPostPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}