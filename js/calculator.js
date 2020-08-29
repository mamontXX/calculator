const inputCalc = document.querySelector(".account");
const resultCalc = document.querySelector('.result');

function input(i){
    inputCalc.value = inputCalc.value + i;
};

function result(){
    if(eval(inputCalc.value)==undefined){
        inputCalc.value= '0,00';
        resultCalc.value= '0,00';
    }
    inputCalc.value= eval(inputCalc.value);
    resultCalc.value= eval(inputCalc.value);
};

function backspase(){
    inputCalc.value= inputCalc.value.substring(0,inputCalc.value.length-1);
};

function reset(){
    inputCalc.value = '';
    resultCalc.value = 0,00;
};
