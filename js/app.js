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
})