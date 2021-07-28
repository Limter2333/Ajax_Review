window.onload = function () {
    const result = document.getElementById("result");
    result.addEventListener("mouseover", function () {
        const xhr = new XMLHttpRequest();
        // 初始化 设置类型 URL
        xhr.open('POST', 'http://127.0.0.1:8000/server');
        // 设置请求头
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.setRequestHeader('name','header'); // 这种写法一般会报错（浏览器安全）
        //
        // 设置请求体/
        xhr.send('a');
        // 事件绑定
        xhr.onreadystatechange = function () {
            // 判断
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    // 处理结果
                    result.innerHTML = xhr.response;
                } else {

                }
            }
        };
    });
};