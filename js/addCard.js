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

let tarefaId = tarefas.length > 0 ? tarefas[tarefas.length - 1].id : 0;


const btnAdd = document.getElementById("inputText");
btnAdd.addEventListener('click', () => criarTarefa())

function criarTarefa(status) {
  const tarefaTitulo = prompt('digite o titulo da tarefa')
  if (tarefaTitulo) {
    const tarefa = {
      id: tarefaId, 
      titulo: tarefaTitulo, 
      status: "afazer" 
    };
    tarefas.push(tarefa);
    saveTarefas()
    renderTarefas()
  }
}

renderTarefas()

function deteleTarefas(id){
  const confirmacao = confirm('Tem certeza que deseja excluir esta tarefa ?')
  if(confirmacao) {
    tarefas = tarefas.filter(tarefa => tarefas.id !== id);
    saveTarefas()
    renderTarefas()
  }
}

function saveTarefas(){
  localStorage.setItem('KanbanTarefas', JSON.stringify(tarefas))
}



const afazerColum = document.getElementById("afazer")
const execucaoColum = document.getElementById("execucao")
const revisaoColum = document.getElementById("revisao")
const finalizacaoColum = document.getElementById("finalizacao")

function renderTarefas(){
  let kanbanContainer = document.getElementById("dropzone");
  kanbanContainer.innerHTML = ''

  tarefas.forEach(tarefa => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", tarefa.status);
    cardElement.id = "afazer";
    cardElement.draggable = true;

    const divCard = document.createElement("div");
    divCard.classList.add("status", "red");
    divCard.id = "statusRed";

    const cardElementText = document.createElement("p");
    cardElementText.id = "textoTitulo";
    cardElementText.innerHTML = tarefa.titulo

    divCard.appendChild(cardElementText);
    cardElement.appendChild(divCard);
    kanbanContainer.appendChild(cardElement); 

    cardElement.addEventListener("dragstart", dragstart);
    cardElement.addEventListener("drag", drag);
    cardElement.addEventListener("dragend", dragend);
    cardElement.addEventListener("drop", drop);

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btnDelete")
    deleteButton.innerHTML = `Apagar`;
    deleteButton.addEventListener("click", () => deteleTarefas(tarefa.id))

    switch(tarefa.status) {
      case "afazer":
        afazerColum.appendChild(divCard)
        break;
      case "execucao":
        execucaoColum.appendChild(divCard)
        break;
      case "revisao":
        revisaoColum.appendChild(divCard)
        break;
      case "finalizacao":
        finalizacaoColum.appendChild(divCard)
        break;
      default:
        break;
    }

  })
}
