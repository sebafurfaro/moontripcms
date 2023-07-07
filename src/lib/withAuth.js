import { useRouter } from 'next/router'
import { useEffect } from 'react'

const withAuth = (WrappedComponent) => {
  return(props) => {
    const router = useRouter()

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn')

      if (!isLoggedIn) {
        router.push("/login")
      }
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default withAuth