# xray-cli [![Build Status](https://travis-ci.org/arvindr21/xray-cli.svg?branch=master)](https://travis-ci.org/arvindr21/xray-cli) [![codecov](https://codecov.io/gh/arvindr21/xray-cli/badge.svg?branch=master)](https://codecov.io/gh/arvindr21/xray-cli?branch=master)

> CLI for web page test

## Install

```
$ npm install @arvindr21/xray-cli --global
```


## Usage

```
$ xray-cli --help

  CLI for web page test

  Usage
    $ xray-cli [URL] --flags

  Options
    --file Filename to save the results [Default: results]
    --api API URL [Default: https://www.webpagetest.org/]
    --key Pass your own Webpagetest API key [Default: APP]

  Output options
    --json Save results as JSON [Default: true]
    --html Save results as HTML [Default: false]
    --all Save results as both HTML & JSON [Default: false]

  Examples
    $ xray-cli https://example.com --json # generates a JSON output
    $ xray-cli https://example.com --html # generates a HTML report
    $ xray-cli https://example.com --all # will spit out both formats

  Note
  > Generate your own API key here: https://www.webpagetest.org/getkey.php
  > Limit with the APP Default API key is 200 request.
  > This CLI is used by a lot of people, so you may see an API error, in that case,
    request your own API key and use that.

```


## License

MIT © [Arvind Ravulavaru](https://github.com/arvindr21/xray-cli)
