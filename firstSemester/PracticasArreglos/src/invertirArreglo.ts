let dimensionArray: number = Number(prompt(`Ingrese la dimension del arreglo`));
let num: number[] = new Array(dimensionArray);
let i: number;
let reverse: number[] = [];

for (i = 0; i < num.length; i++) {
  num[i] = Number(prompt(`Ingrese numero de la posicion ${i + 1}`));
}
for (i = num.length - 1; i >= 0; i--) {
  reverse.push(num[i]);
}
console.log(`Los numeros del array son: ${num}`);
console.log(`Los numeros invertidos del array son: ${reverse}`);

// function mostrarVectorInvertido (v :number[]){
//   let vectorInvertido: number[]= new Array(v.length);
//   let i: number= 0 ;

//     for(let indiceInvertido : number = v.length-1; indiceInvertido >= 0 ; indiceInvertido-- ) {
//     vectorInvertido[i] = v[indiceInvertido];
//     i++
//   }
//     console.log(`El arreglo invertido es ${vectorInvertido}`)
//   }
//     mostrarVectorInvertido([1,2,3,4,5,6,7,8,9]);
