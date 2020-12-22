# AES256
[nodejs] AES256 Encrypt/decrypt

### Install
```
npm install kc-aes256
```

### Use
```js
var aes = require('kc-aes256');
var key = '1234';
var txt = 'Dummy';
var cph = aes.encrypt(key, txt);
console.log(cph);
var dcph = aes.decrypt(key, cph);
console.log(dcph);
```
