//北大法宝网 token js补环境测试
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
    url: "https://dd.xmxmdx.cn/",
    referrer: "https://dd.xmxmdx.cn/",
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

var account_token= function(n){
    var t, r, f, u = this[0];
    return arguments.length ? (f = i.isFunction(n),
    this.each(function(r) {
        var u;
        1 === this.nodeType && (u = f ? n.call(this, r, i(this).val()) : n,
        null == u ? u = "" : "number" == typeof u ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
            return null == n ? "" : n + ""
        })),
        t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()],
        t && "set"in t && void 0 !== t.set(this, u, "value") || (this.value = u))
    })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()],
    t && "get"in t && void 0 !== (r = t.get(u, "value")) ? r : (r = u.value,
     "string" == typeof r ? r.replace(uf, "") : null == r ? "" : r)) : void 0
}
console.log(account_token())
