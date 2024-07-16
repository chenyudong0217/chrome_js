var better_proxy = function(o, callerName){
    return new Proxy(o,{
        set(target, property, value){
            console.table([{"类型":"set --> ","调用者":callerName,"属性":property,"值":value}]);
            return Reflect.set(...arguments);
        },
        get(target, property, receiver){
            if(property !== "Math"){
                console.table([{"类型":"get<--","调用者":callerName,"属性":property,"值":target[property]}]);
            }
            return Reflect.get(...arguments);
        }
    });
};

window = this;
var location={};
var navigator = {};
var screen={};
var document={};
var better = {};
window = better_proxy(window, "window");
location = better_proxy(location, "location");
navigator = better_proxy(navigator, "navigator");
screen = better_proxy(screen,"screen");
document = better_proxy(document, "document");

//开始补window js环境
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = "<!DOCTYPE html><p></p>";
const resourceLoader = new jsdom.ResourceLoader({
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
});

const dom = new JSDOM(html,{
    url: "https://www.xiaohongshu.com",
    referrer: "https://www.xiaohongshu.com",
    contentType: "text/html",
    resources: resourceLoader,
})
window = dom.window;
document = window.document;
DOMParser = window.DOMParser;
location = window.location;
navigator = window.navigator;
localStorage = window.localStorage;
class AudioContextMock {
    constructor() {
    }
}
class webkitAudioContextMock {
    constructor() {
    }
}
var indexedDB = {}

var canvas = {
    toDataURL: function toDataURL() {
    },
    getContext: function getContext(x) {
    }
};
var CryptoJS = require("crypto-js")

function encryption (sourceWord,encryptionKey){
    var key = CryptoJS.enc.Utf8.parse(encryptionKey);
    var iv = CryptoJS.enc.Utf8.parse("5485693214587452");
    var srcs = CryptoJS.enc.Utf8.parse(sourceWord);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
}

var password = 'Cyd0217@'
var key = '25597edaee9e4eddb07f2d4d1a09eb49'
console.log(encryption(password, key))