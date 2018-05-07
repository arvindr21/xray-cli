function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

function fmtMSS(s) {
    // return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s
    return s;
}

module.exports.bytesToSize = bytesToSize;
module.exports.formatSeconds = fmtMSS;
