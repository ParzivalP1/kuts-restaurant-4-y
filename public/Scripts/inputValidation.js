const helper = {
    showErrorEmail: document.getElementById("emailError"),
    showErrorPassword: document.getElementById("passwordError"),

    wordCheck: function (resJson, checkField, str){
        for (let i = 0; i < resJson.message.length; i++){
            if (resJson.message[i].includes(str)){
                checkField.innerText += resJson.message[i] + '\n';
            }
        }
        if (resJson.message.includes("Credential taken")){
            checkField.innerText += resJson.message;
        }
        if (resJson.message.includes("User credentials incorrect")){
            checkField.innerText += resJson.message;
        }
        if (resJson.message.includes("Password credentials incorrect")){
            checkField.innerText += resJson.message;
        }
    }
}
export const showErrorEmail = helper.showErrorEmail;
export const showErrorPassword = helper.showErrorPassword;
export const wordCheck = helper.wordCheck;