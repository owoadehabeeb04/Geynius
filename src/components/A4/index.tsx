import React, { useMemo } from 'react'

interface A4Props {
  text: string
}

const A4: React.FC<A4Props> = ({ text }) => {
  let pagination: any

  if (window.location.pathname === '/resume') {
    pagination = useMemo(() => {
      const limit = 380
      const words = text.split(/\s+/)
      const noOfPages = words.length / limit
      const pageArray = []
      for (let i = 0; i < noOfPages; i++) {
        let textt = ''
        const slice = words.slice(i * limit, i * limit + limit)
        textt = slice.join(' ')
        pageArray.push(textt)
      }
      return pageArray
    }, [])
  } else if (window.location.pathname === '/cover') {
    pagination = useMemo(() => {
      const limit = 15
      const sentences = text.split('. ')
      const noOfPages = sentences.length / limit
      const pageArray = []
      for (let i = 0; i < noOfPages; i++) {
        let textt = ''
        const slice = sentences.slice(i * limit, i * limit + limit)
        textt = slice.join(' ')
        pageArray.push(textt)
      }
      return pageArray
    }, [])
  }

  return (
    <div className='bg-[#cdd4db] w-full  flex flex-col overflow-y-scroll h-[70vh] items-center'>
      <div id='content_two'>
        {pagination.map((page: any, index: number) => {
          return (
            <div
              key={index}
              className='w-[612px] h-[765px] pt-16  bg-white border-[0.5px] border-[#C7C7C7]'
            >
              <div
                className='text-xs w-[85%] m-auto px-4 font-primary'
                dangerouslySetInnerHTML={{ __html: page }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default A4
