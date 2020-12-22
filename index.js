// AES256 encrypt/decrypt
var crypto = require('crypto');
var aes256 = {};

aes256.encrypt = function(key, str) {
    var out = false;
    try {
    var sha256 = crypto.createHash('sha256');
    sha256.update(key);
    var iv = crypto.randomBytes(16);
    var cph = crypto.createCipheriv('aes-256-ctr', sha256.digest(), iv);
    var cstr = cph.update(Buffer.from(str));
    out = Buffer.concat([iv, cstr, cph.final()]).toString('hex');
    } catch(err) {}
    return out;
};

aes256.decrypt = function(key, str) {
    out = false;
    try {
    var sha256 = crypto.createHash('sha256');
    sha256.update(key);
    var ipt = Buffer.from(str, 'hex');
    var iv = ipt.slice(0, 16);
    var dcph = crypto.createDecipheriv('aes-256-ctr', sha256.digest(), iv);
    var dstr = ipt.slice(16);
    var out = dcph.update(dstr) + dcph.final();
    } catch(err) {}
    return out;
};

module.exports = aes256;