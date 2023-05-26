import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ProductSize = styled.span``

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${'' /* ${mobile({ margin: '5px 15px' })} */}
`

const OrderProducts = ({order}) => {
  console.log(order.products)
  console.log(order)
  const products = order.products
  const [items, setItems] = useState([]);

  return (
    <div>
    {products.map((product) => (
      <div
										class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
										key={product._id}
									>
										<img
											src={product.img}
											alt="productImage"
											class="w-full rounded-lg sm:w-40"
										/>
										<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
											<div class="mt-5 sm:mt-0">
												<h2 class="text-lg font-bold text-gray-900">
													{product.title}
												</h2>
												<p className="text-blue-400 mb-4">{product._id}</p>
												<ProductSize className="text-black text-lg">
													<b className=" pr-3">Size:</b> {product.size}
												</ProductSize>
												<div className="flex">
													<b className="text-black pr-3">Color:</b>
													<ProductColor
														className="mt-2"
														color={product.color}
													/>
												</div>
											</div>
											<div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
												<div class="flex items-center border-gray-100">
													<span class=" py-1 px-3.5 text-black">
													qty:
													</span>
													{/* <input
													class="h-8 w-8 border bg-white text-center text-xs outline-none"
													type="number"
													value="2"
													min="1"
												/> */}
													<ProductAmount className="text-black">
														{product.quantity}
													</ProductAmount>
												
												</div>
												<div class="flex items-center space-x-4  text-black">
													<p class="text-xl">
														${(product.price * product.quantity).toFixed(2) }
													</p>
													{/* <DeleteIcon
														className="hover:fill-red-400"
														onClick={() => {
															dispatch(removeItem(product._id))
														}}
													/> */}
												</div>
											</div>
										</div>
									</div>
    ))}
    </div>
  )
}

export default OrderProducts