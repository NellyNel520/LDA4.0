// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyD2gcQ4WlYvgkaTxP0xvXqGRiryjLxQWbA',
	authDomain: 'lda-ecommerceapp.firebaseapp.com',
	projectId: 'lda-ecommerceapp',
	storageBucket: 'lda-ecommerceapp.appspot.com',
	messagingSenderId: '785239612824',
	appId: '1:785239612824:web:b54744b9afb80c66a11fed',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);

export default app
// export const storage = getStorage()
