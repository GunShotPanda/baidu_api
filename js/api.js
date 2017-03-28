/**
 * Created by IMUDGES on 2017/3/19.
 */
$(function () {
    $('#phone').click(function () {
        var phoneNumber=$("#txt").val();
        $.ajax({
            type: "GET",
            url: "http://apis.juhe.cn/mobile/get?phone="+phoneNumber+"&key=21996f07fa43b5f1cf44a2886f300f15",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "doFunction",
            error: function() {
                alert("Connection error");
            },
            success:function(data){
                showData(data);
            }
        })
    });
function showData(data){
    var result=data.result;
    $("#paragraph").html(
        "省份:"+result.province+
        "<br/>城市："+result.city+
        "<br/>区号："+result.areacode+
        "<br/>运营商："+result.company+
        "<br/>卡类型："+result.card
    )}
});