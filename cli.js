#!/usr/bin/env node
'use strict';
const meow = require('meow');
const xRayCli = require('.');

const cli = meow(`
    Usage
      $ xray-cli [input]

    Options
      --foo  Lorem ipsum [Default: false]

    Examples
      $ xray-cli
      unicorns & rainbows
      $ x-ray-cli ponies
      ponies & rainbows
`);

console.log(xRayCli(cli.input[0]));
