# eutil

A small collection of date, string and type utilities for Node.js.

一个提供日期处理、字符串操作以及常用类型判断的 Node.js 工具库，帮助你在项目中快速完成常见的辅助功能。

## Installation

```bash
npm install eutil
```

## Usage

复制以下脚本即可在 Node.js REPL 或任意运行环境中测试所有函数的行为，注释已经用中文说明每个工具的用途。

```javascript
const eutil = require('eutil');

const {
  // 异步批量替换
  strReplaceAllPromise,
  strReplacePromise,

  // 日期数值/格式化工具
  getTimeSeconds,
  getTimeSecondsDate,
  dateFormat,
  dateGetDataString,
  dateGetDataStringNUmber,
  dateGetNextDay,
  dateGetBeforeDay,
  numberLenWithZero,
  numberChrW,
  isType,
  dateAddMilliseconds,
  dateAddSeconds,
  dateAddMinutes,
  dateAddHours,
  dateAddDays,
  dateIsLeepYear,
  dateDaysInMonth,
  dateAddMonth,
  dateSubMonth,
  dateAddYears,
  dateDiff,
  dateGetCNDate,
  dateGetGMT,
  dateGetStandardTimeZone,
  dateGetDateFromOffset,
  dateGetDayOfStart,
  dateGetDayOfEnd,
  dateGetDayOfDaybreakSection,
  dateGetDayOfDaybreakSectionDay,
  dateGetDayOfDaybreakSectionDayBefore,
  dateGetDayOfDaybreakSectionDayNext,

  // 类型判断
  isUndefined,
  isPromise,
  isDefined,
  isObject,
  isArray,
  isString,
  isNumber,
  isDate,
  isFunction,
  isRegExp,
  isFile,
  isFormData,
  isBlob,
  isBoolean,
  isPromiseLike,
  arrayRemove,
  isJsonObject,
  isMap,
  haveOwnproperty,
  arrayIsexist,

  // 字符串处理
  strAppend,
  strRemoveCharAt,
  strRemoveString,
  strEndWith,
  strEqual,
  strEqualIgnoreCase,
  strInsert,
  strIsAllNumber,
  strReserve,
  strSetCharAt,
  strStartWith,
  strCharLength,
  strCharLengthReg,
  strRepeat,
  strIsNumeric,
  strResetBlank,
  strLTrim,
  strRTrim,
  strTrim,
  strGetEn,
  strGetCn,
  strGetRealLength,
  strSubLeft,
  strSubRight,
  strToInt,
  strGetLen,
  strGetFileName,
  strGetExtensionName,
  strReplaceAll,
  strReplaceAll2,
  strVerifyuserName,
  strIsEmail,
  strisMobile,
  strVerifyPassword,
  strIsInt,
  strCloneObj,
  strBaseConverter,
  strPadstr,
  stripScript,
} = eutil;

(async () => {
  const now = new Date('2024-06-15T10:20:30Z');

  // === 异步批量替换 ===
  const replacePlan = [
    { name: '{name}', value: 'Alice' },
    { name: '{lang}', value: '中文' },
  ];
  console.log('Promise 链式批量替换:', await strReplaceAllPromise('Hello {name}, 欢迎使用 {lang}!', replacePlan));
  console.log('Promise 封装批量替换:', await strReplacePromise('Dear {name}, 欢迎学习 {lang}.', replacePlan));

  // === 日期工具 ===
  console.log('当前秒级时间戳:', getTimeSeconds());
  console.log('从秒转换成日期对象:', getTimeSecondsDate(getTimeSeconds()));
  console.log('日期格式化:', dateFormat(now, 'yyyy-MM-dd hh:mm:ss'));
  console.log('日期字符串 (默认格式):', dateGetDataString(now));
  console.log('日期数字格式字符串:', dateGetDataStringNUmber(now));
  console.log('未来两天:', dateGetNextDay(now, 2));
  console.log('过去三天:', dateGetBeforeDay(now, 3));
  console.log('数字补零:', numberLenWithZero(7, 4));
  console.log('转换为全角字符:', numberChrW(65313));
  const isDateType = isType('Date');
  console.log('检测变量类型 (Date):', isDateType(now));
  console.log('增加 500 毫秒:', dateAddMilliseconds(now, 500));
  console.log('增加 30 秒:', dateAddSeconds(now, 30));
  console.log('增加 15 分钟:', dateAddMinutes(now, 15));
  console.log('增加 5 小时:', dateAddHours(now, 5));
  console.log('增加 7 天:', dateAddDays(now, 7));
  console.log('是否闰年:', dateIsLeepYear(2024));
  console.log('当月天数:', dateDaysInMonth(now.getFullYear(), now.getMonth() + 1));
  console.log('增加 2 个月:', dateAddMonth(now, 2));
  console.log('减少 1 个月:', dateSubMonth(now, 1));
  console.log('增加 3 年:', dateAddYears(now, 3));
  console.log('日期差 (天):', dateDiff(now, dateAddDays(now, 10), 'd'));
  console.log('中文日期表示:', dateGetCNDate(now));
  console.log('GMT 时间:', dateGetGMT());
  console.log('时区 (标准格式):', dateGetStandardTimeZone());
  console.log('按偏移获取日期 (UTC+8):', dateGetDateFromOffset(now, 8));
  console.log('当天开始:', dateGetDayOfStart(now));
  console.log('当天结束:', dateGetDayOfEnd(now));
  console.log('当天破晓区间:', dateGetDayOfDaybreakSection(now));
  console.log('任意日破晓区间:', dateGetDayOfDaybreakSectionDay(now, 1));
  console.log('前一日破晓区间:', dateGetDayOfDaybreakSectionDayBefore(now));
  console.log('下一日破晓区间:', dateGetDayOfDaybreakSectionDayNext(now));

  // === 类型判断 ===
  const sampleArray = ['a', 'b'];
  console.log('是否未定义:', isUndefined(undefined));
  console.log('是否 Promise 对象:', isPromise(Promise.resolve()));
  console.log('是否已定义:', isDefined('hello'));
  console.log('是否对象:', isObject({ foo: 'bar' }));
  console.log('是否数组:', isArray(sampleArray));
  console.log('是否字符串:', isString('文本'));
  console.log('是否数字:', isNumber(3.14));
  console.log('是否日期对象:', isDate(now));
  console.log('是否函数:', isFunction(() => {}));
  console.log('是否正则表达式:', isRegExp(/abc/));
  console.log('是否 File 对象 (示例):', isFile({ [Symbol.toStringTag]: 'File' }));
  console.log('是否 FormData 对象:', isFormData({ [Symbol.toStringTag]: 'FormData' }));
  console.log('是否 Blob 对象:', isBlob({ [Symbol.toStringTag]: 'Blob' }));
  console.log('是否布尔值:', isBoolean(false));
  console.log('是否类 Promise:', isPromiseLike({ then: () => {} }));
  const removable = ['a', 'b'];
  arrayRemove(removable, 'a');
  console.log('数组移除元素后:', removable);
  console.log('是否 JSON 对象:', isJsonObject({ foo: 'bar' }));
  console.log('是否 Map 对象 (通过枚举键判断):', isMap({ key: 'value' }));
  console.log('对象是否有自有属性:', haveOwnproperty({ foo: 1 }, 'foo'));
  console.log('数组中是否存在值:', arrayIsexist(['Alpha', 'Beta'], 'beta'));

  // === 字符串处理 ===
  console.log('字符串拼接:', strAppend('Hello', 'World'));
  console.log('删除指定下标字符:', strRemoveCharAt('Hello', 1));
  console.log('删除指定子串:', strRemoveString('foo_bar_baz', '_bar'));
  console.log('是否以指定字符结尾:', strEndWith('example.js', '.js'));
  console.log('完全相等比较:', strEqual('ABC', 'ABC'));
  console.log('忽略大小写比较:', strEqualIgnoreCase('Hello', 'hello'));
  console.log('插入字符串:', strInsert('HelloWorld', 5, ' '));
  console.log('是否全为数字字符:', strIsAllNumber('12345'));
  console.log('字符串反转:', strReserve('Hello'));
  console.log('替换指定位置字符:', strSetCharAt('Hello', 1, 'a'));
  console.log('是否以某字符开头:', strStartWith('data.json', 'data'));
  console.log('字符长度 (ASCII 计算):', strCharLength('Hello世界'));
  console.log('字符长度 (正则匹配):', strCharLengthReg('Hello世界'));
  console.log('重复字符串:', strRepeat('na', 4));
  console.log('是否数值字符串:', strIsNumeric('123.45'));
  console.log('压缩多余空白:', strResetBlank('  foo    bar  '));
  console.log('左侧去空格:', strLTrim('   left'));  
  console.log('右侧去空格:', strRTrim('right   '));
  console.log('两端去空格:', strTrim('   trim   '));
  console.log('提取英文字符:', strGetEn('混合ABC123'));
  console.log('提取中文字符:', strGetCn('混合ABC123'));
  console.log('实际字符长度 (中文算双字节):', strGetRealLength('Hello世界'));
  console.log('左侧截取:', strSubLeft('abcdef', 3));
  console.log('右侧截取:', strSubRight('abcdef', 3));
  console.log('字符串转整数:', strToInt('42'));
  console.log('获取长度 (兼容中文):', strGetLen('Hello世界'));
  console.log('获取文件名:', strGetFileName('/path/to/archive.tar.gz'));
  console.log('获取扩展名:', strGetExtensionName('archive.tar.gz'));
  console.log('替换全部 (字符串):', strReplaceAll('1,2,3', ',', '|'));
  console.log('替换全部 (正则):', strReplaceAll2('abc123', '\\d', '#'));
  console.log('校验用户名 (5 位数字):', strVerifyuserName('12345'));
  console.log('是否邮箱:', strIsEmail('foo@example.com'));
  console.log('是否手机号:', strisMobile('13800138000'));
  console.log('密码复杂度校验:', strVerifyPassword('Aa123!'));
  console.log('是否整数:', strIsInt('42'));
  console.log('克隆对象:', strCloneObj({ a: 1, b: { c: 2 } }));
  console.log('进制转换:', strBaseConverter('ff', 16, 10));
  console.log('字符串补齐:', strPadstr('42', '0', 5));
  console.log('过滤脚本标签:', stripScript('<div>Hi<script>alert(1)</script></div>'));
})();
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

