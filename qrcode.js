const qrcode = require('qrcode-terminal')

var text = 'QRCode Terminal Edition';  //https://login.weixin.qq.com/qrcode/4ZtmDT6OPg==

qrcode.generate(text);
//qrcode.setErrorLevel('Q'); 自定义错误级别，默认是L
// qrcode.generate(text, {small: false});

//可以有回调函数
// qrcode.generate(text, function (qrcode) {
//        console.log(qrcode);
// });

//也可以结合使用
// qrcode.generate(text, {small: true},  function (qrcode) {
//        console.log(qrcode);
// });