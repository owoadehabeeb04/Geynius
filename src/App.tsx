import React, { ReactElement, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/landingPage'
import SelectProduct from './pages/selectProduct'
import ProductPage from './pages/product'
import { useStateContext } from './context/stateContext'
import SetUpPortfolio from './pages/setUpPortfolio'
import PortfolioForm from './pages/portfolioForms'
import AnalyticsPage from './pages/analytics'
import { useGetUserLocation, useUserDevice, useIsUserUnique } from '@todak2000/react-user-analytics'

import { increment, setDoc, doc } from 'firebase/firestore'
import { db } from './firebasedb'
import Slug from './pages/slug'
import { getSearchedServices, getSearchedSkills } from './api'
import About from './pages/aboutt'
import Template2 from './pages/portfolioTemplates/template1/template2'
import Template3 from './pages/portfolioTemplates/template1/template3'
import Template1 from './pages/portfolioTemplates/template1'
import SeeMorePortfolioTemplate3 from './containers/PortfolioNavbar2/seeMorePortfolioTemplate3'
import ThirdTemplate from './pages/portfolioTemplates/template1/livePreviewThirdTemplate/thirdTemplate'
import SeeMorePreviewProject from './pages/portfolioTemplates/template1/livePreviewThirdTemplate/previewOfSeeMoreProject'

function App(): ReactElement {
  // get the parameter from context
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { params }: any = useStateContext()
  const { setSearchedServices, setSearchedSkills }: any = useStateContext()
  const location = useLocation()
  const { country, city } = useGetUserLocation()
  const uniqueUser: boolean = useIsUserUnique()
  const device: string = useUserDevice()
  const [savedProjectTemplate3, setSavedProjectTemplate3] = useState<any>()

  useEffect(() => {
    const storedData = localStorage.getItem('projectTemplate3')
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData)
        setSavedProjectTemplate3(parsedData)
      } catch (error) {
        console.error('Error parsing projectTemplate3 from local storage:', error)
      }
    }
  }, [])
  const handleVisitorData = async () => {
    try {
      if (uniqueUser === true) {
        const visitorRef = doc(db, 'app_visitor_data', 'Unique')
        await setDoc(visitorRef, { count: increment(1) }, { merge: true })
      } else if (uniqueUser === false) {
        const visitorRef = doc(db, 'app_visitor_data', 'Regular')
        await setDoc(visitorRef, { count: increment(1) }, { merge: true })
      }
    } catch (error) {
      console.log(error, 'device error')
    }
  }

  const handleDeviceData = async () => {
    try {
      if (device) {
        const deviceRef = doc(db, 'app_device_data', device)
        await setDoc(deviceRef, { count: increment(1) }, { merge: true })
      }
    } catch (error) {
      console.log(error, 'device error')
    }
  }

  const handleCountryData = async () => {
    try {
      if (country !== null) {
        const countryRef = doc(db, 'app_country_data', country)
        await setDoc(countryRef, { count: increment(1) }, { merge: true })
      }
    } catch (error) {
      console.log(error, 'country error')
    }
  }

  let screen: string

  if (location?.pathname == '/') {
    screen = 'home'
  } else {
    screen = location?.pathname.replace('/', '')
  }

  const handleNavData = async () => {
    try {
      const navRef = doc(db, 'app_nav_data', screen)
      await setDoc(navRef, { count: increment(1) }, { merge: true })
    } catch (error) {
      console.log(error, 'nav error')
    }
  }
  useEffect(() => {
    console.log(uniqueUser)
    if (uniqueUser !== null) {
      handleVisitorData()
    }
  }, [])

  useEffect(() => {
    handleCountryData()
  }, [country])
  useEffect(() => {
    handleDeviceData()
  }, [device])

  useEffect(() => {
    handleNavData()
  }, [location?.pathname])
  const { projectTemplate3 }: any = useStateContext()
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/analytics' element={<AnalyticsPage />} />
        <Route path='/products' element={<SelectProduct />} />
        <Route path='/setUpPortfolio' element={<SetUpPortfolio />} />
        <Route path='/portfolioForm' element={<PortfolioForm />} />
        <Route path='/portfolio' element={<ProductPage {...params['portfolio']} />} />
        <Route path='/resume' element={<ProductPage {...params['resume']} />} />
        <Route path='/cover' element={<ProductPage {...params['cover']} />} />
        {/* this should always be that the bottom */}
        <Route path='/:slug' element={<Slug />} />
        <Route path='/template1' element={<Template1 />} />
        {/* BUILDING OF TEMPLATE 3 */}
        <Route path='/thirdTemplate' element={<Template3 />} />
        {/* <Route path={'/Project/:id'} element={<SeeMorePortfolioTemplate3 />} /> */}

        {/* LIVE PREVIEW OF TEMPLATE 3 */}
        <Route path='/template3' element={<ThirdTemplate />} />
        <Route path={'/seeMoreProject/:subid'} element={<SeeMorePreviewProject />} />
      </Routes>
    </div>
  )
}

export default App
