
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

document.getElementById('key').addEventListener('click', function(event){
    const currentKey = document.getElementById('showKey');
    if(event.target.innerText == 'C'){
        currentKey.value = '';
    }else if(event.target.innerText == '<'){
        const StrLength = currentKey.value.length;
        const newStr = currentKey.value.substring(0, StrLength - 1);
        currentKey.value = newStr;
    }else if(currentKey.value != ''){
        currentKey.value = currentKey.value + event.target.innerText;
    }else{
        currentKey.value = event.target.innerText;
    }
});
function matchPin(){
    const randomField = document.getElementById('showRandomPin');
    const keyField = document.getElementById('showKey');
    const randomNumber = parseInt(randomField.value);
    const keyNumber = parseInt(keyField.value);
    if(randomNumber == keyNumber){
        document.getElementById('match').style.display = 'block';
        document.getElementById('notMatch').style.display = 'none';
    }else{
        document.getElementById('notMatch').style.display = 'block';
        document.getElementById('match').style.display = 'none';
    }
}