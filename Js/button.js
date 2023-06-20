function openPopup() {
    let popup = document.getElementById("popup");
    popup.style.display = "block";
  }

import { dragstart, drag, dragend, drop } from "./dropAndDrag.js";

function addText() {
    let inputText = document.getElementById("inputText").value;
  
    if (inputText) {
      const cardToClone = cloneCardContainer.querySelector(".card");
      
      if (cardToClone) {
        const cloneCard = cardToClone.cloneNode(true);
        const titleElement = cloneCard.querySelector("h2");
        titleElement.textContent = inputText;
        cloneCardContainer.appendChild(cloneCard);
  
        cloneCard.addEventListener("dragstart", dragstart);
        cloneCard.addEventListener("drag", drag);
        cloneCard.addEventListener("dragend", dragend);
        cloneCard.addEventListener("drop", drop);
      }
    }

    let popup = document.getElementById("popup");
    popup.style.display = "none";

    document.getElementById("inputText").value = "";
  }
  
  const btnAdd = document.querySelector("#btnAdd");
  const cloneCardContainer = document.querySelector("#cloneCard");
  
  btnAdd.addEventListener("click", openPopup);
  
  document.addEventListener("DOMContentLoaded", function() {
    let addButton = document.getElementById("addButton");
  
    addButton.addEventListener("click", addText);
  });

// const btnAdd = document.querySelector("#btnAdd");
// const cloneCardContainer = document.querySelector("#cloneCard");

// btnAdd.addEventListener("click", function() {
//     const cardToClone = cloneCardContainer.querySelector(".card");

//     // Verificar se a coluna "A Fazer" possui um card para clonar
//     if (cardToClone) {
//         // Exibir um prompt para o usuário inserir o título
//         const title = prompt("Digite o título:");

//         // Verificar se o usuário inseriu um título
//         if (title) {
//             const cloneCard = cardToClone.cloneNode(true);

//             // Atualizar o título do card clonado com o valor inserido pelo usuário
//             const titleElement = cloneCard.querySelector("h2");
//             titleElement.textContent = title;

//             cloneCardContainer.appendChild(cloneCard);

//             // Adicionar ouvintes de eventos de arrastar e soltar nos cards clonados
//             cloneCard.addEventListener("dragstart", dragstart);
//             cloneCard.addEventListener("drag", drag);
//             cloneCard.addEventListener("dragend", dragend);
//             cloneCard.addEventListener("drop", drop);
//         }
//     }
// });

// function openPopup() {
//     var popup = document.getElementById("popup");
//     popup.style.display = "block";
//   }
  
//   function addText() {
//     var inputText = document.getElementById("inputText").value;
//     console.log("Texto inserido: " + inputText);
//     var popup = document.getElementById("popup");
//     popup.style.display = "none";
//   }
  
//   document.addEventListener("DOMContentLoaded", function() {
//     var openButton = document.getElementById("openButton");
//     var addButton = document.getElementById("addButton");
  
//     openButton.addEventListener("click", openPopup);
//     addButton.addEventListener("click", addText);
//   });
  

// const btnAdd = document.getElementById("btnAdd")
// btnAdd.addEventListener("click", addNew)

// function addNew(){
//     const newDiv = document.createElement("div")
//     console.log("add")
//     newDiv.classList.add("card")
//     newDiv.classList.add("afazer")
//     document.getElementById("mainCardStatus").appendChild(newDiv)

//     const statusRed = document.createElement("div")
//     statusRed.classList.add("status")
//     statusRed.classList.add("red")
//     document.getElementById("afazer").appendChild(statusRed)

//     const contentAfazer = document.createElement("div")
//     contentAfazer.classList.add("content")
//     contentAfazer.classList.add("afazer")
//     document.getElementById("statusRed").appendChild(contentAfazer)

//     const newTitulo = document.createElement("h2")
//     const textoH2 = document.createTextNode("Título A fazer")   
//     newTitulo.appendChild(textoH2)

//     document.getElementById("").appendChild(newTitulo)
  
// }

// const btnAdd = document.querySelector("#btnAdd")
// console.log(btnAdd)

// btnAdd.addEventListener("click", function(){
//     const parent = this.firstChild
//     console.log(parent)
// })
