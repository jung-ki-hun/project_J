$(document).ready(() => {
    $("#jkhajax-1").ready(() => {
        $.ajax({
            url: '/p/list',//'/pages/pages-situation.html'
            cache: false,
            dataType: 'json',
            type: "GET",
            success: function (data, textStatus, jqXHR) {
                //console.log(data);
                // const parser = new DOMParser();
                // let html_d = data;
                // const doc = parser.parseFromString(JSON.stringify(html_d.query), 'text/html');
                // $("#list_item").html(doc);
                var json_o = JSON.parse(data);
                var json_d = json_o.query;
                //let json_d = JSON.stringify(json_d);
                console.log(json_d);
                var str;
                for (let i in json_d) {
                    var stock = json_d[i].stock *10;
                    var qrcode = json_d[i].qr_code;
                    var price = json_d[i].price;
                    var name = json_d[i].name;
                    var qrcode_check =json_d[i].QRcode_check;
                    str += `<tr>
                    <td>
                        <h6 class="mt-0 m-b-5">`+qrcode_check+`</h6>
                        <p class="m-0 font-14">`+name+`</p>
                    </td>							
                    <td>`+price+`</td>
                    <td>`+qrcode+`</td>
                    <td>
                        <div class="progress" style="height: 5px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width:`+stock+`0%;"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </td>
                    <td>
                        <a href="javascript:void(0);" class="m-r-15 text-muted" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Edit"><i
                                class="mdi mdi-pencil font-18"></i></a>
                        <a href="javascript:void(0);" class="text-muted" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Delete"><i
                                class="mdi mdi-close font-18"></i></a>
                    </td>
                </tr>`;
                console.log(stock);
                } 
                console.log(str);
                var html_div =document.querySelector("#list_item");
                var ch = document.querySelector("progress");
           
                    html_div.innerHTML = str;//html에다가 만든걸 추가해줌
                

            },
        })
    })
})