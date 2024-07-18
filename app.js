"use strict"

const input =
document.querySelector(".input");
const result =
document.querySelector(".result");
const deleteBtn=
document.querySelector("delete");
const keys =
document.querySelectorAll(".bottom span ")

let operation ="";
let answer;
let decimalAdded=false

const operations=["+","-","x","/"];

function handleKeyPress(e){
    const key =e.target.dataset.key
    const lastchar=
    operation[operation.length-1]

    if(key ==="="){
        return;
    }
    if (key ==="." && decimalAdded){
        return;
    }
    if (operators.indexof(key)!==-1){
        decimalAdded = false;
    }
    if (operation.length === 0 && key === "-"){
        operation+= key;
        input.innerHTML = operation;
        return;
    }
    if(operation.length === 0 && operators.indexof(key)!==-1){
        input.innerHTML = operation;
        return;
    }
    if (operators.indexof(lastchar)!== -1 && operators.indexof(key)!==-1){
        operation=operation.replace(/.$/,key);
        input.innerHTM=operation;
        return;
    }

}
function evaluate(e){
    const key = e.target.dataset.key;
    const lastchar=
    operation[operation.length-1]

    if (key === "=" && operators.indexof(lastchar)!==-1){
        operation=operation.slice(0,-10);
    }

    if(operation.lenght === 0){
        answer ="";
        result.innerHTML=answer;
        return;
    }
    
 try{
        if(operation[0]==="0" && operation [1] !=="." && operation.lenght >1 )
        {operation = operation.slice(1)}
    
}