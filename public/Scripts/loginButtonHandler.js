let loginNavigation = document.getElementById("logInOut");
let logoutNavigation = document.getElementById("logOut");

if (localStorage.getItem("UserStatus") === "true"){
    loginNavigation.style.display = "none";
    logoutNavigation.style.display = "inline-block";
}else {
    loginNavigation.style.display = "inline-block";
    logoutNavigation.style.display = "none";
}

