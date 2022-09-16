async function refreshUserTokens() {
    const url = '/auth/refresh';
    let data = localStorage.getItem("refresh_t");
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + data,
            'Content-Type': 'application/json',
        },
    });

    let resJson = await res.json();
    console.log(resJson);

    if (res.statusText === "Unauthorized"){
        localStorage.removeItem("access_t");
        localStorage.removeItem("refresh_t");
        localStorage.setItem("UserStatus", "false");

        console.log("step1");
        throw new Error ("Token expired");
    }
    console.log("step2");
    localStorage.setItem("access_t", resJson.access_token);
    localStorage.setItem("refresh_t", resJson.access_token);
}