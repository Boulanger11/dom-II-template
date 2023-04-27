/* const input = document.getElementById(`texto`)
const mensagem = document.getElementById(`mensagem`)

input.addEventListener('keyup', function(event) {
    if (event.shiftKey) {
      mensagem.textContent = 'Você pressionou a tecla Shift!'
    } else {
      mensagem.textContent = ''
    }
  }) */

  const input = document.getElementsByTagName(`input`)[0]

  const paragrafo = document.getElementsByTagName(`p`)[0]

  const checarCaps = (event) => {
        if (event.shiftKey) {
            paragrafo.innerHTML = "PRESSIONOU A TECLA SHIFT"
        } else {
            paragrafo.innerHTML = ""
        }
  }