"use strict";
document.getElementById("cancel").addEventListener("click", function() {
    alert("드가자");
  });

document.getElementById("order").addEventListener("click", function() {
    
    const req = {
        name: $("#listitem option:selected").val(),
        count: document.querySelector("#manufacturername").value,
    }
    alert(req.count);
    alert(req.name);

    

    // fetch("/p/buy", {
    //     method: "POST",     //발주 승인 요청
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    //     .then((res) => res.json()) //query: null,
    //     .then((data) => {
    //         var temp = JSON.parse(data);
    //         console.log(temp);
    //         if (temp.msg == 'Succesful') {
    //            location.href = './';
    //            alert(temp.msg);
    //         } else {
    //             alert(temp.msg);
    //         }
    //     })
    //     .catch((err) => console.error('에러 메시지 : ' + err));
  });

