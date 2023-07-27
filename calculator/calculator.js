let num1;
let num2;

function getNums(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
}
function doAddition() {
    getNums();
    let result = num1 + num2;
    document.getElementById("result").innerHTML=result;

}

function doSubtraction(){
    getNums();
    let result = num1 - num2;
    document.getElementById("result").innerHTML=result;

}
function doMultiplication(){
    getNums();
    let result = num1 * num2;
    document.getElementById("result").innerHTML=result;

}

function doDivision(){
    getNums();
    let result = num1 / num2;
    document.getElementById("result").innerHTML=result;

}

function doPower(){
    getNums();
    let result = num1 ** num2;
    document.getElementById("result").innerHTML=result;

}

