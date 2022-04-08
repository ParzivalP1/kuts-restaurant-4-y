function handler(){
  document.getElementById("logInOut").innerHTML === "Log in" ? document.getElementById("logInOut").innerHTML = "Log out"
                                                                      : document.getElementById("logInOut").innerHTML = "Log in";
  localStorage.setItem("LogInfo", document.getElementById("logInOut").textContent);
}
