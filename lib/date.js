
var getDataString =function getDataString(){  var ndate = new Date();
    var year = ndate.getFullYear(); //getFullYear getYear
    var month = ndate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var date = ndate.getDate();
    if (date < 10) date = "0" + date;
    var hours=ndate.getHours();
    var minutes=ndate.getMinutes();
    var datelogfilename = year + '-' + month+'-'+date+'  '+hours+':'+''+minutes;
    return datelogfilename;
}
//20140910
function getDataStringNUmber(){  var ndate = new Date();
    var year = ndate.getFullYear(); //getFullYear getYear
    var month = ndate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var date = ndate.getDate();
    if (date < 10) date = "0" + date;
    var datelogfilename = year + '' + month+''+date;
    return datelogfilename;
}
function formatDate(date,fmt)
{ //author: meizz
    var o = {
        "M+" : date.getMonth()+1,                 //月份
        "d+" : date.getDate(),                    //日
        "h+" : date.getHours(),                   //小时
        "m+" : date.getMinutes(),                 //分
        "s+" : date.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : date.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
function getNextDay(d){
    d = new Date(d);
    d = +d + 1000*60*60*24;
    d = new Date(d);
    return d;
}
function getBeforeDay(d){
    d = new Date(d);
    d = +d - 1000*60*60*24;
    d = new Date(d);
    return d;
}
console.log(formatDate(getNextDay("2015-08-12  16:13"),"yyyyMM hhddss"));
