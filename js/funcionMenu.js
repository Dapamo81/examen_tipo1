document.getElementById("botonExamen1").addEventListener("click", function(){
    examen1.style.display = "block";
    examen2.style.display = "none";
    examen3.style.display = "none";
})


document.getElementById("botonExamen2").addEventListener("click", function(){
    examen1.style.display = "none";
    examen2.style.display = "block";
    examen3.style.display = "none";
})

document.getElementById("botonExamen3").addEventListener("click", function(){
    examen1.style.display = "none";
    examen2.style.display = "none";
    examen3.style.display = "block";
})