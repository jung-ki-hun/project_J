$(document).ready(() => {
    $("#jkhajax").click(() => {
        $.ajax({
            url: '/login',
            cache: false,
            dataType: 'html',
            type: "post",
            success: function (data, textStatus, jqXHR) {
                $("#result").html(data);

            }
        })
    })
})