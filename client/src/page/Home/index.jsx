import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <p>COMPONENTE HEADER</p>
      <p>COMPONENTE PRODUCTS</p>
      <p>COMPONENTE SUBSCRIPTION</p>
      <p>COMPONENTE FOOTER</p>
    </div>
  )
}
