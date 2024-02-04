const firebaseConfig = {
    apiKey: "AIzaSyAEkUsoTdB6okwes86Mo0PQLlUvy3i16g4",
    authDomain: "nha-bac-hoc-it.firebaseapp.com",
    projectId: "nha-bac-hoc-it",
    storageBucket: "nha-bac-hoc-it.appspot.com",
    messagingSenderId: "572299581004",
    appId: "1:572299581004:web:b6d8ac59bc061985c0c6e9",
    measurementId: "G-91R2TV9N3L",
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  
function signUp() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {  
        const user = userCredential.user;
        showUserInfo(user);
    })
    .catch((error) => {
        console.error('Lỗi đăng ký', error.message);
    });
}
