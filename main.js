function power() {
        let vari1 = document.getElementById('var1').value;
        let result = Math.pow(parseFloat(vari1), 2)
        document.getElementById("result").innerHTML = "Result: " + result;
    }

function roundNumber() {
    let vari1 = document.getElementById("var1").value;
    let result = Math.round(vari1);
    document.getElementById("result").innerHTML = "Rounded: " + result;
}

function squareRoot() {
    let vari1 = document.getElementById("var1").value;
    let result = Math.sqrt(vari1);
    document.getElementById("result").innerHTML = "Square Root: " + result;
}

function randomNumber() {
    let vari1 = document.getElementById('var1').value;
    let max = parseInt(vari1) || 100; // Default max = 100 if input is empty
    let result = Math.floor(Math.random() * max) + 1;
    document.getElementById("result").innerHTML = "Random Number (1–" + max + "): " + result;
}