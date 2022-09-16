function ChangeCurrent(e){
    let preId = localStorage.getItem("current class");

    if (preId === null)
        localStorage.setItem("current class", e.target.id);
    else{
        document.getElementById(preId).className = "";
        localStorage.setItem("current class", e.target.id);
    }
}

let newId = localStorage.getItem("current class");
document.getElementById(newId).className = "current";
