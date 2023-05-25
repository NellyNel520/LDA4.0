import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
	quantity: 0,
	total: 0,
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Currently stuck unable to adjust item quantity once inside cart
		increaseQuantity: (state, { payload }) => {
			const product = state.products.find(
				(product) => product._id === payload._id
			)
			product.quantity = product.quantity + 1
		},
		decreaseQuantity: (state, action) => {
			const product = state.products.find(
				(item) => item._id === action.payload._id
			)
			product.quantity = product.quantity - 1
		},

		// WORKS!!!
		clearCart: (state) => {
			state.products = []
			state.quantity = 0
			state.total = 0
		},
		// WORKS!!!
		addProduct: (state, action) => {
			state.quantity += action.payload.quantity
			state.products.push(action.payload)
		},
		// WORKS!!!
		removeItem: (state, action) => {
			const itemId = action.payload
			state.products = state.products.filter((item) => item._id !== itemId)
		},
		// WORKS!!
		calculateTotal: (state) => {
			let quantity = 0
			let total = 0
			state.products.forEach((item) => {
				quantity += item.quantity
				total += item.price * item.quantity
			})
			state.quantity = quantity
			state.total = total
		},
	},
})

export const {
	addProduct,
	increaseQuantity,
	decreaseQuantity,
	removeItem,
	calculateTotal,
	clearCart,
} = cartSlice.actions
export default cartSlice.reducer
