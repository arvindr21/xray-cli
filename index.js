'use strict';
const WebPageTest = require('WebPageTest');
const fs = require('fs');
const API_KEY = 'A.002803875acd5c290b7ceea5123b74ac';

module.exports = (input, opts) => {
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof input}`);
    }

    opts = opts || {};

    let wpt = new WebPageTest('https://www.webpagetest.org/', API_KEY)

    wpt.runTest(input, {
        connectivity: 'Cable',
        location: 'Florida:Chrome',
        firstViewOnly: false,
        runs: 1,
        pollResults: 5,
        video: true
    }, function processTestResult(err, result) {
        // First view — use `repeatView` for repeat view

        if(err){
            console.log(err);
            return;
        }

        fs.writeFileSync(__dirname + '/results/results.json', JSON.stringify(result, null, 4));

        console.log('Load time:', result.data.average.firstView.loadTime)
        console.log('First byte:', result.data.average.firstView.TTFB)
        console.log('Start render:', result.data.average.firstView.render)
        console.log('Speed Index:', result.data.average.firstView.SpeedIndex)
        console.log('DOM elements:', result.data.average.firstView.domElements)

        console.log('(Doc complete) Requests:', result.data.average.firstView.requestsDoc)
        console.log('(Doc complete) Bytes in:', result.data.average.firstView.bytesInDoc)

        console.log('(Fully loaded) Time:', result.data.average.firstView.fullyLoaded)
        console.log('(Fully loaded) Requests:', result.data.average.firstView.requestsFull)
        console.log('(Fully loaded) Bytes in:', result.data.average.firstView.bytesIn)

        console.log('Waterfall view:', result.data.runs[1].firstView.images.waterfall)
    })


    return input;
};
