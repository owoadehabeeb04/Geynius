import React, { ReactElement } from 'react'

import whatsapp from '../../../../static/img/whatsapp.svg'
import mobilephone from '../../../../static/img/mobilephone.svg'
import email from '../../../../static/img/emailAddress.svg'

function PreviewTemplate3Footer(): ReactElement {
  //   const { profilePortfolioForm }: any = useStateContext()

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
      link: '#',
    },
    {
      name: 'Mobile Phone',
      image: mobilephone,
      link: '#',
    },
    {
      name: 'Email Address',
      image: email,
      link: '#',
    },
  ]
  return (
    <div className=''>
      <div className='bg-[#1f313a91] flex  sm:py-[2.5rem] py-[1.5rem] flex-col gap-4 justify-center items-center w-full'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='uppercase text-[1.2rem] text-white sm:text-[2rem] '>
            HABEEB<span className='text-[#2790C4]'>DEV</span> {''}
          </h1>
        </div>

        <p className='text-[#2790C4] text-[0.75rem] font-normal leading-[-0.0075rem] font-generalSans '>
          Copyright © 2024,{' '}
          <span className='first-letter:uppercase  text-[#2790C4]  '>
            Habeeb<span className='text-[#2790C4]'>dev</span> {''}
          </span>
          . All rights reserved.
        </p>
        <div className='flex flex-row justify-center items-center gap-4'>
          {socialArray.map((social, i) => (
            <div key={i} className='cursor-pointer'>
              <a href={social?.link}>
                <div className='flex gap-2 bg-[#212E37] p-[1em] rounded- justify-center items-center socialdiv transition-all'>
                  <img src={social?.image} alt='' />{' '}
                  <p className='text-white transition-all socialname '>{social?.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviewTemplate3Footer
