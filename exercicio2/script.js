const inputSenha = document.getElementById(`password`)

const escondesenha = (event) => {
    //PREVINE O COMPORTAMENTO PADRÃO, NESTE CASO É RECARREGAR A PAGINA
    event.preventDefault()
    
}

inputSenha.setAttribute(`type`, `password`)

const trocaForm = document.getElementsByTagName(`form`)[0]

trocaForm.classList.remove(`light`)

trocaForm.classList.add(`dark`)
