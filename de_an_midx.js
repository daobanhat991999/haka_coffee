function login(){
    let tk = document.getElementById("tk").value;
    let matkhau = document.getElementById("mk").value;

    if(tk==="admin" && matkhau==="thinhngu"){
        alert('đăng nhập thành công!');
        window.location.href= 'sp.html';
    }
    else{
        alert('false')
    }
}