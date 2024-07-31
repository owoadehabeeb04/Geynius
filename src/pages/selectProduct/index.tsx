import React from 'react'
import Footer from '../../containers/Footer'
import NavBar from '../../containers/NavBar'

import SelectProductBody from '../../containers/selectProduct'
import CornerImage from '../../components/CornerImage'

function SelectProduct() {
  return (
    <div className='w-full relative'>
      <CornerImage color='#F3FFF9' otherClass='absolute top-0 right-0 z-[-1]' />
      <NavBar />
      <SelectProductBody />
      <Footer />
    </div>
  )
}

export default SelectProduct
