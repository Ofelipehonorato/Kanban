import { dragstart, drag, dragend, drop } from "./dropAndDrag.js";

function openPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
  const input = document.getElementById("inputText")
  input.value = ""
}

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
}

const btnPopUp = document.querySelector("#btnAdd");
btnPopUp.addEventListener("click", openPopup);

const btnClosePopUp = document.querySelector("#closePopup");
btnClosePopUp.addEventListener("click", closePopup);


const btnAdd = document.getElementById("addButton")
btnAdd.addEventListener("click", criarCard);

function criarCard() {
  let cardsArray = [];

  let popup = document.getElementById("popup");
  popup.style.display = "none";
  
  const input = document.getElementById("inputText")
  const value = input.value
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
  cardElementText.innerHTML = value

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
