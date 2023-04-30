
/*   Desestructuracion  */

const PRONOSTICO_LOCAL = {
    "ayer" : {
        minima: 5,
        maxima: 14
    } ,
    "hoy": {
        minima: 7,
        maxima: 15
    } ,
    "mañana": {
        minima: 3,
        maxima: 12
    }
} ;

/* Se accede mediante notacion de puntos */

const minimaHoy=PRONOSTICO_LOCAL.hoy.minima;
const maximaHoy=PRONOSTICO_LOCAL.hoy.maxima;
//console.log(minimaHoy);
//console.log(maximaHoy);

/* sintaxis Desestructuracion  */

const {hoy: {minima: minimaHoyDes , maxima: maximaHoyDes }} = PRONOSTICO_LOCAL;

//console.log(minimaHoyDes);
//console.log(maximaHoyDes);

/* Remover los 3 primeros elementos de un arreglo. Los elementos del arreglo se "saltean" usando las comillas correspondiente a la cantidad de elementos que deseemos saltar */

const arregloInicial = [1, 2, 3, 4, 5 ,6,7,8];

function removerTresPrimerosElementos(arreglo) {
const [ , , , ...nuevoArreglo] = arreglo;
return nuevoArreglo;
}
const arregloFinal = removerTresPrimerosElementos(arregloInicial);
//console.log(arregloFinal);

/* Desestructuracion para pasar objeto como argumento   */

var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Espanola",
    ubicacion: "Espana"
};
/* Ejemplo de descomposicion normal tomando objeto completo */
const actualizarPerfil= (informacionPerfil) => {
    const {nombre,edad,nacionalidad,ubicacion} = informacionPerfil;
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};

//actualizarPerfil(nuevoPerfilCliente);

/* pasando los parametros como variables individuales de un objeto --- No es necesario pasar todos los parametros --- */
const actualizarPerfil2= ({nombre,edad,nacionalidad,ubicacion}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};
//actualizarPerfil2(nuevoPerfilCliente);

/* Otro ejemplo de desestructuracion */

const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -8.75,
    promedio: 35.85
}    

/* Calculando la mitad de manera tradicional */

const mitad = (e) => (e.max + e.min) / 2;

console.log(mitad(estadisticas));

/* Calculando la mitad con metodo de desestructuracion */

const mitadDes=({max , min}) => (max + min) / 2;

console.log(mitadDes(estadisticas));