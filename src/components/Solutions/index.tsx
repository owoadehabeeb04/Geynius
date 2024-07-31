import React, { useState, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { ImSpinner2 } from 'react-icons/im'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

type SolutionProps = {
  header: string
  subheader: string
  imgtext: string
  img2text: string
  subImgtext?: string
  subImg2text?: string
  myImage: string
  myImage2: string
  id: string
  slide: {
    name: string
    image: string
    title: string
  }[]
}
// (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
const Solution: React.FC<SolutionProps> = ({
  header,
  subheader,
  imgtext,
  img2text,
  subImg2text,
  subImgtext,
  myImage,
  myImage2,
  id,
  slide,
}) => {
  const [current, setCurrent] = useState(0)
  const length = slide && slide?.length
  const timeout = useRef(null)
  const slideLeft = () => {
    const slider = document.getElementById('slider')
    slider!.scrollLeft = slider!.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    slider!.scrollLeft = slider!.scrollLeft + 500
  }

  const nextSlide = () => {
    console.log(length)
    // setCurrent(current === length - 1 ? 0 : current + 1)
  }
  return (
    <div id={id} className='mt-6 overflow-hidden h-[800px] md:h-auto md:py-[10%] '>
      <div className='text-white  md:w-[65%] mx-auto px-[40px]'>
        <h1 className='text-[30px]'>{header}</h1>
        <p className='text-[#818181]'>{subheader}</p>

        <div className='relative flex items-center'>
          {/* <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} /> */}
          <div
            id='slider'
            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scrollbar-hide scroll-smooth md:scrollbar-hide '
          >
            {slide &&
              slide.map(({ name, image, title }, index) => (
                <div
                  key={index}
                  className='w-[80%] h-[220px] m-6 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 scrollbar-hide md:gap-[10%] md:w-[40%]'
                >
                  <img className='w-[100%] h-[100%] object-cover' src={image} alt='/' />
                  <p className='mt-4'>{name != null ? name.toUpperCase() : title.toUpperCase()}</p>
                </div>
              ))}
          </div>
          {/* <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} /> */}
        </div>
        <div className='relative '>
          <div
            className='absolute right-0 flex flex-row gap-4 mt-6 justify-content-center align-items-center hover:cursor-pointer'
            onClick={slideRight}
          >
            <p>see more</p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ipsum, quod quidem
            rem magnam incidunt facilis in odit, tenetur excepturi voluptate? Dolores, incidunt
            magni? Asperiores assumenda vel voluptatibus velit quas?
            <BsArrowRight size='23px' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
