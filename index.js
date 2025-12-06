const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', function(e){
    e.preventDefault()
    const loginFormData = new FormData(loginForm)
    
    const name = loginFormData.get('astronautName')
    const email = loginFormData.get('astronautEmail')
    const password = loginFormData.get('astronautPassword')
    const userName = loginFormData.get('astronautUserName')
     const age = loginFormData.get('astronautAge')
      const countryCode = loginFormData.get('astronautCountryCode')
    console.log(name, email, password, userName, age, countryCode) 
    
/* 
Challenge: 
1. Log out the email and password from loginFormData.
*/


})
