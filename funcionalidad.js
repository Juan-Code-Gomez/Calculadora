//Variables
let texto = document.getElementById("salida");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");



//Funciones
const fnbn1 = () =>{
    texto.innerHTML+="1";
}

const fnbn2 = () =>{
    texto.innerHTML+="2";
}

const fnbn3 = ()=>{
    texto.innerHTML+="3";
}

const fnbn4 = ()=>{
    texto.innerHTML+="4";
}
const fnbn5 = ()=>{
    texto.innerHTML+="5";
}
const fnbn6 = ()=>{
    texto.innerHTML+="6";
}
const fnbn7 = ()=>{
    texto.innerHTML+="7";
}
const fnbn8 = ()=>{
    texto.innerHTML+="8";
}
const fnbn9 = ()=>{
    texto.innerHTML+="9";
}
const fnbn0 = ()=>{
    texto.innerHTML+="0";
}

//Eventos
btn1.onclick = function(){
    fnbn1();
}

btn2.onclick = function(){
    fnbn2();
}
btn3.onclick = function(){
    fnbn3();
}
btn4.onclick = function(){
    fnbn4();
}
btn5.onclick = function(){
    fnbn5();
}
btn6.onclick = function(){
    fnbn6();
}
btn7.onclick = function(){
    fnbn7();
}
btn8.onclick = function(){
    fnbn8();
}
btn9.onclick = function(){
    fnbn9();
}
btn0.onclick = function(){
    fnbn0();
}