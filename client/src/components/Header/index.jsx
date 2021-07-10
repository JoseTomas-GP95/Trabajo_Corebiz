import React from 'react'

/* ---------------------------------- SLICK --------------------------------- */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Container from '@material-ui/core/Container'

import { data } from './data'

export const Header = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Container maxWidth="lg">
        <Slider {...settings}>
          {
            data.map(movie => (
              <div key={ movie.id }>
                <img alt="imagen" src={ movie.image } />
              </div>
            ))
          }

        </Slider>
      </Container>
  )
}
