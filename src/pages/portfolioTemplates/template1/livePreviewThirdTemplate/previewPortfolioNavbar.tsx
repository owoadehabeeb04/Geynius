import React, { ReactElement, useState, useEffect, Fragment } from 'react'

import hamburger from '../../../../static/img/hamburger3.svg'
import { Link } from 'react-router-dom'
import { Link as NavLinks } from 'react-scroll'
import { PortfolioNavBarItems } from '../../../../constants'
// import { useStateContext } from '../../context/stateContext'

function PortfolioNavbarPreview3(): ReactElement {
  const [showDropDown, setShowDropDown] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    if (width > 768) {
      setShowDropDown(false)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleClick = () => {
    setShowDropDown(!showDropDown)
  }
  return (
    <Fragment>
      <div className='w-full sticky top-0 z-50 bg-[#05151d] flex flex-row justify-between items-center   max-w-screen-xl mx-auto px-6  sm:py-4 md:px-4 lg:px-16 py-2'>
        <Link to='#'>
          <h1 className='uppercase text-[1.2rem] text-white sm:text-[2rem] '>
            {/* {profilePortfolioForm['First_Name']}
        <span className='text-[#2790C4]'>{profilePortfolioForm['Last_Name']}</span> */}
            HABEEB<span className='text-[#2790C4]'>DEV</span>
          </h1>
        </Link>
        <img
          src={hamburger}
          alt='hamburger'
          className='md:hidden flex text-[white]'
          onClick={handleClick}
        />
        <div
          className={` ${
            showDropDown
              ? 'absolute bg-[#05151d] top-12 drop-shadow-md py-4 w-[120px] right-4 grid-cols-1 gap-4 grid'
              : 'hidden md:col-span-2 md:grid md:grid-cols-5 md:gap-[40px]'
          }`}
        >
          {PortfolioNavBarItems.map(({ id, route, name, offset, duration }: any) => {
            return (
              <NavLinks
                key={id}
                to={route}
                spy={true}
                smooth={true}
                offset={offset}
                duration={duration}
                activeClass='border-b-2 border-[white] text-white font-semibold'
                className='bg-[#05151d] cursor-pointer hover:text-white text-[1.125rem] text-center  text-[#818181] active:border-b-2 active:border-[white] active:text-[white] active:font-bold'
                // className={({ isActive }) => `text-sm text-center pb-4 text-white ${isActive ? "border-b-2 border-[#2790C4] text-[#2790C4] font-bold" : null} `}
              >
                {name}
              </NavLinks>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}

export default PortfolioNavbarPreview3
