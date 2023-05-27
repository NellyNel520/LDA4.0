import React from 'react'
import Navbar from '../components/Navbar'
import  Sidebar  from '../components/Sidebar'
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../services/requestMethods'
import UserInfo from '../components/UserInfo';



const User = ({user}) => {
  return (
    <div>
    <Navbar user={user} />
    <div className='flex'>

      <div>
        <Sidebar />
     
      </div>

      <div class="h-full w-full  mt-8 mb-10">
        <UserInfo />
      </div>

    </div>
    </div>
  )
}

export default User