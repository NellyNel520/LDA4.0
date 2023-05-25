import React from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const Wrapper = styled.div`
	padding: 1rem 1rem 4rem 1rem;
	${'' /* ${mobile({ padding: "10px" })} */}
	${'' /* ${mobile({ padding: '10px' })} */}
`

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	${
		'' /* background-color: ${(props) =>
    props.type === "filled" ? "white" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"}; */
	}
	${'' /* background-color: blue; */}
`

const TopTexts = styled.div`
	${'' /* ${mobile({ display: 'none' })} */}
`
const TopText = styled.span`
	text-decoration: underline;
	cursor: pointer;
	margin: 0px 10px;
`

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${'' /* ${mobile({ flexDirection: 'column' })} */}
`

const Info = styled.div`
	flex: 3;
`

const Product = styled.div`
	display: flex;
	justify-content: space-between;

	${'' /* ${mobile({ flexDirection: 'column' })} */}
`

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`

const Image = styled.img`
	width: 200px;
`

const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`

const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${'' /* ${mobile({ margin: '5px 15px' })} */}
`

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${'' /* ${mobile({ marginBottom: '20px' })} */}
`

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightblue;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
`

const SummaryTitle = styled.h1`
	font-weight: 200;
`

const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;
`

const Cart = () => {
	return (
		<div>
			<Wrapper className="text-white">
				<div class="h-screen  pt-10">
					<h1 class="mb-10 text-center text-2xl font-bold text-blue-500">
						Your Cart
					</h1>
					<Top className="mb-4">
						<TopButton className="bg-white text-blue-400 hover:bg-blue-400 hover:text-white rounded">
							<Link to={'/products/'}>
								<button>CONTINUE SHOPPING</button>
							</Link>
						</TopButton>
						<TopTexts>
							<TopText>Shopping Bag(0)</TopText>
							<TopText>Your Wishlist(12)</TopText>
						</TopTexts>

						<StripeCheckout
							name="London Dior Apparel"
							image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
							billingAddress
							shippingAddress
							// description={`Your total is $${cart.total}`}
							// amount={cart.total * 100}
							// token={onToken}
							// stripeKey={KEY}
						>
							<TopButton
								type="field"
								className="bg-blue-400 rounded text-black hover:text-white"
							>
								CHECKOUT NOW
							</TopButton>
						</StripeCheckout>
					</Top>

					<div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
						<div class="rounded-lg md:w-2/3">
							<div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
								<img
									src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
									alt="product-image"
									class="w-full rounded-lg sm:w-40"
								/>
								<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
									<div class="mt-5 sm:mt-0">
										<h2 class="text-lg font-bold text-gray-900">
											Nike Air Max 2019
										</h2>
										<p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
									</div>
									<div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
										<div class="flex items-center border-gray-100">
											<span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
												{' '}
												-{' '}
											</span>
											<input
												class="h-8 w-8 border bg-white text-center text-xs outline-none"
												type="number"
												value="2"
												min="1"
											/>
											<span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
												{' '}
												+{' '}
											</span>
										</div>
										<div class="flex items-center space-x-4">
											<p class="text-sm">259.000 ₭</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
								<img
									src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
									alt="product-image"
									class="w-full rounded-lg sm:w-40"
								/>
								<div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
									<div class="mt-5 sm:mt-0">
										<h2 class="text-lg font-bold text-gray-900">
											Nike Air Max 2019
										</h2>
										<p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
									</div>
									<div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
										<div class="flex items-center border-gray-100">
											<span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
												{' '}
												-{' '}
											</span>
											<input
												class="h-8 w-8 border bg-white text-center text-xs outline-none"
												type="number"
												value="2"
												min="1"
											/>
											<span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
												{' '}
												+{' '}
											</span>
										</div>
										<div class="flex items-center space-x-4">
											<p class="text-sm">259.000 ₭</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M6 18L18 6M6 6l12 12"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- Sub total --> */}
						<div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
							<SummaryTitle className="text-2xl text-blue-400">
								ORDER SUMMARY
							</SummaryTitle>
							<div class="mb-2 flex justify-between">
								<p class="text-gray-700">Subtotal:</p>
								<p class="text-gray-700">$129.99</p>
							</div>
							<div class="flex justify-between">
								<p class="text-gray-700">Estimated Shipping:</p>
								<p class="text-gray-700">$4.99</p>
							</div>
              <div class="flex justify-between">
								<p class="text-gray-700">Shipping Discount:</p>
								<p class="text-gray-700">-$4.99</p>
							</div>
							<hr class="my-4" />
							<div class="flex justify-between">
								<p class="text-lg font-bold text-blue-500">Total:</p>
								<div class="">
									<p class="mb-1 text-lg font-bold text-blue-500">$134.98 USD</p>
									<p class="text-sm text-gray-700">+ including tax</p>
								</div>
							</div>
							{/* <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
								Check out
							</button> */}
						</div>
					</div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Cart
