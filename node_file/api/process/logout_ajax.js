$(document).ready(() => {
      $.ajax({
            url: '/login',
            cache: false,
            dataType: 'html',
            type: "post",
            success: function (data, textStatus, jqXHR) {
                let name_req = data;
                var str_login = '<a href="pages-login.html">login</a>';
                var str_logout = '<form method="GET" action="/process/logout"><p>${name_req}님 환영합니다.</p> <a href="pages-login.html"> Logout</a></form>   ';
                if(data == '')//로그인 성공
                {

                    $("#login__main_benner").html(data);
                }
                else
                {

                }

            }
        })
    
})