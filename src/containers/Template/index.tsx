/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState, useEffect } from 'react'
import One from '../../static/img/slideImgOne.svg'
import Two from '../../static/img/slideImgTwo.svg'
import Three from '../../static/img/slideImgThree.svg'
import { Swiper, SwiperSlide } from 'swiper/react'

import portfoliOImage from '../../static/img/portfolioimage1.png'
import portfolioImage2 from '../../static/img/portfolioimage2.png'
import portfolioImage3 from '../../static/img/portfolioimage3.png'
// import Swiper from 'swiper'
import { Navigation, Pagination, Parallax, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import 'swiper/css/autoplay'
function Templates(): ReactElement {
  const imgArr = [One, Two, Three]
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  const cssClass = width < 768 ? 'slide-bg-mobile' : 'slide-bg'
  const arrayImage = [
    portfoliOImage,
    portfolioImage2,
    portfolioImage3,
    portfolioImage3,
    portfolioImage2,
  ]
  // const arrayImage = [0, 1, 2]
  const interval: any = setInterval(() => {
    const newArrayImages = arrayImage.slice()
    for (let i = newArrayImages.length - 1; i > 0; i--) {
      ;[newArrayImages[i], newArrayImages[i - 1]] = [newArrayImages[i - 1], newArrayImages[i]]
    }

    arrayImage.length = 0
    arrayImage.push(...newArrayImages)
    clearInterval(interval)
    return interval
  }, 10000)

  const [slidesPerView, setSlidesPerView] = useState(2.5)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 768) {
        // Adjust breakpoint as needed
        setSlidesPerView(1)
      } else if (windowWidth <= 1024 && windowWidth >= 768) {
        setSlidesPerView(1.5)
      } else {
        setSlidesPerView(2.5)
      }
    }
    window.addEventListener('resize', handleResize)

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className='pt-[4rem]  mb-[6rem]'>
      <h1 className='text-[#fff] sm:px-0 px-4 text-center font-FreizetTrial text-[1.875rem]  sm:text-[2.5rem] font-bold leading-normal'>
        See how Geynius can help
      </h1>
      <p className='text-[#fff] sm:px-0 px-4 text-center font-normal pt-4 leading-[2.125rem] text-[0.875rem] font-DMSans'>
        Discover Geynius, a sleek and versatile product tailored for tech professionals. Streamline
        your portfolio with Geynius and standout in your industry
      </p>
      <Swiper
        // Include Swiper modules
        modules={[Navigation, Pagination, Parallax, Autoplay]}
        spaceBetween={50}
        slidesPerView={slidesPerView} // Default value for mobile screens
        navigation
        pagination={{ clickable: true }}
      >
        {arrayImage.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='overflow-hidden'>
              <img className='tran overflow-hidden' src={image} alt='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Templates
