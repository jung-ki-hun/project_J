$(document).ready(() => {
    $("#jkhajax").click(() => {
        $.ajax({
            url: 'index.html',
            cache: false,
            dataType: 'html',
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $("#result").html(data);

            }
        })
    }),
        $("#jkhajax").click(() => {
            $.ajax({
                url: 'index.html',
                cache: false,
                dataType: 'html',
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    $("#result").html(data);

                }
            })
        }),
        $("#jkhajax").click(() => {
            $.ajax({
                url: 'index.html',
                cache: false,
                dataType: 'html',
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    $("#result").html(data);

                }
            })
        }),
        $("#jkhajax").click(() => {
            $.ajax({
                url: 'index.html',
                cache: false,
                dataType: 'html',
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    $("#result").html(data);

                }
            })
        })
})
/**
 * url의 링크 만 변경하면 탭기능 동작
 */