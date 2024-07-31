import React from 'react'
type imageProps = {
  image: string
}
const CarouselItem = ({ image }: imageProps) => {
  return (
    <div>
      <div className='shadow  transition-all'>
        <img className='object-cover h-48 rounded' src={image} alt='' />
      </div>
    </div>
  )
}

export default CarouselItem
