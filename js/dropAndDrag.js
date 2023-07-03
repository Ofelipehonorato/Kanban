const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

// Funções do drag
cards.forEach(card => {
  card.addEventListener('dragstart', dragstart)
  card.addEventListener('drag', drag)
  card.addEventListener('dragend', dragend)
})

export function dragstart() {
  dropzones.forEach( dropzone => dropzone.classList.add('highlight'))
  this.classList.add('is-dragging')
}

export function drag() {}

export function dragend() {
  dropzones.forEach( dropzone => dropzone.classList.remove('highlight'))
  this.classList.remove('is-dragging')
}

dropzones.forEach( dropzone => {
  dropzone.addEventListener('dragenter', dragenter)
  dropzone.addEventListener('dragover', dragover)
  dropzone.addEventListener('dragleave', dragleave)
  dropzone.addEventListener('drop', drop)
})

export function dragenter() {}

export function dragover(event) {
  event.preventDefault(); // Previne o comportamento padrão de arrastar

  // Card Capturado
  const cardSelected = document.querySelector('.is-dragging');

  if (cardSelected) {
    // Verifica se o card capturado já está na coluna de destino
    if (cardSelected.parentElement !== this) {
      this.appendChild(cardSelected);

      const legenda = this.querySelector('.legend');
      const style = window.getComputedStyle(legenda);
      const status = cardSelected.querySelector('.status');

      // Atualiza as classes de status com base na cor da coluna de destino
      if (style.backgroundColor === 'rgba(119, 171, 189, 0.01)') { // finalizacao
        status.classList.remove('red', 'blue', 'darkblue');
        status.classList.add('lightblue');
      } else if (style.backgroundColor === 'rgba(69, 123, 157, 0.01)') { // revisao
        status.classList.remove('red', 'blue', 'lightblue');
        status.classList.add('darkblue');
      } else if (style.backgroundColor === 'rgba(29, 53, 87, 0.01)') { // execucao
        status.classList.remove('red', 'lightblue', 'darkblue');
        status.classList.add('blue');
      } else if (style.backgroundColor === 'rgba(230, 57, 71, 0.01)') { // afazer
        status.classList.remove('blue', 'darkblue', 'lightblue');
        status.classList.add('red');
      }
    }
  }
}

export function dragleave() {
  this.classList.remove('over')
}

export function drop() {
  this.classList.remove('over')
}