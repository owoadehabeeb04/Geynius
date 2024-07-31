import React from 'react'
import NavBar from '../../containers/NavBar'
import HeroAbout from '../../containers/HeroAbout'
import Templates from '../../containers/Template'
import USP from '../../containers/USP'
import Semifooter from '../../containers/SemiFooter'
import Footer from '../../containers/Footer'

const About = () => {
  return (
    <div className='w-full relative bg-[#010101]'>
      {/* <CornerImage color='#F3FFF9' otherClass='absolute top-0 right-0 z-[-1]' /> */}
      <NavBar />
      <HeroAbout />

      <Templates />
      <USP />
      <Semifooter />
      <Footer />
    </div>
  )
}

export default About
