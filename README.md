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

// 常见功能示例，复制即可运行，示例覆盖所有导出函数
const {
  // Promise 相关
  strReplaceAllPromise,
  strReplacePromise,

  // 日期时间相关
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

  // 类型判断相关
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

  // 字符串处理相关
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

async function runAllExamples() {
  // 1. Promise 串行替换示例
  const source = 'order-2024-raw';
  const replacements = [
    { name: 'order', value: 'invoice' },
    { name: 'raw', value: () => 'done' },
  ];
  console.log('strReplaceAllPromise:', await strReplaceAllPromise(source, replacements));
  console.log('strReplacePromise:', await strReplacePromise(source, replacements));

  // 2. 日期与时间函数
  const now = new Date('2024-05-20T10:30:15Z');
  console.log('getTimeSeconds:', getTimeSeconds(now));
  console.log('getTimeSecondsDate:', getTimeSecondsDate(getTimeSeconds(now)));
  console.log('dateFormat:', dateFormat(now, 'yyyy-MM-dd hh:mm:ss'));
  console.log('dateGetDataString:', dateGetDataString(now));
  console.log('dateGetDataStringNUmber:', dateGetDataStringNUmber(now));
  console.log('dateGetNextDay +1:', dateGetNextDay(now, 1));
  console.log('dateGetBeforeDay -2:', dateGetBeforeDay(now, 2));
  console.log('numberLenWithZero:', numberLenWithZero(9, 3));
  console.log('numberChrW 20320:', numberChrW(20320));
  const isDateType = isType('Date');
  console.log('isType("Date"):', isDateType(now));
  console.log('dateAddMilliseconds +500:', dateAddMilliseconds(now, 500));
  console.log('dateAddSeconds +30:', dateAddSeconds(now, 30));
  console.log('dateAddMinutes +5:', dateAddMinutes(now, 5));
  console.log('dateAddHours +3:', dateAddHours(now, 3));
  console.log('dateAddDays +7:', dateAddDays(now, 7));
  console.log('dateIsLeepYear 2024:', dateIsLeepYear(2024));
  console.log('dateDaysInMonth 2024-02:', dateDaysInMonth(2024, 2));
  console.log('dateAddMonth:', dateAddMonth(now));
  console.log('dateSubMonth:', dateSubMonth(now));
  console.log('dateAddYears +1:', dateAddYears(now, 1));
  console.log('dateDiff 天数:', dateDiff(now, dateAddDays(now, 3), 'd'));
  console.log('dateGetCNDate:', dateGetCNDate(now));
  console.log('dateGetGMT:', dateGetGMT());
  console.log('dateGetStandardTimeZone 当前:', dateGetStandardTimeZone());
  console.log('dateGetDateFromOffset GMT+8:', dateGetDateFromOffset(now, 8));
  console.log('dateGetDayOfStart:', dateGetDayOfStart(now));
  console.log('dateGetDayOfEnd:', dateGetDayOfEnd(now));
  console.log('dateGetDayOfDaybreakSection:', dateGetDayOfDaybreakSection(now));
  console.log('dateGetDayOfDaybreakSectionDay ±1:', dateGetDayOfDaybreakSectionDay(now, 1));
  console.log('dateGetDayOfDaybreakSectionDayBefore 3天:', dateGetDayOfDaybreakSectionDayBefore(now, 3));
  console.log('dateGetDayOfDaybreakSectionDayNext 2天:', dateGetDayOfDaybreakSectionDayNext(now, 2));

  // 3. 类型判断函数
  console.log('isUndefined:', isUndefined(undefined));
  console.log('isDefined:', isDefined('value'));
  console.log('isPromise:', isPromise(Promise.resolve()));
  console.log('isObject:', isObject({ a: 1 }));
  console.log('isArray:', isArray([1, 2, 3]));
  console.log('isString:', isString('hello'));
  console.log('isNumber:', isNumber(123));
  console.log('isDate:', isDate(new Date()));
  console.log('isFunction:', isFunction(runAllExamples));
  console.log('isRegExp:', isRegExp(/demo/));
  const maybeFile = typeof File !== 'undefined' ? new File([], 'demo.txt') : { name: 'demo.txt' };
  console.log('isFile:', isFile(maybeFile));
  const maybeFormData = typeof FormData !== 'undefined' ? new FormData() : {};
  console.log('isFormData:', isFormData(maybeFormData));
  const maybeBlob = typeof Blob !== 'undefined' ? new Blob() : {};
  console.log('isBlob:', isBlob(maybeBlob));
  console.log('isBoolean:', isBoolean(true));
  console.log('isPromiseLike:', isPromiseLike({ then: () => {}, catch: () => {} }));
  const sampleArray = ['Foo', 'Bar'];
  console.log('arrayRemove:', arrayRemove(sampleArray, 'Bar'), sampleArray);
  console.log('isJsonObject:', isJsonObject({ nested: true }));
  console.log('isMap(对象是否有自有属性):', isMap({ k: 1 }));
  console.log('haveOwnproperty:', haveOwnproperty({ token: 'abc' }, 'token'));
  console.log('arrayIsexist:', arrayIsexist(['alpha', 'beta'], 'ALPHA'));

  // 4. 字符串处理函数
  const text = ' Hello, 世界! 123 '; // 中英文混排
  console.log('strAppend:', strAppend('Hello', 'World'));
  console.log('strRemoveCharAt:', strRemoveCharAt('ABCDE', 2));
  console.log('strRemoveString:', strRemoveString('ABCDE', 1, 3));
  console.log('strEndWith:', strEndWith('example.js', '.js'));
  console.log('strEqual:', strEqual('foo', 'foo'));
  console.log('strEqualIgnoreCase:', strEqualIgnoreCase('foo', 'FOO'));
  console.log('strInsert:', strInsert('abc', 1, 'XYZ'));
  console.log('strIsAllNumber:', strIsAllNumber('12345'));
  console.log('strReserve:', strReserve('abc'));
  console.log('strSetCharAt:', strSetCharAt('abc', 1, 'Z'));
  console.log('strStartWith:', strStartWith('prefix-demo', 'prefix'));
  console.log('strCharLength:', strCharLength(text));
  console.log('strCharLengthReg:', strCharLengthReg(text));
  console.log('strRepeat:', strRepeat('ha', 3));
  console.log('strIsNumeric:', strIsNumeric('10.50'));
  console.log('strResetBlank:', strResetBlank('a   b   c'));
  console.log('strLTrim:', strLTrim(text));
  console.log('strRTrim:', strRTrim(text));
  console.log('strTrim:', strTrim(text));
  console.log('strGetEn:', strGetEn(text));
  console.log('strGetCn:', strGetCn(text));
  console.log('strGetRealLength:', strGetRealLength(text));
  console.log('strSubLeft:', strSubLeft('abcdef', 3));
  console.log('strSubRight:', strSubRight('abcdef', 3));
  console.log('strToInt:', strToInt('42'));
  console.log('strGetLen:', strGetLen('测试A'));
  console.log('strGetFileName:', strGetFileName('/tmp/report.txt'));
  console.log('strGetExtensionName:', strGetExtensionName('/tmp/report.txt'));
  console.log('strReplaceAll:', strReplaceAll('1-2-3', '-', ':'));
  console.log('strReplaceAll2:', strReplaceAll2('Color colour', /colou?r/gi, 'paint'));
  console.log('strVerifyuserName:', strVerifyuserName('12345'));
  console.log('strIsEmail:', strIsEmail('test@example.com'));
  console.log('strisMobile:', strisMobile('13800000000'));
  console.log('strVerifyPassword:', strVerifyPassword('Abc123!'));
  console.log('strIsInt:', strIsInt('123'));
  console.log('strCloneObj:', strCloneObj({ nested: { ok: true } }));
  console.log('strBaseConverter 255(10)->16:', strBaseConverter('255', 10, 16));
  console.log('strPadstr 左补零:', strPadstr('42', '0', 5));
  console.log('strPadstr 右补星:', strPadstr('42', '*', 5, true));
  console.log('stripScript:', stripScript('script<alert>!@#'));
}

runAllExamples().catch(console.error);
```

## API overview

### Promise helpers
- `strReplaceAllPromise(str, replacements, index?)` - Chain replacements sequentially. **按顺序执行字符串替换任务**
- `strReplacePromise(str, replacements)` - Prepare and trigger `strReplaceAllPromise`. **包装替换队列，方便直接调用**

### Date helpers
- `getTimeSeconds(date?)` - Seconds timestamp. **将日期转换成秒级时间戳**
- `getTimeSecondsDate(seconds)` - Seconds to Date. **根据秒级时间戳得到日期对象**
- `dateFormat(date, fmt)` - Format a date. **将日期按指定格式输出**
- `dateGetDataString(date?)` - Friendly `yyyy-MM-dd hh:mm` text. **生成可读日期时间字符串**
- `dateGetDataStringNUmber(date?)` - Compact `yyyyMMdd` text. **生成纯数字日期串**
- `dateGetNextDay(date, n)` - Get date *n* days later. **获取未来 n 天的日期**
- `dateGetBeforeDay(date, n)` - Get date *n* days before. **获取过去 n 天的日期**
- `numberLenWithZero(value, width)` - Pad numbers with zeros. **数字补零**
- `numberChrW(code)` - Code point to char. **按 Unicode 编码返回字符**
- `isType(name)` - Create type guard. **生成指定类型判断函数**
- `dateAddMilliseconds(date, n)` - Add milliseconds. **增加毫秒数**
- `dateAddSeconds(date, n)` - Add seconds. **增加秒数**
- `dateAddMinutes(date, n)` - Add minutes. **增加分钟数**
- `dateAddHours(date, n)` - Add hours. **增加小时数**
- `dateAddDays(date, n)` - Add days. **增加天数**
- `dateIsLeepYear(year)` - Leap year check. **判断闰年**
- `dateDaysInMonth(year, month)` - Days in month. **计算指定月份的天数**
- `dateAddMonth(date)` - Next month. **获取下个月对应日期**
- `dateSubMonth(date)` - Previous month. **获取上个月对应日期**
- `dateAddYears(date, n)` - Add years. **增加年份**
- `dateDiff(start, end, unit)` - Difference between dates. **计算两个日期的差值**
- `dateGetCNDate(date)` - CN literal string. **输出中文日期字符串**
- `dateGetGMT()` - Current GMT time. **获取 GMT 时间**
- `dateGetStandardTimeZone(date?)` - Offset hours. **计算与 GMT 的时差**
- `dateGetDateFromOffset(date?, offset)` - Convert timezone offset. **按指定时区偏移生成时间**
- `dateGetDayOfStart(date?)` - Start of day. **获取当天开始时间**
- `dateGetDayOfEnd(date?)` - End of day. **获取当天结束时间**
- `dateGetDayOfDaybreakSection(date?)` - Day window. **返回当天起止时间对象**
- `dateGetDayOfDaybreakSectionDay(date?, n?)` - Shifted window. **返回前后 n 天的起止时间**
- `dateGetDayOfDaybreakSectionDayBefore(date?, n?)` - Previous window. **获取过去 n 天到当前的范围**
- `dateGetDayOfDaybreakSectionDayNext(date?, n?)` - Next window. **获取当前到未来 n 天的范围**

### Type helpers
- `isUndefined(value)` - Check undefined. **是否为 undefined**
- `isDefined(value)` - Inverse of `isUndefined`. **是否已定义**
- `isPromise(value)` - Check for native Promise. **是否为 Promise**
- `isObject(value)` - Check for plain object. **是否为普通对象**
- `isArray(value)` - Check for Array. **是否为数组**
- `isString(value)` - Check for string. **是否为字符串**
- `isNumber(value)` - Check for number. **是否为数字**
- `isDate(value)` - Check for Date. **是否为日期对象**
- `isFunction(value)` - Check for function. **是否为函数**
- `isRegExp(value)` - Check for RegExp. **是否为正则表达式**
- `isFile(value)` - Check for File. **是否为 File 对象**
- `isFormData(value)` - Check for FormData. **是否为 FormData 对象**
- `isBlob(value)` - Check for Blob. **是否为 Blob 对象**
- `isBoolean(value)` - Check for boolean. **是否为布尔值**
- `isPromiseLike(value)` - Has `then`. **是否为类 Promise 对象**
- `arrayRemove(arr, value)` - Remove element. **从数组中移除指定值**
- `isJsonObject(value)` - Check for JSON object. **是否为 JSON 对象**
- `isMap(value)` - Has enumerable keys. **对象是否包含键值**
- `haveOwnproperty(obj, key)` - Own property check. **检测对象属性且非空**
- `arrayIsexist(list, value)` - Case-insensitive include. **忽略大小写判断数组是否包含值**

### String helpers
- `strAppend(str, append)` - Concatenate strings. **拼接字符串**
- `strRemoveCharAt(str, index)` - Remove char. **删除指定索引字符**
- `strRemoveString(str, start, end)` - Remove range. **删除索引区间子串**
- `strEndWith(str, suffix)` - Ends with check. **是否以指定后缀结尾**
- `strEqual(a, b)` - Strict equality. **严格比较两个字符串**
- `strEqualIgnoreCase(a, b)` - Case-insensitive equality. **忽略大小写比较**
- `strInsert(str, offset, sub)` - Insert substring. **插入子串**
- `strIsAllNumber(str)` - All digits. **是否全由数字组成**
- `strReserve(str)` - Reverse order. **字符串倒序**
- `strSetCharAt(str, index, char)` - Replace at index. **设置指定位置字符**
- `strStartWith(str, prefix)` - Starts with check. **是否以指定前缀开头**
- `strCharLength(str)` - Byte-aware length. **按中英文分别计算长度**
- `strCharLengthReg(str)` - Byte length via正则. **正则实现的长度计算**
- `strRepeat(str, times)` - Repeat string. **重复拼接**
- `strIsNumeric(str)` - Numeric check. **是否为数字串**
- `strResetBlank(str)` - Collapse spaces. **合并连续空白**
- `strLTrim(str)` - Trim left. **去除左侧空白**
- `strRTrim(str)` - Trim right. **去除右侧空白**
- `strTrim(str)` - Trim both sides. **去除两端空白**
- `strGetEn(str)` - Keep Latin letters. **保留英文字母**
- `strGetCn(str)` - Keep Chinese chars. **保留中文字符**
- `strGetRealLength(str)` - Byte length. **按字节统计长度**
- `strSubLeft(str, len)` - Left substring. **从左截取长度**
- `strSubRight(str, len)` - Right substring. **从右截取长度**
- `strToInt(str)` - Parse integer. **安全转换整型**
- `strGetLen(str)` - Mixed char length. **计算中英文混合长度**
- `strGetFileName(path)` - Extract filename. **获取文件名**
- `strGetExtensionName(path)` - Extract extension. **获取扩展名**
- `strReplaceAll(str, search, replace)` - Replace all matches. **全局替换文本**
- `strReplaceAll2(str, pattern, replace, ignoreCase?)` - Regex replace. **支持正则的全局替换**
- `strVerifyuserName(str)` - 5 digit check. **验证 5 位用户编号**
- `strIsEmail(str)` - Email check. **校验邮箱格式**
- `strisMobile(str)` - Phone check. **校验手机号**
- `strVerifyPassword(str)` - Password check. **校验密码格式**
- `strIsInt(str)` - Integer check. **判断是否整数串**
- `strCloneObj(obj)` - Deep clone via JSON. **深拷贝对象**
- `strBaseConverter(number, from, to)` - Base convert. **任意进制转换**
- `strPadstr(str, pad, width, right?)` - Pad string. **左右填充字符**
- `stripScript(str)` - Remove special chars. **移除特殊字符**

For a full list of helpers see [`index.js`](./index.js).

## License

MIT

