import React from 'react'
import { useStateContext } from '../context/stateContext'
import Template1 from '../pages/portfolioTemplates/template1'
import Template3 from '../pages/portfolioTemplates/template1/template3'

const PortfolioDesigns = () => {
  const { profilePortfolioForm }: any = useStateContext()
  return (
    <div>
 
      {(() => {
        if (
          profilePortfolioForm['template'] === 'firstTemplate' ||
          profilePortfolioForm['template'] === undefined
        ) {
          return <Template3 />
        } else if (profilePortfolioForm['template'] === 'thirdTemplate') {
          return <Template3 />
        } else {
          // Handle any other case with the default template
          return <Template3 />
        }
      })()}
    </div>
  )
}

export default PortfolioDesigns
