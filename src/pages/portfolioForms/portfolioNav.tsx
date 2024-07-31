import React, { ReactElement, useState, useEffect } from 'react'
import ManagePortfolio from '../../static/img/ManagePortfolio.svg'
import portfolioNavLogo from '../../static/img/portfolioNavLogo.svg'
import hamburger from '../../static/img/hamburger.svg'
import { PortfolionavBarItems, managePages, navBarItems } from '../../constants'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import { useStateContext } from '../../context/stateContext'

function PortfolioNavBar(): ReactElement {
  const [showDropDown, setShowDropDown] = useState(false)
  const { setTemplateNav, setIndexPortfolio }: any = useStateContext()

  function handleClick(check: boolean) {
    setShowDropDown(check)
  }
  const handleNavChange = (name: string) => {
    setTemplateNav(name)
  }
  return (
    <div className='relative'>
      <div className='w-full shadow flex flex-row justify-between items-center md:px-20 px-4 py-4'>
        <div className='flex flex-row items-center'>
          <Link to='/'>
            <img src={portfolioNavLogo} alt='logo' />
          </Link>

          <p
            id='dropdownHoverButton'
            data-dropdown-toggle='dropdownHover'
            data-dropdown-trigger='hover'
            className='text-[10px] items-center justify-center pl-2 pr-1 text-[white] md:text-[18px] pl-9 pr-3'
            onClick={() => {
              if (showDropDown) {
                handleClick(false)
              } else {
                handleClick(true)
              }
            }}
            onMouseEnter={() => {
              if (showDropDown) {
                handleClick(false)
              } else {
                handleClick(true)
              }
            }}
          >
            {managePages}
          </p>
          <img
            src={ManagePortfolio}
            alt='logo'
            onClick={() => {
              if (showDropDown) {
                handleClick(false)
              } else {
                handleClick(true)
              }
            }}
            onMouseEnter={() => {
              if (showDropDown) {
                handleClick(false)
              } else {
                handleClick(true)
              }
            }}
          />
        </div>
        <Button
          text='Publish'
          activeBg='bg-[#30724C]'
          activeTextColor='font-space rounded-lg font-medium border-[1px] my-[-8px] w-[70px] h-[42px] text-white text-[9px] md:w-[147px] text-[12px]'
          // onClick={() => {}}
        />
      </div>
      <div
        id='dropdownHover'
        className={
          showDropDown
            ? 'z-10  bg-white divide-y transition-all divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-[-10px] absolute md:mx-20'
            : 'z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-[-10px] md:mx-20 hidden'
        }
        onMouseLeave={() => handleClick(false)}
      >
        <ul
          className='py-2 text-sm transition-all text-gray-700 dark:text-gray-200'
          aria-labelledby='dropdownHoverButton'
        >
          {PortfolionavBarItems.map(({ id, name }) => {
            return (
              <li key={id}>
                <p
                  className='block px-4 py-2 font-space hover:bg-[#ECFFF4] dark:hover:bg-gray-600 dark:hover:text-white'
                  onClick={() => {
                    handleNavChange(name)
                    setIndexPortfolio(id - 1)
                    handleClick(false)
                  }}
                >
                  {name}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PortfolioNavBar
