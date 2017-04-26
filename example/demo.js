/**
 * Created by osmeteor on 4/25/17.
 */

// var eutil=require('eutil');
var eutil=require('../index');
/**************date**********************/
console.log("**************date**********************");
console.log("strVerifyPassword -->",eutil.strVerifyPassword("234as5s"));
console.log("dateGetDataString now-->",eutil.dateGetDataString());
console.log("dateGetDataStringNUmber now-->",eutil.dateGetDataStringNUmber());
console.log("dateFormat 1111-->",eutil.dateFormat( eutil.dateGetDayOfStart(),"yyyy-MM-dd hh:mm:ss S"));
console.log("dateFormat 0000000-->",eutil.dateFormat( eutil.dateGetDayOfEnd(),"yyyy-MM-ddThh:mm:ss S"));
console.log("dateFormat -->",eutil.dateFormat( eutil.dateGetGMT(),"yyyy-MM-dd hh:mm:ss"));
console.log("dateGetStandardTimeZone -->",eutil.dateGetStandardTimeZone(new Date()));
console.log("dateGetDateFromOffset -->",eutil.dateFormat(eutil.dateGetDateFromOffset(eutil.dateGetGMT(),+8),"yyyy-MM-dd hh:mm:ss"));
console.log("dateGetGMT -->",eutil.dateFormat(eutil.dateGetGMT(),"yyyy-MM-dd hh:mm:ss"));

/**************str**********************/
console.log("**************str**********************");
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

