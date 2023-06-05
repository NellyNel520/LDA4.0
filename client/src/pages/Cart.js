import React from 'react'
import styled from 'styled-components'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { calculateTotal, clearCart, removeItem } from '../redux/cartRedux'
import DeleteIcon from '@mui/icons-material/Delete'

const KEY =
	'pk_test_51MsoK7ApFenuQy8MR8LgDNJu3AtBcuO8LjCDKeQn10hJ6EE8p0G29GkIdTYBYk8EOQsYFvMpOXvOHMFeDt4FN4kY00vus1QbyV'

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
	const cart = useSelector((state) => state.cart)
	// const [quantity, setQuantity] = useState(1)
	const [stripeToken, setStripeToken] = useState(null)
	let navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(calculateTotal())
	})

	const onToken = (token) => {
		setStripeToken(token)
	}
	console.log(stripeToken)

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const response = await axios.post(
					'http://localhost:3001/api/checkout/payment',
					{
						tokenId: stripeToken.id,
						amount: cart.total * 100,
					}
				)
				console.log(response.data)
				navigate("/success", {
					state: { stripeData: response.data, products: cart },
				})
				dispatch(clearCart())
			} catch (err) {
				console.log(err)
			}
		}
		stripeToken && makeRequest()
	}, [stripeToken, cart.total, navigate])

	const handleClearCart = () => {
		dispatch(clearCart())
	}

	return (
		<div className="h-auto font-play">
			<div>
				<Wrapper className="text-white">
					<div className="h-auto  pt-10">
						<h1 className="mb-10 text-center text-2xl font-bold text-blue-500">
							Your Cart
						</h1>
						<Top className="mb-4">
							<TopButton className="bg-white mx-4 text-blue-400 hover:bg-blue-400 hover:text-white rounded">
								<Link to={'/products/'}>
									<button>CONTINUE SHOPPING</button>
								</Link>
							</TopButton>
							<TopTexts className="text-lg hidden md:flex">
								<TopText>Cart({cart.quantity})</TopText>
								<TopText> Wishlist(12)</TopText>
							</TopTexts>

							<StripeCheckout
								name="London Dior Apparel"
								image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
								billingAddress
								shippingAddress
								description={`Your total is $${cart.total}`}
								amount={cart.total * 100}
								token={onToken}
								stripeKey={KEY}
							>
								<TopButton
									type="field"
									className="bg-blue-400 rounded text-black hover:text-white"
								>
									CHECKOUT NOW
								</TopButton>
							</StripeCheckout>
						</Top>

						<div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
							<Hr />
							<div className="rounded-lg md:w-2/3">
								{cart.products.map((product) => (
									<div
										className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
										key={product._id}
									>
										<img
											src={product.img}
											alt="productImage"
											className="w-full rounded-lg sm:w-40"
										/>
										<div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
											<div className="mt-5 sm:mt-0">
												<h2 className="text-lg font-bold text-gray-900">
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
											<div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
												<div className="flex items-center border-gray-100">
													<span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
														{' '}
														-{' '}
													</span>
													{/* <input
													className="h-8 w-8 border bg-white text-center text-xs outline-none"
													type="number"
													value="2"
													min="1"
												/> */}
													<ProductAmount className="text-black">
														{product.quantity}
													</ProductAmount>
													<span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
														{' '}
														+{' '}
													</span>
												</div>
												<div className="flex items-center space-x-4  text-black">
													<p className="text-xl">
														${(product.price * product.quantity).toFixed(2)}
													</p>
													<DeleteIcon
														className="hover:fill-red-400"
														onClick={() => {
															dispatch(removeItem(product._id))
														}}
													/>
												</div>
											</div>
										</div>
									</div>
								))}
								<Hr />
								<button
									onClick={handleClearCart}
									className="border rounded p-2 mt-6 ml-[40%] hover:bg-blue-500 hover:text-black text-xl"
								>
									Clear Cart
								</button>
							</div>

							{/* <!-- Sub total --> */}
							<div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
								<SummaryTitle className="text-2xl text-blue-400">
									ORDER SUMMARY
								</SummaryTitle>
								<div className="mb-2 flex justify-between">
									<p className="text-gray-700">Subtotal:</p>
									<p className="text-gray-700">${cart.total.toFixed(2)}</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-700">Estimated Shipping:</p>
									<p className="text-gray-700">$4.99</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-700">Shipping Discount:</p>
									<p className="text-gray-700">-$4.99</p>
								</div>
								<hr className="my-4" />
								<div className="flex justify-between">
									<p className="text-lg font-bold text-blue-500">Total:</p>
									<div className="">
										<p className="mb-1 text-lg font-bold text-blue-500">
											${cart.total.toFixed(2)} USD
										</p>
										<p className="text-sm text-gray-700">+ including tax</p>
									</div>
								</div>

								<StripeCheckout
									name="London Dior Apparel"
									image="https://i.ibb.co/JxgT8GP/LDA-Logo-Blue2.png"
									billingAddress
									shippingAddress
									description={`Your total is $${cart.total}`}
									amount={cart.total * 100}
									token={onToken}
									stripeKey={KEY}
								>
									<button className="mt-6 w-full rounded-md bg-blue-500 py-2.5 font-medium text-blue-50 hover:bg-green-500 hover:text-black">
										CHECKOUT
									</button>
								</StripeCheckout>
							</div>
						</div>
					</div>
				</Wrapper>
			</div>
		</div>
	)
}

export default Cart
