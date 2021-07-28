window.onload = function () {
    const btn = document.querySelectorAll("button");
    // 配置 baseURL
    axios.defaults.baseURL= 'http://127.0.0.1:8000'
    btn[0].onclick = function () {
        // GET 请求
        axios.get('/axios-server', {
            // url参数
            params: {
                id:100,
                vip:7,
            },
            headers: {
                name:'Sheven',
                age:'21',
            }
        }).then(value => {
            console.log(value);
        });
    };
    btn[1].onclick = function (){
        axios.post('/axios-server', {
            username:'admin',
            password:'admin'
        },{
            // url
            params: {
                id: 200,
                vip: 9
            },
            headers:{
                height:180,
                weight:100
            },
        });
    };
    btn[2].onclick = function (){
        axios({
            // 请求方法
            method: "POST",
            // url
            url: '/axios-server',
            params: {
                id: 200,
                vip: 9
            },
            headers: {
                height: 180,
                weight: 100
            },
            data: {
                username: 'admin',
                password: 'admin'
            }
        }).then(response=>{
            console.log(response);
            console.log(response.status);
        })
    }
};