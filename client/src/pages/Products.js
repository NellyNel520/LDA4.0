import React from 'react'
import styled from 'styled-components'
import AllProducts from '../components/AllProducts'
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px 35px 20px 35px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  color: white;
  ${'' /* ${mobile({ marginRight: "0px" })} */}
`;

const Select = styled.select`
  padding: 3px;
  margin-right: 20px;
  border-radius: 5px;
  ${'' /* ${mobile({ margin: "10px 0px" })} */}
`;
const Option = styled.option``;

const Products = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2])
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  
  // filter function
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  

  return (
    <div className='w-[100vw]'>
      {/* <div className='text-6xl text-center pt-5 text-blue-400 font-play'>Products</div> */}
      <div className='wrapper text-center'>
      <div className='top font-play'> Products</div>
      <div className='bottom font-play' aria-hidden="true">Products</div>
    </div>
      <div className='text-blue-400 pl-8 text-[2rem] font-play'>{category}</div>
      <FilterContainer>
        <Filter >
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <AllProducts category={category} filters={filters} sort={sort}/>
    
    
    </div>
  )
}

export default Products 