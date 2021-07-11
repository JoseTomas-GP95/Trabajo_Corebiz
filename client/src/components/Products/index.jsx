import React, { useState, useEffect } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
/* ------------------------------- COMPONENTS ------------------------------- */
import { ProductCard } from './ProductCard'
import { settings } from './configuration'

/* ------------------------------- HELPERS ------------------------------- */
import { helpGetProducts } from '../../helpers/Products/helpGetProducts'

export const ProductsContainer = ({ setLocalCount }) => {
  const [products, setProducts] = useState([])
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('counter')) || 0)
  const [spinner, setSpinner] = useState(false)

  localStorage.setItem('counter', JSON.stringify(counter))

  useEffect(() => {
    console.log('here')
    setSpinner(true)
    helpGetProducts()
      .then(response => setProducts(response))
  }, [])

  useEffect(() => {
    setLocalCount(counter)
  }, [counter])

  if (products.length > 0 && spinner) {
    setSpinner(false)
  }

  const handleCounter = () => {
    setCounter(counter + 1)
    localStorage.setItem('counter', JSON.stringify(counter))
  }

  return (
    <Container maxWidth="md">
      {
        !spinner
          ? <>
        <h3>Más Vendidos</h3>
      <Slider {...settings}>
        {products.map((item) => (
          <div style={{ width: 300 }} key={item.productId}>
            <ProductCard handleCounter={handleCounter} item={item} />
          </div>
        ))}
      </Slider>
        </>
          : <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}>
        <h2>Cargando...</h2>
        <CircularProgress />
        </div>
      }

    </Container>
  )
}
