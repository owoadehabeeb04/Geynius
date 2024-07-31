import React, { ReactElement, useState, useEffect } from 'react'
import mobileLogo from '../../static/img/navbar_logo_mobile.svg'
import hamburger from '../../static/img/hamburger.svg'
import { navBarItems } from '../../constants'
import { Link } from 'react-router-dom'

function NavBar(): ReactElement {
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
    <div className='w-full  flex flex-row justify-between items-center md:px-20 px-4 py-4'>
      <Link to='/'>
        <img src={mobileLogo} alt='logo' />
      </Link>
      <img src={hamburger} alt='hamburger' className='md:hidden flex' onClick={handleClick} />
      <div
        className={` z-[100] ${
          showDropDown
            ? 'absolute top-12 bg-[#214E34] drop-shadow-md  py-4 pl-4 w-[120px] right-4 grid-cols-1 gap-4 grid '
            : 'grid-cols-4 gap-4 hidden md:grid'
        }`}
      >
        {navBarItems.map(({ id, route, name }) => {
          return (
            <Link
              key={id}
              to={route}
              className='text-[#818181] hover:text-[#fff]  text-[1.125rem] font-normal leading-[normal] '
            >
              {name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar
