import { useRouter } from "next/router"

const ButtonLink = ({ variant, label, url, className, onChange, onClick}) => {

  const router = useRouter()
  const handleLink = () => {
    router.push(url)
  }

  return(
    <button className={`btn btn-link ${className}`} onClick={handleLink}>{label}</button>
  )
}

export default ButtonLink