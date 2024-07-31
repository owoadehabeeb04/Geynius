import React, { Fragment } from 'react'
import { useStateContext } from '../../context/stateContext'

const PortfolioSkillsTemplate3 = () => {
  const { profilePortfolioForm, setShowModal, showModal }: any = useStateContext()
  console.log({ profilePortfolioForm })
  console.log('skills', profilePortfolioForm?.skills)
  return (
    <div>
      <div className='w-full bg-[#2790C4] px-6 py-12 '>
        {Object.keys(profilePortfolioForm).length > 0 ? (
          <div className='flex flex-row flex-wrap justify-center gap-2 sm:gap-12  '>
            {profilePortfolioForm['skills'] &&
              profilePortfolioForm['skills'].map((skill: any, i: any) => (
                <Fragment key={i}>
                  <div className=' text-[1.5rem] text-container  flex flex-row gap-2 sm:gap-12  flex-wrap justify-center '>
                    <p className='text-[#05151D] rotate-[90] flex-wrap justify-center flex flex-row slanted-text    transition-all  font-semibold uppercase'>
                      {skill?.name}
                    </p>
                  </div>
                </Fragment>
              ))}
          </div>
        ) : (
          <div className='text-[0.75rem] md:text-[1.1rem]  lg:text-[1.5rem] text-container  flex flex-row gap-4 sm:gap-12  flex-wrap justify-center '>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>React</p>
            <p className='text-[#05151D] font-semibold slanted-text uppercase'>Supabase</p>
            <p className='text-[#05151D] font-semibold slanted-text uppercase'>Typescript</p>
            <p className='text-[#05151D] font-semibold slanted-text uppercase'>JavaScript</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>Vanilla CSS</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>TailwindCSS</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>Bootstrap</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>Firebase</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>Python</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>MySQL</p>

            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>React</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>Supabase</p>
            <p className='text-[#05151D] font-semibold slanted-text  uppercase'>Typescript</p>
            <p className='text-[#05151D] font-semibold slanted-text  uppercase'>JavaScript</p>
            <p className='text-[#05151D] font-semibold  slanted-text uppercase'>Vanilla CSS</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PortfolioSkillsTemplate3
