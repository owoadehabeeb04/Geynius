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
function Hero(): ReactElement {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/portfolio')
  }
  // color: #FFF;
  // text-align: center;
  // font-family: "Freizeit Trial";
  // font-size: 3rem;
  // font-style: normal;
  // font-weight: 700;
  // line-height: 4.375rem; /* 145.833% */
  return (
    <div className='w-full flex flex-col justify-center items-center relative md:px-20 px-4 py-12'>
      <p className=' text-[1.875rem] sm:text-[3rem] font-bold font-FreizetTrial leading-[3.5rem] text-[#fff] text-center f md:w-2/3 md:text-5xl md:leading-[4.375rem] md:pt-8'>
        Transform your identity with a Portfolio
      </p>
      <p className='text-[#FFF] font-[400] font-DMSans lg:w-[63%] text-center text-base sm:text-[1.125rem] leading-[2.125rem] px-4'>
        Discover Geynius, a sleek and versatile app tailored for beauty professionals. Streamline
        your portfolio with this user-friendly and robust tool designed for standout presence in the
        industry{' '}
      </p>
      <img className='absolute sm:block hidden left-[17%] top-[22%]' src={herosvg1} alt='' />
      <img className='absolute sm:block hidden right-[17%] top-[55%]' src={herosvg2} alt='' />
      <img className='absolute sm:block hidden left-[8%] top-[60%]' src={herosvg3} alt='' />
      {/* 
      <Button
        text='Create a Profile'
        activeBg='bg-[#214E34] hover:bg-[#20A357]'
        width='w-1/2 md:w-[20%]'
        activeTextColor='text-[#ffffff]'
        onClick={handleClick}
      /> */}
      <button
        className='bg-[#20A357] buttonportfolio rounded-[1.9375rem] mt-[3rem] mb-[5rem] text-[#fff] text-[1.125rem] font-normal px-[3rem] py-[1.25rem] leading-[normal] '
        onClick={handleClick}
      >
        Create a Portfolio
      </button>
      <div>
        <div className='flex items-center mb-[4rem]'>
          <img className='translate-x-[0.7rem]  ' src={scroll1} alt='' />
          <img className='translate-y-[3rem]  cursor-pointer	' src={arrow} alt='' />
          <img className='translate-x-[-0.7rem]  ' src={scroll2} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero
