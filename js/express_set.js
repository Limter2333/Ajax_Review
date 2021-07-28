// 1.引入Express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// app.get('/', (request, response)=>{
//     response.send("Hello Express")
// });

//  (1) /server
app.get('/server', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello Ajax');
});
__dirname

app.post('/server', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Ajax Post');
});


// (2) /json-server
// 响应所有method
app.all('/json-server', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应返回一个对象
    const data = {
        name: '666name666'
    };
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});


// (3) /IE
app.get('/IE', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello IE - 2');
});


// (4) /delay
app.get('/delay', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(()=>{
        response.send('延时响应');
    },3000)
});


// (5) /axios-server
app.all('/axios-server', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应返回一个对象
    const data = {
        name: 'axios'
    };
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});


// (5) /fetch-server
app.all('/fetch-server', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应返回一个对象
    const data = {
        name: 'axios'
    };
    let str = JSON.stringify(data);
    // 设置响应体
    response.send(str);
});


// (6) 同源策略
app.get('/home', (request, response) => {
    response.sendFile('/home/sheven/WebstormProjects/Ajax_Learning/same_origin_policy.html');
});
app.get('/data', (request, response) => {
    response.send('users data');
});

app.all('/JSONP-server', (request, response) => {
    // 设置请求头
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应返回一个对象
    const data = {
        name: 'JSONP'
    };
    let str = JSON.stringify(data);
    // 设置响应体
    response.end("handle(${str})");
});


// 4.启动服务
app.listen(8000, () => {
    console.log("服务器已经启动,8000端口监听中")
});