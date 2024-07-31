import React, { useState } from 'react'
import addImage from '../../static/img/addImage.svg'
import {
  homePagePortfolioHeader,
  homePagePortfolioSmall,
  portfolioSetUpArray,
} from '../../constants'
import { TextInput } from '../../components/TextInput'
import { useStateContext } from '../../context/stateContext'
import { uploadImageFile } from '../../api/portfolioAPI'
import { CirclesWithBar } from 'react-loader-spinner'
import Loader from '../../loader'

const HomePagePortfolio = () => {
  const [loading, setLoading] = useState(false)
  const { profilePortfolioForm, setProfilePortfolioForm, params }: any = useStateContext()
  console.log({ profilePortfolioForm })
  const uploadImage = (e: any, url: string) => {
    // to get the  file
    const selectedFile = e.target.files[0]
    // to get type of file
    const { type, name } = e.target.files[0]
    if (
      type === 'image/png' ||
      type === 'image/jpg' ||
      type === 'image/jpeg' ||
      type === 'image/gif' ||
      type === 'image/tiff' ||
      type === 'image/svg'
    ) {
      setLoading(true)
      setProfilePortfolioForm({
        ...profilePortfolioForm,
        userImage: url,
      })
      setLoading(false)
    }
  }
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
        {homePagePortfolioHeader}
      </p>
      <p className='text-[white] font-space text-center mt-4  px-4 text-[13px] md:text-lg drop-shadow-lg shadow-black md:text-[14px]'>
        {homePagePortfolioSmall}
      </p>
      <div className='flex flex-wrap  justify-center md:grid grid-cols-2 gap-4 w-full '>
        {portfolioSetUpArray.map(({ id, type, label, name, placeholder }) => {
          return name == 'userImage' ? (
            <div className='w-full text-left md:w-[90%] mx-4 my-4' key={id}>
              <p className='text-[white] font-thin text-start  text-[12px]  md:text-[14px] '>
                {label}
              </p>
              <div className=' text-left  border border-[#214E34] mt-2 y-4 flex flex-col rounded'>
                <label className='flex flex-col items-center transition-all justify-center'>
                  {loading ? (
                    <div className='flex justify-center h-[120px] transition-all items-center'>
                      <Loader />
                    </div>
                  ) : (
                    <img
                      src={
                        profilePortfolioForm[name] != null ? profilePortfolioForm[name] : addImage
                      }
                      alt='add_image'
                      className={
                        profilePortfolioForm[name] != ''
                          ? ' w-[20%] h-[120px] my-5'
                          : 'w-[70px] h-[120px] md:w-[10%]'
                      }
                    />
                  )}

                  <input
                    type='file'
                    name={name}
                    onChange={async (e) => {
                      setLoading(true)
                      if (e.target.files) {
                        const url = await uploadImageFile(
                          `userImage/${
                            JSON.parse(localStorage.getItem('user')!).email
                          }${new Date()}`,
                          e.target.files[0],
                        )

                        uploadImage(e, url)
                        setLoading(false)
                      }
                    }}
                    className='w-0 h-0 bg-white border-[#214E34]'
                  ></input>
                </label>
              </div>
            </div>
          ) : (
            <div className=' w-full text-left md:w-[90%] mx-4'>
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

export default HomePagePortfolio
