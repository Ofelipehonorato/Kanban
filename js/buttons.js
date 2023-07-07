import { dragstart, drag, dragend, drop } from "./dropAndDrag.js";

const elementTwo = document.getElementById("btnAdd");
elementTwo.addEventListener("click", createNewCard);
const elementoDiv = document.getElementById("cloneCard")
const cloneCardContainer = document.getElementById("cloneCard")


function createNewCard() {

// Cria o elemento <div> com o ID "cloneCard"
// const cloneCardContainer = document.createElement("div");
// cloneCardContainer.id = "cloneCard";
// cloneCardContainer.draggable = true;

// Cria o elemento <div> com as classes "card" e "afazer" e o ID "afazer"
const cardElement = document.createElement("div");
cardElement.classList.add("card", "afazer");
cardElement.id = "afazer";
cardElement.draggable = true;

// Cria o elemento <ul> com as classes "status" e "red" e o ID "statusRed"
const ulElement = document.createElement("ul");
ulElement.classList.add("status", "red");
ulElement.id = "statusRed";

// Cria o elemento <li> com as classes "content" e "afazer" e o ID "contentAfazerId"
const liElement = document.createElement("li");
liElement.classList.add("content", "afazer");
liElement.id = "contentAfazerId";

// Cria o elemento <div> com o ID "textoTitulo" e atribui a função "newText()" ao evento "onclick"
const divElement = document.createElement("div");
divElement.id = "textoTitulo";
divElement.textContent = "Digite um Título";
divElement.onclick = newText;

// Adiciona o elemento <div> como filho do elemento <li>
liElement.appendChild(divElement);

// Adiciona o elemento <li> como filho do elemento <ul>
ulElement.appendChild(liElement);

// Adiciona o elemento <ul> como filho do elemento <div> com o ID "afazer"
cardElement.appendChild(ulElement);

// Adiciona o elemento <div> com o ID "afazer" como filho do elemento <div> com o ID "cloneCard"
cloneCardContainer.appendChild(cardElement);

// Adiciona o elemento <div> com o ID "cloneCard" ao documento (DOM)
// elementoDiv.appendChild(cloneCardContainer);
console.log('click')
}


//Mudando texto card
function newText() {
  const changeText = document.getElementById("textoTitulo")
  const novoTitulo = prompt('Informe o novo Título')
  changeText.innerHTML = novoTitulo;
  console.log('Clicou');
}

const element = document.getElementById("textoTitulo");
element.addEventListener("click", newText);









