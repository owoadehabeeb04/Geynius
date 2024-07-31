import React, { useEffect, useState } from 'react'
import ace from '../../../../static/img/ace.png'
import project2 from '../../../../static/img/4.png'
import photography from '../../../../static/img/photography.png'
import portfoliOImage from '../../../../static/img/portfolioimage1.png'
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link, useParams } from 'react-router-dom'
import { useStateContext } from '../../../../context/stateContext'
import { projects } from '../../../../components/jsonData/projects'

const PreviewPortfolioTemplate3 = () => {
  const [slidesPerView, setSlidesPerView] = useState(2)
  const {
    projectTemplate3,
    setProjectTemplate3,
    setSeeMoreproject3Preview,
    SeeMoreproject3Preview,
  }: any = useStateContext()
  console.log({ projectTemplate3 })
  // useEffect(() => {
  // useEffect(() => {
  //   setSeeMoreproject3Preview(PreviewPortfolioTemplate3)
  // }, [])

  // })
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (window.innerWidth <= 767) {
        // Adjust breakpoint as needed
        setSlidesPerView(1)
      } else if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        setSlidesPerView(1.5)
      } else {
        setSlidesPerView(2)
      }
    }
    window.addEventListener('resize', handleResize)
  })

  const { id } = useParams()
  console.log({ id })
  const subid = Number(id)
  console.log(window.innerWidth <= 767)

  return (
    <div>
      <div className='w-full sticky top-0  bg-[#05151d]    max-w-screen-xl mx-auto px-6  sm:py-12 md:px-4 lg:px-16 py-12'>
        <h1 className='text-[1.5rem] my-4 text-white sm:text-[2rem] '>Projects</h1>
        <div className='overflow-hidden '>
          <Swiper
            modules={[Navigation, Pagination, Parallax, Autoplay]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
          >
            <>
              {projects.map((project: any, index: any) => (
                <SwiperSlide
                  key={index}
                  className='flex flex-col w-[90%] justify-center items-center'
                >
                  <div className='overflow-hidden ml'>
                    <img className='aspect-video object-cover' src={project.image[0]} alt='' />
                    <p className='text-white text-[1.2rem] sm:text-[2rem] first-letter:uppercase'>
                      {project.title}
                    </p>

                    <div className='cursor-pointer w-fit'>
                      <Link to={`/seeMoreProject/${project.subid}`}>
                        <p className='text-[white] sm:text-base text-[0.87rem] decoration-[#2790C4] cursor-pointer'>
                          See more
                        </p>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PreviewPortfolioTemplate3
