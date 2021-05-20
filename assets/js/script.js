/* OBS: 
- Case sensitive = reconhece letras maiúsculas e minúsculas (como o IgnoreCase do java)
- Pesquisar por Id: getElementById()
- Pesquisar por Tag: getElementByTagName()
- Pesquisar por Nome: getElementByName()
- Pesquisar por Classe:getElementsByClassName()
- Pesquisar por Seletor: querySelector()
*/


// variável 
let nome = window.document.getElementById('nome') // está acessando o elemento input que tem o id 'nome'
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if(nome.value.length < 3){ // se o tamanho do nome for menor que 3 | ("value" valor que existe dentro de nome) 
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true

    }
}
    function validaEmail(){
        let txtEmail = document.querySelector("#txtEmail")
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ){
             //se dentro de email não for inserido '@' |(1 p/ sim, -1 p/ não em indexOf) / "||" = ou
            txtEmail.innerHTML = "E-mail inválido"
            txtEmail.style.color = 'red'
        }else {
            txtEmail.innerHTML = "E-mail válido!"
            txtEmail.style.color = 'green'
            emailOk = true

        }
    }

    function validaAssunto(){
        let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length >= 100){
            txtAssunto.innerHTML = 'Texto grande demais, digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'

        } else {
            txtAssunto.style.display = 'none'
            assuntoOk = true

        }
    }

    function enviar(){
        if(nomeOk == true && emailOk == true && assuntoOk == true){
            alert("Formulário enviado com sucesso!")
        } else{
            alert("Preencha o formulário corretamente antes de enviar")
        }
    }

    function mapaZoom() {
        mapa.style.width = '800px'
        mapa.style.height = '600px'
    }

    function mapaNormal() {
        mapa.style.width = '350px'
        mapa.style.height = '250px'
    }