'use strict';
const Runner = require('./src/runner');

module.exports = (inputs, opts) => {
    if (inputs.length === 0) {
        throw new TypeError(`URL is required`);
    }

    opts = opts || {};

    return Runner(inputs, opts);
};
