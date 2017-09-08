# eutil
meteor util node Extended   util
https://github.com/OSMeteor/eutil.git
npm install eutil

https://github.com/node-modules/is-type-of
```javascript
/**
 * Created by osmeteor on 4/25/17.
 */

// var eutil=require('eutil');
var eutil=require('../index');



/**************date**********************/


function getTimeSeconds(d){
  var ndate = new Date();
  if(d) ndate=d;
  return parseInt(ndate.getTime()/1000)
};
function getTimeSecondsDate(d){
  return new Date(d*1000)
}; 
console.log(
  "------->",
  eutil.dateFormat(getTimeDate(getTimeSeconds(new Date())),"yyyy-MM-dd hh:mm:ss S")
);
console.log(
  "------->",
  eutil.dateFormat(new Date(1504864849*1000),"yyyy-MM-dd hh:mm:ss S")
);


// 开始时间:1900-01-01T00:00:00
// 结束时间:9999-12-31T23:59:59
console.log(
    "------->",
    new Date('9999-12-30 23:59:59').getTime(),
    eutil.dateFormat(new Date('9999-12-30 23:59:59'),"yyyy-MM-dd hh:mm:ss S"),
    eutil.dateFormat(new Date(253402185599000),"yyyy-MM-dd hh:mm:ss S")
);


console.log("**************date**********************");
console.log("strVerifyPassword -->",eutil.strVerifyPassword("234as5s"));
console.log("dateGetDataString now-->",eutil.dateGetDataString());

console.log("dateGetNextDay  -->",eutil.dateFormat( eutil.dateGetNextDay(null,5),"yyyy-MM-dd hh:mm:ss S"));
console.log("dateGetBeforeDay  -->",eutil.dateFormat( eutil.dateGetBeforeDay(null,5),"yyyy-MM-dd hh:mm:ss S"));
var daybreakSection=eutil.dateGetDayOfDaybreakSection(null,5);
console.log("daybreakSection  -->",eutil.dateFormat(daybreakSection.start,"yyyy-MM-dd hh:mm:ss S")
    ,'------ ',eutil.dateFormat(daybreakSection.end,"yyyy-MM-dd hh:mm:ss S"));
var daybreakSectionDay=eutil.dateGetDayOfDaybreakSectionDay(null,6);
console.log("daybreakSectionDay  -->",eutil.dateFormat(daybreakSectionDay.start,"yyyy-MM-dd hh:mm:ss S")
    ,'------ ',eutil.dateFormat(daybreakSectionDay.end,"yyyy-MM-dd hh:mm:ss S"));
var dateGetDayOfDaybreakSectionDayBefore=eutil.dateGetDayOfDaybreakSectionDayBefore(null,6);
console.log("dateGetDayOfDaybreakSectionDayBefore  -->",eutil.dateFormat(dateGetDayOfDaybreakSectionDayBefore.start,"yyyy-MM-dd hh:mm:ss S")
    ,'------ ',eutil.dateFormat(dateGetDayOfDaybreakSectionDayBefore.end,"yyyy-MM-dd hh:mm:ss S"));
var dateGetDayOfDaybreakSectionDayNext=eutil.dateGetDayOfDaybreakSectionDayNext(null,6);
console.log("dateGetDayOfDaybreakSectionDayNext  -->",eutil.dateFormat(dateGetDayOfDaybreakSectionDayNext.start,"yyyy-MM-dd hh:mm:ss S")
    ,'------ ',eutil.dateFormat(dateGetDayOfDaybreakSectionDayNext.end,"yyyy-MM-dd hh:mm:ss S"));


console.log("dateGetDataStringNUmber now-->",eutil.dateGetDataStringNUmber());
console.log("dateFormat 1111-->",eutil.dateFormat( eutil.dateGetDayOfStart(),"yyyy-MM-dd hh:mm:ss S"));
console.log("dateFormat 0000000-->",eutil.dateFormat( eutil.dateGetDayOfEnd(),"yyyy-MM-ddThh:mm:ss S"));
console.log("dateFormat -->",eutil.dateFormat( eutil.dateGetGMT(),"yyyy-MM-dd hh:mm:ss"));
console.log("dateGetStandardTimeZone -->",eutil.dateGetStandardTimeZone(new Date()));
console.log("dateGetDateFromOffset -->",eutil.dateFormat(eutil.dateGetDateFromOffset(eutil.dateGetGMT(),+8),"yyyy-MM-dd hh:mm:ss"));
console.log("dateGetGMT -->",eutil.dateFormat(eutil.dateGetGMT(),"yyyy-MM-dd hh:mm:ss"));

/**************str**********************/
console.log("**************str**********************");
console.log("strSubLeft -->",eutil.strSubLeft("1234567890",2));
console.log("strSuRight -->",eutil.strSuRight("1234567890",2));
console.log("strVerifyPassword -->",eutil.strVerifyPassword("234as5s"));
console.log("strPadstr R -->",eutil.strPadstr("osmeteor R","###",30));
console.log("strPadstr L -->",eutil.strPadstr("osmeteor L","###",30,true));
console.log("strBaseConverter -->",eutil.strBaseConverter('osmeteor',10,16));
console.log("strRemoveCharAt -->",eutil.strRemoveCharAt("1234#67887654321234567",4));
/**************typeof**********************/
console.log("**************typeof**********************");
console.log("isArray  -->",eutil.isArray(""));
console.log("isArray [] -->",eutil.isArray([]));
console.log("isArray {} -->",eutil.isArray({}));
console.log("isJsonObject [] -->",eutil.isJsonObject([]));
console.log("isJsonObject {} -->",eutil.isJsonObject({}));
console.log("isJsonObject {} -->",eutil.isJsonObject({}));
console.log("strReplaceAll  -->",eutil.strReplaceAll("222###,345555,###,5###","###","$$$$"));

eutil.strReplacePromise("#d##date#%#date##date##date##date##date#aaaaa%date1%%date1%%date1%#d#%555%",[
  {name:'#d#',value:"[bbbb]"},
  {name:'#date#',value:"[2017]"},
  {name:'%555%',value:"[啦啦啦啦]"}
]).then(function(err){
  console.log(err);
})

```
