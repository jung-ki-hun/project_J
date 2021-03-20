$(document).ready(() => {
    $("#jkhajax-1").ready(() => {
        $.ajax({
            url: 'pages-productlist.html',//'/pages/pages-situation.html'
            cache: false,
            dataType: 'html',
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $("#result").html(data);

            }
        })
    }),
    $("#jkhajax-1").click(() => {
        $.ajax({
            url: 'pages-productlist.html',//'/pages/pages-situation.html'
            cache: false,
            dataType: 'html',
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                $("#result").html(data);

            }
        })
    }),
        $("#jkhajax-2").click(() => {
            $.ajax({
                url: 'pages-productout.html',//'/pages/pages-manual.html'
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