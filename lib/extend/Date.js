
Date.prototype.add = function(milliseconds){
    var m = this.getTime() + milliseconds;
    return new Date(m);
};
Date.prototype.addSeconds = function(second){
    return this.add(second * 1000);
};
Date.prototype.addMinutes = function(minute){
    return this.addSeconds(minute*60);
};
Date.prototype.addHours = function(hour){
    return this.addMinutes(60*hour);
};

Date.prototype.addDays = function(day){
    return this.addHours(day * 24);
};

Date.isLeepYear = function(year){
    return (year % 4 == 0 && year % 100 != 0)
};

Date.daysInMonth = function(year,month){
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

Date.prototype.addMonth = function(){
    var m = this.getMonth();
    if(m == 11)return new Date(this.getFullYear() + 1,1,this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds());

    var daysInNextMonth = Date.daysInMonth(this.getFullYear(),this.getMonth() + 1);
    var day = this.getDate();
    if(day > daysInNextMonth){
        day = daysInNextMonth;
    }
    return new Date(this.getFullYear(),this.getMonth() + 1,day,this.getHours(),this.getMinutes(),this.getSeconds());
};

Date.prototype.subMonth = function(){
    var m = this.getMonth();
    if(m == 0)return new Date(this.getFullYear() -1,12,this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds());
    var day = this.getDate();
    var daysInPreviousMonth = Date.daysInMonth(this.getFullYear(),this.getMonth());
    if(day > daysInPreviousMonth){
        day = daysInPreviousMonth;
    }
    return new Date(this.getFullYear(),this.getMonth() - 1,day,this.getHours(),this.getMinutes(),this.getSeconds());
};

Date.prototype.addMonths = function(addMonth){
    var result = false;
    if(addMonth > 0){
        while(addMonth > 0){
            result = this.addMonth();
            addMonth -- ;
        }
    }else if(addMonth < 0){
        while(addMonth < 0){
            result = this.subMonth();
            addMonth ++ ;
        }
    }else{
        result = this;
    }
    return result;
};

Date.prototype.addYears = function(year){
    return new Date(this.getFullYear() + year,this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds());
};
Date.prototype.diff = function(interval, objDate) {
    //若参数不足或 objDate 不是日期类型則回传 undefined
    if (arguments.length < 2 || objDate.constructor != Date) { return undefined; }
    switch (interval) {
        //计算秒差
        case 's': return parseInt((objDate - this) / 1000);
        //计算分差
        case 'n': return parseInt((objDate - this) / 60000);
        //计算時差
        case 'h': return parseInt((objDate - this) / 3600000);
        //计算日差
        case 'd': return parseInt((objDate - this) / 86400000);
        //计算周差
        case 'w': return parseInt((objDate - this) / (86400000 * 7));
        //计算月差
        case 'm': return (objDate.getMonth() + 1) + ((objDate.getFullYear() - this.getFullYear()) * 12) - (this.getMonth() + 1);
        //计算年差
        case 'y': return objDate.getFullYear() - this.getFullYear();
        //输入有误
        default: return undefined;
    }
};
// 获取当前时间的中文形式
Date.prototype.GetCNDate = function() {
    var oDateText = '';
    oDateText += this.getFullYear().LenWithZero(4) + new Number(24180).ChrW();
    oDateText += this.getMonth().LenWithZero(2) + new Number(26376).ChrW();
    oDateText += this.getDate().LenWithZero(2) + new Number(26085).ChrW();
    oDateText += this.getHours().LenWithZero(2) + new Number(26102).ChrW();
    oDateText += this.getMinutes().LenWithZero(2) + new Number(20998).ChrW();
    oDateText += this.getSeconds().LenWithZero(2) + new Number(31186).ChrW();
    oDateText += new Number(32).ChrW() + new Number(32).ChrW() + new Number(26143).ChrW() + new Number(26399).ChrW() + new String('26085199682010819977222352011620845').substr(this.getDay() * 5, 5).ToInt().ChrW();
    return oDateText;
};


Date.prototype.format =function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    };
    if(/(y+)/.test(format))
    {
        format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
    }
    for(var k in o)
    {
        if(new RegExp("("+ k +")").test(format))
        {
            format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
        }
    }
    return format;
};

