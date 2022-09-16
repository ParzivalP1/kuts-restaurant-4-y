import {showErrorEmail, showErrorPassword, wordCheck} from "./inputValidation.js"

const email = document.getElementById("emailSignin");
const pwd = document.getElementById("pwdSignin");

const button = document.getElementById("loginId");
button.addEventListener("click", e => {
    e.preventDefault();
    loginUser();
});

async function loginUser(){
    const url = '/auth/signin';
    const data = {
        email: email.value,
        password: pwd.value,
    }
    try {
        let res = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        let resJson = await res.json();

        showErrorEmail.innerText = "";
        showErrorPassword.innerText = "";

        if (resJson.error === "Bad Request" || resJson.error === "Forbidden"){
            wordCheck(resJson, showErrorEmail, "email");
            wordCheck(resJson, showErrorPassword, "password");
            throw new Error(resJson.message);
        }

        localStorage.setItem("access_t", resJson.access_token);
        localStorage.setItem("refresh_t", resJson.refresh_token);
        localStorage.setItem("UserStatus", "true");

        location.href = "/index";
    }catch (e){
        console.log(e);
    }
}