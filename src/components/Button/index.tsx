import React from 'react'
import { ImSpinner2 } from 'react-icons/im'
type ButtonProps = {
  text: string
  activeTextColor: string
  onClick?: () => void
  disabled?: boolean
  isSubmit?: boolean
  activeBg: string
  width?: string
  textStyle?: string
}
// (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
const Button: React.FC<ButtonProps> = ({
  text,
  activeBg,
  activeTextColor,
  width,
  textStyle,
  isSubmit,
  onClick,
  disabled,
}) => {
  console.log({ disabled })
  return (
    <button
      disabled={disabled && disabled}
      onClick={onClick}
      className={`${activeBg} border-[#20a357] cursor-pointer border-0  bg-[#20A357]   text-sm font-space rounded-lg ${width} text-white   ${activeTextColor}  hover:text-[white] flex flex-row justify-center h-12 items-center my-8`}
    >
      {isSubmit ? (
        <ImSpinner2 className='animate-spin' />
      ) : (
        <p className={textStyle}>{!disabled && text}</p>
      )}
    </button>
  )
}

export default Button
