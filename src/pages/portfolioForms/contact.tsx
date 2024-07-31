import React from 'react'
import {
  contactPortfolioHeader,
  contactPortfolioSmall,
  homePagePortfolioHeader,
  portfolioContactArray,
} from '../../constants'
import { TextInput } from '../../components/TextInput'
import { useStateContext } from '../../context/stateContext'
import Resume from './CV'

const Contact = () => {
  const { profilePortfolioForm, setProfilePortfolioForm, params }: any = useStateContext()
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setProfilePortfolioForm({
      ...profilePortfolioForm,
      [e.target.name]: e.target.value,
    })
  }
  console.log({ profilePortfolioForm })
  return (
    <div className='bg-[#010101] w-full my-4 pb-20'>
      <p className='font-syne text-lg  text-center px-4 pt-10 md:text-[36px] text-[#214E34] drop-shadow-lg shadow-black md:text-2xl'>
        {contactPortfolioHeader}
      </p>
      <Resume />
      <p className='text-[#818181] font-space text-center  px-4 text-[13px] md:text-lg drop-shadow-lg shadow-black md:text-[14px]'>
        {contactPortfolioSmall}
      </p>
      <div className='flex flex-wrap items-center justify-center md:grid grid-cols-2 gap-4 w-full '>
        {portfolioContactArray.map(({ id, type, label, name, placeholder }) => {
          return (
            <div className=' w-full text-left md:w-[90%] mx-4' key={id}>
              <TextInput
                key={id}
                handleChange={handleFormChange}
                inputBg={params['portfolio'].inputBg}
                label={label}
                type={type}
                value={profilePortfolioForm[name]}
                placeholder={placeholder}
                name={name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact
