"use strict";

const list_o = document.querySelector("#listitem"),
    count = document.querySelector("#count"),
    orderBtn = document.querySelector("#order");
var listitem = list_o.options[list_o.selectedIndex].value;
orderBtn.addEventListener("click", order);
$("#listitem option:selected").val();
function order() {
    const req = {
        name: $("#listitem option:selected").val(),
        count: count.value,
    };
    console.log(listitem)
    fetch("/p/buy", {
        method: "POST",     //발주 승인 요청
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
               location.href = './';
               alert(temp.msg);
            } else {
                alert(temp.msg);
            }
        })
        .catch((err) => console.error('에러 메시지 : ' + err));
}