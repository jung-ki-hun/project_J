"use strict";

const email = document.querySelector("#email"),
username = document.querySelector("#username"),
password = document.querySelector("#password"),
loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        email: email.value,
        username: username.value,
        password: password.value,
    };

    fetch("/regi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
}