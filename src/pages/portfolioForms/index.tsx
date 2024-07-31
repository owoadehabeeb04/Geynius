import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/stateContext'
import PortfolioNavBar from './portfolioNav'
import Footer from '../../containers/Footer'
import Button from '../../components/Button'
import Portfolio from './home_portfolio'
import HollowButton from '../../components/HollowButton'
import {
  Back,
  editDetails,
  nextPage,
  PortfolionavBarItems,
  Preview,
  Reset,
  livePreview,
  submit,
} from '../../constants'
import Skills from './skills'
import Projects from './projects'
import Services from './services'
import Contact from './contact'
import { savePortfolio } from '../../api'
import PortfolioDesigns from '../../portfolioDesigns'
// eslint-disable-next-line no-duplicate-imports
import HomePagePortfolio from './home_portfolio'

const index = () => {
  const {
    templateNav,
    params,
    setTemplateNav,
    setIndexPortfolio,
    indexPortfolio,
    profilePortfolioForm,
  }: any = useStateContext()
  const [isSubmit, setIsSubmit] = useState(false)
  useEffect(() => {
    return () => {
      setIndexPortfolio(0)
    }
  }, [])

  return (
    <div className='bg-[#010101]'>
      <PortfolioNavBar />
      <div className='   py-3 md:px-20 px-4 pt-4 pb-40 '>
        <div className='w-full  pb-4 flex flex-row justify-between md:py-4'>
          <p></p>
          <div className='right-0  '>
            <div className='flex flex-row justify-between mt-[-30px] px-1 md:mt-[-30px] '>
              <div>
                {indexPortfolio != 5 ? (
                  <Button
                    text={editDetails}
                    textStyle='text-[10px] md:text-[12px]'
                    width='w-[75px] md:w-[117px]'
                    activeBg='bg-[#214E34] text-[7px] md:text-[12px]'
                    activeTextColor='font-space text-[8px] rounded-lg font-medium border-[1px] border-[#FFFFFF]  h-[32px] text-[#214E34] md:h-[34px] text-[12px]'
                    onClick={() => {
                      setIndexPortfolio(0)
                      console.log('clicked')
                      setTemplateNav(PortfolionavBarItems[0].name)
                    }}
                  />
                ) : (
                  <Button
                    text={editDetails}
                    width='w-[70px] md:w-[117px]'
                    textStyle='text-[10px] md:text-[12px]'
                    activeBg='bg-[#214E34] text-[7px] md:text-[12px]'
                    activeTextColor='font-space text-[8px] rounded-lg font-medium h-[34px] text-[#000000] md:h-[32px] text-[12px]'
                    onClick={() => {
                      setIndexPortfolio(0)
                      setTemplateNav(PortfolionavBarItems[0].name)
                    }}
                  />
                )}
              </div>
              {/* {indexPortfolio != 5 ? (
                <Button
                  text={Preview}
                  width='w-[70px] md:w-[117px]'
                  textStyle='text-[10px] md:text-[12px]'
                  activeBg='bg-[#30724C] text-[7px] md:text-[12px]'
                  activeTextColor='font-space text-[8px] rounded-lg font-medium h-[34px] text-[white] md:h-[32px] text-[12px]'
                  onClick={() => {
                    // setIndexPortfolio(5)
                    // setTemplateNav(PortfolionavBarItems[5].name)
                    console.log('clickedsss')
                  }}
                />
              ) : (
                <Button
                  text={Preview}
                  textStyle='text-[10px] md:text-[12px]'
                  width='w-[75px] md:w-[117px]'
                  activeBg='bg-[#FFFFFF] text-[7px] md:text-[12px]'
                  activeTextColor='font-space text-[8px] rounded-lg font-medium border-[1px] border-[#FFFFFF]  h-[32px] text-[#214E34] md:h-[34px] text-[12px]'
                  onClick={() => {
                    setIndexPortfolio(5)
                    setTemplateNav(PortfolionavBarItems[5].name)
                    console.log('clicked')
                  }}
                />
              )} */}
            </div>
          </div>
        </div>
        <div className='w-full h-[30px] bg-[#214E34] flex  items-center rounded-lg md:h-[40px]'>
          <p className='text-[#fff] text-[12px] font-space px-3 items-center justify-center pt-1 md:text-[18px]'>{`Template > ${templateNav} >`}</p>
        </div>
        {indexPortfolio == 5 && <div className='h-10'></div>}
        {(() => {
          switch (indexPortfolio) {
            case 0:
              return <HomePagePortfolio />
            case 1:
              return <Skills />
            case 2:
              return <Projects />
            case 3:
              return <Services />
            case 4:
              return <Contact />
            case 5:
              return <PortfolioDesigns />
          }
        })()}

        <div className='flex flex-row justify-center items-center'>
          <HollowButton
            text={Back}
            width='w-[102px]'
            activeBorder={
              templateNav == 'Homepage'
                ? 'border-[#214e34] opacity-20'
                : params['portfolio'].buttonColor
            }
            activeText={`font-space text-[12px] rounded font-medium border-[1px] h-[47px] ${params['portfolio'].textColor} md:text-sm `}
            onClick={() => {
              if (indexPortfolio != 0) {
                setIndexPortfolio(indexPortfolio - 1)
                setTemplateNav(PortfolionavBarItems[indexPortfolio - 1].name)
              }
            }}
          />
          {indexPortfolio == 5 ? (
            <div className='w-10'></div>
          ) : (
            <Button
              text={templateNav != 'Contact' ? nextPage : submit}
              activeBg='bg-[#30724C]'
              activeTextColor='font-space text-[12px] rounded font-medium border-[1px] w-[153px] h-[48px] mx-10 mt-14 text-white md:text-[14px]'
              isSubmit={isSubmit}
              onClick={async () => {
                if (indexPortfolio != 4) {
                  setIndexPortfolio(indexPortfolio + 1)
                  setTemplateNav(PortfolionavBarItems[indexPortfolio + 1].name)
                } else {
                  setIsSubmit(true)
                  console.log('working oooo')
                  await savePortfolio(
                    profilePortfolioForm,
                    JSON.parse(localStorage.getItem('user')!).email,
                  )
                  setIsSubmit(false)
                  setIndexPortfolio(indexPortfolio + 1)
                  setTemplateNav(PortfolionavBarItems[5].name)
                }
              }}
            />
          )}
          <HollowButton
            text={Reset}
            width='w-[102px]'
            activeBorder={params['portfolio'].buttonColor}
            activeText={`font-space text-[12px] rounded h-[47px] font-medium border-[1px] w-[102px] ${params['portfolio'].textColor} md:text-sm`}
            onClick={() => {
              setIndexPortfolio(0)
              setTemplateNav(PortfolionavBarItems[0].name)
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index
