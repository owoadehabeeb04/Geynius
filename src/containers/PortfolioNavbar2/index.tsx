import React, { ReactElement, useState, useEffect } from 'react'
import mobileLogo from '../../static/img/navbar_logo_mobile.svg'
import profileLogo from '../../static/img/logo.png'
import hamburger from '../../static/img/hamburger.svg'
import { PortfolioNavBarItems } from '../../constants'
import { NavLink, Link } from 'react-router-dom'
import { Link as NavLinks } from 'react-scroll'

function PortfolioNavBar2(): ReactElement {
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
    <div className='w-full sticky top-0 z-50 bg-black flex flex-row justify-between items-center md:px-20 px-4 py-4 md:grid md:grid-cols-4'>
      <Link to='/'>
        <p className='text-white font-medium text-[2rem]'>Polio</p>
      </Link>
      <img
        src={hamburger}
        alt='hamburger'
        className='md:hidden flex text-[#FFA84B]'
        onClick={handleClick}
      />
      <div
        className={` ${
          showDropDown
            ? 'absolute bg-black top-12 drop-shadow-md py-4 w-[120px] right-4 grid-cols-1 gap-4 grid'
            : 'hidden md:col-span-2 md:grid md:grid-cols-5 md:gap-[80px]'
        }`}
      >
        {PortfolioNavBarItems.map(({ id, route, name, offset, duration }) => {
          return (
            <NavLinks
              key={id}
              to={route}
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
              activeClass='border-b-2 border-[#FF8A56] text-white font-semibold'
              className='bg-black text-sm text-center pb-4 text-white active:border-b-2 active:border-[#FF8A56] active:text-[#FF8A56] active:font-bold'
              // className={({ isActive }) => `text-sm text-center pb-4 text-white ${isActive ? "border-b-2 border-[#2790C4] text-[#2790C4] font-bold" : null} `}
            >
              {name}
            </NavLinks>
          )
        })}
      </div>
    </div>
  )
}

export default PortfolioNavBar2
