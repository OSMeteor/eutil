/**
 * Created by osmeteor on 4/25/17.
 */
function strAppend(str,nstr) {
    return str.concat(nstr);
};
/** 删除指定索引位置的字符，索引无效将不删除任何字符 **/
function strRemoveCharAt(str,index) {
    if (index < 0 || index >= str.length) {
        return str.valueOf();
    }
    else if (index == 0) {
        return str.substring(1, str.length);
    }
    else if (index == str.length - 1) {
        return str.substring(0, str.length - 1);
    }
    else {
        return str.substring(0, index) + str.substring(index + 1);
    }
};
/** 删除指定索引区间的字符串 **/
function strRemoveString (str,start, end) {
    if (start == end) {
        return strRemoveCharAt(str,start);
    }
    else {
        if (start > end) {
            var temp = start;
            start = end;
            end = temp;
        }
        if (start < 0) {
            start = 0;
        }
        if (end > str.length - 1) {
            end = str.length - 1;
        }
        return str.substring(0, start) + str.substring(end +1 , str.length);
    }
}

function strEndWith (str,subStr) {
    if (subStr.length > str.length)return false;
    else  return (str.lastIndexOf(subStr) == (str.length - subStr.length)) ? true : false;

}
function strEqual(str,str1) {
    return str===str1;
}
function strEqualIgnoreCase(str,str1) {
    return str.toLowerCase()===str1.toLowerCase();
}
/** 将指定的字符串插入到指定的位置后面，索引无效将直接追加到字符串的末尾 **/
function strInsert(str,ofset, subStr) {
    if (ofset < 0 || ofset >= this.length - 1) {
        return strAppend(str,subStr);
    }
    return str.substring(0, ofset + 1) + subStr + str.substring(ofset + 1);
}
/** 判断字符串是否数字串 **/
function strIsAllNumber  (str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) < '0' || str.charAt(i) > '9') {
            return false;
        }
    }
    return true;
}
/** 将字符串反序排列 **/
function strReserve (str) {
    var temp = "";
    for (var i = str.length - 1; i >= 0; i--) {
        temp = temp.concat(str.charAt(i));
    }
    return temp;
}
/** 将指定的位置的字符设置为另外指定的字符或字符串.索引无效将直接返回不做任何处理 **/
function strSetCharAt  (str,index, subStr) {
    if (index < 0 || index > str.length - 1) {
        return str.valueOf();
    }
    return str.substring(0, index) + subStr + str.substring(index+1);
}
/** 检查字符串是否以subStr开头 **/
function strStartWith (str,subStr) {
    if (subStr.length > str.length) {
        return false;
    }
    return (str.indexOf(subStr) == 0) ? true : false;
}
/** 计算长度，每个汉字占两个长度，英文字符每个占一个长度 **/
function strCharLength (str) {
    var temp = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            temp += 2;
        }
        else {
            temp += 1;
        }
    }
    return temp;
}
function strCharLengthReg (str) {
    return str.replace(/[^\x00-\xff]/g, "**").length;
}
function strRepeat (str,num) {
    var tmpArr = [];
    for (var i = 0; i < num; i++) tmpArr.push(str);
    return tmpArr.join("");
}
/** 测试是否是数字 **/
function strIsNumeric  (str) {
    var tmpFloat = parseFloat(str);
    if (isNaN(tmpFloat)) return false;
    var tmpLen = str.length - tmpFloat.toString().length;
    return tmpFloat + strRepeat("0",tmpLen) == str;
}
function strIsInt (str) {
    if (isNaN(str)) return false;
    return str == parseInt(str).toString();
}
/** 合并多个空白为一个空白 **/
function strResetBlank(str) {
    return str.replace(/s+/g, " ");
}
function strLTrim(str) {
    return str.replace(/^s+/g, "");
}
function strRTrim(str) {
    return str.replace(/s+$/g, "");
}
function strTrim(str) {
    return thstris.replace(/(^s+)|(s+$)/g, "");
}
/** 保留数字 **/
function strGetNum(str) {
    return str.replace(/[^d]/g, "");
}
/** 保留字母 **/
function strGetEn(str) {
    return str.replace(/[^A-Za-z]/g, "");
}
/** 保留中文 **/
function strGetCn(str) {
    return str.replace(/[^u4e00-u9fa5uf900-ufa2d]/g, "");
}
/** 得到字节长度 **/
function strGetRealLength(str) {
    return str.replace(/[^x00-xff]/g, "--").length;
}
/** 从左截取指定长度的字串 **/
function strSubLeft(str,n) {
    return str.slice(0, n);
}
/** 从右截取指定长度的字串 **/
function strSuRight (str,n) {
   return str.slice(str.length - n);
 }
// 合并多个空白为一个空白
function stresetBlank(str) {
    return str.replace(/\s+/g, ' ');
};

// String转化为Number
function strToInt(str) {
    return isNaN(parseInt(str)) ? str.toString() : parseInt(str);
};

// 得到字节长度
function strGetLen(str) {
    var regEx = /^[\u4e00-\u9fa5\uf900-\ufa2d]+$/;
    if (regEx.test(str)) {
        return str.length * 2;
    } else {
        var oMatches = str.match(/[\x00-\xff]/g);
        var oLength = str.length * 2 - oMatches.length;
        return oLength;
    }
};

