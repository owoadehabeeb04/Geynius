import React from 'react'

type Props = {
  label: string
  type: string
  placeholder: string
  name: string
  inputBg: string
  value: string
  note?: string
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void
}
export const TextInput: React.FC<Props> = ({
  label,
  type,
  placeholder,
  name,
  inputBg,
  note,
  value,
  handleChange,
}) => {
  return (
    <div className='flex flex-col  w-full my-4'>
      <p className=' text-[12px] leading-[18px] font-thin text-[white] mb-2 md:text-[14px]'>
        {label} <sup className='text-[#BD5A5A]'>*</sup>
      </p>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          className={
            'px-4 border-1 border-[#214E34] bg-black border-2 text-white  focus:outline-none h-[100px] w-full md:w-[100%] text-xs placeholder:text-white-[300]  font-thin rounded'
          }
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          minLength={type == 'password' ? 6 : 1000}
          onChange={handleChange}
          className={
            'px-4 border-1 border-[#214E34]  bg-black focus:outline-[0] focus-within:outline-[0px]  h-[50px] text-white placeholder:text-white-[300] w-full md:w-[100%] text-xs  font-thin rounded '
          }
        />
      )}
      {note && <p className=' text-[10px] mt-1 leading-[13px] font-thin text-[#414141]'>{note}</p>}
    </div>
  )
}
