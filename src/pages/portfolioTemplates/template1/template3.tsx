import React from 'react'
import PortfolioNavBar3 from '../../../containers/PortfolioNavbar2/portfolioNavbarTemplate3'
import PortfolioHero3 from '../../../containers/PortfolioHero/portfolioHeroTemplate3'
import PortfolioSkillsTemplate3 from '../../../containers/PortfolioSkills/portfolioSkillsTemplate3'
import { useStateContext } from '../../../context/stateContext'
import PortfolioProjectTemplate3 from '../../../containers/portfolioProjects/portfolioProjectTemplate3'
import Template3Footer from './portfolioTemplate3Footer'
import SeeMorePortfolioTemplate3 from '../../../containers/PortfolioNavbar2/seeMorePortfolioTemplate3'

const Template3 = () => {
  const { goToSeeMoreProject }: any = useStateContext()
  return (
    <div className='bg-[#05151d] JOST'>
      {goToSeeMoreProject === false ? (
        <>
          <PortfolioNavBar3 />
          <PortfolioHero3 />
          <PortfolioSkillsTemplate3 />
          <PortfolioProjectTemplate3 />
          <Template3Footer />
        </>
      ) : (
        <SeeMorePortfolioTemplate3 />
      )}
    </div>
  )
}

export default Template3
