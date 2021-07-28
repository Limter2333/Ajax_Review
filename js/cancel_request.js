window.onload = function () {
    const btn = document.getElementsByTagName('button');
    const result = document.getElementById('result');
    let xhr = null;
    // // 发送请求
    // btn[0].onclick = function () {
    //     // 1. 创建对象
    //     xhr = new XMLHttpRequest();
    //     // 2. 初始化，设置请求方法和url
    //     // *** 修改此处url
    //     xhr.open('GET', 'http://127.0.0.1:8000/delay');
    //     // 3, 发送
    //     xhr.send();
    //     console.log("send");
    // };
    // // 取消请求
    // btn[1].onclick = function () {
    //     xhr.abort();
    //     console.log("cancel");
    // }
    // 重复点击问题
    let isSending = false; // set flag
    btn[0].onclick = function () {
        // 如果在发送则取消当前请求并发送新的请求
        if (isSending === true) xhr.abort();
        xhr = new XMLHttpRequest();
        // 修改flag
        isSending = true;
        xhr.open('GET', 'http://127.0.0.1:8000/delay');
        xhr.send();
        xhr.onreadystatechange = function () {
            if(xhr.readyState ===4){
                // 修改标识变量
                isSending = false;
            }
        }
    }
}
