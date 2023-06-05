import Axios from 'axios'

export const BASE_URL = 'https://lda-backend.onrender.com/api' 

const user = JSON.parse(localStorage.getItem('persist:root'))?.user
const currentUser = user && JSON.parse(user).currentUser
// const currentUser = JS/ON.parse(user).currentUser
const TOKEN = currentUser?.accessToken

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;


export const publicRequest = Axios.create({
	baseURL: BASE_URL,
})

export const userRequest = Axios.create({
	baseURL: BASE_URL,
	headers: { token: `Bearer ${TOKEN}` },
})
