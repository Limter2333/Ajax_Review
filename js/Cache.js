window.onload = function () {
    const btn = document.getElementsByTagName('button')[0];
    const result = document.getElementById('result');

    btn.addEventListener('click', function () {
        const xhr = new XMLHttpRequest();
        // IE8会缓存导致无法获取新的数据，可以加上一个事件戳
        xhr.open('GET', 'http://127.0.0.1:8000/IE?t=' + Date.now());
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    result.innerHTML = xhr.response;
                }
            }
        }
    })
}