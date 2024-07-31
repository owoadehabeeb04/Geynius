import React, { useState } from 'react'
import { useStateContext } from '../../context/stateContext'
import addImage from '../../static/img/addImage.svg'

const Resume = () => {
  const [Resume, setResume] = useState<File | null>(null)
  const [error, setError] = useState('')
  const [UrlFile, setUrlFile] = useState<string | null>('')
  const { profilePortfolioForm, setProfilePortfolioForm }: any = useStateContext()
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    const type = files && files[0]?.type
    const fileUrl: string | null = files && URL.createObjectURL(files[0])
    const name = files && files[0]?.name

    if (files && files.length > 0) {
      if (
        type === 'application/pdf' ||
        type === 'application/doc' ||
        type === 'application/docx' ||
        type === 'application/txt'
      ) {
        setResume(files[0])
        const filesArray = Array.from(files)
        fileUrl && setUrlFile(fileUrl)
        setProfilePortfolioForm({ ...profilePortfolioForm, ...filesArray, CV: { fileUrl, name } })
      } else {
        setError('Resume should either be in pdf doc docx or txt format')
      }
    }
  }
  console.log({ profilePortfolioForm })
  return (
    <div className='flex justify-center flex-col mt-8 items-center w-full'>
      <p className='text-[#818181] font-space text-center  px-4 text-[13px] md:text-lg drop-shadow-lg shadow-black md:text-[14px]'>
        {' '}
        Upload your Resume / CV
      </p>
      {UrlFile && (
        <div className='mt-4'>
          <iframe src={UrlFile}  width='400' height='400' />
        </div>
      )}
      <label className='bg-transparent cursor-pointer h-[150px] text-[#E5E5E5] font-normal py-2 px-[4] mt-2 border sm:w-[70%] w-full border-[#214E34] my-6 rounded-[7px] flex flex-col items-center justify-center gap-4 '>
        <input
          type='file'
          className='
          hidden
            h-48 
            border-2 bg-transparent
            mt-4               flex-col items-center justify-center
            mb-4  md:mx-auto
            p-4
            cursor-pointer
          '
          accept='.pdf, .doc, .docx, .txt'
          placeholder='Upload your CV'
          onChange={handleFileChange}
        />{' '}
        {!UrlFile && (
          <div className='Flex justify-center items-center'>
            <p className='text-[1rem] text-center'>Click to upload your CV or Resume</p>
          </div>
        )}{' '}
        {Resume && (
          <div>
            <p className='text-center'>File uploaded:</p>
            <p className='text-white text-center'> {Resume?.name}</p>
          </div>
        )}
        {error && <p className='text-red-400 text-[0.5rem] text-left'>{error}</p>}
      </label>
    </div>
  )
}

export default Resume
