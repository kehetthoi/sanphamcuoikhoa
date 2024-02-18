
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAEkUsoTdB6okwes86Mo0PQLlUvy3i16g4",
    authDomain: "nha-bac-hoc-it.firebaseapp.com",
    projectId: "nha-bac-hoc-it",
    storageBucket: "nha-bac-hoc-it.appspot.com",
    messagingSenderId: "572299581004",
    appId: "1:572299581004:web:b6d8ac59bc061985c0c6e9",
    measurementId: "G-91R2TV9N3L",
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
``

  
function signIn() {
    const emailsi = document.getElementById('username').value;
    const passwordsi = document.getElementById('password').value;
    const errorMessageElement = document.getElementById('error-message');

    const auth = firebase.auth();

    auth.signInWithEmailAndPassword(emailsi, passwordsi)
        .then((userCredential) => {  
            console.log(userCredential)
            const user = userCredential.user;
            console.log('đăng nhập thành công: ' + user.email);

            
        })
        .catch((error) => {
            console.error('Lỗi đăng nhập', error.message);
            var errorCode = error.code;
            var errorMessage = error.message;
            errorMessageElement.textContent = errorMessage;
        });
}