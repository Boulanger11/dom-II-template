const lista = document.getElementById(`lista`)

const input = document.getElementById(`meu-input`)

const insereItem = (event) => {
    event.preventDefault()
    const novoItem = document.createElement(`li`)
    novoItem.innerHTML = input.value
    lista.insertAdjacentElement(`beforeend`, novoItem)
    input.value = ``
}
