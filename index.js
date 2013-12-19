var qrcode = require('./qrcode.js').qrcode;
module.exports = function(text, typeNumber, errorCorrectLevel) {
    var qr = qrcode(typeNumber || 10, errorCorrectLevel || 'M');
    qr.addData(text);
    qr.make();
    var base64 = qr.createImgTag();
    base64 = base64.split(' ');
    base64 = base64[1].split('"');
    return base64[1];
}
