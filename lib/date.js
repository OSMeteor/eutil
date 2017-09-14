function dateFormat(date,fmt) {
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
};
function dateGetDataString(d){
    var ndate = new Date();
    if(d) ndate=d;
    var year = ndate.getFullYear(); //getFullYear getYear
    var month = ndate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var date = ndate.getDate();
    if (date < 10) date = "0" + date;
    var hours=ndate.getHours();
    var minutes=ndate.getMinutes();
    var datelogfilename = year + '-' + month+'-'+date+'  '+hours+':'+''+minutes;
    return datelogfilename;
};
function dateGetDataStringNUmber(d){
    var ndate = new Date();
    if(d) ndate=d;
    var year = ndate.getFullYear(); //getFullYear getYear
    var month = ndate.getMonth() + 1;
    if (month < 10) month = "0" + month;
    var date = ndate.getDate();
    if (date < 10) date = "0" + date;
    var datelogfilename = year + '' + month+''+date;
    return datelogfilename;
};
function dateGetDayOfStart(d){
    var ndate = new Date();
    if(d) ndate=d;
    return new Date(ndate.getFullYear(),ndate.getMonth(),ndate.getDate(),0,0,0,0,0,0);
};
function dateGetDayOfEnd(d){
    var ndate = new Date();
    if(d) ndate=d;
    return new Date(ndate.getFullYear(),ndate.getMonth(),ndate.getDate(),23,59,59,999);
};
function  dateGetDayOfDaybreakSection(d) {
    var ndate = new Date();
    if(d) ndate=d;
    return {
        start:dateGetDayOfStart(ndate),
        end:dateGetDayOfEnd(ndate)
    }
}
function  dateGetDayOfDaybreakSectionDay(d,num) {
    var ndate = new Date(),n=0;
    if(d) ndate=d;
    if(num) n=num;
    return {
        start:dateGetBeforeDay(ndate,n),
        end:dateGetNextDay(ndate,n)
    }
}
function  dateGetDayOfDaybreakSectionDayBefore(d,num) {
    var ndate = new Date(),n=0;
    if(d) ndate=d;
    if(num>0) n=num;
    return {
        start:dateGetDayOfStart(dateGetBeforeDay(ndate,n)),
        end:ndate
    }
}
function  dateGetDayOfDaybreakSectionDayNext(d,num) {
    var ndate = new Date(),n=0;
    if(d) ndate=d;
    if(num>0) n=num;
    return {
        start:ndate,
        end:dateGetDayOfStart(dateGetNextDay(ndate,n))
    }
}
function dateGetNextDay(d,num){
    var nd = new Date(),n=1;
    if(d) nd=d;
    if(num) n=num;
    return new Date((new Date(nd).getTime() + (1000*60*60*24*n)));
};
function dateGetBeforeDay(d,num){
    var nd = new Date(),n=0;
    if(d) nd=d;
    if(num) n=num;
    return new Date((new Date(nd).getTime() - (1000*60*60*24*n)));
};


// 数字补零
function numberLenWithZero(numberObj,oCount) {
    var strText = numberObj.toString();
    while (strText.length < oCount) {
        strText = '0' + strText;
    }
    return strText;
};
function numberChrW(numberObj) {
    return String.fromCharCode(numberObj);
};
function isType(type) { return function(obj){ return toString.call(obj)=='[object '+type+']'; }}
// var isString=isType('String');
// var isFunction=isType('Function');

function dateAddMilliseconds(d,milliseconds){
    var m = d.getTime() + milliseconds;
    return new Date(m);
};
function dateAddSeconds(d,second){
    return dateAddMilliseconds(d,second * 1000);
};
function dateAddMinutes(d,minute){
    return dateAddSeconds(d,minute*60);
};
function dateAddHours(d,hour){
    return dateAddMinutes(d,60*hour);
};

function dateAddDays(d,day){
    return dateAddHours(d,day * 24);
};

function dateIsLeepYear(year){
    return (year % 4 == 0 && year % 100 != 0)
};

function dateDaysInMonth(year,month){
    if(month == 2){
        if(year % 4 == 0 && year % 100 != 0)
            return 29;
        else
            return 28;
    }
    else if((month <= 7 && month % 2 == 1) || (month > 7 && month % 2 == 0))
        return 31;
    else
        return 30;
};

