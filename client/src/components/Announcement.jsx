import React from 'react'

const Announcement = ({ user }) => {
  let userOptions 
  if (user) {
    userOptions = (
<div className='h-[auto]  bg-blue-400  text-white flex flex-wrap justify-center text-2xl font-play pt-2 '>Welcome <span className='text-black pl-1 pr-1 text-2xl'> {user.name}!</span> Enjoy Free Shipping on your<span className='text-black pl-2 text-2xl'>1st Order!</span></div>
    )
  }
const publicOptions = (
<div className='h-[auto] bg-blue-400 text-white flex flex-wrap  justify-center text-xl font-play pt-2 '>Free Shipping on Orders Over<span className='text-black pl-2 text-2xl'>$50.00</span></div>
)
  return (
    <div className="md:flex  flex justify-center  bg-blue-400 text-black py-4 md:px-10 px-7">{user ? userOptions : publicOptions}</div>
  )
}

export default Announcement