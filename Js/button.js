
const btnAdd = document.querySelector("#btnAdd");
const cloneCardContainer = document.querySelector("#cloneCard");

btnAdd.addEventListener("click", function() {
    const cardToClone = cloneCardContainer.querySelector(".card");
    const cloneCard = cardToClone.cloneNode(true);
    cloneCardContainer.appendChild(cloneCard);
});





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
