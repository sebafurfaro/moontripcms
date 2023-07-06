import { Cards } from "@/components/Cards"
import { useFetch } from "@/hooks/useFetch"

export const BlogSection = () => {

  const { data, refetch } = useFetch('/api/posts')

  if(!data) return null

  return(
    <section className="bg-slate-100 py-24">
      <h2 className="font-semibold text-3xl text-center">Las últimas novedades</h2>
      <div className="cards-container mx-auto max-w-3xl grid grid-cols-3 gap-8">
        {data.data.map((post, index) => (
          <Cards
            key={index}
            title={post.title}
            sintesis={post.summary}
            image={post.urlImage}
            />
        ))}
      </div>
    </section>
  )
}