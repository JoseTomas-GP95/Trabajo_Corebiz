import React, { useState, useEffect } from 'react'

/* ---------------------------------- SLICK --------------------------------- */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/* ------------------------------- MATERIAL UI ------------------------------ */
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

/* ------------------------------- COMPONENTS ------------------------------- */
import { ProductCard } from './ProductCard'
import { settings } from './configuration'

/* ------------------------------- HELPERS ------------------------------- */
import { helpGetProducts } from '../../helpers/Products/helpGetProducts'

export const ProductsContainer = ({ setLocalCount }) => {
  const [products, setProducts] = useState([])
  // Le asigno 0 si el local es null o recupero el numero actual
  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('counter')) || 0)
  const [spinner, setSpinner] = useState(false)

  // Creo en mi localStorage a counter
  localStorage.setItem('counter', JSON.stringify(counter))

  useEffect(() => {
    setSpinner(true)
    helpGetProducts()
      .then(response => setProducts(response))
  }, [])

  useEffect(() => {
    // Guardo el valor del localStorage al state
    setLocalCount(counter)
  }, [counter])

  if (products.length > 0 && spinner) {
    setSpinner(false)
  }

  const handleCounter = () => {
    // Al ejecutarse sumo uno mas al counter y lo guardo en el localStorage
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
