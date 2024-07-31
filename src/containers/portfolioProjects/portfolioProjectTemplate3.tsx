import React, { useEffect, useState } from 'react'
import ace from '../../static/img/ace.png'
import project2 from '../../static/img/4.png'
import photography from '../../static/img/photography.png'
import portfoliOImage from '../../static/img/portfolioimage1.png'
import { Navigation, Pagination, Parallax, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/parallax'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useStateContext } from '../../context/stateContext'
import { Link, useParams } from 'react-router-dom'
import { profile } from 'console'
const PortfolioProjectTemplate3 = () => {
  const { profilePortfolioForm }: any = useStateContext()
  console.log('projects', profilePortfolioForm)
  const projects = [
    {
      image: ace,
      title: 'Ace stores',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 1,
    },
    {
      image: project2,
      title: 'photography',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 2,
    },
    {
      image: photography,
      title: 'Photography',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 3,
    },
    {
      image: portfoliOImage,
      title: 'Ace stores',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 4,
    },
    {
      image: photography,
      title: 'Photography',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 5,
    },
    {
      image: portfoliOImage,
      title: 'Ace stores',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 6,
    },
    {
      image: ace,
      title: 'Ace stores',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 7,
    },
    {
      image: project2,
      title: 'Ace stores',
      shortDescription:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, officia sequi? Blanditiis maxime corporis, magnam illum odit neque delectus? Illum distinctio repellat facere neque debitis dignissimos doloremque beatae, labore recusandae assumenda harum obcaecati fugit facilis voluptate nemo perferendis eos deserunt!',
      githubLink: 'https:/github.com',
      live: 'hdgfsgs/hfdg',
      id: 8,
    },
  ]
  const [slidesPerView, setSlidesPerView] = useState(2)
  const { projectTemplate3, setProjectTemplate3 }: any = useStateContext()
  console.log({ projectTemplate3 })
  // useEffect(() => {

  // })
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      if (windowWidth <= 768) {
        // Adjust breakpoint as needed
        setSlidesPerView(1)
      } else if (windowWidth <= 1024 && windowWidth >= 768) {
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
  const theProjects = profilePortfolioForm['projects']
  console.log({ theProjects })
  const { setGoToSeeMoreProject, setGetId }: any = useStateContext()
  return (
    <div>
      <div className='w-full sticky top-0 z-50 bg-[#05151d]    max-w-screen-xl mx-auto px-6  sm:py-12 md:px-4 lg:px-16 py-12'>
        <h1 className='text-[1.5rem] my-4 text-white sm:text-[2rem] '>Projects</h1>
        <div className='overflow-hidden '>
          <Swiper
            modules={[Navigation, Pagination, Parallax, Autoplay]}
            spaceBetween={50}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
          >
            {Object.keys(profilePortfolioForm).length > 0 &&
              profilePortfolioForm.projects &&
              profilePortfolioForm.projects.length > 0 && (
                <>
                  {profilePortfolioForm.projects.map((project: any, index: any) => (
                    <SwiperSlide
                      key={index}
                      className='flex flex-col w-[90%] justify-center items-center'
                    >
                      <div className='overflow-hidden ml'>
                        <img className='aspect-video object-cover' src={project.image} alt='' />
                        <p className='text-white text-[1.2rem] sm:text-[2rem] first-letter:uppercase'>
                          {project.title}
                        </p>

                        <div className='cursor-pointer w-fit'>
                          <p
                            className='text-[white] decoration-[#2790C4] cursor-pointer'
                            onClick={() => {
                              setGetId(parseInt(project?.id))
                              setGoToSeeMoreProject(true)
                            }}
                          >
                            See more
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </>
              )}
            {Object.keys(profilePortfolioForm).length < 1 && (
              <>
                {projects.map((project: any, index: any) => (
                  <SwiperSlide
                    key={index}
                    className='flex flex-col w-[90%] justify-center items-center'
                  >
                    <div className='overflow-hidden ml'>
                      <img className='aspect-video object-cover' src={project.image} alt='' />
                      <p className='text-white text-[2rem] first-letter:uppercase'>
                        {project.title}
                      </p>

                      <div className='cursor-pointer w-fit'>
                        <p
                          className='text-[white] decoration-[#2790C4] cursor-pointer'
                          onClick={() => {
                            setGetId(parseInt(project?.id))
                            setGoToSeeMoreProject(true)
                          }}
                        >
                          See more
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default PortfolioProjectTemplate3
