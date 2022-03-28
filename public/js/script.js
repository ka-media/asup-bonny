import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";      
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";      
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
     apiKey: "AIzaSyCS7y8LT91DUWGBnqUMxmKQvx5P9j8kBnE",
     authDomain: "asup-web.firebaseapp.com",
     projectId: "asup-web",
     storageBucket: "asup-web.appspot.com",
     messagingSenderId: "887415144657",
     appId: "1:887415144657:web:ae57eb60e66e528a8545f0"
     };
   
     // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     //const analytics = getAnalytics(app);
     const database = getDatabase(app);
     const auth = getAuth();

     // Contact Page

     const myForm = document.querySelector('#my-form');
          const nameInput = document.querySelector('#name');
          const numberInput = document.querySelector('#phone');
          const textInput = document.querySelector('#message');
          const msg = document.querySelector('.msg');
          const dt = Date();

          myForm.addEventListener('submit', onSubmit);
          function onSubmit(e) {
               e.preventDefault();
               if(nameInput.value === '' || numberInput.value === '' || textInput.value === '') {
                    //
                    msg.innerHTML = 'Please enter all fields!';
                    setTimeout(() => msg.remove(), 3000);
                    //document.getElementById('msg').textContent = err;
               }
               else if(nameInput.value != '' && numberInput.value != '' && textInput.value != '') {
                    set(ref(database, 'messages/'), {
                         name: nameInput,
                         number: numberInput,
                         message: textInput,
                         date: dt
                    })
               }
               else {
                const result = firebase.database();
                result.catch(function(error) {
                  const errorCode = error.code;
                  const errorMessage = error.message;
              
                  console.log(errorCode);
                  alert('Message' + errorMessage);
                });
          }
     }