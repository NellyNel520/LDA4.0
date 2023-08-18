// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD2PedUQjUSnSavXuF-NvnJF6h1Ed_VSXY',
	authDomain: 'lda4-2e810.firebaseapp.com',
	projectId: 'lda4-2e810',
	storageBucket: 'lda4-2e810.appspot.com',
	messagingSenderId: '1036178258406',
	appId: '1:1036178258406:web:5eea378d7b83069cd03e27',
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage()
