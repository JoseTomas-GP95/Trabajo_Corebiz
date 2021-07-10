import React from 'react'

import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'
import { ProductsContainer } from '../../components/Products'
import { Subscription } from '../../components/Subscription'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ProductsContainer />
      <Subscription />
      <Footer />
    </div>
  )
}
