import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '@material-ui/core/Container'

/* ------------------------------- COMPONENTS ------------------------------- */
import { products } from './data'
import { ProductCard } from './ProductCard'

export const ProductsContainer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  }

  return (
    <Container maxWidth="lg">
      <h4>Más Vendidos</h4>
      <Slider {...settings}>
        {products.map((item) => (
          <div key={item.productId}>
            <ProductCard item={item} />
          </div>
        ))}
      </Slider>
    </Container>
  )
}
