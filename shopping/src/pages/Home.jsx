import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
    <Announcement />
    <Navbar />  
    <Slider />
      
    </div>
  )
}

export default Home