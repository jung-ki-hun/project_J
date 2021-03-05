$(document).ready(() => {
    $("#jkhajax-1").ready(() => {
        $.ajax({
            url: 'pages-statistics.html',//'/pages/pages-statistics.html'
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
            url: 'pages-statistics.html',//'/pages/pages-statistics.html'
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
                url: 'pages-productlist.html',//'/pages/pages-productlist.html'
                cache: false,
                dataType: 'html',
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    $("#result").html(data);

                }
            })
        }),
        $("#jkhajax-3").click(() => {
            $.ajax({
                url: 'pages-productbuy.html',//'/pages/pages-productbuy.html'
                cache: false,
                dataType: 'html',
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    $("#result").html(data);

                }
            })
        }),
        $("#jkhajax-4").click(() => {
            $.ajax({
                url: 'pages-productbill.html',//'/pages/pages-productbill.html'
                cache: false,
                dataType: 'html',
                type: "GET",
                success: function (data, textStatus, jqXHR) {
                    $("#result").html(data);

                }
            })
        })
        $("#jkhajax-5").click(() => {
            $.ajax({
                url: 'index.html',//'/pages/pages-warehouse.html'
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