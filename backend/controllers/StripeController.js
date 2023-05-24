// CREATE
const makePayment = async (req, res) => {
	const KEY = process.env.STRIPE_KEY
	const stripe = require('stripe')(KEY)

	stripe.charges.create(
		{
			source: req.body.tokenId,
			amount: req.body.amount,
			currency: 'usd',
		},
		(stripeErr, stripeRes) => {
			if (stripeErr) {
				res.status(500).json(stripeErr)
			} else {
				res.status(200).json(stripeRes)
			}
		}
	)
} 

module.exports = {
	makePayment,
}

