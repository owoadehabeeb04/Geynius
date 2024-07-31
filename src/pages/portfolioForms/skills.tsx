import React, { useState, useEffect } from 'react'
import {
  addedSkillsPagePortfolioSmall,
  skillsPagePortfolioHeader,
  skillsPagePortfolioSmall,
  skillsPlaceHolderText,
} from '../../constants'
import deleteImage from '../../static/img/delete.svg'
import addImage from '../../static/img/addImage.svg'

import { useStateContext } from '../../context/stateContext'
import { AiOutlineSearch } from 'react-icons/ai'
import Button from '../../components/Button'
import { addSearchSkills, getSearchedSkills, uploadImageFile } from '../../api/portfolioAPI'
import Loader from '../../loader'

type skillsProps = { name: string; image: string }

const Skills = () => {
  const [inputValue, setInputValue] = useState('')
  const [skills, setSkills] = useState<skillsProps[]>([])
  const [loading, setLoading] = useState<boolean[]>([])
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)
  const [wrongImagetype, setWrongImagetype] = useState(false)
  const { searchedSkills, setSearchedSkills, profilePortfolioForm, setProfilePortfolioForm }: any =
    useStateContext()
  console.log({ searchedSkills })
  useEffect(() => {
    if (profilePortfolioForm.skills != null) {
      setSkills([...profilePortfolioForm.skills])
      console.log('setted')
    }
  }, [])

  useEffect(() => {
    getSearchedSkills(setSearchedSkills)
  }, [skills])

  const saveSkills = () => {
    setProfilePortfolioForm({
      ...profilePortfolioForm,
      skills: [...skills],
    })
  }

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
      setLoading((prevArray: boolean[]) =>
        prevArray.map((item: boolean, index: number) => (index === index ? true : item)),
      )
      setWrongImagetype(false)
      setSkills([...skills])
      saveSkills()
      setLoading((prevArray: boolean[]) =>
        prevArray.map((item: boolean, index: number) => (index === index ? false : item)),
      )
    } else {
      setWrongImagetype(true)
    }
  }

  console.log('skills', profilePortfolioForm.skills)
  console.log({ profilePortfolioForm })

  return (
    <div className='bg-[#010101] w-full my-4 pb-20'>
      <p className='font-syne text-lg  text-center px-4 pt-10 md:text-[36px] text-[#214E34] drop-shadow-lg shadow-black md:text-2xl'>
        {skillsPagePortfolioHeader}
      </p>
      <p className='text-[#818181] font-space text-center  px-4 text-[13px] md:text-lg drop-shadow-lg shadow-black md:text-[14px]'>
        {skillsPagePortfolioSmall}
      </p>
      <div className='flex flex-col mt-10 items-center justify-center'>
        <div className='w-full px-2 mt-5 relative md:w-[50%]'>
          <div className='relative'>
            <AiOutlineSearch
              size={18}
              className='text-gray-700 absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3'
            />

            <input
              type='text'
              onClick={() => setOpen(!open)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
              placeholder={skillsPlaceHolderText}
              className='w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 placeholder:text-[8px] focus:bg-white focus:border-[#D8D8D8] md:placeholder:text-[14px]'
            />
            <Button
              text='Add Skill'
              disabled={false}
              activeBg='bg-[#214E34]'
              activeTextColor='font-space text-[8px] absolute top-0 bottom-0 my-auto text-[#214E34] px-4 h-[2rem] right-2 rounded-lg font-medium  text-[8px]'
              textStyle='text-[10px] md:text-sm'
              onClick={async () => {
                if (inputValue !== '') {
                  // Check if the inputValue already exists in the skills array
                  const isDuplicate = skills.some(
                    (skill) => skill.name.toLowerCase() === inputValue.toLowerCase(),
                  )

                  if (!isDuplicate) {
                    skills.push({
                      name: inputValue,
                      image: '',
                    })
                    setSkills([...skills])
                    setInputValue('')
                    saveSkills()

                    await addSearchSkills({
                      name: inputValue,
                      image: '',
                    })
                    setLoading([...loading, false])
                    getSearchedSkills(setSearchedSkills)
                  } else {
                    prompt('Skill already exists in the skills array.  add another skill')
                  }
                }
              }}
            />
          </div>
          <div className={open ? 'z-10  ' : 'z-10 hidden'}>
            <ul
              className={` bg-white mt-2 transition-all overflow-y-auto w-full px-2  py-2 z-10 ${
                open ? 'max-h-60' : 'max-h-0'
              } w-[60vw]  `}
            >
              {searchedSkills?.map((searchskill: any, i: number) => (
                <li
                  key={searchskill?.name}
                  className={` p-2 text-sm relative transition-all hover:bg-[#214E34] max-[480px]:w-full w-full  cursor-pointer hover:text-white
          ${
            searchskill?.name?.toLowerCase() === selected?.toLowerCase() &&
            'bg-[#214E34] text-white'
          }
          ${searchskill?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                  onClick={() => {
                    if (searchskill?.name?.toLowerCase() !== selected.toLowerCase()) {
                      setSelected(searchskill?.name)
                      setOpen(false)
                      setInputValue(searchskill?.name)
                    }
                  }}
                >
                  {searchskill?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {skills.map(({ name, image }, i) => {
        return (
          <div className='mx-[10%]' key={i}>
            <div className='flex flex-col w-full h-[30%] items-center justify-center md:flex-row'>
              <div className='w-full'>
                <p className='text-[#818181] font-space text-start py-7 text-[10px] md:text-lg drop-shadow-lg shadow-black md:text-[14px]'>
                  {addedSkillsPagePortfolioSmall}
                </p>
                <div className=' h-[30%] border-2 border-[#D8D8D8] flex flex-col'>
                  <p className='text-[white] border-b-[#D8D8D8] border-b-2 px-4 font-space text-start  text-[13px] md:text-lg md:text-[14px]'>
                    {name}
                  </p>

                  <label className='flex flex-col  items-center justify-center'>
                    {loading[i] ? (
                      <div className='flex justify-center items-center h-[150px]'>
                        <Loader />
                      </div>
                    ) : (
                      <img
                        src={image != '' ? image : addImage}
                        alt='add_image'
                        className={
                          image != '' ? ' w-[40%] h-[150px] my-5' : 'w-[70px] h-[150px] md:w-[10%]'
                        }
                      />
                    )}

                    <input
                      type='file'
                      name='upload-image'
                      onChange={async (e) => {
                        setLoading((prevArray: boolean[]) =>
                          prevArray.map((item: boolean, index: number) =>
                            index === i ? true : item,
                          ),
                        )
                        if (e.target.files) {
                          const url = await uploadImageFile(
                            `skills/${
                              JSON.parse(localStorage.getItem('user')!).email
                            }${new Date()}`,
                            e.target.files[0],
                          )
                          skills[i].image = url

                          uploadImage(e, url)
                          setLoading((prevArray: boolean[]) =>
                            prevArray.map((item: boolean, index: number) =>
                              index === i ? false : item,
                            ),
                          )
                        }
                      }}
                      className='w-0 h-0'
                    ></input>

                    {wrongImagetype && <p>Wrong Image Type</p>}
                  </label>
                </div>
              </div>

              <img
                src={deleteImage}
                alt='delete'
                className=' py-2 md:mx-1 md:mt-20 cursor-pointer'
                onClick={() => {
                  skills.splice(i, 1)
                  setSkills([...skills])
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Skills
