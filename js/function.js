document.getElementById("botonCalcular").addEventListener("click", function(){

    //obtenemos valores de los imputs.

    const totalCuenta = parseFloat(document.getElementById("cuenta").value);
    const porcentajePropina = parseFloat(document.getElementById("propina").value);
    const numPersonas = parseInt(document.getElementById("personas").value);

    //variables para los resultados y errores.

    const error = document.getElementById("error");
    const propinaSpan = document.getElementById("totalPropina");
    const totalPagar = document.getElementById("totalPagar");
    const porPersona = document.getElementById("porPersona");

    // Limpiar mensajes anteriores
    error.textContent = '';
    resultado.style.display = 'none';

    //calculos

    const propina = (totalCuenta * porcentajePropina / 100);
    const total = (propina + totalCuenta);
    const totalPorPersona = (total / numPersonas);
    
    propinaSpan.textContent = propina.toFixed(2);
    totalPagar.textContent = total.toFixed(2);
    porPersona.textContent = totalPorPersona;

    //para mostrar el div resultado
    resultado.style.display = 'block';
  
    //Validacion.

    if(isNaN(totalCuenta) || totalCuenta<=0){
        error.textContent ="Por favor, introduzca una cantidad mayor a cero.";
        return;
    }
    if(isNaN(porcentajePropina)|| porcentajePropina < 0){
        error.textContent ="Por Favor, introduzca un valor de porcentaje valido."
    }
    if(isNaN(numPersonas) || numPersonas < 2){
        error.textContent ="Por Favor, El numero de personas debe ser al menos de 2."
    }
})