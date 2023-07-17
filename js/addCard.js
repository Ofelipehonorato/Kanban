import { dragstart, drag, dragend, drop } from "./dropAndDrag.js";

const btnPopUp = document.querySelector("#btnAdd");
btnPopUp.addEventListener("click", openPopup); 

function openPopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "block";
  const input = document.getElementById("inputText")
  input.value = "";
};

const btnClosePopUp = document.querySelector("#closePopup");
btnClosePopUp.addEventListener("click", closePopup);

function closePopup() {
  let popup = document.getElementById("popup");
  popup.style.display = "none";
};

// Verifica se tem tarefas no localStorage ou cria um array vazio
let tarefas = JSON.parse(localStorage.getItem('KanbanTarefas')) || []
// let tarefaStatus = JSON.parse(localStorage.getItem('tarefaStatus')) || []

let tarefaId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id : 0;

const btnAdd = document.getElementById("addButton");
btnAdd.addEventListener('click', () => criarTarefa())

function criarTarefa({id, titulo, status}) {
const tituloCard = document.getElementById("inputText").value
  const tarefaTitulo = tituloCard
  if (tarefaTitulo) {
    const tarefa = {
      id: ++tarefaId, 
      titulo: tarefaTitulo, 
      status: "afazer"
    };
    tarefas.push(tarefa);
    saveTarefas()
    renderTarefas()
    return tarefas
  }
  
  closePopup()
}

renderTarefas()


const { status } = tarefas
console.log(status)

// let status = tarefas.status
// function atualizarTarefa(){
// }

function deteleTarefas(id){
  const confirmacao = confirm('Tem certeza que deseja excluir esta tarefa ?')
  if(confirmacao) {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    saveTarefas()
    renderTarefas()
  }
}

function saveTarefas(){
  localStorage.setItem('KanbanTarefas', JSON.stringify(tarefas))
  // localStorage.setItem('tarefaStatus', JSON.stringify(status))
}


function renderTarefas(){
  let kanbanContainer = document.getElementById("dropzone");
  kanbanContainer.innerHTML = ''

  tarefas.forEach(tarefa => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "red");
    cardElement.id = "afazer";
    cardElement.draggable = true;

    const divCard = document.createElement("div");
    divCard.classList.add("status", "red");
    divCard.id = "statusRed";

    const cardElementText = document.createElement("p");
    cardElementText.id = "textoTitulo";
    cardElementText.innerHTML = tarefa.titulo    

    cardElement.addEventListener("dragstart", dragstart);
    cardElement.addEventListener("drag", drag);
    cardElement.addEventListener("dragend", dragend);
    cardElement.addEventListener("drop", drop);

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btnDelete")
    deleteButton.innerHTML = "Apagar";
    deleteButton.addEventListener("click", () => deteleTarefas(tarefa.id))
    
    divCard.appendChild(cardElementText);
    divCard.appendChild(deleteButton);
    cardElement.appendChild(divCard);
    kanbanContainer.appendChild(cardElement); 

    const afazer = document.getElementById("red")
    const execucao = document.getElementById("blue")
    const revisao = document.getElementById("darkblue")
    const finalizcao = document.getElementById("red")
    
    // switch(tarefa.status) {
    //   case "execucao":
    //     divCard.classList.add("status", "blue");
    //     break;
    //   case "revisao":
    //     divCard.classList.add("status", "darkblue");
    //     break;
    //   case "finalizacao":
    //     divCard.classList.add("status", "lightblue");
    //     break;
    //   default:
    //     break;
    // }
  })
}


