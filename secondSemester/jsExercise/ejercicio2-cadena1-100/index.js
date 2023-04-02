let arrNumeros=[];
let contador= 0;
let botonCrear=document.addEventListener('click', () => {
    crearCadenaNumeros();
    document.querySelector('.numeros').innerHTML= arrNumeros;
});


function crearCadenaNumeros() {
    for(let i= 0; i < 100 ; i++) {
    contador=contador+1;
    arrNumeros[i]=contador;
    }
}