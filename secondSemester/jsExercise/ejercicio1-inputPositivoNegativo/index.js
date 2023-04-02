let valor1=document.querySelector('.valor1');
let valor2=document.querySelector('.valor2');
let botonCarga=document.querySelector('.btnEnviar');

botonCarga.addEventListener('click', () => {
    if(valor1.value<0) {
        alert('Ah ingresado un valor negativo en el campo 1');
    } else if(valor1.value>0){
        alert('Ah ingresado un valor positivo en el campo 1');
    } else if(valor2.value<0) {
        alert('Ah ingresado un valor negativo en el campo 2');
    } else if(valor2.value > 0){
        alert('Ah ingresado un valor positivo en el campo 2');
    } else {
        document.querySelector('.textoIngresado').innerHTML='Texto ingresado en campo 1:'+ valor1.value + '; texto ingresado en campo 2:'+valor2.value 
    }
});

