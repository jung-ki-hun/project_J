var benner = document.querySelector("#login__main_benner1");
var Succesful_login = () => {
    $.ajax({
        url: '/login',//'/pages/pages-statistics.html'
        cache: false,
        dataType: 'json',
        type: "GET",
        success: function (data, textStatus, jqXHR) {
            var json_o = JSON.parse(data);
            let json_d = json_o.query;

            if (json_o.state == 1) {
                let name = json_d;
                console.log(json_d);
                let str = `<form method="GET" action="/login">${name}님 환영합니다!&nbsp&nbsp&nbsp&nbsp<a href ="#">logout</a> </form>`;
                benner.innerHTML = str;
            } else {
                let str = `<a href="pages-login.html">Login</a>`
                benner.innerHTML = str;
            }

        },//login__main_benner
        error: function (a, b, c) {
            //통신 실패시 발생하는 함수(콜백)
            //alert(a + b + c);
            let str = `<a href="pages-login.html">Login</a>`
            benner.innerHTML = str;
        }
    })
}
$(document).ready(() => {
    Succesful_login();

})