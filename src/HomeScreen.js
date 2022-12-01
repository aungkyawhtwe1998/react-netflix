import React from 'react'
import Banner from './components/Banner'
import Nav from './components/Nav'
import './HomeScreen.css'
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        {/* Nav Bar */}
        <Nav />
        

        {/* Banner */}
        <Banner />

        {/* Row */}
    </div>
  )
}

export default HomeScreen