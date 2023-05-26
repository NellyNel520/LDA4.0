import React from 'react'
import Navbar from '../components/Navbar'
import  Sidebar  from '../components/Sidebar'
import StatCards from '../components/StatCards'
import { useEffect, useMemo, useState } from "react";
import { userRequest } from '../services/requestMethods'

const ProductList = ({user}) => {
  return (
    <div>
    <Navbar user={user} />
    <div className='flex'>

      <div>
        <Sidebar />
     
      </div>

      <div class="h-full w-full ml-14 mt-8 mb-10 md:ml-64">
        ProductList
      </div>

    </div>
    </div>
  )
}

export default ProductList