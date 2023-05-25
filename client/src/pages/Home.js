import React from 'react'
import LogoHeader from '../components/LogoHeader'
import Promo from '../components/Promo'
import  Slider  from '../components/Slider'
import CategoryCards from '../components/CategoryCards'

const Home = () => {
  return (
    <div className=''>
    <LogoHeader />
    <Promo />
    <Slider />
    <CategoryCards />
    </div>
    
  )
}

export default Home