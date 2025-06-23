# eutil

A small collection of date, string and type utilities for Node.js.

## Installation

```bash
npm install eutil
```

## Usage

```javascript
const eutil = require('eutil');
```

## API overview

### Date helpers
- `dateFormat(date, fmt)` - Format a date. **将日期按指定格式输出**
- `dateGetNextDay(date, n)` - Get date *n* days later. **获取未来 n 天的日期**
- `dateGetBeforeDay(date, n)` - Get date *n* days before. **获取过去 n 天的日期**
- `dateAddMilliseconds(date, n)` - Add milliseconds. **增加毫秒数**
- `dateAddSeconds(date, n)` - Add seconds. **增加秒数**
- `dateAddMinutes(date, n)` - Add minutes. **增加分钟数**
- `dateAddHours(date, n)` - Add hours. **增加小时数**
- `dateAddDays(date, n)` - Add days. **增加天数**
- `dateAddMonth(date, n)` - Add months. **增加月份**
- `dateSubMonth(date, n)` - Subtract months. **减少月份**
- `dateAddYears(date, n)` - Add years. **增加年份**
- `dateDiff(start, end)` - Get difference between two dates. **计算两个日期的差值**
- `dateGetGMT()` - Current GMT time. **获取 GMT 时间**

### String helpers
- `strSubLeft(str, len)` - Substring from left. **从左侧截取指定长度**
- `strSubRight(str, len)` - Substring from right. **从右侧截取指定长度**
- `strReplaceAll(str, search, replace)` - Replace all matches. **全局替换文本**
- `strReplaceAll2(str, search, replace)` - Replace all with regex support. **正则全局替换**
- `strPadstr(str, pad, width, right)` - Pad string to width. **字符串填充**
- `strRemoveCharAt(str, index)` - Remove char at index. **删除指定位置字符**
- `strVerifyPassword(str)` - Validate simple password. **密码格式校验**

### Type checks
- `isArray(value)` - Check for Array. **是否为数组**
- `isObject(value)` - Check for plain object. **是否为对象**
- `isString(value)` - Check for string. **是否为字符串**
- `isNumber(value)` - Check for number. **是否为数字**
- `isDate(value)` - Check for Date. **是否为日期**
- `isFunction(value)` - Check for function. **是否为函数**
- `isBoolean(value)` - Check for boolean. **是否为布尔值**
- `isMap(value)` - Check for Map. **是否为 Map**
- `dateFormat(date, fmt)`
- `dateGetNextDay(date, n)`
- `dateGetBeforeDay(date, n)`
- `dateAddMilliseconds(date, n)`
- `dateAddSeconds(date, n)`
- `dateAddMinutes(date, n)`
- `dateAddHours(date, n)`
- `dateAddDays(date, n)`
- `dateAddMonth(date, n)`
- `dateSubMonth(date, n)`
- `dateAddYears(date, n)`
- `dateDiff(start, end)`
- `dateGetGMT()`

### String helpers
- `strSubLeft(str, len)`
- `strSubRight(str, len)`
- `strReplaceAll(str, search, replace)`
- `strReplaceAll2(str, search, replace)`
- `strPadstr(str, pad, width, right)`
- `strRemoveCharAt(str, index)`
- `strVerifyPassword(str)`

### Type checks
- `isArray(value)`
- `isObject(value)`
- `isString(value)`
- `isNumber(value)`
- `isDate(value)`
- `isFunction(value)`
- `isBoolean(value)`
- `isMap(value)`

### Example

```javascript
const eutil = require('eutil');

console.log(eutil.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss'));
console.log(eutil.strReplaceAll('a-b-c', '-', '#')); 
```

For a full list of helpers see [`index.js`](./index.js).

## License

MIT

