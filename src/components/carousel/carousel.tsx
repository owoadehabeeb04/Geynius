import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import portfoliOImage from '../../static/img/portfolioimage1.png'
import portfolioImage2 from '../../static/img/portfolioimage2.png'
import portfolioImage3 from '../../static/img/portfolioimage3.png'
import CarouselItem from './carouselItem'
const Carousel = () => {
  const images = [portfoliOImage, portfolioImage2, portfolioImage3]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 'Opx',
  }
  const renderImages = () => {
    return images.map((image, index) => <CarouselItem key={index} image={image} />)
  }
  return (
    <div>
      <div className=' '>
        {/* <div className='flex items-centerjustify-center'> */}
        <div className='w-full  grid-cols-3'>
          <Slider {...settings}>{renderImages()}</Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Carousel
