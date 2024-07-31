import React from 'react'
import Footer from '../../containers/Footer'
import NavBar from '../../containers/NavBar'

import CornerImage from '../../components/CornerImage'
import {
  SetUpPortfolioHeader1Text,
  SetUpPortfolioHeader2Text,
  livePreview,
  portfolioSamples,
  useTemplate,
} from '../../constants'
import { Rating } from 'react-simple-star-rating'
import Star from '../../components/star'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../context/stateContext'
function SetUpPortfolio() {
  const { profilePortfolioForm, setProfilePortfolioForm, params }: any = useStateContext()
  const handleFormChange = (id: string) => {
    setProfilePortfolioForm({
      ...profilePortfolioForm,
      template: id,
    })
    handleClick()
  }
  const navigate = useNavigate()

  function handleClick() {
    navigate('/portfolioForm')
  }
  return (
    <div className='w-full relative bg-[#010101] font-primary'>
      <CornerImage color='#F3FFF9' otherClass='absolute top-0 right-0 z-[-1]' />
      <NavBar />
      <div className='w-full flex flex-col justify-center items-center  md:px-20 px-4 py-12'>
        <p className='font-syne text-lg leading-[3.5rem] font-bold drop-shadow-lg text-white text-center md:w-2/3 md:text-4xl md:leading-[4rem] md:pt-8'>
          {SetUpPortfolioHeader1Text}
        </p>
        <p className='text-[white] font-normal font-space text-center  px-4 text-xs md:text-lg drop-shadow-lg shadow-black'>
          {SetUpPortfolioHeader2Text}
        </p>
        <div className='flex flex-wrap items-center justify-center sm:grid   grid-cols-2 lg:grid-cols-3  gap-4 py-10'>
          {portfolioSamples.map(
            ({ id, useTemplate, boldText, name, star, rating, img, url }, i) => {
              return (
                <div className='rounded-xl  w-full shadow-4xl py-5' key={i}>
                  <div className='[bg-[#010101]  flex flex-col rounded-xl shadow-md'>
                    <img
                      src={img}
                      alt='setUpPortfolio image'
                      className='h-[300px] object-cover flex-grow rounded w-full '
                    />
                    <p className='text-[white]   px-4 pt-4 text-xs md:text-base drop-shadow-lg shadow-black'>
                      {boldText}
                    </p>
                    <p className='text-[#818181] font-space px-4 text-[10px] md:text-[10px] drop-shadow-lg shadow-black'>
                      {name}
                    </p>
                    <div className='flex  px-3 pt-1'>
                      {Array(Math.floor(rating))
                        .fill(0)
                        .map((i) => {
                          return <Star key={i} activeColor='text-yellow-400' />
                        })}
                      {Array(5 - Math.floor(rating))
                        .fill(0)
                        .map((i) => {
                          return <Star key={i} activeColor='text-[#DADADA]' />
                        })}
                      <p className='text-[10px] w-5 h-5 text-[#DADADA] pt-1 px-1'>{star}</p>
                    </div>
                    <div className='flex w-full px-4 mt-[-12px] items-center'>
                      <Link to={`/${id}`}>
                        <Button
                          text={livePreview}
                          activeBg='bg-[#30724C]'
                          activeTextColor='font-space text-[14px] rounded-lg font-medium border-[1px] w-[127px] h-[40px] text-white md:w-[147px] h-[42px]'
                          // onClick={() => {}}
                        />
                      </Link>
                      <p
                        onClick={() => {
                          handleFormChange(useTemplate)
                        }}
                        className='text-[11px] px-4 h-5 cursor-pointer text-[#818181] items-center md:text-[14px]'
                      >
                        Use this template
                      </p>
                    </div>
                  </div>
                </div>
              )
            },
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SetUpPortfolio
