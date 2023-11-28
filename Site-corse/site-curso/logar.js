const formulario = document.getElementById("form")
const inputemail = document.getElementById("email")
const inputsenha = document.getElementById("senha")
const btn = document.getElementById ("btn")

console.log(btn)

const login = function (){
    
    console.log(inputemail.value)
    console.log (inputsenha.value)

}
btn.addEventListener('click',login)

formulario.addEventListener("submit", function(event){    
    event.preventDefault()

    console.log(email.value)
    console.log(senha.value)

})