var slice             = [].slice,
    splice            = [].splice,
    push              = [].push,
    toString          = Object.prototype.toString;
function isUndefined(value) {return typeof value === 'undefined';}
function isDefined(value) {return typeof value !== 'undefined';}
function isObject(value) { // http://jsperf.com/isobject4
    return value !== null && typeof value === 'object';
}
function isString(value) {return typeof value === 'string';}
function isNumber(value) {return typeof value === 'number';}
function isDate(value) {  return toString.call(value) === '[object Date]'; }
function isFunction(value) {return typeof value === 'function';}
function isRegExp(value) {  return toString.call(value) === '[object RegExp]'; }
function isFile(obj) { return toString.call(obj) === '[object File]'; }
function isFormData(obj) { return toString.call(obj) === '[object FormData]'; }
function isBlob(obj) {   return toString.call(obj) === '[object Blob]'; }
function isBoolean(value) {   return typeof value === 'boolean'; }
function isPromiseLike(obj) {   return obj && isFunction(obj.then); }
function arrayRemove(array, value) {
    var index = array.indexOf(value);
    if (index >= 0)
        array.splice(index, 1);
    return value;
}
function isJonsObject(data)
{
    if(isUndefined(data)) return false;
    if(typeof data!=='object'||isArray(data)) return false;else return true;
}
////属性不能为null  or  '' 并且存在   才返回true
function haveOwnproperty(data,propertyname){
    var result=false;
    for(var itemdata in data) {
        if(itemdata===propertyname) if(data[itemdata]!==null&&data[itemdata]!=='') result=true;
    }
    return result;
}
console.log(
    isRegExp(new RegExp('\a'))


)
module.exports={
    isUndefined:isUndefined,
    isDefined:isDefined,
    isObject:isObject,
    isString:isString,
    isNumber:isNumber,
    isDate:isDate,
    isFunction:isFunction,
    isRegExp:isRegExp,
    isFile:isFile,
    isFormData:isFormData,
    isBlob:isBlob,
    isBoolean:isBoolean,
    isPromiseLike:isPromiseLike,
    arrayRemove:arrayRemove,
    isJonsObject:isJonsObject,
    haveOwnproperty:haveOwnproperty
}
