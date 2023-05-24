const {Cart } = require('../models')





// Create new Cart

const createCart = async (req, res) => {
  try {
      const cart = await new Cart(req.body)
      await cart.save()
      return res.status(201).json({
          cart,
      });
  } catch (error) {
      return res.status(500).json({ error: error.message })
  }
}

// UPDATE Cart
const updateCart = async (req, res) => {
  try {
      const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true})
      res.status(200).json(cart)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// DELETE

const deleteCart = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Cart.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Cart has been deleted");
      }
      throw new Error("Cart not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

// Get cart by User Id (User Cart)
const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
}

// Get all carts (admin purpose)

const getAllCarts = async (req, res) => {
	try {
		const carts = await Cart.find();
		return res.status(200).json({ carts });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

// get cart by id

const getCartById = async (req, res) => {
	try {
		const { id } = req.params;
		const cart = await Cart.findById(id);
		if (cart) {
			return res.status(200).json({ cart });
		}
		return res
			.status(404)
			.send('Cart with the specified ID does not exists');
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports ={
  getAllCarts,
  getUserCart,
  deleteCart,
  updateCart,
  createCart,
  getCartById
}