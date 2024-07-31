import React, { ReactElement } from 'react'

import { useNavigate } from 'react-router-dom'
import PortfolioHomePage from '../../static/img/homeimage2.png'
import { BiPhoneCall } from 'react-icons/bi'
import { MdOutlineAttachEmail } from 'react-icons/md'

// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

import { FaWhatsapp } from 'react-icons/fa'

import { useStateContext } from '../../context/stateContext'

function PortfolioHero(): ReactElement {
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
  return (
    <div
      id='/portfolioPage'
      className='w-full flex flex-col justify-center items-center md:grid md:grid-cols-2 md:h-screen'
    >
      <div className='text-white'>
        <div className='w-[100%] md:float-right md:w-[50%]'>
          <h1 className='text-[25px] '>
            Hi I’m {profilePortfolioForm['First_Name']} {profilePortfolioForm['Last_Name']}
          </h1>
          <p className='text-[18px] mt-[15px]'>
            {profilePortfolioForm &&
              profilePortfolioForm['Job_Title'] &&
              profilePortfolioForm['Job_Title'].toUpperCase()}
          </p>
          <p className='text-[#818181] mt-[20px]'>{profilePortfolioForm['Short_Description']}</p>
          <button
            onClick={() => {
              setShowModal(true)
            }}
            className='text-sm rounded-lg mt-8 bg-[#2790C4] text-white font-space h-[50px] w-[220px] disabled:bg-white disabled:border-white'
          >
            {' '}
            Reach Out{' '}
          </button>
        </div>
      </div>
      <div className='col-start-2 w-[] '>
        <img
          className='w-[100%] p-6  rounded-full md:h-[50%] md:w-[50%]'
          src={profilePortfolioForm['userImage']}
          alt="developer's image"
        />
      </div>

      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-[90%]  my-6 mx-auto max-w-3xl md:w-[50%]'>
              {/* content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#0C222D] outline-none focus:outline-none p-6'>
                {/* header*/}
                <div className='items-end '>
                  <button
                    className='bg-transparent border-0 text-black float-right '
                    onClick={() => setShowModal(false)}
                  >
                    <span className='text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 mt-0 py-0 rounded-full items-center'>
                      x
                    </span>
                  </button>
                </div>
                <div className='flex flex-col items-center justify-between p-5 pb-2 '>
                  <p className='text-white text-center text-base font-bold' id='modal-modal-title'>
                    Reach Out Now
                  </p>
                  <p className='text-white text-center text-[12px]' id='modal-modal-description'>
                    You could leave a message for me here?
                  </p>
                </div>
                {/* body*/}
                <div className='relative p-6 flex-auto'>
                  <div className='relative w-full'>
                    <textarea
                      placeholder='what message would you like to drop for me'
                      className='bg-[#0C222D] w-[100%] h-[200px] mt-[5%] '
                    />
                    <button className='absolute w-[30%] right-[50%] bottom-4 md:right-2 text-white border-1 bg-[#1A3542] md:w-[20%] h-[40px] rounded-md'>
                      Send
                    </button>
                  </div>
                </div>
                {/* footer*/}
                <div className='md:grid md:grid-cols-3 border-red  md:h-[70px] gap-y-4 md:gap-[5%]'>
                  <div className='bg-[#1A3542] border-1 rounded-lg flex justify-content-center items-center mt-[5%]'>
                    <p className='text-white text-[12px] mx-auto flex justify-content-center items-center gap-[10%] '>
                      <FaWhatsapp color='#25D366' size={32} />
                      Whatsapp
                    </p>
                  </div>
                  <div className='bg-[#1A3542] border-1 rounded-lg text-center flex justify-content-center items-center mt-[5%]'>
                    <p className='text-white text-[12px] mx-auto w-[50%] flex justify-content-center items-center gap-[0%]'>
                      <BiPhoneCall size={22} />
                      Mobile Phone
                    </p>
                  </div>
                  <div className='bg-[#1A3542] border-1 rounded-lg flex justify-content-center items-center mt-[5%]'>
                    <p className='text-white text-[12px] mx-auto flex justify-content-center items-center gap-[0%]'>
                      <MdOutlineAttachEmail size={22} />
                      Email Address
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </div>
  )
}

export default PortfolioHero
