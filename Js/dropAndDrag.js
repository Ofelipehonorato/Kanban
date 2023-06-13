/** help */
function log(message) {
  console.log('> ' + message)
}

/** app */
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')


/** our cards */
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

function dragstart() {
  // log('CARD: Start dragging ')
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))

  // this = card
  this.classList.add('is-dragging')
}

function drag() {
  // log('CARD: Is dragging ')
}

function dragend() {
  // log('CARD: Stop drag! ')
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))

  // this = card
  this.classList.remove('is-dragging')
}

/** place where we will drop cards */
dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

function dragenter() {
  // log('DROPZONE: Enter in zone ')
}

function dragover() {
  // this = dropzone
  this.classList.add('over')

  // get dragging card
  const cardSelected = document.querySelector('.is-dragging')

  // this = dropzone
  this.appendChild(cardSelected)

  const legenda = this.querySelector(".legend");

  //Pegar todo o estilo carregado da linha acima(no caso, pega a class e assim o backcolor)
  const style = window.getComputedStyle(legenda);

  /*
    Pega todo o elemento HTML onde esta a class status
    <div class="status green">
        <p>Sprint Meet</p>
    </div>
    */
  const status = cardSelected.querySelector(".status");

  //Dependendo do background encontrado, seta a cor atual e remove as outras.
  if (style.backgroundColor === "rgb(128, 128, 128)") {
    status.classList.remove("red");
    status.classList.remove("blue");
    status.classList.remove("green");
    status.classList.add("gray");
  } else if (style.backgroundColor === "rgb(255, 0, 0)") {
    status.classList.remove("blues");
    status.classList.remove("green");
    status.classList.remove("gray");
    status.classList.add("red");
  } else if (style.backgroundColor === "rgb(51, 173, 255)") {
    status.classList.remove("green");
    status.classList.remove("gray");
    status.classList.remove("red");
    status.classList.add("blue");
  } else if (style.backgroundColor === "rgb(35, 210, 172)") {
    status.classList.remove("yellow");
    status.classList.remove("red");
    status.classList.remove("blue");
    status.classList.add("green");
  }
  
} 


function dragleave() {
  // log('DROPZONE: Leave ')
  // this = dropzone
  this.classList.remove('over')

}

function drop() {
  // log('DROPZONE: dropped ')
  // this.classList.remove('over')
}