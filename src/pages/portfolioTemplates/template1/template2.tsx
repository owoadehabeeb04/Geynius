import React, { Fragment } from 'react'
import PortfolioNavBar from '../../../containers/PortfolioNavbar'
import PortfolioHero from '../../../containers/PortfolioHero'
import Solution from '../../../components/Solutions'
import { SolutionArray } from '../../../constants'
import { useStateContext } from '../../../context/stateContext'
import PortfolioNavBar2 from '../../../containers/PortfolioNavbar2'

function Template2() {
  const { profilePortfolioForm }: any = useStateContext()
  console.log('reach there')
  return (
    <div className='bg-black'>
      <PortfolioNavBar2 />
      <PortfolioHero />
      {SolutionArray.map((item, i) => {
        return (
          <Fragment key={i}>
            <>
              <Solution
                id={item.id}
                key={i}
                myImage={item.myImage}
                myImage2={item.myImage2}
                header={item.header}
                subheader={item.subheader}
                imgtext={item.imgtext}
                img2text={item.img2text}
                subImgtext={item.subImgtext}
                subImg2text={item.subImg2text}
                slide={profilePortfolioForm[item.id]}
              />
            </>
          </Fragment>
        )
      })}
    </div>
  )
}

export default Template2
