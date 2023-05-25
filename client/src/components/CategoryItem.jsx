import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
  return ( 
    <div className='text-white relative
    '>
      <Link to={`/products/${item.category}`}>
        <img alt='' src={item.img} className='w-[100%] h-[90%] object-cover' />
        <div className='w-[100%] h-[100%]  justify-center  absolute top-20 left-0 text-center   font-play'>
          <div className='text-white text-[3rem] pb-8'>{item.title}</div>
          <Link to={`/products/${item.category}`}>

					<button className="rounded bg-white text-gray-600 p-3 hover:bg-blue-400 hover:text-white " >SHOP NOW</button>
					</Link>

        </div>
      </Link>
    </div>
  )
}

export default CategoryItem