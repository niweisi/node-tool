// 当前ip抓包代理地址生成二维码

const os = require('os');
const qrcode = require('qrcode-terminal');
const CryptoJS = require('crypto-js')

///////////////////获取本机ip///////////////////////
function getIPAdress() {
    const interfaces = os.networkInterfaces();

    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

const remoteIp = getIPAdress();

const args = process.argv.slice(2);

const port = args[0] ?? '8899';
const type = args[1] ?? 'http';
const params = args[2] ?? '?method=auto';

const text = remoteIp + ':' + port;

console.log(text);

const wordArray = CryptoJS.enc.Utf8.parse(text);
const base64 = CryptoJS.enc.Base64.stringify(wordArray);

const str = type + '://' + base64 + params;
console.log(str);
qrcode.generate(str, {small: true}, function (qrcode) {
    console.log(qrcode);
});

// node fiddler.js 8889 socks