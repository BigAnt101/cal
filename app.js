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
function evaluate(e) {
    const key = e.target.dataset.key;
    const lastchar=
    operation[operation.length-1];

    if (key === "=" && operations.indexof(lastchar)!==-1){
        operation=operation.slice(0,-10);
    }

    if(operation.length === 0){
        answer ="";
        result.innerHTML=answer;
        return;
    }
    
 try{
        if(operation[0]==="0" && operation[1] !=="." && operation.length > 1 ) 
        operation = operation.slice(1);
     
const final = operation.replace(/x/g,"*").replace(///g,"/");
    answer= +(eval(final)).toFixed(5));

    if(key === "="){
        decimalAdded= false
        operation= '${answer}';
        answer= "";
        input.innerHTML= operation;
        result.innerHTML=answer;
        return;
    }

    result.innerHTML= answer;

} catch (e){
    if(keys==="="){
        decimalAdded= false;
        input.innerHTML= '<span class ="error">${operation}</span>';
        result.innerHTML= '<spanclass="error">Bad Expression</span>';

    }
    console.log(e);
  }
}

function clearinput (e){
    if(e.ctrlkey){
        operation= "";
        answer= "";
        input.innerHTML= operation;
        result.innerHTML= answer;
        rerturn;
    }
    operation= operation.slice(0,-1);
    input.innerHTML= operation;
}
deleteBtn.addEventListener("click",clearinput);
keys.forEach(key=> {keyaddEventlistener("click",handlekeyPress);
key.addEventListener("click",evaluate);
});
    