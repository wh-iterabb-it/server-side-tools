# server-side-tools

a set of common tools for node, which are pretty trivial to bring into a new repo.




⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

This project has moved to https://github.com/wh-iterabb-it/sst,

This repo will no longer be updated. 

⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️


## Installation

You can install this in any node or javascript project.
```bash
npm install --save https://github.com/wh-iterabb-it/server-side-tools
```

## Features

* convert [usage](#convert-usage)
  * kelvinToFahrenheit
  * celsiusToFahrenheit
  * kelvinToCelsius
  * fahrenheitToCelsius
  * toNumber
* detect [usage](#detect-usage)
  * detectURL - uses regex to detect if a string contains a url
  * isURL - alias for detectURL
  * detectHostName - given a url string, it will return the hostname 
  * detectRootDomain - given a url string, it will return the hostname 
  * isBoolean - true for boolean
  * isFinite - true for finite int
  * isInteger - true for integer
  * isNull - true for null value
  * isString - true for string value
* format [usage](#format-usage)
  * toHHMMSS - turns an amount of seconds into `${days}:${hours}:${minutes}:${seconds}`
  * toHHMMSS - turns an amount of seconds into `${hours}:${minutes}:${seconds}`
  * formatMoney - this will return a string, formatted `$xxx,xxx,xxx.xx` for a given int
* fs

* logger - all of winston logger functions [usage](#logger-usage)

* sanitize - removes any white space or html/xml tags. [usage](#sanitize-usage)


## Usage

### Convert Usage

#### celsiusToFahrenheit / fahrenheitToCelsius

```javascript
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('server-side-tools').convert;
const { logger } = require('server-side-tools');

const freezing_celsius = 0;

const freezing_fahrenheit = celsiusToFahrenheit(freezing_celsius);

// 32
logger.info(freezing_fahrenheit);
```

#### kelvinToFahrenheit / kelvinToCelsius

```javascript
const { kelvinToFahrenheit, kelvinToCelsius } = require('server-side-tools').convert;

const freezingKelvin = 273.15;
const boilingKelvin =  373.15;

const boilingFahrenheit = kelvinToFahrenheit(boilingKelvin); // 212
const freezingFahrenheit = kelvinToFahrenheit(freezingKelvin); // 32

const boilingCelsius = kelvinToCelsius(boilingKelvin); // 100
const freezingCelsius = kelvinToCelsius(freezingKelvin); // 0
```



### Detect Usage
```javascript
const { toNumber } = require('server-side-tools').convert;
const { isNumber } = require('server-side-tools').detect;
```

#### isNumber
```javascript

let number = "123";
console.log(isNumber(number)); // false

number = toNumber(number);
// number === 123
console.log(isNumber(number)); // true
```
### Format Usage
```javascript
const { toHHMMSS, toDDHHMMSS, formatMoney } = require('server-side-tools').format;
```

#### toDDHHMMSS / toHHMMSS
```javascript
// the application uptime in seconds
const time = process.uptime();
// lets just say its 90066

console.log(`${toDDHHMMSS(time)}`);
// 01:01:01:06

console.log(`${toHHMMSS(time)}`);
// 25:01:06
```

#### formatMoney
```javascript
const ethereumPrice = 705726246.26999999;

console.log(formatMoney(ethereumPrice));
// $705,726,246.27
```

### Logger Usage

```javascript
const { logger } = require('server-side-tools');
// or
import { logger } from 'server-side-tools';

// all of winston logger functions
logger.info('test');
```

### Sanitize Usage

```javascript
const { sanitize } = require('server-side-tools');

const clean = sanitize('<br/> tacobell   <br/>');
// tacobell
```
