import React, { useState, useEffect } from 'react'
import Footer from '../../containers/Footer'
import CornerImage from '../../components/CornerImage'
import NavBar from '../../containers/NavBar'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import ProductForm from './form'
import ProductResult from './result'
import {
  addUser,
  checkWebTitle,
  generateCoverLetter,
  generateResume,
  getUsersPortfolio,
  getUsersPortfolioFormDetails,
} from '../../api'
import {
  coverResultHeaderText,
  coverResultNormalText,
  resumeResultHeaderText,
} from '../../constants'
import { useStateContext } from '../../context/stateContext'

type formProps = {
  id: number
  label: string
  type: string
  name: string
  note?: string
  placeholder: string
}

type Props = {
  cornerImgColor: string
  headerText: string
  normalText: string
  inputBg: string
  formArray: formProps[]
  formState?: any
  mainColor: string
  buttonColor: string
  minorColor: string
  textColor: string
  buttonBg: string
  minorColorTwo: string
}

const ProductPage: React.FC<Props> = ({
  buttonBg,
  cornerImgColor,
  minorColorTwo,
  inputBg,
  textColor,
  headerText,
  normalText,
  formArray,
  formState,
  mainColor,
  minorColor,
  buttonColor,
}) => {
  const [isResult, setIsResult] = useState(false)
  const [form, setForm] = useState(formState)
  const [isSubmit, setIsSubmit] = useState(false)
  const [result, setResult] = useState('')

  const navigate = useNavigate()
  const { profilePortfolioForm, setProfilePortfolioForm }: any = useStateContext()

  function handleClick(url: string) {
    navigate(`/${url}`)
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    // the creates a map from value of the form fields
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleForm = async () => {
    setIsSubmit(true)
    // get path of the page
    if (window.location.pathname === '/portfolio') {
      // to validate the website Title to avoid duplicate
      const error = document.getElementById('error')
      const valid = await checkWebTitle(form.websiteTitle, form.email)
      if (valid == false) {
        // Changing content and color of content
        error!.textContent = 'website title already taken'
        error!.style.color = 'red'
        error!.style.fontSize = '12px'
      } else {
        error!.textContent = ''

        // navigate to appropriate next page
        const user = await getUsersPortfolio(form.email)
        if (user == null) {
          await addUser(form)
          localStorage.setItem('user', JSON.stringify(form))
        } else {
          const portfolioForm = await getUsersPortfolioFormDetails(form.email)
          localStorage.setItem('user', JSON.stringify(form))
          await setProfilePortfolioForm(portfolioForm)
          console.log(portfolioForm)
        }

        handleClick('setUpPortfolio')
      }
      setIsSubmit(false)
    } else if (window.location.pathname === '/cover') {
      generateCoverLetter(form).then((res) => {
        setResult(res)
        setIsSubmit(false)
        setIsResult(true)
      })
    } else if (window.location.pathname === '/resume') {
      generateResume(form).then((res) => {
        setResult(res)
        setIsSubmit(false)
        setIsResult(true)
      })
    }
  }

  useEffect(() => {
    setIsSubmit(false)
  }, [])

  return (
    <>
      <div className='w-full relative bg-[#010101]'>
        <NavBar />
        <CornerImage color={cornerImgColor} otherClass='absolute top-0 right-0 z-[-1]' />
        <div className='w-full relative md:px-20 px-4 pt-4 mb-10'>
          {/* <MdOutlineArrowBackIos
            className={`text-2xl cursor-pointer ${textColor}`}
            onClick={() => {
              handleClick('products')
            }} */}
          {/* /> */}
          {isResult && result !== '' ? (
            <ProductResult
              buttonColor={buttonColor}
              buttonBg={buttonBg}
              textColor={textColor}
              form={form}
              result={result}
              setResult={setResult}
              setIsResult={setIsResult}
              resultHeaderText={
                window.location.pathname === '/resume'
                  ? resumeResultHeaderText
                  : window.location.pathname === '/cover'
                  ? coverResultHeaderText
                  : ''
              }
              resultNormalText={
                window.location.pathname === '/resume'
                  ? coverResultNormalText
                  : window.location.pathname === '/cover'
                  ? coverResultNormalText
                  : ''
              }
            />
          ) : (
            <ProductForm
              buttonBg={buttonBg}
              minorColorTwo={minorColorTwo}
              inputBg={inputBg}
              textColor={textColor}
              headerText={headerText}
              normalText={normalText}
              formArray={formArray}
              mainColor={mainColor}
              minorColor={minorColor}
              buttonColor={buttonColor}
              form={form}
              isSubmit={isSubmit}
              handleForm={handleForm}
              handleChange={handleChange}
            />
          )}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProductPage
