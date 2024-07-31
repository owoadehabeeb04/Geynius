import React, { ReactElement } from 'react'
import mobileLogo from '../../static/img/navbar_logo_mobile.svg'
import geniusLogo from '../../static/img/geyniusLogo.svg'
import whatsapp from '../../static/img/whatsapp.svg'
import mobilephone from '../../static/img/mobilephone.svg'
import email from '../../static/img/emailAddress.svg'
import { Text } from '../../components/Text'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { MdFacebook } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import {
  socialMediaArr,
  footerProducts,
  footerCompany,
  footerLegal,
  footerContact,
  copyRight,
} from '../../constants'

function Footer(): ReactElement {
  const geyniusLogo = (
    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none'>
      <rect width='40' height='40' rx='6.66667' fill='url(#paint0_linear_1627_524)' />
      <path
        d='M14.7573 10.8741C18.9115 7.72876 23.2074 8.3007 28.0907 10.3741L23.5907 17.5408C19.5376 16.2345 17.4396 17.1111 16.2573 19.8741C15.6428 21.3103 15.6759 22.4243 16.2573 23.8741C17.052 25.8558 18.7311 26.8894 20.5907 27.2075H23.0907L21.0907 21.8741L29.924 21.3741L27.2573 31.0408H24.0907V30.5408C20.8805 31.2988 19.3547 31.3405 17.2573 30.5408C13.4148 29.0529 11.3068 27.5004 10.2573 23.8741C9.67833 21.8734 10.2573 18.5408 10.2573 18.5408C10.8229 15.1099 11.9895 12.9698 14.7573 10.8741Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_1627_524'
          x1='40'
          y1='0'
          x2='0'
          y2='40'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#214E34' />
          <stop offset='1' stopColor='#20A357' />
        </linearGradient>
      </defs>
    </svg>
  )
  const socialArray = [
    {
      name: 'whatsapp',
      image: whatsapp,
    },
    {
      name: 'Mobile Phone',
      image: mobilephone,
    },
    {
      name: 'Email Address',
      image: email,
    },
  ]
  return (
    <div className=''>
      {/* <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center'>
        <div className='flex flex-col justify-center md:justify-start items-center md:items-start md:px-0 px-12'>
          <img src={mobileLogo} alt='logo' />
          <Text
            font='font-space'
            text='A New and Fast Personal Portfolio Product to fit your Profile'
            size='text-xs mt-4'
            color='text-white'
            textAlign='md:text-left text-center'
          />
          <div className='grid grid-cols-3 gap-3 mt-2'>
            {socialMediaArr.map(({ id, media }) => {
              if (media === 'twitter') {
                return <AiFillTwitterCircle key={id} color='white' size={25} />
              } else if (media === 'facebook') {
                return <MdFacebook key={id} color='white' size={25} />
              } else if (media === 'telegram') {
                return <FaTelegram key={id} color='white' size={25} />
              }
            })}
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5  mt-8'>
          <div className=''>
            {footerProducts.map(({ id, text }) => {
              if (id !== 1) {
                return (
                  <p key={id} className='text-[#818181] text-xs font-space mt-2'>
                    {text}
                  </p>
                )
              } else {
                return (
                  <p key={id} className='text-white text-sm font-syne font-bold uppercase'>
                    {text}
                  </p>
                )
              }
            })}
          </div>
          <div className=''>
            {footerCompany.map(({ id, text }) => {
              if (id !== 1) {
                return (
                  <p key={id} className='text-[#818181] text-xs font-space mt-2'>
                    {text}
                  </p>
                )
              } else {
                return (
                  <p key={id} className='text-white text-sm font-syne font-bold uppercase'>
                    {text}
                  </p>
                )
              }
            })}
          </div>
          <div className=''>
            {footerLegal.map(({ id, text }) => {
              if (id !== 1) {
                return (
                  <p key={id} className='text-[#818181] text-xs font-space mt-2'>
                    {text}
                  </p>
                )
              } else {
                return (
                  <p key={id} className='text-white text-sm font-syne font-bold uppercase'>
                    {text}
                  </p>
                )
              }
            })}
          </div>
          <div className=''>
            {footerContact.map(({ id, text }) => {
              if (id !== 1) {
                return (
                  <p key={id} className='text-[#818181] text-xs font-space mt-2'>
                    {text}
                  </p>
                )
              } else {
                return (
                  <p key={id} className='text-white text-sm font-syne font-bold uppercase'>
                    {text}
                  </p>
                )
              }
            })}
          </div>
        </div>
      </div> */}
      {/* <div className='flex flex-col justify-center md:justify-start items-center md:items-start md:px-0 px-12'>
        <Text font='font-space' text={copyRight} size='text-xs mt-8' color='text-[#414141]' />
      </div> */}
      <div className='bg-[#080808] flex  sm:py-[2.5rem] py-[1.5rem] flex-col gap-4 justify-center items-center w-full'>
        <div className='flex flex-col items-center justify-center'>
          <img src={geniusLogo} alt='' />{' '}
          <p className='font-syne text-[1.7rem] font-bold leading-normal uppercase geyniusfooter'>
            GEYNIUS
          </p>
        </div>

        <p className='text-[#20A357] text-[0.75rem] font-normal leading-[-0.0075rem] font-generalSans '>
          Copyright © 2024, Geynius. All rights reserved.
        </p>
        <div className='flex flex-row justify-center items-center gap-4'>
          {socialArray.map((social, i) => (
            <div key={i} className='cursor-pointer'>
              <div className='flex gap-2 bg-[#212E37] p-[1em] rounded- justify-center items-center socialdiv transition-all'>
                <img src={social?.image} alt='' />{' '}
                <p className='text-white transition-all socialname '>{social?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer
