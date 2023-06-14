/** help */
function log(message) {
  console.log('> ' + message)
}

const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


// Funções do drag
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')
}

function drag() {
}

function dragend() {
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

  this.classList.remove('is-dragging')
}


dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {}

function dragover() {
  this.classList.add('over')

  // Card Capturado
  const cardSelected = document.querySelector('.is-dragging')
  this.appendChild(cardSelected)

  const legenda = this.querySelector(".legend");

  const style = window.getComputedStyle(legenda);


  const status = cardSelected.querySelector(".status");
  
  if (style.backgroundColor === "rgba(119, 171, 189, 0.01)") { // finalizacao
    status.classList.remove("red");
    status.classList.remove("blue");
    status.classList.remove("darkblue");
    status.classList.add("lightblue");
  } else if (style.backgroundColor === "rgba(69, 123, 157, 0.01)") { // revisao
    status.classList.remove("red");
    status.classList.remove("blue");
    status.classList.remove("lightblue");
    status.classList.add("darkblue");
  } else if (style.backgroundColor === "rgba(29, 53, 87, 0.01)") { // execucao
    status.classList.remove("red");
    status.classList.remove("lightblue");
    status.classList.remove("darkblue");
    status.classList.add("blue");
  } else if (style.backgroundColor === "rgba(230, 57, 71, 0.01)") { // afazer
    status.classList.remove("blue");
    status.classList.remove("darkblue");
    status.classList.remove("lightblue");
    status.classList.add("red");
  }

  // const btnAfazer = document.getElementById("btnAfazer")
  // const btnExecucao = document.getElementById("btnExecucao")
  // const btnRevisao = document.getElementById("btnRevisao")
  // const btnFim = document.getElementById("btnFim")
  // // const iconX = document.getElementById("iconX")
  // // const iconMaior = document.getElementById("iconMaior")

  // if (style.backgroundColor === "rgba(119, 171, 189, 0.01)") { // finalizacao
  //   btnFim.setAttribute('src', './img/icons/close-fim.png')
  //   // iconMaior.src = "./img/icons/maximize-fim.png"
  // } else if (style.backgroundColor === "rgba(69, 123, 157, 0.01)") { // revisao
  //   btnRevisao.setAttribute('src','./img/icons/close-revisao.png')
  //   // iconMaior.src = "./img/icons/maximize-revisao.png"
  // } else if (style.backgroundColor === "rgba(29, 53, 87, 0.01)") { // execucao
  //   btnExecucao.setAttribute('src','/img/icons/close-execu.png')
  //   // iconMaior.src = "./img/icons/maximize-execu.png"
  // } else if (style.backgroundColor === "rgba(230, 57, 71, 0.01)") { // afazer
  //   btnAfazer.setAttribute('src', './img/icons/close-fazer.png')
  //   // iconMaior.src = "./img/icons/maximize-fazer.png"
  // }

  
} 


function dragleave() {
  // log('DROPZONE: Leave ')
  // this = dropzone
  this.classList.remove('over')

}

function drop() {
  // log('DROPZONE: dropped ')
  this.classList.remove('over')
}