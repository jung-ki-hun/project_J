"use strict";

const id = document.querySelector("#id"),
    paword = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json()) //query: null,
        .then((data) => {
            console.log(data);
            // if (data.success) { // }
        })
        .catch((err) => console.error('에러 메시지 : '+err));
}