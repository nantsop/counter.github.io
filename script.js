const increaseButton = document.querySelector('.counter__button--increase');
const counterValueEl = document.querySelector('.counter__value'); //κανω select το value 0 για να το αθξησω
const decreaseButton = document.querySelector('.counter__button--decrease') 
const resetButton = document.querySelector('.counter__reset-button');
const changeTheText = document.querySelector('.counter__title')
const counterEL = document.querySelector('.counter')

resetButton.addEventListener('click', function() {
    
    //set current element to zero
    counterValueEl.textContent = 0;
    changeTheText.textContent = "Fancy Counter";
    counterEL.style.backgroundColor = '#bef227';
});

increaseButton.addEventListener('click', function(){
    //get the current value
    const cuttentValue = counterValueEl.textContent; //gives you a string

    //convert value to a number
    const currentValueAsNumber = +cuttentValue;
    //increment by one
    let newValue = currentValueAsNumber + 1;

    if(newValue >= 5){
        newValue = 5;
        changeTheText.textContent = "Your limit is in max!";
        counterEL.style.backgroundColor = 'red';
    }
    
    //set current element in a new value
    counterValueEl.textContent = newValue;

});

decreaseButton.addEventListener('click', function(){
     //get the current value
     const cuttentValue = counterValueEl.textContent; //gives you a string

     //convert value to a number
     const currentValueAsNumber = +cuttentValue;
     //increment by one
     let newValue = currentValueAsNumber-1;

     if(newValue < 5){
        changeTheText.textContent = "Fancy Counter";
        counterEL.style.backgroundColor = '#bef227';
    }

     //check if new value is less than zero
     if (newValue < 0){
        newValue = 0;
     }
    
     //set current element in a new value
     counterValueEl.textContent = newValue;
});