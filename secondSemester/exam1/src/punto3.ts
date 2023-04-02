let mi: number = 1;
let ma: number = 100;
function x(mi: number, ma: number, cantNum: number): number {
  let resultado: number = 1;
  let numIngre: number;
  let num2: number[] = new Array(cantNum);
  let i: number = 0;
  while (i <= cantNum) {
    numIngre = Number(prompt("ingresa un numero"));
    if (numIngre >= mi && numIngre <= ma) {
      num2[cantNum] = numIngre;
      cantNum = cantNum - 1;
    }
  }
  console.log(num2);
  for (let index = 0; index < num2.length; index++) {
    resultado = resultado * num2[index];
  }
  console.log(resultado);
}
x(mi, ma, 3);
