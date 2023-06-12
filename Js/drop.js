const draggableElement = document.getElementById("myDraggableElement");

draggableElement.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", draggableElement.id);
});

 // Enquando a DIV estiver endo arrastada vai ativar a opacity
 for (const dropZone of document.querySelectorAll(".drop-zone")){
   dropZone.addEventListener("dragover", e => {
     e.preventDefault();
     dropZone.classList.add("drop-zone--over");
   });
 
 //Quando a DIV deixar o dropZone atual, deixar de ficar opaco
 dropZone.addEventListener("dragleave", e => {
   dropZone.classList.remove("drop-zone--over");
 });

 //Quando o elemento arrastável é solto na zona de soltar
 dropZone.addEventListener("drop", e => {
   e.preventDefault();
   
   //Pegamos o texto que esta dentro da DIV a ser arrastada
   const droppedElementId = e.dataTransfer.getData("text/plain");
   //Capturando os dados da const acima
   const droppedElement = document.getElementById(droppedElementId);
   dropZone.style.backgroun = 'red'
   dropZone.appendChild(droppedElement);
   //Quando a DIV deixar o drpZone volta a ficar com a cor nomal
   dropZone.classList.remove("drop-zone--over");
 })
 }