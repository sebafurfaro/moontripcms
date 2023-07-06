import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export const useSweetAlert = () => {

  const router = useRouter()

  useEffect(() => {
    import('sweetalert2/dist/sweetalert2.min.css')
  }, [])

  const showAlert = (title, text, icon, confirmRedirect = null) => {
    return Swal.fire({
      title,
      text,
      icon,
      showCloseButton: true,
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed && confirmRedirect) {
        router.push(confirmRedirect);
      }
    });
  }
  return showAlert
}