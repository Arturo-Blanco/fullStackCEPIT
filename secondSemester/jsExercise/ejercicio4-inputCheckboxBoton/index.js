let texto1=document.querySelector('.inpText');
let btnChequear=document.querySelector('.btnCheck');
let caja=document.querySelector('body');

btnChequear.addEventListener('click',() => {
    CheckChekbox();
}
)
function CheckChekbox() {
    if(document.querySelector('.checkbox').checked) {
    let saludo1=document.createElement('h1'); saludo1.innerHTML='Hola, este es un saludo H1, ya que ah seleccionado el checkbox.';
    caja.appendChild(saludo1);
    }
    else {
        let saludo2=document.createElement('h2'); saludo2.innerHTML='Hola, este es un saludo H2, ya que no ah seleccionado el checkbox.';
        caja.appendChild(saludo2);
    }
}