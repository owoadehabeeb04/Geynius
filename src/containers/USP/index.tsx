import React, { ReactElement } from 'react'

import { Text } from '../../components/Text'
import { uspArr, uspBoldText, uspSmallText } from '../../constants'

function USP(): ReactElement {
  return (
    <div className=' pt-[3rem] pb-[3rem] sm:pt-[6rem] sm:pb-[6rem]'>
      <div className='flex flex-col justify-center items-center backgroundGenius sm:w-[73rem] max-w-full px-4 sm:px-8 mx-4 sm:mx-auto   py-4 sm:py-[3rem]'>
        <h1 className='text-[#fff] text-center font-FreizetTrial text-[1.875rem]  sm:text-[3rem] font-bold leading-normal'>
          See how Geynius can help
        </h1>{' '}
        <p className='text-[#fff] text-center font-normal pt-2 sm:pt-4 sm:leading-[2.125rem] text-base sm:text-[1.25rem] font-DMSans'>
          Our service is open source, hence free and available to all
        </p>
        <button className='bg-[#20A357] buttonportfolio rounded-[1.9375rem] mt-4 sm:mt-[3rem]  w-fit text-[#fff] text-[1.125rem] font-normal px-[3rem] py-[1.25rem] leading-[normal] '>
          Create a Portfolio
        </button>
      </div>
    </div>
  )
}

export default USP
