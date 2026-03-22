function login(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "Rolandklarex" && pass === "rolandklarex123"){
        localStorage.setItem("loggedIn","true");
        window.location.href = "page1.html";
    } else {
        document.getElementById("error").innerText = "You are wrong dude";
    }
}

function checkAuth(){
    if(localStorage.getItem("loggedIn") !== "true"){
        window.location.href = "login.html";
    }
}

function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


/* =======================
   GLOBAL CONTROL BUTTONS
======================= */

document.addEventListener("DOMContentLoaded", function(){

    const controls = document.createElement("div");
    controls.className = "top-controls";

    /* LOW / HIGH DETAIL BUTTON */
    const detailBtn = document.createElement("button");

    function updateDetailButton(){
        if(document.body.classList.contains("low-detail")){
            detailBtn.innerText = "High Detail Mode";
        } else {
            detailBtn.innerText = "Low Detail Mode";
        }
    }

    /* restore saved mode */
    if(localStorage.getItem("lowDetail") === "true"){
        document.body.classList.add("low-detail");
    }

    updateDetailButton();

    detailBtn.onclick = function(){
        document.body.classList.toggle("low-detail");

        if(document.body.classList.contains("low-detail")){
            localStorage.setItem("lowDetail","true");
        } else {
            localStorage.setItem("lowDetail","false");
        }

        updateDetailButton();
    };


    /* DARK MODE BUTTON */
    const darkBtn = document.createElement("button");

    function updateDarkButton(){
        if(document.body.classList.contains("dark-mode")){
            darkBtn.innerText = "Light Mode";
        } else {
            darkBtn.innerText = "Dark Mode";
        }
    }

    if(localStorage.getItem("darkMode") === "true"){
        document.body.classList.add("dark-mode");
    }

    updateDarkButton();

    darkBtn.onclick = function(){
        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){
            localStorage.setItem("darkMode","true");
        } else {
            localStorage.setItem("darkMode","false");
        }

        updateDarkButton();
    };

    controls.appendChild(detailBtn);
    controls.appendChild(darkBtn);

    document.body.appendChild(controls);

});