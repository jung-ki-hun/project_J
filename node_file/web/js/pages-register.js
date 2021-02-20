"use strict";

const email = document.querySelector("#email"),
    username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    registerBtn = document.querySelector("button");

registerBtn.addEventListener("click", register);

function register() {
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
    })
        .then((res) => res.json()) //query: null,
        .then((data) => {
            var temp = JSON.parse(data);
            console.log(temp);
            if (temp.msg == 'Succesful') {
                location.href = '/';
            } else {
                alert(temp.msg);
            }
        })
        .catch((err) => console.error('에러 메시지 : ' + err))
}