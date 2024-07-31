import React from 'react'

type ButtonProps = {
  font?: string
  text: string
  color: string
  size: string
  width?: string
  textAlign?: string
}
export const Text: React.FC<ButtonProps> = ({
  font,
  text,
  size,
  color,
  width,
  textAlign = 'text-center',
}) => {
  return <p className={`${color} ${font}  ${size} ${width} ${textAlign}`}>{text}</p>
}
