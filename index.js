var dt=require('./lib/date');
var tf=require('./lib/typeof');
var str=require('./lib/str');


function strReplaceAllPromise(_str,dReplaceArray,index){
  if(!tf.isNumber(index))index=-1;
  return new Promise(function (resolve, reject) {
    if(index>=dReplaceArray.length-1) return resolve(_str);
    else{
      index++;
      if(index==-1) return strReplaceAllPromise(str.strReplaceAll(_str,dReplaceArray[index].name,dReplaceArray[index].value)
        ,dReplaceArray,index
      );
      else
        return resolve(strReplaceAllPromise(str.strReplaceAll(_str,dReplaceArray[index].name,dReplaceArray[index].value)
          ,dReplaceArray,index
        ));
    }
  });
}
function strReplacePromise(drawTextStr,dReplaceArray){
  var index=0;
  return new Promise(function (resolve, reject) {
    if(drawTextStr=='') return reject(drawTextStr);
    else if(!tf.isArray(dReplaceArray)) return reject(drawTextStr);
    else return resolve([drawTextStr,dReplaceArray,index]);
  }).then(function(obj){
    return  strReplaceAllPromise(obj[0],obj[1]);
  }).catch(function(str){
    return str;
  })
};


module.exports={
   strReplaceAllPromise:strReplaceAllPromise,
   strReplacePromise:strReplacePromise,
   getTimeSeconds:dt.getTimeSeconds,
   getTimeSecondsDate:dt.getTimeSecondsDate,
   dateFormat:dt.dateFormat,
   dateGetDataString:dt.dateGetDataString,
   dateGetDataStringNUmber:dt.dateGetDataStringNUmber,
   dateGetNextDay:dt.dateGetNextDay,
   dateGetBeforeDay:dt.dateGetBeforeDay,
   numberLenWithZero:dt.numberLenWithZero,
   numberChrW:dt.numberChrW,
   isType:dt.isType,
   dateAddMilliseconds:dt.dateAddMilliseconds,
   dateAddSeconds:dt.dateAddSeconds,
   dateAddMinutes:dt.dateAddMinutes,
   dateAddHours:dt.dateAddHours,
   dateAddDays:dt.dateAddDays,
   dateIsLeepYear:dt.dateIsLeepYear,
   dateDaysInMonth:dt.dateDaysInMonth,
   dateAddMonth:dt.dateAddMonth,
   dateSubMonth:dt.dateSubMonth,
   dateAddYears:dt.dateAddYears,
   dateDiff:dt.dateDiff,
   dateGetCNDate:dt.dateGetCNDate,
   dateGetGMT:dt.dateGetGMT,
   dateGetStandardTimeZone:dt.dateGetStandardTimeZone,
   dateGetDateFromOffset:dt.dateGetDateFromOffset,
   dateGetDayOfStart:dt.dateGetDayOfStart,
   dateGetDayOfEnd:dt.dateGetDayOfEnd,
   dateGetDayOfDaybreakSection:dt.dateGetDayOfDaybreakSection,
   dateGetDayOfDaybreakSectionDay:dt.dateGetDayOfDaybreakSectionDay,
   dateGetDayOfDaybreakSectionDayBefore:dt.dateGetDayOfDaybreakSectionDayBefore,
   dateGetDayOfDaybreakSectionDayNext:dt.dateGetDayOfDaybreakSectionDayNext,
   isUndefined:tf.isUndefined,
   isPromise:tf.isPromise,
   isDefined:tf.isDefined,
   isObject:tf.isObject,
   isArray:tf.isArray,
   isString:tf.isString,
   isNumber:tf.isNumber,
   isDate:tf.isDate,
   isFunction:tf.isFunction,
   isRegExp:tf.isRegExp,
   isFile:tf.isFile,
   isFormData:tf.isFormData,
   isBlob:tf.isBlob,
   isBoolean:tf.isBoolean,
   isPromiseLike:tf.isPromiseLike,
   arrayRemove:tf.arrayRemove,
   isJsonObject:tf.isJsonObject,
   isMap:tf.isMap,
   haveOwnproperty:tf.haveOwnproperty,
   arrayIsexist:tf.arrayIsexist,
   strAppend:str.strAppend,
   strRemoveCharAt:str.strRemoveCharAt,
   strRemoveString:str.strRemoveString,
   strEndWith:str.strEndWith,
   strEqual:str.strEqual,
   strEqualIgnoreCase:str.strEqualIgnoreCase,
   strInsert:str.strInsert,
   strIsAllNumber:str.strIsAllNumber,
   strReserve:str.strReserve,
   strSetCharAt:str.strSetCharAt,
   strStartWith:str.strStartWith,
   strCharLength:str.strCharLength,
   strCharLengthReg:str.strCharLengthReg,
   strRepeat:str.strRepeat,
   strIsNumeric:str.strIsNumeric,
   strResetBlank:str.strResetBlank,
   strLTrim:str.strLTrim,
   strRTrim:str.strRTrim,
   strTrim:str.strTrim,
   strGetEn:str.strGetEn,
   strGetCn:str.strGetCn,
   strGetRealLength:str.strGetRealLength,
   strSubLeft:str.strSubLeft,
   strSuRight:str.strSuRight,
   stresetBlank:str.stresetBlank,
   strToInt:str.strToInt,
   strGetLen:str.strGetLen,
   strGetFileName:str.strGetFileName,
   strGetExtensionName:str.strGetExtensionName,
   strReplaceAll:str.strReplaceAll,
   strReplaceAll2:str.strReplaceAll2,
   strVerifyuserName:str.strVerifyuserName,
   strIsEmail:str.strIsEmail,
   strisMobile:str.strisMobile,
   strVerifyPassword:str.strVerifyPassword,
   strIsInt:str.strIsInt,
   strCloneObj:str.strCloneObj,
   strBaseConverter:str.strBaseConverter,
   strPadstr:str.strPadstr,
   stripScript:str.stripScript
};
