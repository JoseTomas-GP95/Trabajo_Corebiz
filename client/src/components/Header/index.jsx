import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

/* ---------------------------------- SLICK --------------------------------- */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import fotoDemoMobile from './images/fotoDemoMobile.png'
import { data } from './data'

export const Header = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      {data.map((movie) => (
        <div key={movie.id}>
          {matches
            ? (
            <img width={'100%'} alt="imagen" src={fotoDemoMobile} />
              )
            : (
            <img width={'100%'} alt="imagen" src={movie.image} />
              )}
        </div>
      ))}
    </Slider>
  )
}
