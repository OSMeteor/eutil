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

