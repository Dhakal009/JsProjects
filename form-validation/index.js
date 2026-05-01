const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#loginForm")



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    let isValid = true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailError = emailRegex.test(email.value);
    let passwordError = passwordRegex.test(password.value);

    if(!emailError){
        document.querySelector("#emailError").textContent = "Email is incorrect";
        isValid =false;
    }

    if(!passwordError){
        document.querySelector("#passwordError").textContent = "Password is incorrect";
        isValid = false
    }
    
})