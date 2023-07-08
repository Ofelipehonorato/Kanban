import { dragstart, drag, dragend, drop } from "./dropAndDrag.js";

const btnAdd = document.getElementById("btnAdd")
btnAdd.addEventListener("click", criarCard);

function criarCard() {
  let cardsArray = [];
  
  // Criação do cards e suas propriedades
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "afazer")
  cardElement.id = "afazer"
  cardElement.draggable = true

  const ulCard = document.createElement("ul")
  ulCard.classList.add("status", "red")
  ulCard.id = "statusRed"

  const liCard = document.createElement("li");
  liCard.classList.add("content", "afazer");
  liCard.id = "contentAfazerId";
  ulCard.appendChild(liCard)

  const cardElementText = document.createElement("div");
  cardElementText.id = "textoTitulo"
  cardElementText.innerHTML = "Insira seu título"
  
  liCard.appendChild(cardElementText)
  
  cardElement.appendChild(ulCard)

  cardsArray.push(cardElement);

  let kanbanContainer = document.getElementById("cloneCard");
  kanbanContainer.appendChild(cardElement);

  cardElement.addEventListener("dragstart", dragstart);
  cardElement.addEventListener("drag", drag);
  cardElement.addEventListener("dragend", dragend);
  cardElement.addEventListener("drop", drop);
}

const newText = () => {
  const changeText = document.getElementById("textoTitulo")
  const novoTitulo = prompt('Informe o novo Título')
  changeText.innerHTML = novoTitulo;
  console.log('Clicou');
}

const element = document.getElementById("textoTitulo");
element.addEventListener("click", newText);
