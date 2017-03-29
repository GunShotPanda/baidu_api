/**
 * Created by IMUDGES on 2017/3/19.
 */
$(function () {
    $('#phone').click(function () {
        var phoneNumber=$("#txt").val();

        $.ajax({
            type: "GET",
            url: "http://localhost:3000",
            data: {
                address: "apis.juhe.cn/mobile/get?phone="+phoneNumber+"&key=21996f07fa43b5f1cf44a2886f300f15"
            },
            dataType: "json",
            // jsonp: "callback",
            // jsonpCallback: "doFunction",
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
$(function () {
    $('#p').click(function () {
        var postal=$("#postal").val();
        $.ajax({
            type: "GET",
            url: "http://localhost:3000",
            data:{
                address:"v.juhe.cn/postcode/query?postcode="+postal+"&key=578bb5fc58bf3177b8c50ec885e24e45"
            },
            dataType: "json",
            // jsonp: "callback",
            // jsonpCallback: "doFunction",
            error: function() {
                alert("Connection error");
            },
            success:function(data){
                alert("Connection success");
                showData(data);
            }
        })
    });
    function showData(data){
        var result=data.result.list;
        for (var i=1;i<=5;i++)
        {
        $("#paragraph").html(
            "邮编:" + result[i].PostNumber +
            "<br/>省份：" + result[i].Province +
            "<br/>城市：" + result[i].City +
            "<br/>区：" + result[i].District +
            "<br/>地址：" + result[i].Address

        )}
        }
});
$(function () {
    var url1="web.juhe.cn:8080/finance/gold/shgold";
    var key;
    $('#option1').click(function () {
        url1="web.juhe.cn:8080/finance/gold/shgold";
    });
    $('#option2').click(function () {
        url1="web.juhe.cn:8080/finance/gold/shfuture";
    });
    $('#option3').click(function () {
        url1="web.juhe.cn:8080/finance/gold/bankgold";
    });
    $('#golden').click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:3000",
            data: {
              address:url1+"?v=&key=8cc9e642ba492d27c0dac28bdb64da8a"
            },
            dataType: "json",
            // jsonp: "callback",
            // jsonpCallback: "doFunction",
            error:function() {
                alert("Connection error");
            },
            success:function(data){
                alert("Connection success")
                showData(data);
            }
        })
    });
    function showData(data){
        var result=data.result;
        $("#paragraph").html(
            "品种:"+result.variety+
            "<br/>最新价："+result.latestpri+
            "<br/>开盘价："+result.openpri+
            "<br/>最高价："+result.maxpri+
            "<br/>最低价："+result.minpri+
            "<br/>更新时间："+result.time
        )}
})
// "variety":"Ag(T+D)",		/*品种*/
//     "latestpri":"6585.00",		/*最新价*/
//     "openpri":"6712.00",		/*开盘价*/
//     "maxpri":"6721.00",		/*最高价*/
//     "minpri":"6581.00",		/*最低价*/
//     "limit":"-1.98%",		/*涨跌幅*/
//     "yespri":"6718.00",		/*昨收价*/
//     "totalvol":"1564524.0000",	/*总成交量*/
//     "time":"2012-12-19 15:29:59"	/*更新时间*/