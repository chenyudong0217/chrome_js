const fs = require('fs')
const { VM, VMScript } = require('vm2');
//const catvm = require('./node.js')
//const chromejs = catvm.GetCode();
const sandbox = {
    require: require,
    console: console
};
const vm = new VM({
    sandbox: sandbox,
    require: {
        external: true
    }
});
//const test_code = chromejs+fs.readFileSync(`${__dirname}/test.js`);
const test_code = fs.readFileSync(`${__dirname}/test.js`);
const script = new VMScript(test_code, `${__dirname}/debugger.js`);
debugger;
result = vm.run(script);
console.log(result)

