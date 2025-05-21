const preguntas=[
    {
        preguntas: "¿Quien tiene dientes pero no muerde?",
        opciones: ["Un abuelo", "Un bebe", "Dracula", "Mosquito", "Peine"],
        respuesta: "Peine"
    },
    {
        preguntas:"¿Quien tiene cuello pero no cabeza?",
        opciones:["Un huevo","Un zapato","Una botella","Un armario","Una muñeca"],
        respuesta:"Una Botella"
    },
    {
        preguntas:"¿Que es negro, blanco y rojo y no se puede ver?",
        opciones:["Un arbol","Un hueso","Un gato","Una Mariposa","Un Ordenador"],
        respuesta:"Un gato"
    },
    {
        preguntas:"¿Que es lo que entra duro y grande y sale pequeño y blando?",
        opciones:["Un Chicle","Una panacota","Un melón","Una flauta","Una pelota"],
        respuesta:"Un chicle"
    },
    {
        preguntas:"¿Que tiene que ser roto para que funcione?",
        opciones:["Un Tv","Un Huevo","Una servilleta","Una neurona","Un Raton"],
        respuesta:"Un Huevo"
    },

];

let preguntaActualId =0;
let puntuacion = 0;

const preguntaTexto = document.getElementById("preguntaTexto");
const opcionesContainer = document.getElementById("opcionesContainer");
const botonSiguiente = document.getElementById("botonSiguiente");
const error = document.getElementById("error");
const examen2 = document.getElementById("examen2");
const resultado2 = document.getElementById("resultado2");

//funcion para cargar las preguntas.

function cargarPergunta(){
    error.textContent = "";

    opcionesContainer.innerHTML="";
    const preguntaActual = preguntas[preguntaActualId];
    preguntaTexto.textContent = preguntaActual.preguntas;

// con esto Creamos las opciones
    preguntaActual.opciones.forEach((opciones, index)=>{
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "respuesta";
        input.value = opciones;
        label.appendChild(input);
        label.appendChild(document.createTextNode(opciones));
        opcionesContainer.appendChild(label);
    });
}

//validar respuesta

function validarRespuesta(){
    const seleccionarOpcion = document.querySelector("input[name='respuesta']:checked");
    return seleccionarOpcion ? seleccionarOpcion.value : null;
}

//boton siguiente

botonSiguiente.addEventListener("click",() =>{
    const respuesta = validarRespuesta();
    if(respuesta!== null){
        if (respuesta === preguntas[preguntaActualId].respuesta){
            puntuacion++;
        }
        preguntaActualId++;
        if(preguntaActualId < preguntas.length){
            cargarPergunta();
        }else{
            mostrarResultado();
        }
    }else{
        alert("Por favor, seleccionar una respuesta.")
    }
})

// mostrar Resultados

function mostrarResultado(){
    examen2.style.display="none";
    resultado2.style.display="block";
    resultado2.innerHTML = 
    '<h2> !Fin del juego!</h2>'+ '<br>' +
    '<p>Tu puntuación:'+ puntuacion+' de '+ preguntas.length + '.</p>';
}

cargarPergunta();