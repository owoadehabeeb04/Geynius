import React, { ReactElement } from 'react'
import NavBar from '../../containers/NavBar'
import Hero from '../../containers/Hero'
import USP from '../../containers/USP'
import Footer from '../../containers/Footer'
import CornerImage from '../../components/CornerImage'
import Semifooter from '../../containers/SemiFooter'
import Templates from '../../containers/Template'
function Home(): ReactElement {
  return (
    <div className='w-full relative bg-[#010101]'>
      {/* <CornerImage color='#F3FFF9' otherClass='absolute top-0 right-0 z-[-1]' /> */}
      <NavBar />
      <Hero />
      <Templates />
      <USP />
      <Semifooter />
      <Footer />
    </div>
  )
} 

export default Home
