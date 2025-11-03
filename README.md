# eutil

A small collection of date, string and type utilities for Node.js.

一个提供日期处理、字符串操作以及常用类型判断的 Node.js 工具库，帮助你在项目中快速完成常见的辅助功能。

## Installation

```bash
npm install eutil
```

## Usage

```javascript
const eutil = require('eutil');

// 常见功能示例，复制即可使用
const {
  dateFormat,
  dateAddDays,
  dateDiff,
  dateGetDayOfDaybreakSection,
  strReplaceAll,
  strPadstr,
  strVerifyPassword,
  strGetExtensionName,
  isArray,
  isObject,
  isString,
} = eutil;

// 日期处理：格式化时间、计算日期范围
const now = new Date();
const formatted = dateFormat(now, 'yyyy-MM-dd hh:mm:ss');
const threeDaysLater = dateAddDays(now, 3);
const diffInDays = dateDiff(now, threeDaysLater, 'd');
const todayRange = dateGetDayOfDaybreakSection(now);
console.log('当前格式化后的时间:', formatted);
console.log('三天后的日期:', dateFormat(threeDaysLater, 'yyyy-MM-dd'));
console.log('与三天后相差的天数:', diffInDays);
console.log('当天起止时间:', todayRange.start, todayRange.end);

// 字符串工具：批量替换、补齐长度、提取文件扩展名
const replaced = strReplaceAll('a-b-c', '-', '#');
const padded = strPadstr('ID42', '0', 6); // 左侧补零到 6 位
const ext = strGetExtensionName('report.final.xlsx');
console.log('替换后的字符串:', replaced);
console.log('补零后的编号:', padded);
console.log('文件扩展名:', ext);

// 校验工具：密码校验与类型判断
console.log('密码是否合法:', strVerifyPassword('Aa123!'));
console.log('是否为数组:', isArray([1, 2, 3]));
console.log('是否为普通对象:', isObject({ foo: 'bar' }));
console.log('是否为字符串:', isString('hello eutil'));
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

For a full list of helpers see [`index.js`](./index.js).

## License

MIT

