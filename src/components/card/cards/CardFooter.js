import Link from "next/link"

export const CardFooter = ({ urlRedirect, linkLabel }) => {
  return(
    <Link className="btn btn-link" href={"www.google.com"}>{linkLabel}</Link>
  )
}