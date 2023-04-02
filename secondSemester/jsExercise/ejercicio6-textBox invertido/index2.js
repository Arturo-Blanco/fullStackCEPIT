let texto='hola';
let textoInvertido= "";


let btnStart=document.querySelector('.btnInvert');
btnStart.addEventListener('click', () => {
invertir();
console.log(textoInvertido)

});
function invertir() {
for(let i = texto.length-1 ; i >= 0 ; --i) {
    textoInvertido+= texto[i]
}
return textoInvertido;
}