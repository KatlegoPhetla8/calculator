'use strict';

// MODEL

// Retrieving the display/ input and storing it into a variable and creating other variables to store values.
const theDisplay = document.getElementById('the-display');
const addition = document.getElementById('add-button');
const multiplicationButton = document.getElementById('multiply-button');
const backSpaceButton = document.getElementById('backspace-button');
const percentageButton = document.getElementById('percentage-button');
let buttonClicked = false;
const totalArray = [];
let sum = null;
let theTotal = 0;
let theNum = '';
let theNumberConverted;
let theBackSpaceValue;
let counterNum;
let operator = '';
let previousOperator;
let theValue ;
// VIEW

// Code for the AC button. It clears everything.
function acClearFunc (){
    theDisplay.value = '';
    theNum = '';
    totalArray[0] = null;
    sum = null;
    theTotal = 0;
    theNum = '';
    theNumberConverted = null;
    theBackSpaceValue = null;
    operator = '';
    previousOperator = null;
    theValue = null;

}

// Code for the backspace button, removing the last number.
function removeLastValue(){
    buttonClicked = true;
    console.log(buttonClicked);
    theValue = theDisplay.value;
    let theNewValue = theValue.toString().slice(0, -1);
    theValue = theNewValue;
    theDisplay.value = theNewValue;
    let newValueConverted = Number(theNewValue)
    theBackSpaceValue = newValueConverted;
    console.log(theNewValue, theBackSpaceValue);
}

//If removelastValue clicked function
function removeValueClicked(){
    if (buttonClicked === true){
        theNum = theBackSpaceValue.toString();
        theNumberConverted = Number(theNum);
        buttonClicked = false;
    }
}

// Code for when the numbers are pressed, it displays them on the display.
 function numClick (num){
    removeValueClicked();

        theNum = theNum + num;
        theNumberConverted = Number(theNum);
        theDisplay.value = theNumberConverted;
        console.log(theNumberConverted, theNum);
        counterNum = theNumberConverted;
        console.log(buttonClicked);
}

// CONTROL

// Percentage button on click function.
const percentageButtonClick = percentageButton.addEventListener('click', function(){
    removeValueClicked();

    theNumberConverted = theNumberConverted / 100;
})

// When the equal button is clicked the following code runs.
 function equalButton (){
    removeValueClicked();

    if (previousOperator === '×'){
        totalArray[0] = sum * theNumberConverted;
    } else if(previousOperator === '-'){
        totalArray[0] = sum - theNumberConverted; 
    } else if(previousOperator === '/'){
        totalArray[0] = sum / theNumberConverted;
    } else if(previousOperator === '+'){
        totalArray[0] = sum + theNumberConverted;
    }
    
    theDisplay.value = totalArray[0];
}

// Function that runs inside the operators when they are clicked.
function operatorRun (){
    if (sum === null){
 sum = theNumberConverted;
 theNumberConverted = 0;
 theNum = '0';
 console.log(sum);
} else {
 sum = totalArray[0];
 theNumberConverted = 0;
 theNum = '0';
 console.log(sum, totalArray);
}
}

// Function that runs when a operator is clicked with operatorRun() running inside the clicked operator.
function operatorClick (operator){
    switch(operator){
        case '×': {
            removeValueClicked();
            operatorRun();
            break;
        }

        case '-':{
            removeValueClicked();
            operatorRun ();
            break;
        }

        case '/':{
            removeValueClicked();
            operatorRun();
            break;
        }

        case '+':{
            removeValueClicked();
            operatorRun();
            break;
        }
    }
    previousOperator = operator;
};
