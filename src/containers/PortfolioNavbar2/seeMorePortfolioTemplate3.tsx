import React, { useEffect, useState } from 'react'
import PortfolioNavBar3 from './portfolioNavbarTemplate3'
import { useStateContext } from '../../context/stateContext'
import { useNavigate, useParams } from 'react-router-dom'
import Template3Footer from '../../pages/portfolioTemplates/template1/portfolioTemplate3Footer'

const SeeMorePortfolioTemplate3 = () => {
  const navigate = useNavigate()
  const { getId, setGoToSeeMoreProject }: any = useStateContext()
  console.log({ getId })
  const { profilePortfolioForm }: any = useStateContext()
  console.log('projectssssss', profilePortfolioForm.projects)
  const filteredProject =
    profilePortfolioForm &&
    profilePortfolioForm &&
    profilePortfolioForm !== undefined &&
    profilePortfolioForm.projects.filter(
      (project: { id: number }) => project?.id === parseInt(getId),
    )
  const [index, setIndex] = useState(0)
  console.log(filteredProject)

  console.log(profilePortfolioForm.projects)
  return (
    <div>
      <div className='bg-[#05151d] JOST'>
        <PortfolioNavBar3 />
        <div className='max-w-screen-xl mx-auto px-6  sm:py-4 md:px-4 lg:px-16 py-2'>
          {' '}
          <button
            className='bg-[#05151d] text-white text-[1.5rem] '
            onClick={() => setGoToSeeMoreProject(false)}
          >
            Back
          </button>
        </div>
        {profilePortfolioForm && filteredProject && (
          <div className='py-[1rem] sm:px-0 px-6 flex gap-4 sm:gap-8 justify-center items-center flex-col'>
            <div className='w-[700px] max-w-full'>
              <div className='w-full      '>
                <img
                  className='w-full   aspect-video rounded-xl object-cover'
                  src={filteredProject && filteredProject[0].image[index]}
                  alt=''
                />
              </div>
              <div className='flex justify-between w-full  mt-8 flex-row  gap-4 '>
                {filteredProject[0]?.image.map((img: string | undefined, i: number) => (
                  <>
                    {' '}
                    {img !== '' && (
                      <div className='w-full ' onClick={() => setIndex(i)}>
                        <img
                          className='w-full cursor-pointer aspect-video  rounded-xl object-cover'
                          src={img}
                          alt=''
                        />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
            <h1 className='mt-4 sm:mt-[1rem] text-center font-medium text-white text-[2rem] sm:text-[3rem] first-letter:uppercase'>
              {filteredProject[0]?.title}
            </h1>
            <div className='w-full  sm:w-[80%] md:w-[60%] '>
              <p className='text-[grey] text-base sm:text-[1.2rem] leading-[124%] text-center'>
                {filteredProject[0]?.projectDescription && filteredProject[0]?.projectDescription}
              </p>
            </div>
            <div className='flex sm:flex-row flex-col sm:w-fit w-full mt-8 gap-2 sm:gap-6'>
              <a href={filteredProject[0]?.github && filteredProject[0]?.githubLink}>
                <button className='text-[0.875rem] text-center sm:text-[1.25rem] w-full sm:w-fit  font-normal  flex justify-center items-center sm:items-start flex-col py-[1.0625rem] px-[2.8125rem] rounded-lg border-2  bg-[#2790C4] text-[#05151D] border-[#2790C4]'>
                  {' '}
                  View Code
                </button>
              </a>
              <a href={filteredProject[0]?.liveLink && filteredProject[0]?.liveLink}>
                <button className='text-[0.875rem] text-center sm:text-[1.25rem] w-full sm:w-fit font-normal  flex justify-center items-center  sm:items-start flex-col py-[1.0625rem] px-[2.8125rem] rounded-lg  border-2  border-[#2790C4] text-[#2790C4] font-space  disabled:bg-white disabled:border-white'>
                  {' '}
                  View Live
                </button>
              </a>
            </div>
          </div>
        )}
        <Template3Footer />
      </div>
    </div>
  )
}

export default SeeMorePortfolioTemplate3
