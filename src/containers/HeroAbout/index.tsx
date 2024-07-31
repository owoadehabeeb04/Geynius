import React, { ReactElement } from 'react'
import Button from '../../components/Button'
import { FaDotCircle } from 'react-icons/fa'
import { heroItems } from '../../constants'
import Line from '../../static/img/line.svg'
import { useNavigate } from 'react-router-dom'
import herosvg1 from '../../../src/static/img/hero1.svg'
import herosvg2 from '../../../src/static/img/herosvg2.svg'
import herosvg3 from '../../../src/static/img/herosvg3.svg'
import scroll1 from '../../../src/static/img/scroll1.svg'
import scroll2 from '../../../src/static/img/scroll2.svg'
import arrow from '../../../src/static/img/arrowscroll.svg'
function HeroAbout(): ReactElement {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/products')
  }
  // color: #FFF;
  // text-align: center;
  // font-family: "Freizeit Trial";
  // font-size: 3rem;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 4.375rem; /* 145.833% */
  return (
    <div className='w-full flex flex-col justify-start items-start relative md:px-20 px-4 py-12 mb-[10rem]'>
      <h1 className='text-white font-DMSans text-[1.125rem] font-normal leading-[2.125rem]'>
        ABOUT
      </h1>
      <p className=' text-[3rem] font-bold font-FreizetTrial leading-[3.5rem] text-[#fff]  f md:w-2/3 md:text-5xl md:leading-[4.375rem] md:pt-8'>
        We understand the unique journey of developers, designers, and tech enthusiasts,{' '}
      </p>
      <div className='radialAbout absolute left-[-25rem] top-[5rem]'></div>
      <img className='absolute right-[17%] top-[55%]' src={herosvg2} alt='' />
      <img className='absolute opacity-[0.1]    left-[17%] top-[15%]' src={herosvg1} alt='' />{' '}
      <img className='absolute opacity-[0.1]  left-[8%] top-[60%]' src={herosvg3} alt='' />
      <div className='flex justify-center items-center mx-auto mt-16'>
        <div className='flex items-center mb-[4rem]'>
          <img className='translate-x-[0.7rem]  ' src={scroll1} alt='' />
          <img className='translate-y-[3rem]  cursor-pointer	' src={arrow} alt='' />
          <img className='translate-x-[-0.7rem]  ' src={scroll2} alt='' />
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
