
document.addEventListener("DOMContentLoaded", () =>{
    const fil = 4;
    const col = 4;
    const gridContainer = document.getElementById("grid");
    
    //creamos la cuadricula
    
    for(let i =0; i< fil * col; i++){
        const cel = document.createElement("div");
        cel.classList.add("cel");
        cel.dataset.estado ="apagado";
    
        //agregamos un evento por celda
        cel.addEventListener("click",() =>{
            if(cel.dataset.estado ==="apagado"){
                cel.dataset.estado ="encendido";
                cel.classList.add("on");
            }else{
                cel.dataset.estado ="apagado";
                cel.classList.remove("on");
            }
        });
    
        gridContainer.appendChild(cel);
    }
    
    const botonEncenderTodo = document.getElementById("encenderTodo");
    const botonApagarTodo = document.getElementById("apagarTodo");
    const botonAlternar = document.getElementById("alternar");
    
    botonEncenderTodo.addEventListener("click", () => {
        document.querySelectorAll(".cel").forEach(cel => {
          cel.dataset.estado = 'encendido';
          cel.classList.add('on');
        });
      });
    
    botonApagarTodo.addEventListener('click', () => {
        document.querySelectorAll('.cel').forEach(cel => {
          cel.dataset.estado = 'apagado';
          cel.classList.remove('on');
        });
      });
    
let modoPares = true; // true: encender pares, false: encender impares

botonAlternar.addEventListener('click', () => {
    const celdas = document.querySelectorAll('.cel');

    celdas.forEach((celda, index) => {
        if (modoPares) {
            // Encender pares, apagar impares
            if (index % 2 === 0) {
                celda.dataset.estado = 'encendido';
                celda.classList.add('on');
            } else {
                celda.dataset.estado = 'apagado';
                celda.classList.remove('on');
            }
        } else {
            // Encender impares, apagar pares
            if (index % 2 !== 0) {
                celda.dataset.estado = 'encendido';
                celda.classList.add('on');
            } else {
                celda.dataset.estado = 'apagado';
                celda.classList.remove('on');
            }
        }
    });

    modoPares = !modoPares; // Cambiar el modo para la próxima vez
});



})
