$(document).ready(() => {
    $("#jkhajax-2").ready(() => {
        $.ajax({
            url: '/p/list', 
            cache: false,
            dataType: 'json',
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                var json_o = JSON.parse(data);
                let json_d = json_o.query;
                test = JSON.parse(json_d);
                var str = "";
                 $.each(test, function (key, value) {
                    str += `<option value="${value.name}>${value.name}</option>`;
                    console.log(value.name);

                });

                var html_div = document.querySelector("#listitem");
                html_div.innerHTML = str;//html에다가 만든걸 추가해줌

            },
        })
    })
})