function dateAddMonth(d){
    var m = d.getMonth();
    if(m == 11)return new Date(d.getFullYear() + 1,1,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds());

    var daysInNextMonth = dateDaysInMonth(d.getFullYear(),d.getMonth() + 1);
    var day = d.getDate();
    if(day > daysInNextMonth){
        day = daysInNextMonth;
    }
    return new Date(d.getFullYear(),d.getMonth() + 1,day,d.getHours(),d.getMinutes(),d.getSeconds());
};
function dateSubMonth(d){
    var m = d.getMonth();
    if(m == 0)return new Date(d.getFullYear() -1,12,d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds());
    var day = this.getDate();
    var daysInPreviousMonth =dateDaysInMonth(d,d.getFullYear(),d.getMonth());
    if(day > daysInPreviousMonth){
        day = daysInPreviousMonth;
    }
    return new Date(d.getFullYear(),d.getMonth() - 1,day,d.getHours(),d.getMinutes(),d.getSeconds());
};
function dateAddYears(d,year){
    return new Date(d.getFullYear() + year,d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds());
};
function dateDiff(d, objDate,interval) {
    //若参数不足或 objDate 不是日期类型則回传 undefined
    if (arguments.length < 3 || objDate.constructor != Date) { return undefined; }
    switch (interval) {
        //计算秒差
        case 's': return parseInt((objDate - d) / 1000);
        //计算分差
        case 'n': return parseInt((objDate - d) / 60000);
        //计算時差
        case 'h': return parseInt((objDate - d) / 3600000);
        //计算日差
        case 'd': return parseInt((objDate - d) / 86400000);
        //计算周差
        case 'w': return parseInt((objDate - d) / (86400000 * 7));
        //计算月差
        case 'm': return (objDate.getMonth() + 1) + ((objDate.getFullYear() - d.getFullYear()) * 12) - (d.getMonth() + 1);
        //计算年差
        case 'y': return objDate.getFullYear() - d.getFullYear();
        //输入有误
        default: return undefined;
    }
};

function dateGetCNDate(d) {
    var oDateText = '';
    oDateText += numberLenWithZero(d.getFullYear(),4) + numberChrW(24180);
    oDateText += numberLenWithZero(d.getMonth(),2) + numberChrW(26376);
    oDateText += numberLenWithZero(d.getDate(),2) + numberChrW(26085);
    oDateText += numberLenWithZero(d.getHours(),2) + numberChrW(26102);
    oDateText += numberLenWithZero(d.getMinutes(),2) + numberChrW(20998);
    oDateText += numberLenWithZero(d.getSeconds(),2) + numberChrW(31186);
    oDateText +=  numberChrW(32) + numberChrW(32) + numberChrW(26143) + numberChrW(26399)
        + numberChrW(Number(new String('26085199682010819977222352011620845')
            .substr(d.getDay() * 5, 5)));
    return oDateText;
};

function dateGetGMT(){
    var nd=new Date();
    return new Date(nd.getTime()+nd.getTimezoneOffset()*60000);
}

function dateGetStandardTimeZone(d){
    if(!d) return ((new Date().getTime()- dateGetGMT())/3600000);
    else return ((d.getTime()- dateGetGMT())/3600000).toFixed(1);
}

function dateGetDateFromOffset(d,offset){
    if(!d)   d=new Date();
    return new Date(d.getTime() + d.getTimezoneOffset()*60000 + (3600000*offset));
}
// 1900-01-01 08:00:00
function dataGetTimeStart() {
    return new Date(-2208988800000)
}
//9999-12-31T23:59:59
function dataGetTimeEnd() {
    return new Date(253402185599000)
}
function getTimeSeconds(d){
  var ndate = new Date();
  if(d) ndate=d;
  return Math.floor(ndate.getTime()/1000)
};
function getTimeSecondsDate(d){
  return new Date(d*1000)
};

module.exports={
    getTimeSeconds:getTimeSeconds,
    getTimeSecondsDate:getTimeSecondsDate,
    dateFormat:dateFormat,
    dateGetDataString:dateGetDataString,
    dateGetDataStringNUmber:dateGetDataStringNUmber,
    dateGetNextDay:dateGetNextDay,
    dateGetBeforeDay:dateGetBeforeDay,
    numberLenWithZero:numberLenWithZero,
    numberChrW:numberChrW,
    isType:isType,
    dateAddMilliseconds:dateAddMilliseconds,
    dateAddSeconds:dateAddSeconds,
    dateAddMinutes:dateAddMinutes,
    dateAddHours:dateAddHours,
    dateAddDays:dateAddDays,
    dateIsLeepYear:dateIsLeepYear,
    dateDaysInMonth:dateDaysInMonth,
    dateAddMonth:dateAddMonth,
    dateSubMonth:dateSubMonth,
    dateAddYears:dateAddYears,
    dateDiff:dateDiff,
    dateGetCNDate:dateGetCNDate,
    dateGetGMT:dateGetGMT,
    dateGetStandardTimeZone:dateGetStandardTimeZone,
    dateGetDateFromOffset:dateGetDateFromOffset,
    dateGetDayOfStart:dateGetDayOfStart,
    dateGetDayOfEnd:dateGetDayOfEnd,
    dateGetDayOfDaybreakSection:dateGetDayOfDaybreakSection,
    dateGetDayOfDaybreakSectionDay:dateGetDayOfDaybreakSectionDay,
    dateGetDayOfDaybreakSectionDayBefore:dateGetDayOfDaybreakSectionDayBefore,
    dateGetDayOfDaybreakSectionDayNext:dateGetDayOfDaybreakSectionDayNext,
    dataGetTimeStart:dataGetTimeStart,
    dataGetTimeEnd:dataGetTimeEnd
}
