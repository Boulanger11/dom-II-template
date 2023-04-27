//ADICIONAR ELEMENTO ITEM 0 E ITEM 5
const lista = document.getElementById(`lista`)

const item0 = document.createElement(`li`)

const item5 = document.createElement(`li`)

//DUAS FORMAS PARA ADICIONAR TEXTO
//1
item0.innerHTML = `Item 0`
//2
const textoItem5 = document.createTextNode(`Item 5`)
item5.appendChild(textoItem5)

console.log(item5)


//ADICIONANDO OS NOVOS ITENS
lista.insertAdjacentElement(`afterbegin`, item0)
lista.insertAdjacentElement(`beforeend`, item5)