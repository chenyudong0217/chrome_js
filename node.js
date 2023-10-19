//装载browser下所有环境js代码
(function(){
    function GetCode(){
        var fs = require('fs');
        var allChromejs = '';
        allChromejs = allChromejs+fs.readFileSync(`${__dirname}/tools/proxy.js`);
        allChromejs = allChromejs+fs.readFileSync(`${__dirname}/browser/base.js`)

        //加载browser下所有chrome环境js
        return allChromejs
    };
})();
