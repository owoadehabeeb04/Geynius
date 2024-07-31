import React from 'react'
import firstImage from '../../../src/static/img/firstImage.svg'
import secondimage from '../../../src/static/img/Secondimage.svg'
import thirdimage from '../../../src/static/img/thirdimage.svg'
const Semifooter = () => {
  //   const setUp = [
  //     {
  //       head: 'Select a Design ',
  //       sub: 'Select a porfolio style of your choice from the available designs.',
  //       image: firstImage,
  //     },
  //     {
  //       head: 'Select a Design ',
  //       sub: 'Select a porfolio style of your choice from the available designs.',
  //       image: firstImage,
  //     },
  //     {
  //       head: 'Select a Design ',
  //       sub: 'Select a porfolio style of your choice from the available designs.',
  //       image: firstImage,
  //     },
  //   ]
  return (
    <div className='  sm:flex flex-row justify-between items-center md:px-24 px-4 py-4'>
      <div>
        <h1 className='text-[#fff] font-FreizetTrial text-[1.5rem]  sm:text-[2.5rem] font-bold leading-[normal]'>
          Steps to settin up your Profile with us
        </h1>
        <p className='font-DMSans w-[95%] lg:w-[60%] text-[#fff] text-[1.125rem] font-normal leading-[2.125rem]'>
          Discover Geynius, a sleek and versatile product tailored for tech professionals.
          Streamline your portfolio with Geynius and standout in your industry
        </p>

        <div className='flex flex-row lg:ml-8   flex-wrap items-center gap-[3.5rem] mt-16 mb-24 '>
          <div className='firstStep flex-grow  flex flex-col px-8 pt-12 pb-10 w-fit sm:w-[20.875rem] h-[21rem] max-w-full'>
            <h1 className='text-[#fff]    font-DMSans text-[1.5rem] font-bold leadng-normal '>
              Select a Design
            </h1>
            <p className='text-[#939393] flex-grow   font-DMSans text-base leading-normal font-normal'>
              Select a porfolio style of your choice from the available designs.
            </p>
            <div className='bg-[#010101]      rounded-[0.75rem] p-4 w-fit'>
              <img src={firstImage} alt='' />
            </div>
          </div>
          <div className='secondStep flex-grow flex flex-col px-8 pt-12 pb-10 w-[20.875rem]  h-[21rem]  max-w-full'>
            <h1 className='text-[#fff]   font-DMSans text-[1.5rem] font-bold leadng-normal '>
              Provide all Details{' '}
            </h1>
            <p className='text-[#939393]  flex-grow  font-DMSans text-base leading-normal font-normal'>
              Provide all the necessary information requested and click next.{' '}
            </p>
            <div className='bg-[#010101]   rounded-[0.75rem] p-4 w-fit'>
              <img src={firstImage} alt='' />
            </div>
          </div>
          <div className='thirdStep flex-grow flex flex-col px-8 pt-12 pb-10 w-[29.25rem]  h-[21rem]  max-w-full'>
            <h1 className='text-[#fff]    font-DMSans text-[1.5rem] font-bold leadng-normal '>
              Publish your Portfolio{' '}
            </h1>
            <p className='text-[#939393]   flex-grow font-DMSans text-base leading-normal font-normal'>
              Select a porfolio style of your choice from the available designs.{' '}
            </p>
            <div className='bg-[#010101] rounded-[0.75rem] p-4 w-fit'>
              <img src={firstImage} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Semifooter
