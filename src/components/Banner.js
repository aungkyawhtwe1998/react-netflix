import React from 'react'
import './Banner.css'
function Banner() {
  function truncate(string, n){
    return string?.length > n ? string.substr(0 , n-1) + '...' : string
  }
  return (
    <header className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://lrmonline.com/wp-content/uploads/2021/11/Netflix-banner.jpg')`,
        backgroundPosition:"center",
    }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {
            truncate('This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description This is a test description ', 150)
          }
        </h1>
        <div className='banner__fadeBottom'/>
      </div>
        
    </header>
  )
}

export default Banner