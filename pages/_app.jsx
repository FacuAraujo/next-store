import React from 'react'
import '../styles/reset.css'
import '../styles/global.scss'

import { CartContextProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp
