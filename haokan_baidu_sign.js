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
    url: "https://haokan.baidu.com/web/search/page?query=",
    referrer: "https://haokan.baidu.com/web/search/page?query=",
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
/*暴露需要的属性，内包函数*/
window.sign = null;
var _sign;
!function(e) {
    function t(t) {
        for (var n, l, i = t[0], a = t[1], f = t[2], c = 0, s = []; c < i.length; c++)
            l = i[c],
            Object.prototype.hasOwnProperty.call(o, l) && o[l] && s.push(o[l][0]),
            o[l] = 0;
        for (n in a)
            Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
        for (p && p(t); s.length; )
            s.shift()();
        return u.push.apply(u, f || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < u.length; t++) {
            for (var r = u[t], n = !0, i = 1; i < r.length; i++) {
                var a = r[i];
                0 !== o[a] && (n = !1)
            }
            n && (u.splice(t--, 1),
            e = l(l.s = r[0]))
        }
        return e
    }
    var n = {}
      , o = {
        38: 0
    }
      , u = [];
    function l(t) {
        if (n[t])
            return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, l),
        r.l = !0,
        r.exports
    }

    l.m = e,
    l.c = n,
    l.d = function(e, t, r) {
        l.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    l.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    l.t = function(e, t) {
        if (1 & t && (e = l(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (l.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                l.d(r, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return r
    }
    ,
    l.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return l.d(t, "a", t),
        t
    }
    ,
    l.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    l.p = "https://hk.bdstatic.com/";
    var i = window.webpackJsonp = window.webpackJsonp || []
      , a = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var f = 0; f < i.length; f++)
        t(i[f]);
    var p = a;
    r()
}([]);
!function(r) {
    "use strict";
    function i(e, t) {
        var c = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (c >> 16) << 16 | 65535 & c
    }
    function a(e, t, c, n, r, a) {
        return i((o = i(i(t, e), i(n, a))) << (l = r) | o >>> 32 - l, c);
        var o, l
    }
    function o(e, t, c, n, r, i, o) {
        return a(t & c | ~t & n, e, t, r, i, o)
    }
    function l(e, t, c, n, r, i, o) {
        return a(t & n | c & ~n, e, t, r, i, o)
    }
    function s(e, t, c, n, r, i, o) {
        return a(t ^ c ^ n, e, t, r, i, o)
    }
    function u(e, t, c, n, r, i, o) {
        return a(c ^ (t | ~n), e, t, r, i, o)
    }
    function h(e, t) {
        var c, n, r, a, h;
        e[t >> 5] |= 128 << t % 32,
        e[14 + (t + 64 >>> 9 << 4)] = t;
        var v = 1732584193
          , f = -271733879
          , d = -1732584194
          , p = 271733878;
        for (c = 0; c < e.length; c += 16)
            n = v,
            r = f,
            a = d,
            h = p,
            v = o(v, f, d, p, e[c], 7, -680876936),
            p = o(p, v, f, d, e[c + 1], 12, -389564586),
            d = o(d, p, v, f, e[c + 2], 17, 606105819),
            f = o(f, d, p, v, e[c + 3], 22, -1044525330),
            v = o(v, f, d, p, e[c + 4], 7, -176418897),
            p = o(p, v, f, d, e[c + 5], 12, 1200080426),
            d = o(d, p, v, f, e[c + 6], 17, -1473231341),
            f = o(f, d, p, v, e[c + 7], 22, -45705983),
            v = o(v, f, d, p, e[c + 8], 7, 1770035416),
            p = o(p, v, f, d, e[c + 9], 12, -1958414417),
            d = o(d, p, v, f, e[c + 10], 17, -42063),
            f = o(f, d, p, v, e[c + 11], 22, -1990404162),
            v = o(v, f, d, p, e[c + 12], 7, 1804603682),
            p = o(p, v, f, d, e[c + 13], 12, -40341101),
            d = o(d, p, v, f, e[c + 14], 17, -1502002290),
            v = l(v, f = o(f, d, p, v, e[c + 15], 22, 1236535329), d, p, e[c + 1], 5, -165796510),
            p = l(p, v, f, d, e[c + 6], 9, -1069501632),
            d = l(d, p, v, f, e[c + 11], 14, 643717713),
            f = l(f, d, p, v, e[c], 20, -373897302),
            v = l(v, f, d, p, e[c + 5], 5, -701558691),
            p = l(p, v, f, d, e[c + 10], 9, 38016083),
            d = l(d, p, v, f, e[c + 15], 14, -660478335),
            f = l(f, d, p, v, e[c + 4], 20, -405537848),
            v = l(v, f, d, p, e[c + 9], 5, 568446438),
            p = l(p, v, f, d, e[c + 14], 9, -1019803690),
            d = l(d, p, v, f, e[c + 3], 14, -187363961),
            f = l(f, d, p, v, e[c + 8], 20, 1163531501),
            v = l(v, f, d, p, e[c + 13], 5, -1444681467),
            p = l(p, v, f, d, e[c + 2], 9, -51403784),
            d = l(d, p, v, f, e[c + 7], 14, 1735328473),
            v = s(v, f = l(f, d, p, v, e[c + 12], 20, -1926607734), d, p, e[c + 5], 4, -378558),
            p = s(p, v, f, d, e[c + 8], 11, -2022574463),
            d = s(d, p, v, f, e[c + 11], 16, 1839030562),
            f = s(f, d, p, v, e[c + 14], 23, -35309556),
            v = s(v, f, d, p, e[c + 1], 4, -1530992060),
            p = s(p, v, f, d, e[c + 4], 11, 1272893353),
            d = s(d, p, v, f, e[c + 7], 16, -155497632),
            f = s(f, d, p, v, e[c + 10], 23, -1094730640),
            v = s(v, f, d, p, e[c + 13], 4, 681279174),
            p = s(p, v, f, d, e[c], 11, -358537222),
            d = s(d, p, v, f, e[c + 3], 16, -722521979),
            f = s(f, d, p, v, e[c + 6], 23, 76029189),
            v = s(v, f, d, p, e[c + 9], 4, -640364487),
            p = s(p, v, f, d, e[c + 12], 11, -421815835),
            d = s(d, p, v, f, e[c + 15], 16, 530742520),
            v = u(v, f = s(f, d, p, v, e[c + 2], 23, -995338651), d, p, e[c], 6, -198630844),
            p = u(p, v, f, d, e[c + 7], 10, 1126891415),
            d = u(d, p, v, f, e[c + 14], 15, -1416354905),
            f = u(f, d, p, v, e[c + 5], 21, -57434055),
            v = u(v, f, d, p, e[c + 12], 6, 1700485571),
            p = u(p, v, f, d, e[c + 3], 10, -1894986606),
            d = u(d, p, v, f, e[c + 10], 15, -1051523),
            f = u(f, d, p, v, e[c + 1], 21, -2054922799),
            v = u(v, f, d, p, e[c + 8], 6, 1873313359),
            p = u(p, v, f, d, e[c + 15], 10, -30611744),
            d = u(d, p, v, f, e[c + 6], 15, -1560198380),
            f = u(f, d, p, v, e[c + 13], 21, 1309151649),
            v = u(v, f, d, p, e[c + 4], 6, -145523070),
            p = u(p, v, f, d, e[c + 11], 10, -1120210379),
            d = u(d, p, v, f, e[c + 2], 15, 718787259),
            f = u(f, d, p, v, e[c + 9], 21, -343485551),
            v = i(v, n),
            f = i(f, r),
            d = i(d, a),
            p = i(p, h);
        return [v, f, d, p]
    }
    function v(e) {
        var t, c = "", n = 32 * e.length;
        for (t = 0; t < n; t += 8)
            c += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return c
    }
    function f(e) {
        var t, c = [];
        for (c[(e.length >> 2) - 1] = void 0,
        t = 0; t < c.length; t += 1)
            c[t] = 0;
        var n = 8 * e.length;
        for (t = 0; t < n; t += 8)
            c[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return c
    }
    function d(e) {
        var t, c, n = "";
        for (c = 0; c < e.length; c += 1)
            t = e.charCodeAt(c),
            n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return n
    }
    function p(e) {
        return unescape(encodeURIComponent(e))
    }
    function m(e) {
        return function(e) {
            return v(h(f(e), 8 * e.length))
        }(p(e))
    }
    function z(e, t) {
        return function(e, t) {
            var c, n, r = f(e), i = [], a = [];
            for (i[15] = a[15] = void 0,
            r.length > 16 && (r = h(r, 8 * e.length)),
            c = 0; c < 16; c += 1)
                i[c] = 909522486 ^ r[c],
                a[c] = 1549556828 ^ r[c];
            return n = h(i.concat(f(t)), 512 + 8 * t.length),
            v(h(a.concat(n), 640))
        }(p(e), p(t))
    }
    _sign = function g(e, t, c) {
        return t ? c ? z(t, e) : d(z(t, e)) : c ? m(e) : d(m(e))
    }
}([]);
//key关键词，time时间戳，pn页数，version版本1
var get_sign = function(key,time,pn,version){
  var o = version;
  var i = pn
  var time=time;
  var s=[i,encodeURIComponent(key),10,time,o].join("_");
  console.log(s)
  var u = _sign(s);
  return u;
};

//console.log(window.webpackJsonp[0][1][74])
//console.log(_sign[74].toString())
console.log(get_sign("同花顺"))
