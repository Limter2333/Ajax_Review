window.onload = function () {
    const btn = document.getElementsByTagName('button')[0];
    const result = document.getElementById('result');
    btn.onclick = function () {
        // 1. 创建对象
        const xhr = new XMLHttpRequest();
        // 2. 初始化，设置请求方法和url
        xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300');
        // 3, 发送
        xhr.send();
        // 4. 事件绑定，处理服务端返回结果
        // ready state 是对象中的属性，
        // 0表示未初始化 1表示open方法调用完毕 2表示send方法调用完毕 3表示服务端返回部分结果 4表示服务端返回所有结果；
        // change 当0到1 1道2 。。。都会change
        xhr.onreadystatechange = function () {
            // 处理服务端返回结果
            // 判断（服务端返回的所有结果)
            if (xhr.readyState === 4) {
                // 判断响应状态码 200 404 403 401 500
                // 2xx成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 处理结果 行、头、空行、体
                    // console.log(xhr.status); // status里包含相应状态码
                    // console.log(xhr.statusText); // 状态字符串
                    // console.log(xhr.getAllResponseHeaders()); // 响应头
                    // console.log(xhr.response); // 响应体
                    // 设置result文本
                    result.innerHTML = xhr.response;
                } else {

                }
            }
        };
    }
}
