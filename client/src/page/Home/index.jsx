import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'
import { ProductsContainer } from '../../components/Products'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductsContainer />
      <p>COMPONENTE PRODUCTS</p>
      <p>COMPONENTE SUBSCRIPTION</p>
      <p>COMPONENTE FOOTER</p>
    </div>
  )
}
