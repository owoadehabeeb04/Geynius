import React from 'react'

const index = () => {
  const numbers = [1, 2, 3, 4]
  return (
    <div className='relative'>
      <div className=' fixed flex flex-col right-0 top-[50%]'>
        {numbers.map((nos, i) => (
          <div key={i}>

          </div>
        ))}
      </div>
    </div>
  )
}

export default index
