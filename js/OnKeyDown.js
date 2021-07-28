window.onload = function () {
    const result = document.getElementById("result");
    window.onkeydown = function () {
        // 绑定键盘按下事件
        const xhr = new XMLHttpRequest();
        // 设置responseType
        xhr.responseType = 'json';
        // 初始化
        xhr.open('GET', 'http://127.0.0.1:8000/json-server');
        // 发送
        xhr.send();
        // 事件绑定
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 300){
                    // console.log(xhr.response);
                    // result.innerHTML = xhr.response;
                    // 获取后端传来的数据
                    // let data = JSON.parse(xhr.response);
                    // console.log(data);
                    // result.innerHTML = data.name;
                    // 自动转换
                    result.innerHTML = xhr.response.name;
                }
            }
        }
    }
}
// 