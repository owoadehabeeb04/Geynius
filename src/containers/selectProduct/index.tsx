import React from 'react'
import { selectProductHeader1Text, selectProductHeader2Text, selectProducts } from '../../constants'
import { Text } from '../../components/Text'
import HollowButton from '../../components/HollowButton'
import { useNavigate } from 'react-router-dom'
function SelectProductBody() {
  const navigate = useNavigate()

  function handleClick(url: string) {
    navigate(`/${url}`)
  }
  return (
    <div className='w-full flex flex-col justify-center items-center b-50 md:px-20 px-4 py-12'>
      <p className='font-syne text-lg leading-[3.5rem] font-bold drop-shadow-lg shadow-black text-center md:w-2/3 md:text-4xl md:leading-[4rem] md:pt-8'>
        {selectProductHeader1Text}
      </p>
      <p className='text-[#818181] font-space text-center  px-4 text-xs md:text-lg drop-shadow-lg shadow-black'>
        {selectProductHeader2Text}
      </p>
      <div className='flex flex-wrap items-center justify-center md:mb-20'>
        {selectProducts.map(({ id, boldText, text, buttonText, color, img, url }) => {
          return (
            <div
              className='w-[300px] my-4 flex flex-col justify-center items-center md:p-10'
              key={id}
            >
              <div className='w-[41px] h-[48px] justify-center'>
                <img src={img} alt='selectProduct image' width={41} />
              </div>
              <Text
                font='font-syne'
                text={boldText}
                size='text-lg md:text-xl mt-2 font-bold'
                color='text-black'
              />
              <Text
                font='font-space'
                text={text}
                size='text-[11px] mt-2 font-bold'
                color='text-[#818181]'
              />
              <HollowButton
                text={buttonText}
                activeBorder={color}
                activeText='font-space text-sm font-bold'
                onClick={() => {
                  handleClick(url)
                }}
              />
            </div>
          )
        })}
      </div>
      <div className='h-20'></div>
    </div>
  )
}

export default SelectProductBody
