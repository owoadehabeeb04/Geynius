import React, { useEffect, useState } from 'react'
import { getUsersPortfolioFormDetails } from '../../api';
import { getUsersPortfolioFormDetailsSlug } from '../../api/portfolioAPI';
import { useStateContext } from '../../context/stateContext';
import image404 from '../../static/img/404.svg'

import { Circles } from  'react-loader-spinner'
import PortfolioDesigns from '../../portfolioDesigns';
function Slug() {
  const [isLoading, setIsLoading] = useState(true);
  const { setProfilePortfolioForm,profilePortfolioForm }: any = useStateContext()
  const getPorfolioData = async (title:string) => {
    try {
      const portfolioForm=await getUsersPortfolioFormDetailsSlug(title);
   
    await setProfilePortfolioForm(portfolioForm);
    setIsLoading(false);
    } catch (error) {
      console.log(error, 'nav error')
    }
  }
  useEffect(() => {
    console.log(window.location.pathname.slice(1));
    getPorfolioData(window.location.pathname.slice(1));
  }, [])
  
  return (
    <div className='w-full h-full'>{isLoading?<div className='h-screen flex justify-center items-center'><Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    /> </div>:!isLoading&&profilePortfolioForm==null?<div className='h-screen flex justify-center items-center'> <img src={image404} alt='404 image' width={400} /></div>:<PortfolioDesigns></PortfolioDesigns>}</div>
  )
}

export default Slug