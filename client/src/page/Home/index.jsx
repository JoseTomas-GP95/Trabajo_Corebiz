import React from 'react'

/* ------------------------------- COMPONENTS ------------------------------- */
import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'
import { ProductsContainer } from '../../components/Products'
import { Subscription } from '../../components/Subscription'
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Header />
      <ProductsContainer />
      <Subscription />
      <Footer />
    </div>
  )
}
