import React, { useState } from 'react'
import ProductImage from '../../components/productImage'
import HollowButton from '../../components/HollowButton'
import { TextInput } from '../../components/TextInput'
import Button from '../../components/Button'
import { useLocation } from 'react-router-dom'

type formProps = {
  id: number
  label: string
  type: string
  name: string
  note?: string
  placeholder: string
}

type FormProps = {
  headerText: string
  normalText: string
  inputBg: string
  formArray: formProps[]
  mainColor: string
  buttonColor: string
  minorColor: string
  textColor: string
  buttonBg: string
  minorColorTwo: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: any
  isSubmit: boolean
  handleForm: () => void
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void
}

const ProductForm: React.FC<FormProps> = ({
  buttonBg,
  minorColorTwo,
  inputBg,
  textColor,
  headerText,
  normalText,
  formArray,
  form,
  mainColor,
  minorColor,
  buttonColor,
  isSubmit,
  handleForm,
  handleChange,
}) => {
  const [count, setCount] = useState(0)
  const [remainder, setRemainder] = useState(formArray.length - 4)

  const location = useLocation()

  const handlePrevious = () => {
    setCount(count - 1)
    if (remainder != formArray.length - 4) {
      setRemainder(remainder + 4)
    }
  }

  const handleNext = () => {
    setCount(count + 1)
    if (remainder > 4) {
      setRemainder(remainder - 4)
    } else {
      setRemainder(0)
    }
  }

  const renderObjects = () => {
    return formArray
      .slice(count * 4, count * 4 + 4)
      .map(({ id, label, type, name, placeholder, note }) => (
        <div key={id}>
          <TextInput
            key={id}
            handleChange={handleChange}
            inputBg={inputBg}
            label={label}
            type={type}
            note={note}
            value={form[name]}
            placeholder={placeholder}
            name={name}
          />
          {name == 'websiteTitle' && <span id='error'></span>}
        </div>
      ))
  }
  console.log(form, 'formm')
  return (
    <div className='flex flex-row justify-between mt-10  w-full'>
      <div className='lg:w-[50%] w-full'>
        <p className='font-syne text-lg md:text-[32px] leading-[40px] text-center font-bold drop-shadow-lg text-white '>
          {headerText}
        </p>
        <p className='text-[white] font-space text-center text-sm md:text-[15px] leading-[24px] drop-shadow-lg shadow-black'>
          {normalText}
        </p>
        <div className=' w-full md:w-[90%]'>
          {renderObjects()}
          <div className='flex flex-row justify-between items-center'>
            {count > 0 && (
              <HollowButton
                text='Back'
                activeBorder={buttonColor}
                activeText={`font-space text-sm rounded-lg font-medium border-[1px] mt-0 w-[96px] ${textColor}`}
                onClick={handlePrevious}
              />
            )}
            {count < formArray.length / 4 && remainder !== 0 && (
              <HollowButton
                text='Next'
                disabled={
                  location.pathname === '/cover' &&
                  (form.jobTitle === '' ||
                    form.name === '' ||
                    form.company === '' ||
                    form.skills === '')
                    ? true
                    : location.pathname === '/portfolio' &&
                      (form.email === '' || form.profession === '' || form.websiteTitle === '')
                    ? true
                    : (location.pathname === '/resume' &&
                        (form.email === '' || form.name === '' || form.profession === '')) ||
                      form.phone === '' ||
                      form.skills === '' ||
                      form.academics === '' ||
                      form.work === ''
                    ? true
                    : false
                }
                activeBorder={buttonColor}
                activeText={`font-space text-sm rounded-lg font-medium border-[1px] w-[96px] ${textColor}`}
                onClick={handleNext}
              />
            )}
            {remainder === 0 && (
              <Button
                text='Next'
                activeBg={buttonBg}
                isSubmit={isSubmit}
                disabled={
                  location.pathname === '/cover' && (form.jd === '' || form.other === '')
                    ? true
                    : location.pathname === '/portfolio' && form.name === ''
                    ? true
                    : false
                }
                activeTextColor='font-space text-sm rounded-lg font-medium border-[1px] w-[96px] text-[white]'
                onClick={handleForm}
              />
            )}
          </div>
        </div>
      </div>
      <ProductImage mainColor={mainColor} minorColor={minorColor} minorColorTwo={minorColorTwo} />
    </div>
  )
}

export default ProductForm
