const button = document.getElementById("logOut");
button.addEventListener("click", e => {
    e.preventDefault();
    logoutUser();
});

async function logoutUser() {
    const url = '/auth/logout';
    let data = localStorage.getItem("access_t");
    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + data,
                'Content-Type': 'application/json',
            },
        });

        if (res.statusText === "Unauthorized"){
            await refreshUserTokens()
            data = localStorage.getItem("access_t");
            let res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + data,
                    'Content-Type': 'application/json',
                },
            });
        }
        console.log("step3");
        localStorage.removeItem("access_t");
        localStorage.removeItem("refresh_t");
        localStorage.setItem("UserStatus", "false");
        location.href = "/LogInOut"
    } catch (e) {
        console.log(e);
    }
}
