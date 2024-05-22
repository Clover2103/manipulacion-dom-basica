// JS de interacion de los inputs

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn_calcular');
const imprimir = document.querySelector('#imprimir');

btn.addEventListener('click', onClickBtn);

function onClickBtn() {
    const suma = input1.value + input2.value;
    imprimir.innerText = "Resultado: " + suma;
}
