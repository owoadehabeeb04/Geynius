import {
  projectCoverLetter,
  projectPagePortfolioHeader,
  projectPagePortfolioSmall,
} from '../../constants'
import deleteImage from '../../static/img/delete.svg'
import addImage from '../../static/img/addImage.svg'
import addButton from '../../static/img/addButton.svg'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/stateContext'
import { uploadImageFile } from '../../api/portfolioAPI'
import Loader from '../../loader'

type projectsProps = {
  title: string
  projectDescription: string
  githubLink: string
  liveLink: string
  skillsForProject: string
  id: number
  image: string[]
}
type LoadingState = {
  boolean1: boolean
  boolean2: boolean
  boolean3: boolean
}

const initialState: LoadingState[] = [{ boolean1: false, boolean2: false, boolean3: false }]

const Projects = () => {
  const [loading, setLoading] = useState<LoadingState[]>(initialState)

  const getBooleanValue = (index: number, booleanIndex: number) => {
    const key = `boolean${booleanIndex + 1}`
    return (
      loading[index] &&
      loading[index][key as keyof LoadingState] &&
      loading[index][key as keyof LoadingState]
    )
  }

  const { profilePortfolioForm, setProfilePortfolioForm }: any = useStateContext()
  console.log({ profilePortfolioForm })
  const [projects, setProjects] = useState<projectsProps[]>([
    {
      title: '',
      projectDescription: '',
      githubLink: '',
      skillsForProject: '',
      liveLink: '',
      id:
        (profilePortfolioForm &&
          profilePortfolioForm.projects &&
          profilePortfolioForm.projects.length) + 1 || 1,
      image: ['', '', ''],
    },
  ])
  // console.log('project oo', profilePortfolioForm.projects.length)
  useEffect(() => {
    if (profilePortfolioForm.projects != null) {
      setProjects([...profilePortfolioForm.projects])
    }
  }, [])
  const saveProjects = () => {
    setProfilePortfolioForm({
      ...profilePortfolioForm,
      projects: [...projects],
    })
  }
  const uploadImage = (e: any, index: number) => {
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
      setProjects([...projects])
      saveProjects()
    }
  }
  console.log({ profilePortfolioForm })
  // console.log('projects', profilePortfolioForm.projects, projects)
  // console.log(Object.values(loading)[0].)
  return (
    <div className='bg-[#010101] w-full my-4 pb-20 '>
      <p className='font-syne text-lg  text-center px-4 pt-10 md:text-[36px] text-[#214E34] drop-shadow-lg shadow-black md:text-2xl'>
        {projectPagePortfolioHeader}
      </p>
      <p className='text-[#818181] font-space text-center  px-4 text-[13px] md:text-lg drop-shadow-lg shadow-black md:text-[14px]'>
        {projectPagePortfolioSmall}
      </p>
      <div className='mx-2 my-10 md:px-5 md:mx-5 '>
        {projects.map(
          ({ title, liveLink, githubLink, projectDescription, image, skillsForProject }, index) => {
            return (
              <div
                className=' flex-col pt-3 w-full  items-center justify-center md:flex-row'
                key={index}
              >
                <div className='flex justify-center items-center flex-col w-full'>
                  <div className='md:w-[75%] w-full  flex items-center justify-center'>
                    <input
                      type='text'
                      name='title'
                      placeholder='Enter  your project title here...'
                      value={title}
                      onChange={(e) => {
                        projects[index].title = e.target.value

                        setProjects([...projects])
                      }}
                      className={
                        ' border-b-1 w-full text-[white]  focus:outline-none focus:ring-0 bg-transparent border-2  border-[#D8D8D8]  mx-1 md:w-[100%] '
                      }
                    />
                  </div>
                  <div className=' flex md:w-[75%] w-full items-center justify-center'>
                    <textarea
                      className={
                        ' border-b-1 w-full resize-none text-[white]  mt-4 focus:outline-none focus:ring-0 bg-transparent border-2  border-[#D8D8D8]  mx-1 md:w-[100%] '
                      }
                      placeholder='Enter short details about the project...'
                      name=''
                      id=''
                      cols={30}
                      rows={10}
                      value={projectDescription}
                      onChange={(e) => {
                        projects[index].projectDescription = e.target.value

                        setProjects([...projects])
                      }}
                    ></textarea>
                  </div>
                  <div className='md:w-[75%] w-full mt-4  flex items-center justify-center'>
                    <input
                      type='text'
                      name='title'
                      placeholder='Enter the skills used for the project e.g React, Typescript, Firebase...'
                      value={skillsForProject}
                      onChange={(e) => {
                        projects[index].skillsForProject = e.target.value

                        setProjects([...projects])
                      }}
                      className={
                        ' border-b-1 w-full  text-[white]  focus:outline-none focus:ring-0 bg-transparent border-2  border-[#D8D8D8]  mx-1 md:w-[100%] '
                      }
                    />
                  </div>
                  <div className='md:w-[75%] w-full mt-4  flex items-center justify-center'>
                    <input
                      type='text'
                      name='title'
                      placeholder='Enter  the github link for the project...'
                      value={githubLink}
                      onChange={(e) => {
                        projects[index].githubLink = e.target.value

                        setProjects([...projects])
                      }}
                      className={
                        ' border-b-1 w-full  text-[white]  focus:outline-none focus:ring-0 bg-transparent border-2  border-[#D8D8D8]  mx-1 md:w-[100%] '
                      }
                    />
                  </div>
                  <div className='md:w-[75%] w-full mt-4  flex items-center justify-center'>
                    <input
                      type='text'
                      name='title'
                      placeholder='Enter  the Live link for the project...'
                      value={liveLink}
                      onChange={(e) => {
                        projects[index].liveLink = e.target.value

                        setProjects([...projects])
                      }}
                      className={
                        ' border-b-1 w-full text-[white]  focus:outline-none focus:ring-0 bg-transparent border-2  border-[#D8D8D8]  mx-1 md:w-[100%] '
                      }
                    />
                  </div>
                  <div className='flex flex-col w-full my-5 items-center justify-center md:flex-row'>
                    {[0, 0, 0].map((element, i) => {
                      return (
                        <div
                          className=' h-[30%] w-full border-2 border-[#D8D8D8] flex flex-col mb-2  md:w-[24%] md:mx-3'
                          key={i}
                        >
                          <p className='text-[white] border-b-[#D8D8D8] border-b-2 px-4 font-space text-start  text-[13px] md:text-lg md:text-[14px]'>
                            {projectCoverLetter}
                          </p>

                          <label className='flex flex-col items-center justify-center'>
                            {getBooleanValue(index, i) ? (
                              <div className='flex  h-[150px]  justify-center items-center'>
                                <Loader />
                              </div>
                            ) : (
                              <img
                                src={image[i] != '' ? image[i] : addImage}
                                alt='add_image'
                                className={
                                  image[i] != ''
                                    ? ' min-[450px]:w-full max-[760px]:w-[50%] w-[100%] h-[150px] object-cover'
                                    : 'w-[100px] h-[150px]'
                                }
                              />
                            )}{' '}
                            <input
                              type='file'
                              name='upload-image'
                              onChange={async (e) => {
                                const key = `boolean${i + 1}`
                                setLoading((prevLoading) => {
                                  const newLoading = [...prevLoading]
                                  newLoading[index] = { ...newLoading[index], [key]: true }
                                  return newLoading
                                })
                                if (e.target.files) {
                                  const url = await uploadImageFile(
                                    `projects/${
                                      JSON.parse(localStorage.getItem('user')!).email
                                    }${new Date()}`,
                                    e.target.files[0],
                                  )
                                  projects[index].image[i] = url

                                  uploadImage(e, i)
                                  setLoading((prevLoading) => {
                                    const newLoading = [...prevLoading]
                                    newLoading[index] = { ...newLoading[index], [key]: false }
                                    return newLoading
                                  })
                                }
                              }}
                              className='w-0 h-0'
                            ></input>
                          </label>
                        </div>
                      )
                    })}
                  </div>
                </div>
                {projects && projects.length > 1 && (
                  <div className='flex'>
                    <img
                      src={deleteImage}
                      alt='delete'
                      className='mb-2 cursor-pointer md:px-1 md:pl-[-10%] md:w-20'
                      onClick={() => {
                        projects.splice(index, 1)
                        setProjects([...projects])
                        setProfilePortfolioForm({
                          ...profilePortfolioForm,
                          projects: [...projects],
                        })
                      }}
                    />
                  </div>
                )}
              </div>
            )
          },
        )}
      </div>
      <div className='flex items-end justify-end mr-2 md:mr-[12%]'>
        <img
          src={addButton}
          alt='add_image'
          onClick={() => {
            projects.push({
              title: '',
              projectDescription: '',
              githubLink: '',
              liveLink: '',

              skillsForProject: '',
              id:
                profilePortfolioForm &&
                profilePortfolioForm.projects &&
                profilePortfolioForm.projects.length + 1,
              image: ['', '', ''],
            })
            loading.push({
              boolean1: false,
              boolean2: false,
              boolean3: false,
            })
            setProjects([...projects])
          }}
          className={'items-end justify-end mt-3 w-[126px] h-[34px] md:w-[166px]'}
        />
        <div className='md:flex md:items-start md:w-20 md:justify-start md:pl-[-12]'></div>
      </div>
    </div>
  )
}

export default Projects
