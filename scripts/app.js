
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click',function(event){
    // event.target
    const character = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(character)){
        if(character === 'C'){
            typedNumberField.value='';
        }
        else if(character === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + character;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin');
    const generatedPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedPin = typedNumberField.value;
    const pinSuccessMsg = document.getElementById('pin-success');
    const pinFailureMsg = document.getElementById('pin-failure');

    if(typedPin === generatedPin){
        pinSuccessMsg.style.display = 'block';
        pinFailureMsg.style.display = 'none';
    }
    else{
        pinFailureMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
});