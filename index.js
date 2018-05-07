'use strict';
const Runner = require('./src/runner');

module.exports = (inputs, opts) => {
    opts = opts || {};
    return Runner(inputs, opts);
};
