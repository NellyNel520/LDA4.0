import { loginFailure, loginStart, loginSuccess } from '../redux/userRedux'
import { publicRequest, userRequest } from './requestMethods'
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "../redux/productRedux";
import {getCustomerStart,
  getCustomerSuccess,
  getCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
  updateCustomerStart,
  updateCustomerSuccess,
  updateCustomerFailure,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailure, } from "../redux/customerRedux"
import {getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
  updateOrderStart,
  updateOrderSuccess,
  updateOrderFailure,
  addOrderStart,
  addOrderSuccess,
  addOrderFailure,} from "../redux/orderRedux"

export const login = async (dispatch, user) => {
	dispatch(loginStart())
	try {
		const res = await userRequest.post('/auth/login', user)
		dispatch(loginSuccess(res.data))
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const registerUser = async (data) => {
	try {
		const res = await publicRequest.post('/auth/register', data)
		return res.data
	} catch (error) {
		throw error
	}
}

// export const addUser = async (customer, dispatch) => {
//   dispatch(addCustomerStart());
//   try {
//     const res = await userRequest.post(`/auth/register`, customer);
//     dispatch(addCustomerSuccess(res.data));
//   } catch (err) {
//     dispatch(addCustomerFailure());
//   }
// };

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/add`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products/");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const getUsers = async (dispatch) => {
  dispatch(getCustomerStart()); 
  try {
    const res = await userRequest.get("/users/");
    dispatch(getCustomerSuccess(res.data));
  } catch (err) {
    dispatch(getCustomerFailure());
  }
}; 

export const getOrders = async (dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get("/orders/all");
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};

export const getOrder = async (id, dispatch) => {
  dispatch(getOrderStart());
  try {
    const res = await userRequest.get(`/orders/find/${id}`);
    dispatch(getOrderSuccess(res.data));
  } catch (err) {
    dispatch(getOrderFailure());
  }
};


// DELETE
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};


export const deleteUser = async (id, dispatch) => {
  dispatch(deleteCustomerStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteCustomerSuccess(res.data));
  } catch (err) {
    dispatch(deleteCustomerFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderSuccess(res.data));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};



// UPDATE
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.data));
  } catch (err) {
    dispatch(updateProductFailure());
  } 
};

export const updateUser = async (id, customer, dispatch) => {
  dispatch(updateCustomerStart());
  try {
    // update
    const res = await userRequest.put(`/users/${id}`, customer);
    dispatch(updateCustomerSuccess(res.data));
  } catch (err) {
    dispatch(updateCustomerFailure());
  }
};

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateOrderStart());
  try {
    // update
    const res = await userRequest.put(`/orders/${id}`, order);
    dispatch(updateOrderSuccess(res.data));
  } catch (err) {
    dispatch(updateOrderFailure());
  }
};

