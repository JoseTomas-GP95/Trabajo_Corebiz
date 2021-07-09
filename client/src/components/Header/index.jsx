import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Container from '@material-ui/core/Container'

import './css/Header.css'

import { data } from './data'

export const Header = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   className: 'center',
  //   centerMode: true
  // }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // }

  // const settings = {
  //   className: 'center',
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: '60px',
  //   slidesToShow: 1,
  //   speed: 500
  // }

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

          {/* <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div className="x">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div className="x">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div>

          <div style={{ backgroundColor: "red" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2QHyTnV6gxRWkhbDP2Q_cZuGUYXaGyzZ0AA&usqp=CAU" />
          </div> */}
        </Slider>
      </Container>
  )
}
