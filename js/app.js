
function createPin(){
    const randomNumber = Math.round(Math.random() * 10000);
    const randomNumberString = randomNumber + '';
    if(randomNumberString.length == 4){
        return randomNumber;
    }else{
        return createPin();
    }
}

function generatePin(){
    const pin = createPin();
    document.getElementById('showRandomPin').value = pin;
}