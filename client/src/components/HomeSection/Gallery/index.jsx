import React from "react"
import GalleryD from "../../../api/GalleryD"
import "./style.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  }
  return (
    <div>
      <section className='collection'>
        <div className='container top'>
          <Slider {...settings}>
            {GalleryD.map((value) => {
              return (
                <div className='box'>
                  <img src={value.cover} alt='' />
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Index