Date.prototype.formatObj=function(Obj,fmt)
{ //author: meizz
    var o = {
        "M+" : Obj.getMonth()+1,                 //月份
        "d+" : Obj.getDate(),                    //日
        "h+" : Obj.getHours(),                   //小时
        "m+" : Obj.getMinutes(),                 //分
        "s+" : Obj.getSeconds(),                 //秒
        "q+" : Math.floor((date.getMonth()+3)/3), //季度
        "S"  : Obj.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
        fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
        if(new RegExp("("+ k +")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
Date.prototype.getNextDay=function (d){
    d = new Date(d);
    d = +d + 1000*60*60*24;
    d = new Date(d);
    return d;
}
Date.getDaysInMonth = function (year, month) {
    var days = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
                days = 29;
            else
                days = 28;
            break;
    }
    return days;
}

if (typeof Date.prototype.format == 'undefined') {
    Date.prototype.format = function (mask) {

        var d = this;

        var zeroize = function (value, length) {

            if (!length) length = 2;

            value = String(value);

            for (var i = 0, zeros = ''; i < (length - value.length); i++) {

                zeros += '0';

            }

            return zeros + value;

        };

        return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {

            switch ($0) {

                case 'd': return d.getDate();

                case 'dd': return zeroize(d.getDate());

                case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];

                case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];

                case 'M': return d.getMonth() + 1;

                case 'MM': return zeroize(d.getMonth() + 1);

                case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];

                case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];

                case 'yy': return String(d.getFullYear()).substr(2);

                case 'yyyy': return d.getFullYear();

                case 'h': return d.getHours() % 12 || 12;

                case 'hh': return zeroize(d.getHours() % 12 || 12);

                case 'H': return d.getHours();

                case 'HH': return zeroize(d.getHours());

                case 'm': return d.getMinutes();

                case 'mm': return zeroize(d.getMinutes());

                case 's': return d.getSeconds();

                case 'ss': return zeroize(d.getSeconds());

                case 'l': return zeroize(d.getMilliseconds(), 3);

                case 'L': var m = d.getMilliseconds();

                    if (m > 99) m = Math.round(m / 10);

                    return zeroize(m);

                case 'tt': return d.getHours() < 12 ? 'am' : 'pm';

                case 'TT': return d.getHours() < 12 ? 'AM' : 'PM';

                case 'Z': return d.toUTCString().match(/[A-Z]+$/);

                // Return quoted strings with the surrounding quotes removed

                default: return $0.substr(1, $0.length - 2);

            }

        });

    };
}
//console.log(eval({number:1}))
//var d = new Date();
//console.log('d.addYears(2) = ' + d.addYears(2).toLocaleString());
//alert('d.addYears(2) = ' + d.addYears(2).toLocaleString());
//alert('d.addMonths(2) = ' + d.addMonths(2).toLocaleString());
//alert('d.addMonths(-2) = ' + d.addMonths(-2).toLocaleString());
//
//alert('d.addDays(2) = ' + d.addDays(2).toLocaleString());
//alert('d.addHours(2) = ' + d.addHours(2).toLocaleString());
//alert('d.addMinutes(2) = ' + d.addMinutes(2).toLocaleString());
//alert('d.addSeconds(2) = ' + d.addSeconds(2).toLocaleString());

function getGMT(){
    var d=new Date(); //创建一个Date对象
    localTime = d.getTime();
    localOffset=d.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数
    utc = localTime + localOffset;
    return new Date(utc);
  //  console.log(new Date(utc).format("yyyy-MM-dd hh:mm:ss"));
}
function getStandardTimeZone(){
    var d=new Date();
    return ((d.getTime()- getGMT())/3600000);
}
function getStandardTimeZoneFromDate(d){
    return ((d.getTime()- getGMT())/3600000);
}
console.log(getStandardTimeZone());
console.log(getGMT().format("yyyy-MM-dd hh:mm:ss"));
//var d = new Date();
//console.log(d.getTimezoneOffset());
//console.log(new Date(new Date().getTime() + new Date().getTimezoneOffset()*60000));
//console.log( d.toUTCString());
//
//console.log(d.getUTCFullYear(),d.getUTCMonth()+1,d.getUTCDate(),d.getUTCHours());
//
//console.log(d.getUTCDate());
////console.log(d.getUTCDay());
//console.log(d.getUTCHours());
//console.log(d.getUTCMinutes());
//console.log(d.getUTCSeconds());
//console.log(d.getUTCMilliseconds());

d=new Date(); //创建一个Date对象
localTime = d.getTime();
localOffset=d.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数
utc = localTime + localOffset; //utc即GMT时间
offset =8; //以夏威夷时间为例，东10区
hawaii = utc + (3600000*offset);
nd = new Date(hawaii);
console.log("Hawaii time is " + nd.format("yyyy-MM-dd hh:mm:ss"));
var nd=d.addHours(0.5);
//console.log(nd.getTimezoneInfo());
console.log((nd.getTime()-utc)/3600000);

