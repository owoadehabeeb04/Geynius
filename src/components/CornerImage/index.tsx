import React from 'react'

type ImageProps = {
  color?: string
  otherClass: string
}
const CornerImage: React.FC<ImageProps> = ({ color, otherClass }) => {
  return (
    <div className={otherClass}>
      <svg
        width='612'
        height='172'
        viewBox='0 0 612 172'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M125.243 -218.978C164.832 -271.243 186.142 -339.702 247.172 -363.666C316.769 -390.995 401 -393.827 462.599 -351.446C523.174 -309.769 524.864 -226.946 547.544 -157.003C574.788 -72.987 649.45 14.1171 606.092 91.0657C562.502 168.426 451.421 168.426 362.665 171.109C291.624 173.257 230.191 140.015 168.749 104.289C102.716 65.894 11.455 36.6751 1.26695 -39.0263C-8.83303 -114.073 79.5207 -158.616 125.243 -218.978Z'
          fill={color}
        />
      </svg>
    </div>
  )
}

export default CornerImage
