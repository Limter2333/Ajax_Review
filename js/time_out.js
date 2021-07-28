window.onload = function () {
    const btn = document.getElementsByTagName('button')[0];
    const result = document.getElementById('result');
    btn.onclick = function () {
        // 1. 创建对象
        const xhr = new XMLHttpRequest();
        // 设置超时时间
        xhr.timeout = 2000;
        // 超时返回
        xhr.ontimeout = function () {
            alert("Time out! 请求超时！");
        };
        // 网络异常
        xhr.onerror = function () {
            alert("Network error! 网络异常! ");
        };
        // 2. 初始化，设置请求方法和url
        // *** 修改此处url
        xhr.open('GET', 'http://127.0.0.1:8000/delay');
        // 3, 发送
        xhr.send();
        // 4. 事件绑定，处理服务端返回结果
        xhr.onreadystatechange = function () {
            // 处理服务端返回结果
            if (xhr.readyState === 4) {
                // 判断响应状态码 200 404 403 401 500, 2xx成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    // *** 插入响应操作

                    result.innerHTML = xhr.response;
                } else {

                }
            }
        };
    };
}
