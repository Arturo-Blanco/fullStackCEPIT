/* Tenemos un objeto que representa parte de una coleccion
de albumes musicales.

Cada album tiene un numero de identificacion unico (id)
asociado a otras propiedades.

No todos los albumes tienen la informacion completa.

*/

const { log } = require("console");

const recordCollection= {
    4373 : {
        title : "Bee Gees Greatest Hits",
        artist: "Bee Gees",
        songs: ["Stayin Alive" , "How deep is your Love"],
    } ,
    2556: {
        title: "ABBA Gold",
        artist: "ABBA",
    }
}

/*  Define una funcion actualizarDiscos que tome los siguientes parametros:
- discos (el objeto que representa la colección de discos).

- id.

- propiedad ("artista" o “canciones").

- valor.

Tu meta es completar la función implementando las siguientes reglas
para modificar el objeto pasado a la funciodn:

- si "valor" es una cadena vacia, elimina la propiedad del album correspondiente. 

- si "propiedad" es igual a la cadena de caracteres "canciones" pero
el album no tiene una propiedad llamada "canciones", crea un arreglo
vacio y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres “canciones” y
"valor" no es una cadena vacia, agrega "valor" al final del arreglo
de canciones del album correspondiente.

- Si "valor" no es una cadena vacia y "propiedad" no es igual a
“canciones”, asigna el valor del parametro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.

*/

function updateDisks(discs, id, property, value) {
    if(value ===" ") {
        delete discs[id][property];
    } else if (property === "songs"){
        discs[id][property] = discs[id][property] || [];  // Si el metodo no es undefined se asigna el nuevo valor al metodo, sino se asigna un arreglo vacio de respaldo
        discs[id][property].push(value);
    } else {
        discs[id][property] = value;
    }
}
console.log(recordCollection[2556].songs);

updateDisks(recordCollection,2556,"songs","Mamma mia");

console.log(recordCollection[2556].songs);


