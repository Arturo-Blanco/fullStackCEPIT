"use strict";

let btnEnviar=document.querySelector('.btnSend');
btnEnviar.addEventListener('click', ()=> {
validateName();
validateSurname();
validateMail();
validateQuery();
})

function validateName() {
let inpName=document.querySelector('.name').value;
    if((inpName!='')&&(inpName.length>=3)&&(inpName.length<=20)&&(inpName!='undefined')){
        console.log('El nombre es: '+inpName);
    } else {
        alert('Ingrese un nombre valido');
    }
}
function validateSurname() {
let inpSurname=document.querySelector('.surname').value;
    if((inpSurname!='')&&(inpSurname.length>=3)&&(inpSurname.length<=20)&&(inpSurname!='undefined')){
        console.log('El apellido es: '+inpSurname);
    } else {
        alert('Ingrese un apellido valido');
    }
}
function validateMail() {
let inpMail=document.querySelector('.mail').value;
    if((inpMail!='')){ 
        console.log('El mail es: '+inpMail);
    } else {
        alert('Ingrese un mail valido');
    }
}
function validateQuery() {
let inpQuery=document.querySelector('.query').value;
    if(inpQuery!=''){
        console.log('La consulta es: '+inpQuery);
    } else {
        alert('Ingrese una consulta');
    }
}







