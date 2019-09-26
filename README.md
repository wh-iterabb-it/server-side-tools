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

* convert
  * kelvinToFahrenheit
  * celsiusToFahrenheit
  * kelvinToCelsius
  * fahrenheitToCelsius
  * toNumber
* detect
  * detectURL
  * isURL
  * detectHostName
  * detectRootDomain
  * isBoolean
  * isFinite,
  * isInteger
  * isNull
  * isString
* format

* fs

* logger - all of winston logger functions [usage](#logger-usage)

* sanitize


## Usage

#### Convert Usage

```javascript

```


#### Logger Usage

```javascript
const { logger } = require('server-side-tools');
// or
import { logger } from 'server-side-tools';

// all of winston logger functions
logger.info('test');
```

```javascript
const { toNumber } = require('server-side-tools').convert;
const { isNumber } = require('server-side-tools').detect;

let number = "123";
console.log(isNumber(number)); // false

number = toNumber(number);
// number === 123
console.log(isNumber(number)); // true
```
