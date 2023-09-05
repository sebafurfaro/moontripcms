import Badge from "@/components/badge"
import { useFetch } from "@/hooks/useFetch"

export const MockPostsDash = () => {

  const { data, refetch } = useFetch('/api/posts')
  if (!data) return null

  const successPosts = data.data.filter((post) => post.status === 'success')
  const limitedPosts = successPosts.slice(0, 4)

  return(
    <>
      {limitedPosts.map((item, index) => (
        <div className="row-start-3" key={index}>
          <div className="card overflow-hidden relative" style={{ 
            backgroundImage: `url(${item.urlImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover' 
            }}>
            <div className="absolute w-full h-full top-0 left-0 bg-slate-800/50"></div>
            <div className="relative z-10 text-white backdrop-blur-sm space-y-3">
              <div className="flex items-center self-start space-x-3">
                <Badge className={'rounded-md'} variant="warning" label="IT" />
                <Badge className={'rounded-md'} variant="info" label="Innovation" />
              </div>
              <h2 className="text-xl self-start font-thin tracking-wider">{item.title}</h2>
              <p className="text-sm">{item.summary}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}