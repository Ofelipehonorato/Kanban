let btnedit = document.getElementById("btnedit")
btnedit.addEventListener("click", editarNome)

function editarNome() {
  let titulo = document.getElementById("tituloEdit")
  let novoTitulo = prompt("Insira o nome do seu kanban")

  if (novoTitulo && novoTitulo.trim() !== '') {
    titulo.innerHTML = novoTitulo
  } else {
    alert("O titulo não pode ficar vazio!!")
  }
}