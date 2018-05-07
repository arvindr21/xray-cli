#!/usr/bin/env node

'use strict';
const meow = require('meow');
const xRayCli = require('.');

const cli = meow(`
    Usage
      $ xray-cli [URL] --flags

    Options
      --file Filename to save the results [Default: results]
      --api API URL [Default: https://www.webpagetest.org/]
      --key Pass your own Webpagetest API key [Default: APP]

    Output options
      --json Save results as JSON [Default: false]
      --html Save results as HTML [Default: false]
      --csv Save results as CSV [Default: false]
      --all Save results as both HTML & JSON [Default: false]

    Examples
      $ xray-cli https://example.com --json
      $ xray-cli https://example.com --file=example-homepage --html # generates a HTML report with the name example-homepageeaxmple
      $ xray-cli https://example.com --all # will spit out all supported formats of data

    Note
    > Generate your own API key here: https://www.webpagetest.org/getkey.php
    > Limit with the APP Default API key is 200 request.
    > This CLI is used by a lot of people, so you may see an API error, in that case,
      request your own API key and use that.
`, {
    autoHelp: true
});

if (!cli.input) {
    console.error('URL is required.');
} else {
    if (cli.input && cli.input.length === 0) {
        console.log(cli.help);
    } else {
        const flags = cli.flags;
        const key = flags.key;
        const file = flags.file;
        const api = flags.api;
        const csv = flags.csv;

        delete flags.key;
        delete flags.file;
        delete flags.api;
        delete flags.csv;

        if (Object.keys(flags).length > 1) {
            console.log('You can have only one output format.');
            console.log();
            console.log('Please pass either `--json` or `--html` or `--all`');
        } else {
            flags.key = key;
            flags.file = file;
            flags.api = api;
            flags.csv = csv;

            xRayCli(cli.input, flags);
        }
    }
}
