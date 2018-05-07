var jsonexport = require('jsonexport');

module.exports = (result, callback) => {
    jsonexport(result, function(err, csv) {
        if (err) return console.log(err);
        if (callback) callback(err, csv);
    });
}
