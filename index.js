var qrcode = require('./qrcode.js').qrcode;
var gen = function(text, errorCorrectLevel, typeNumber) {
    typeNumber = typeNumber || 4
    var qr;
    try {
        qr = qrcode(typeNumber, errorCorrectLevel || 'M');
        qr.addData(text);
        qr.make();
    } catch (e) {
        if(typeNumber >= 40) {
            throw new Error('Text too long to encode');
        } else {
            return gen(text, errorCorrectLevel, typeNumber+1);
        }
    }
    return qr.createImgTag();
}

module.exports = gen;