
var Window = function Window(){
    throw new TypeError("Illegal constructor");
};
Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]:{
        value:"Symbol",
        configurable:false, // 通常为 false，不允许删除属性并修改其特性。
        writable:true, // 通常为 true，允许重新赋值。
        enumerable:true // 通常为 true，可以出现在 for...in 循环或 Object.keys() 方法中。
    }
});
window.__proto__ = Window.prototype;