const formulario = document.querySelector("form")
const botao = document.querySelector("button")
const inome = document.querySelector(".nome")
const iemail = document.querySelector(".email")
const idataNascimento = document.querySelector(".dataNascimento")
//ID USOARIO PARA TROCAR EM CADA REQUISIÇÃO POST
const ids = 6

function cadastrar() {
    fetch("http://localhost:8080/jogadores", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: ids,
        nome: inome.value,
        email: iemail.value,
        dataNascimento: idataNascimento.value,
      }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Erro na solicitação");
        }
      })
      .then(function (data) {
        console.log("Jogador cadastrado com sucesso:", data);
      })
      .catch(function (error) {
        console.error("Erro ao cadastrar jogador:", error);
      });
  }

function limpar(){
    inome.value = ""
    iemail.value = ""
    idataNascimento.value = ""
}

formulario.addEventListener("submit", function (event){
    event.preventDefault();
    cadastrar()

})

