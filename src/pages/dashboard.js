import { Card } from "@/components/card/card";
import { MockAdsDash } from "@/components/forDashboard/mockup/MockAdsDash";
import { MockUsersDash } from "@/components/forDashboard/mockup/MockUsersDash";
import { MockVerticalGraphDash } from "@/components/forDashboard/mockup/MockVerticalGraphDash";
import { useFetch } from "@/hooks/useFetch";
import DashDefault from "@/layouts/DashLayout";

export default function Dashboard() {

  const { data, refetch } = useFetch('/api/posts')
  if (!data) return null

  const successPosts = data.data.filter((post) => post.status === 'success')
  const limitedPosts = successPosts.slice(0, 4)


  return(
    <div className="space-y-8">
      <h1 className="font-light text-4xl">Bienvenido!</h1>
      <div className="grid grid-cols-6 grid-rows-3 gap-8">
        <MockUsersDash />
        <div className="col-span-4 row-start-2">
          <MockAdsDash />
        </div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-2">
          <MockVerticalGraphDash />
        </div>
        {limitedPosts.map((item, index) => (
          <div className="row-start-3">
            <Card
              key={index}
              cardImage={true}
              title={item.title}
              summary={item.summary}
              imgPosition={'top'}
              imgUrl={item.urlImage}
              imgAlt={item.title}
              className="first-child:absolute"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Dashboard.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}