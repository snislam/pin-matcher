function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinstr = pin + '';
    if (pinstr.length == 4) {
        document.getElementById('display-pin').value = pinstr;
    } else {
        return generatePin();
    }
};
document.getElementById('generate-pin').addEventListener('click', function () {
    generatePin();
});


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('display-number').value;
    if (isNaN(number)) {
        if (number == 'C'){
            document.getElementById('display-number').value = '';
        }
    } else {
        const newNumber = calcInput + number;
        document.getElementById('display-number').value = newNumber;
    }
})

// submit button
document.getElementById('submit-btn').addEventListener('click', function () {
    const pinField = document.getElementById('display-pin');
    const pin = pinField.value;
    const typedPinField = document.getElementById('display-number');
    const typedPin = typedPinField.value;
    if (pin == typedPin) {
        document.getElementById('matched').style.display = 'block';
        document.getElementById('mis-matched').style.display = 'none';
    } else if (pin != typedPin) {
        document.getElementById('matched').style.display = 'none';
        document.getElementById('mis-matched').style.display = 'block';
    }
})