import React, { useState } from 'react'

/* ------------------------------- COMPONENTS ------------------------------- */
import { Navbar } from '../../components/Navbar'
import { Header } from '../../components/Header'
import { ProductsContainer } from '../../components/Products'
import { Subscription } from '../../components/Subscription'
import { Footer } from '../../components/Footer'

export const Home = () => {
  // De esta manera centralizo el state para pasarselo a la navbar y actualizar el numero
  const [localCount, setLocalCount] = useState(0)

  return (
    <div>
      <div>
        <Navbar localCount={localCount}/>
      </div>
      <Header />
      <ProductsContainer setLocalCount={setLocalCount}/>
      <Subscription />
      <Footer />
    </div>
  )
}
