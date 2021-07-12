import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

/* ---------------------------------- SLICK --------------------------------- */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
/* ---------------------------------- IMAGE --------------------------------- */
import fotoDemoMobile from './images/fotoDemoMobile.png'

import { data } from './data'
import { settings } from './configuration'

export const Header = () => {
  const theme = useTheme()
  // Con matches puedo saber si el tamaño de la pantalla coincide o no con el tamaño sm
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

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
