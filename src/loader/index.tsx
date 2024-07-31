import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div>
      <CirclesWithBar
        height='50'
        width='50'
        color='#4fa94d'
        outerCircleColor='#4fa94d'
        innerCircleColor='#4fa94d'
        barColor='#4fa94d'
        ariaLabel='circles-with-bar-loading'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
      />
    </div>
  )
}

export default Loader
