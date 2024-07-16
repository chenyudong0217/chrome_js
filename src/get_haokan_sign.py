import os,sys
import execjs



if __name__ == '__main__':
    script = ''
    with open('../haokan_baidu_sign.js','r',encoding='utf-8') as file:
        script = file.read()
    exec_function = execjs.compile(script,cwd='D:\\个人git\chrome_js\\node_modules')
    print(exec_function.call('get_sign','同花顺','1721100161073','2','1'))