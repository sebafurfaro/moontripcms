import { Card } from "@/components/card/card";
import { MockUsersDash } from "@/components/forDashboard/mockup/MockUsersDash";
import { useFetch } from "@/hooks/useFetch";
import DashDefault from "@/layouts/DashLayout";

export default function Dashboard() {

  const { data, refetch } = useFetch('/api/posts')

  if (!data) return null

  return(
    <div className="space-y-8">
      <h1 className="font-light text-4xl">Bienvenido!</h1>
      <div className="grid grid-cols-6 grid-rows-3 gap-8">
        <MockUsersDash />
        {/* <div className="col-span-2">
          <div className="card">
          </div>
        </div>
        <div className="col-span-2 col-start-3">
          <div className="card"></div>
        </div>
        <div className="col-span-2 col-start-5">
          <div className="card"></div>
        </div> */}
        <div className="col-span-4 row-start-2">
          <div className="card bg-blue-[#4339F2]"></div>
        </div>
        <div className="col-span-2 row-span-2 col-start-5 row-start-2">
          <div className="card"></div>
        </div>
        <div className="row-start-3">
          <div className="card"></div>
        </div>
        <div className="row-start-3">
          <div className="card"></div>
        </div>
        <div className="row-start-3">
          <div className="card"></div>
        </div>
        <div className="row-start-3">
          <div className="card"></div>
        </div>
      </div>
    </div>
//     <div className="grid grid-cols-4 gap-x-4 gap-y-4">
//       {data.data.map((item, key) => (
//         <>
// {        console.log(item)
// }        <Card
//           cardImage={true}
//           imgPosition={'top'}
//           imgUrl={item.urlImage}
//           imgAlt={item.title}
//           key={key}
//           title={item.title}
//           summary={item.summary}
//           linkLabel="Ver más"
//           urlRedirect={`www.google.com`}
//           rounded
//           shadow />
//         </>
//       ))}
//     </div>
  )
}

Dashboard.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}