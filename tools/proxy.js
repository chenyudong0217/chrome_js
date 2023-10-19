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
