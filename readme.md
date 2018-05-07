# x-ray-cli [![Build Status](https://travis-ci.org/arvindr21/x-ray-cli.svg?branch=master)](https://travis-ci.org/arvindr21/x-ray-cli) [![codecov](https://codecov.io/gh/arvindr21/x-ray-cli/badge.svg?branch=master)](https://codecov.io/gh/arvindr21/x-ray-cli?branch=master)

> CLI for web page test


## Install

```
$ npm install x-ray-cli
```


## Usage

```js
const xRayCli = require('x-ray-cli');

xRayCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### xRayCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global x-ray-cli
```

```
$ x-ray-cli --help

  Usage
    x-ray-cli [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ x-ray-cli
    unicorns & rainbows
    $ x-ray-cli ponies
    ponies & rainbows
```


## License

MIT © [Arvind Ravulavaru](https://github.com/arvindr21/x-ray-cli)
