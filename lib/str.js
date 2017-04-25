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

//替换所有
function StrReplaceAll(str,reallyDo, replaceWith, ignoreCase) {
    if (!RegExp.prototype.isPrototypeOf(reallyDo)) {
        return str.replace(new RegExp(reallyDo, (ignoreCase ? "gi" : "g")), replaceWith);
    } else {
        return str.replace(reallyDo, replaceWith);
    }
};
// console.log(strEqualIgnoreCase('a','a'))
// console.log(strRemoveCharAt("1234#67887654321234567",4))

module.exports={
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
    StrReplaceAll:StrReplaceAll,
    strIsInt:strIsInt
};
