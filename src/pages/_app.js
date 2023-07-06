import React from 'react'
import '@/styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import 'sweetalert2/dist/sweetalert2.min.css';

export default function App({ Component, pageProps }) {
  const renderWithDefaultLayout = Component.getLayout || function(page) {
    return <DefaultLayout>{page}</DefaultLayout>
  }

  return renderWithDefaultLayout(<Component {...pageProps} />)
}

