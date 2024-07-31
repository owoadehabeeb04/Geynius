import React from 'react'

type HollowButtonProps = {
  text: string
  icon?: any
  id?: number
  disabled?: boolean
  activeId?: number
  activeText: string
  onClick?: () => void
  activeBorder: string
  width?: string
}
const HollowButton: React.FC<HollowButtonProps> = ({
  text,
  activeBorder,
  activeText,
  icon,
  activeId,
  id,
  disabled = false,
  width = 'w-[202px]',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${activeBorder} ${activeText} text-white border-[#20a357] border-0  bg-[#20A357]    hover:text-white items-center flex flex-col justify-center align-center gap-1 ${width}  h-[50px] mt-5`}
    >
      {icon && <span className='text-xl'>{!disabled && icon}</span>}
      {text}
    </button>
  )
}

export default HollowButton
