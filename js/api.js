/**
 * Created by IMUDGES on 2017/3/19.
 */
var url1= 'http://apis.juhe.cn/mobile/get?'+$phonenumber+'&dtyap'
var url2= 'v.juhe.cn/postcode/query'
var url3= 'web.juhe.cn/finance/gold/shgold'
$(document).ready(function () {
    $('#phone').click(function () {
        var phoNe = {
            phone:$("#phonenumber").val(),
            key: '21996f07fa43b5f1cf44a2886f300f15',
            dtype: '',
        }
        $.ajax({
            url: url1,
            type:'post',
            dataType:'json',
            async: false,
            data:phoNe,
            error: function(request,json) {
                console.log(JSON.stringify(json));
                console.log(request);
                alert("Connection error");
            },
            success:function(json){
                console.log(JSON.stringify(json));
                window.json_all=JSON.stringify(json);
                var status=json.status;
            }
        })
    })
})