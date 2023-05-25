import React from 'react'
import LogoHeader from '../components/LogoHeader'
import Promo from '../components/Promo'
import  Slider  from '../components/Slider'
import CategoryCards from '../components/CategoryCards'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
  return (
    <div className=''>
    <LogoHeader />
    <Promo />
    <Slider />
    <CategoryCards />
    <FeaturedProducts />
    
    </div>
    
  )
}

export default Home