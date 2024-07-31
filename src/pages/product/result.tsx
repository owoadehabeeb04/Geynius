import React, { useState, useEffect } from 'react'
import HollowButton from '../../components/HollowButton'
import { BsFileEarmarkPdfFill, BsFileEarmarkWord } from 'react-icons/bs'
import { RxCopy } from 'react-icons/rx'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import A4 from '../../components/A4'
import { hideDivByClassName, createScreenshotPDF, ExportToDoc } from '../../utils'

type ResultProps = {
  resultHeaderText: string
  resultNormalText: string
  buttonColor: string
  textColor: string
  form: any
  buttonBg: string
  result: string
  setResult: React.Dispatch<React.SetStateAction<string>>
  setIsResult: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductResult: React.FC<ResultProps> = ({
  resultHeaderText,
  resultNormalText,
  buttonColor,
  buttonBg,
  form,
  result,
  setIsResult,
}) => {
  const [isCopied, setIsCopied] = useState(false)
  const [edited, setEdited] = useState('')
  const [step, setStep] = useState(1)

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
    setStep(2)
  }

  const buttonArray = [
    {
      id: 1,
      text: 'Copy/Edit',
      icon: <RxCopy />,
      callback: () => handleCopy(),
    },
    {
      id: 2,
      text: 'Preview',
      icon: <RxCopy />,
      callback: () => setStep(3),
    },

    {
      id: 3,
      text: 'Download',
      icon: <BsFileEarmarkPdfFill />,
      callback: () => createScreenshotPDF('content_two', form?.name),
    },
    {
      id: 4,
      text: 'Download',
      icon: <BsFileEarmarkWord />,
      callback: () => ExportToDoc('content_two', form?.name),
    },

    {
      id: 5,
      text: 'Previous',
      icon: <IoReturnUpBackOutline />,
      callback: () => {
        if (step === 1) {
          setIsResult(false)
        } else {
          setStep(step - 1)
        }
      },
    },
  ]

  useEffect(() => {
    if (step !== 2) {
      hideDivByClassName('ck-toolbar')
    }
  }, [step])

  return (
    <div className='flex flex-row justify-between mt-10  w-full'>
      <div className='w-full mt-8 flex flex-col items-center'>
        <p className='font-syne text-lg md:text-[32px] leading-[40px] text-center font-bold drop-shadow-lg shadow-black '>
          {resultHeaderText}
        </p>
        <p className='text-[#818181] font-space text-center text-sm md:text-[15px] leading-[24px] drop-shadow-lg shadow-black mb-4'>
          {resultNormalText}
        </p>
        <div className='md:grid md:grid-cols-5  md:gap-0 md:my-4 flex flex-row  w-[100%] md:w-[25%] md:mx-auto'>
          {buttonArray
            .filter((item) => item.id === 5)
            .map(({ id, text, icon, callback }) => {
              return (
                <>
                  <HollowButton
                    key={id}
                    id={id}
                    text={text}
                    icon={icon}
                    activeId={id}
                    activeBorder={buttonColor}
                    activeText={`font-space text-[8px] leading-[12px] rounded-0 font-thin border-[0.2px] md:w-[100%] w-[100%] text-white ${buttonBg}`}
                    onClick={callback}
                  />
                </>
              )
            })}

          {buttonArray
            .filter((item) => item.id !== 5)
            .map(({ id, text, icon, callback }) => {
              return (
                <>
                  <HollowButton
                    key={id}
                    id={id}
                    text={isCopied && text === 'Copy' ? 'Copied' : text}
                    icon={icon}
                    activeId={step}
                    activeBorder={buttonColor}
                    activeText={`font-space text-[8px] leading-[12px] rounded-0 font-thin border-[1px] md:w-[100%] w-[100%] text-white ${buttonBg}`}
                    onClick={callback}
                  />
                </>
              )
            })}
        </div>
        <div className=' w-full md:w-[80%] h-[50vh] overflow-y-auto'>
          {step === 2 && (
            <CKEditor
              editor={DecoupledEditor}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onReady={(editor: any) => {
                //   Insert the toolbar before the editable area.
                editor.ui
                  .getEditableElement()
                  .parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement(),
                  )
              }}
              onChange={(event, editor) => {
                const data = editor.getData()
                setEdited(data)
              }}
              data={`<span>${
                edited === '' ? 'Highlight and Kindly paste the copied content here!' : edited
              }</span>`}
            />
          )}
          {step === 1 && (
            <textarea
              name='result'
              disabled
              id='content'
              value={result}
              className='relative px-4 border-1  border-[#E2E2E2] bg-gray-50 h-[50vh] text-black w-full md:w-[100%] text-xs  font-thin rounded'
            />
          )}
          {step === 3 && <A4 text={edited} />}
        </div>
      </div>
    </div>
  )
}

export default ProductResult
