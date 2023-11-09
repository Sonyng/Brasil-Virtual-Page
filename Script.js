function logar(){

    var login = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin@gmail.com" && senha == "admin"){
        alert('Sucesso');
        location.href = "/Home Page/index.html";
    }else{
        alert('Usuario ou senha incorretos');
    }

}