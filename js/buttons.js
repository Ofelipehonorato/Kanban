import { dragstart, drag, dragend, drop } from "./dropAndDrag.js";

// Função que abre um campo para inserir o titulo do card //
// function openPopup() {
//   let popup = document.getElementById("popup");
//   popup.style.display = "block";
// }

function addText() {


  const cardToClone = cloneCardContainer.querySelector(".card");

  const cloneCard = cardToClone.cloneNode(true);

  cloneCardContainer.appendChild(cloneCard);

  cloneCard.addEventListener("dragstart", dragstart);
  cloneCard.addEventListener("drag", drag);
  cloneCard.addEventListener("dragend", dragend);
  cloneCard.addEventListener("drop", drop);

  console.log('clicou')
}

const elementTwo = document.getElementById("btnAdd");
elementTwo.addEventListener("click", addText);

// const btnAdd = document.querySelector("#btnAdd");
const cloneCardContainer = document.querySelector("#cloneCard");


// Função para adicionar um novo card //
// function addText() {
//   let inputText = document.getElementById("inputText").value;

//   if (inputText) {
//     const cardToClone = cloneCardContainer.querySelector(".card");

//     if (cardToClone) {
//       const cloneCard = cardToClone.cloneNode(true);
//       const titleElement = cloneCard.querySelector("h2");
//       titleElement.textContent = inputText;
//       cloneCardContainer.appendChild(cloneCard);

//       cloneCard.addEventListener("dragstart", dragstart);
//       cloneCard.addEventListener("drag", drag);
//       cloneCard.addEventListener("dragend", dragend);
//       cloneCard.addEventListener("drop", drop);
//     }
//   }

//   let popup = document.getElementById("popup");
//   popup.style.display = "none";

//   document.getElementById("inputText").value = "";
// }

// const btnAdd = document.querySelector("#btnAdd");
// const cloneCardContainer = document.querySelector("#cloneCard");

// btnAdd.addEventListener("click", openPopup);
// document.addEventListener("DOMContentLoaded", function () {
//   let addButton = document.getElementById("addButton");
//   addButton.addEventListener("click", addText);
// });

// btnAdd.addEventListener("click", openPopup);
// document.addEventListener("DOMContentLoaded", function () {
//   let addButton = document.getElementById("addButton");
//   addButton.addEventListener("click", addText);
// });
// Função que insere o nome no titulo do kanban //

// let btnedit = document.getElementById("btnedit")
// btnedit.addEventListener("click", editarNome)

// function editarNome() {
//   let titulo = document.getElementById("tituloEdit")
//   let novoTitulo = prompt("Insira o nome do seu kanban")

//   if (novoTitulo && novoTitulo.trim() !== '') {
//     titulo.innerHTML = novoTitulo
//   } else {
//     alert("O titulo não pode ficar vazio!!")
//   }
// }
//Mudando texto card
function newText() {
  const changeText = document.getElementById("test")
  const novoTitulo = prompt('Informe o novo Título')
  changeText.innerHTML = novoTitulo;
  console.log('Clicou');
}

const element = document.getElementById("test");
element.addEventListener("click", newText);









