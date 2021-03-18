$(document).ready(() => {
    $("#jkhajax-1").ready(() => {
        $.ajax({
            url: '/p/list', //신주소 만들어야됨~
            cache: false,
            dataType: 'json',
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                var json_o = JSON.parse(data);
                let json_d = json_o.query;
                test = JSON.parse(json_d);
                var str = "";
                console.log(test);
                 $.each(test, function (key, value) {
                    str += `        <tr>
                    <td>
                        <a href="#" class="font-600 text-muted">#${1}</a></td>
                    <td>${1}<</td>
                    <td>${1}<</td>
                    <td>${1}<</td>
                    <td>
                        <a href="javascript:void(0);" class="m-r-15 text-muted" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="mdi ion-android-note"></i></a></td>
                </tr>/td>
            </tr>`;
                });

                var html_div = document.querySelector("#list_item");
                html_div.innerHTML = str;//html에다가 만든걸 추가해줌
                $('#datatable').DataTable();

            },
        })
    })
})