// 获取文件全名
function strGetFileName(str) {
    var regEx = /^.*\/([^\/\?]*).*$/;
    return str.replace(regEx, '$1');
};

// 获取文件扩展名
function strGetExtensionName(str) {
    var regEx = /^.*\/[^\/]*(\.[^\.\?]*).*$/;
    return str.replace(regEx, '$1');
};


function strReplaceAll(str,s1,s2){
    return str.replace(new RegExp(s1,"gm"),s2);
}
//替换所有
function strReplaceAll2(str,reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return str.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return str.replace(reallyDo, replaceWith);
    }
};
// strTxtStrReplace("",[])
function strTxtStrReplace(drawTextStr,dReplaceArray){

    if(drawTextStr==''|| dReplaceArray.length==0) return drawTextStr;
    else
    if((dReplaceArray instanceof Array)&& Array === dReplaceArray.constructor) {
        for(var item in dReplaceArray){
            var drawTextItem=dReplaceArray[item];
            if(drawTextItem){
                if(isFunction(drawTextItem.value)&&drawTextItem.value)
                    drawTextStr=strReplaceAll(drawTextStr,drawTextItem.name,drawTextItem.value());
                else
                    drawTextStr=strReplaceAll(drawTextStr,drawTextItem.name,drawTextItem.value);
            }
        }
        return drawTextStr;
    }else   return drawTextStr;
}


function strCloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// var arrayAU=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u'];

//http://www.geneffects.com/briarskin/programming/newJSMathFuncs.html
// This is the base converter to beat all base converters! Convert hex to dec, dec to hex, binary to oct, base 2 to base 36! You heard me right, base 36.
// strBaseConverter(46406810206,10,16);
function strBaseConverter (number,ob,nb) {
    number = number.toUpperCase();
    var list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var dec = 0;
    for (var i = 0; i <=  number.length; i++) {
        dec += (list.indexOf(number.charAt(i))) * (Math.pow(ob , (number.length - i - 1)));
    }
    number = "";
    var magnitude = Math.floor((Math.log(dec))/(Math.log(nb)));
    for (var i = magnitude; i >= 0; i--) {
        var amount = Math.floor(dec/Math.pow(nb,i));
        number = number + list.charAt(amount);
        dec -= amount*(Math.pow(nb,i));
    }
    return number;
}
// isRightPadded  填充左边默认填充右边
// strPadstr("aaaa",'##',30,true)
function strPadstr(str, paddingChar,totalWidth, isRightPadded) {
    if (str.length < totalWidth) {
        var paddingString = new String();
        for (i = 1; i <= (totalWidth - str.length); i++) {
            paddingString += paddingChar;
        }
        if (isRightPadded) {
            return (str + paddingString);
        } else {
            return (paddingString + str);
        }
    } else {
        return str;
    }
}
function strVerifyuserName(str){
    return /^(\d{5})$/.test(str);
}
function strIsEmail(str){
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str);
}
function strisMobile(str){
    return  /(?:\(?[0\+]?\d{1,3}\)?)[\s-]?(?:0|\d{1,4})[\s-]?(?:(?:13\d{9})|(?:\d{7,8}))/.test(str);
}

//可以全数字  可以全字母  可以全特殊字符(~!@#$%^&*.) 三种的组合  可以是任意两种的组合  长度6-22
function strVerifyPassword(str){
    return /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/.test(str);
}
// 过滤特殊字符
function stripScript(s)
{
  var rs = "";
  let pattern = new RegExp("[`~!@#-$^&*()=～《》～|{}':;',\\\\\\\\[\\].•€¥£·<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%+_]");

  for (var i = 0; i < s.length; i++) {
    rs = rs+s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

module.exports={
    stripScript:stripScript，
    strAppend:strAppend,
    strRemoveCharAt:strRemoveCharAt,
    strRemoveString:strRemoveString,
    strEndWith:strEndWith,
    strEqual:strEqual,
    strEqualIgnoreCase:strEqualIgnoreCase,
    strInsert:strInsert,
    strIsAllNumber:strIsAllNumber,
    strReserve:strReserve,
    strSetCharAt:strSetCharAt,
    strStartWith:strStartWith,
    strCharLength:strCharLength,
    strCharLengthReg:strCharLengthReg,
    strRepeat:strRepeat,
    strIsNumeric:strIsNumeric,
    strResetBlank:strResetBlank,
    strLTrim:strLTrim,
    strRTrim:strRTrim,
    strTrim:strTrim,
    strGetEn:strGetEn,
    strGetCn:strGetCn,
    strGetRealLength:strGetRealLength,
    strSubLeft:strSubLeft,
    strSuRight:strSuRight,
    stresetBlank:stresetBlank,
    strToInt:strToInt,
    strGetLen:strGetLen,
    strGetFileName:strGetFileName,
    strGetExtensionName:strGetExtensionName,
    strReplaceAll:strReplaceAll,
    strReplaceAll2:strReplaceAll,
    strVerifyuserName:strVerifyuserName,
    strIsEmail:strIsEmail,
    strisMobile:strisMobile,
    strVerifyPassword:strVerifyPassword,
    strIsInt:strIsInt,
    strCloneObj:strCloneObj,
    strBaseConverter:strBaseConverter,
    strPadstr:strPadstr
};
