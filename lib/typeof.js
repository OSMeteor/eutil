var slice             = [].slice,
    splice            = [].splice,
    push              = [].push,
    toString          = Object.prototype.toString;
function isPromise(p) {
  return p && typeof p.then === 'function' && typeof p.catch === 'function';
}   
function isUndefined(value) {
return typeof value === 'undefined';
}
function isDefined(value) {
return !isUndefined(value);
}
function isArray(data) {
    if(isUndefined(data)) {
return false;
} else if((data instanceof Array) && Array === data.constructor) {
return true;
} else {
return false;
}
}
function isObject(data) {
    if(isUndefined(data)) {
return false;
}
    if(typeof(data) === 'object' && Object === data.constructor) {
return true;
}else {
return false;
}
}
function isJsonObject(value) {
    if(isUndefined(value)) {
return false;
} else  if(typeof value !== 'object' || isArray(value)) {
return false;
} else {
return true;
}
 }

function isString(value) {
    if(isUndefined(value)) {
return false;
} else if(typeof(value) === 'string' && String === value.constructor) {
return true;
} else {
return false;
}
}
function isNumber(value) {
    if(isUndefined(value)) {
return false;
} else if(typeof(value) === 'number' && Number === value.constructor) {
return true;
} else {
return false;
}
}
function isDate(value) {
    if(isUndefined(value)) {
return false;
}
    if((value instanceof Date) && Date === value.constructor) {
return true;
} else {
return false;
}
}
function isFunction(value) {
    if(isUndefined(value)) {
return false;
} else if(typeof(value) !== 'function' || isArray(value)) {
return false;
} else {
return true;
}
}
function isBoolean(value) {
    if(isUndefined(value)) {
return false;
} else if(typeof(value) === 'boolean' && Boolean === value.constructor) {
return true;
} else {
return false;
}
}
function isMap(ob) {
    var i = 0;
    for(var x in ob)  {
i++;
}
    return i > 0;
}


function isRegExp(value) {
  return toString.call(value) === '[object RegExp]'; 
}
function isFile(obj) {
 return toString.call(obj) === '[object File]'; 
}
function isFormData(obj) {
 return toString.call(obj) === '[object FormData]'; 
}
function isBlob(obj) {
   return toString.call(obj) === '[object Blob]'; 
}

function isPromiseLike(obj) {
   return obj && isFunction(obj.then); 
}
function arrayRemove(array, value) {
    var index = array.indexOf(value);
    if (index >= 0) {
array.splice(index, 1);
}
    return value;
}

////属性不能为null  or  '' 并且存在   才返回true
function haveOwnproperty(data,propertyname){
    var result = false;
    for(var itemdata in data) {
        if(itemdata === propertyname) {
if(data[itemdata] !== null && data[itemdata] !== '') {
result = true;
}
}
    }
    return result;
}
function arrayIsexist(list,itemvalue){
    if(typeof(list) === 'undefined' || typeof(itemvalue) === 'undefined' || !(list instanceof Array) || Array != list.constructor) {
return false;
} else{
        for(var i = 0;i < list.length;i++) {
            list[i] = list[i].toLowerCase();
        }
        if (itemvalue && ~list.indexOf(itemvalue.toLowerCase())) {
            return  true;
        }else{
            return  false;
        }
    }
}
module.exports = {
    isPromise:isPromise,
    isUndefined:isUndefined,
    isDefined:isDefined,
    isObject:isObject,
    isArray:isArray,
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
    isJsonObject:isJsonObject,
    isMap:isMap,
    haveOwnproperty:haveOwnproperty,
    arrayIsexist:arrayIsexist
};
