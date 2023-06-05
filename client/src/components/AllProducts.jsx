import React from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import '../styles/slash-title.css'
import { useEffect, useState } from "react";
import { BASE_URL } from '../services/requestMethods'

const AllProducts = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Axios call to sort products by category
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `${BASE_URL}/products/?category=${category}`
            :  `${BASE_URL}/products`
        );
        console.log(res)
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
    console.log(products)
  }, []);

 // Axios call to sort by category and filter by size and color products 
 useEffect(() => {
  // category &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
}, [products, category, filters]);

// axios call to sort by price and date added 
useEffect(() => {
  if (sort === "newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (sort === "asc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [sort]);



  return (
    <div>
   
    <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:ml-4 lg:grid-cols-4 xl:gap-x-8'>
    {
       filteredProducts.map((item) => <ProductCard item={item} key={item.id} />)
   }
    </div>
    
    </div>
  )
}

export default AllProducts