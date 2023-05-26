import axios from "axios";

const BASE_URL = "http://localhost:3001/api/"

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I2ZTYwOGUyZDhiYzQ2OGYzZDg3MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Mjg4ODU4OH0.7s1F0PEfLnC6CPa7Y2159T0gmDa0rYUgLAJagmkfqpY"

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = currentUser?.accessToken
// console.log(TOKEN)


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});