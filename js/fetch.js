window.onload = function () {
    const btn = document.querySelector('button');

    btn.onclick = function(){
        fetch('http://127.0.0.1:8000/fetch-server?vip=10',{
            method: 'POST',
            headers: {
                name: 'Sheven'
            },
            body: 'username=admin&password=admin'
        }).then(response =>{
            return response.json();
        }).then(response=>{
            console.log(response);
        })
    }
}