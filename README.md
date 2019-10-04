# server-side-tools

a set of common tools for node, which are pretty trivial to bring into a new repo.

---

[![Greenkeeper badge](https://badges.greenkeeper.io/wh-iterabb-it/server-side-tools.svg)](https://greenkeeper.io/)
[![Travis Badge](https://travis-ci.org/wh-iterabb-it/server-side-tools.svg?branch=master)](https://travis-ci.org/wh-iterabb-it/server-side-tools)
[![Dependency Status](https://img.shields.io/david/wh-iterabb-it/server-side-tools.svg?style=flat)](https://david-dm.org/wh-iterabb-it/server-side-tools#info=Dependencies)
[![devDependency Status](https://img.shields.io/david/dev/wh-iterabb-it/server-side-tools.svg?style=flat)](https://david-dm.org/BeauBouchard/server-side-tools#info=devDependencies)
[![codecov](https://codecov.io/gh/wh-iterabb-it/server-side-tools/branch/master/graph/badge.svg)](https://codecov.io/gh/wh-iterabb-it/server-side-tools)


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
  * toHHMMSS - turns an amount of seconds into days, hours, minutes seconds
  * toHHMMSS - turns an amount of seconds into hours, minutes seconds
* fs

* logger - all of winston logger functions [usage](#logger-usage)

* sanitize


## Usage

#### Convert Usage

```javascript
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('server-side-tools').convert;
const { logger } = require('server-side-tools');

const freezing_celsius = 0;

const freezing_fahrenheit = celsiusToFahrenheit(freezing_celsius);

// 32
logger.info(freezing_fahrenheit);
```


#### Detect Usage

```javascript
const { toNumber } = require('server-side-tools').convert;
const { isNumber } = require('server-side-tools').detect;

let number = "123";
console.log(isNumber(number)); // false

number = toNumber(number);
// number === 123
console.log(isNumber(number)); // true
```

#### Logger Usage

```javascript
const { logger } = require('server-side-tools');
// or
import { logger } from 'server-side-tools';

// all of winston logger functions
logger.info('test');
```


