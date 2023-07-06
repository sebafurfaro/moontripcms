import { PanelHeader } from "@/components/Panel/PanelHeader";
import { CreatePostForm } from "@/components/posts/CreatePostForm";
import DashDefault from "@/layouts/DashLayout";

export default function PostCreatePage() {
  return(
    <div className="flex items-center">
      <div className="mx-auto rounded-md shadow-md bg-white p-5 w-full min-h-screen">
        <PanelHeader
          title="Nueva entrada"
        />
        <main>
          <CreatePostForm />
        </main>
      </div>
    </div>
  )
}

PostCreatePage.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}