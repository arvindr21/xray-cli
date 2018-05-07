'use strict';
const WebPageTest = require('webpagetest');
const fs = require('fs');
const API_KEY = 'A.002803875acd5c290b7ceea5123b74ac';
const Tabilify = require('./tablify');
const Helper = require('./helper');

module.exports = (inputs, opts) => {
    if (!inputs) return;
    var file = opts.file || 'results';
    var apiUrl = opts.api || 'https://www.webpagetest.org/';

    console.log('');
    console.log('Processing ', inputs.length, 'url(s). Please wait..');
    console.log('');
    const wpt = new WebPageTest(apiUrl, opts.key || API_KEY)

    wpt.runTest(inputs, {
        connectivity: 'Cable',
        location: 'Florida:Chrome',
        firstViewOnly: false,
        runs: 1,
        pollResults: 5,
        video: true
    }, function processTestResult(err, result) {
        if (err) {
            console.log(err);
            return;
        }

        if (opts.json || opts.all) {
            fs.writeFileSync(process.cwd() + '/' + file + '.json', JSON.stringify(result, null, 4));
        }
        if (opts.html || opts.all) {
            const html = `<!DOCTYPE html>
                <html>
                <head>
                    <title>Webpage Test Web Report</title>
                    <style>
                        table,
                        th,
                        td {
                            border: 1px solid black;
                        }
                    </style>
                </head>
                <body>
                    <h1 style="text-align:center">${file}</h1>
                    <h3 style="text-align:center">URL: ${inputs.join(';')}</h3>
                    ${Tabilify(result)}
                </body>
                </html>`;
            fs.writeFileSync(process.cwd() + '/' + file + '.html', html);
        }

        console.log('Load time:', Helper.formatSeconds(result.data.average.firstView.loadTime))
        console.log('First byte:', Helper.formatSeconds(result.data.average.firstView.TTFB))
        console.log('Start render:', Helper.formatSeconds(result.data.average.firstView.render))
        console.log('Speed Index:', result.data.average.firstView.SpeedIndex)
        console.log('DOM elements:', result.data.average.firstView.domElements)
        console.log('(Doc complete) Requests:', result.data.average.firstView.requestsDoc)
        console.log('(Doc complete) Bytes in:', Helper.bytesToSize(result.data.average.firstView.bytesInDoc))
        console.log('(Fully loaded) Time:', Helper.formatSeconds(result.data.average.firstView.fullyLoaded))
        console.log('(Fully loaded) Requests:', result.data.average.firstView.requestsFull)
        console.log('(Fully loaded) Bytes in:', Helper.bytesToSize(result.data.average.firstView.bytesIn))
        console.log('Waterfall view:', result.data.runs[1].firstView.images.waterfall)
    });
};
