import React from 'react'
import { categories } from "../data";
import CategoryItem from './CategoryItem';

const CategoryCards = () => {
  return (
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8'>
       {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default CategoryCards