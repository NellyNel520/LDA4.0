import React from 'react'
import logo from '../assets/logo2.mp4'

const LogoHeader = () => {
  return (
    <div>

      <video className=" bg-cover" src={logo} autoPlay loop muted/>
		</div>
  )
}

export default LogoHeader