import React, { ReactElement } from 'react'

import { useNavigate } from 'react-router-dom'
import PortfolioHomePage from '../../static/img/homeimage2.png'
import PortfolioHomePage2 from '../../static/img/habeebportfoliopic.jpg'
import { BiPhoneCall } from 'react-icons/bi'
import { MdOutlineAttachEmail } from 'react-icons/md'

// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

import { FaWhatsapp } from 'react-icons/fa'

import { useStateContext } from '../../context/stateContext'

function PortfolioHero3(): ReactElement {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // const classes = useStyles();

  const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // minWidth : "md",
    // width: "50%",
    height: 'auto',
    bgcolor: '#0C222D',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    width: '90% md:50%',
  }
  const { profilePortfolioForm, setShowModal, showModal }: any = useStateContext()
  console.log({ profilePortfolioForm })
  function downloadCV() {
    const blobUrl = profilePortfolioForm['CV'].fileUrl
    const filename = profilePortfolioForm['CV'].name

    const a = document.createElement('a')
    a.href = blobUrl
    a.download = filename

    document.body.appendChild(a)

    a.click()

    document.body.removeChild(a)
  }

  return (
    <div
      id='/portfolioPage'
      className='w-full max-w-screen-xl grid lg:grid-cols-2 lg:gap-[3rem] my-[3rem] lg:pb-16 lg:my-0  mx-auto px-6  sm:py-4 md:px-4 lg:px-16 py-2'
    >
      <div className='text-white lg:place-content-center '>
        <div className=''>
          {Object.keys(profilePortfolioForm).length > 0 ? (
            <h1 className='text-[1.5rem] sm:text-[3rem]  text-white font-medium leading-normal  '>
              Hi I’m {profilePortfolioForm['First_Name']} {profilePortfolioForm['Last_Name']}
            </h1>
          ) : (
            <h1 className='text-[1.5rem] sm:text-[3rem]  text-white font-medium leading-normal  '>
              Hi I’m Owoade Habeeb
            </h1>
          )}

          <p className='text-[#D4D4D4]  text-[1.25rem] font-normal leading-normal uppercase mt-[1px]'>
            {Object.keys(profilePortfolioForm).length > 0
              ? profilePortfolioForm['Job_Title'] && profilePortfolioForm['Job_Title'].toUpperCase()
              : 'Software Engineer'}
          </p>

          <p className='text-[#818181] leading-[1.75rem] sm:leading-[2.25rem] font-normal text-[1.125rem] mt-[20px]'>
            {Object.keys(profilePortfolioForm).length > 0
              ? profilePortfolioForm['Short_Description'] &&
                profilePortfolioForm['Short_Description']
              : 'I am a versatile software engineer with expertise in full-stack development and software architecture, combining a meticulous approach to coding with a focus on user experience and performance. I possess a deep understanding of various technologies and development methodologies, enabling me to deliver robust and scalable solutions while ensuring seamless integration and maintainability'}
          </p>
          <div className='flex sm:flex-row mt-8 flex-col gap-6'>
            {/* <button
              onClick={() => {
                setShowModal(true)
              }}
              className='text-[0.875rem] sm:text-[1.25rem] w-fit  font-normal  flex justify-center items-start flex-col py-[1.0625rem] px-[2.8125rem] rounded-lg  bg-[#2790C4] text-[#05151D] font-space  disabled:bg-white disabled:border-white'
            >
              {' '}
              Reach Out{' '}
            </button> */}
            {profilePortfolioForm['CV'] && profilePortfolioForm['CV'].fileUrl && (
              <button
                onClick={downloadCV}
                className='text-[0.875rem] sm:text-[1.25rem] w-fit font-normal  flex justify-center items-start flex-col py-[1.0625rem] px-[2.8125rem] rounded-lg  border-2  border-[#2790C4] text-[#2790C4] font-space  disabled:bg-white disabled:border-white'
              >
                {' '}
                Download CV{' '}
              </button>
            )}
          </div>
        </div>
      </div>
      <div className=''>
        <img
          className='w-[100%] p-6  sm:w-[60%] lg:w-full rounded-full md:h-[] md:w-[]'
          //   src={profilePortfolioForm['userImage']}
          src={
            Object.keys(profilePortfolioForm).length > 0
              ? profilePortfolioForm['userImage'] && profilePortfolioForm['userImage']
              : PortfolioHomePage2
          }
          alt="developer's image"
        />
      </div>
    </div>
  )
}

export default PortfolioHero3
