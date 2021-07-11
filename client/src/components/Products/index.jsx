import React, { useState, useEffect } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '@material-ui/core/Container'

/* ------------------------------- COMPONENTS ------------------------------- */
import { ProductCard } from './ProductCard'

/* ------------------------------- HELPERS ------------------------------- */
import { helpGetProducts } from '../../helpers/Products/helpGetProducts'

export const ProductsContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    helpGetProducts()
      .then(response => setProducts(response))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Container maxWidth="md">
      <h3>Más Vendidos</h3>
      <Slider {...settings}>
        {products.map((item) => (
          <div style={{ width: 300 }} key={item.productId}>
            <ProductCard item={item} />
          </div>
        ))}
      </Slider>
    </Container>
  )
}
