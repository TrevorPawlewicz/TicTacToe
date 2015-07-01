
var totalDiv = document.getElementById("screen");
totalDiv.innerHTML = "";
var opValue;
var buttons = document.querySelectorAll('a');
var inputValue1 = 0;
var inputValue2 = 0;
var operatorSelected = false;
var decimalAdded = false;
var displayOutput = 0;

console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
    // receives the event itself as an argument.
    // Traditionally it is stored in the variable e — though you can use any name you like:
    buttons[i].onclick = function(event) {
        var input = document.querySelector("#screen");
        var inputValue = input.innerHTML;
        var btnValue = this.innerHTML;

        console.log("input = " + input);
        console.log("inputValue = " + inputValue);
        console.log("btnValue = " + btnValue);

        if ((btnValue === "C") || (btnValue === "AC")) {
			input.innerHTML = "";
			operatorSelected = false;
            decimalAdded = false;
        } else if ((btnValue === "+") || (btnValue === "-") || (btnValue === "*") || (btnValue === "/")){
            opValue = btnValue; // load button operation into opValue
            operatorSelected = true;
            decimalAdded = false;
            input.innerHTML = ""; // clear screen for more numbers
            console.log("a) opValue = " + opValue);
        } else if (btnValue === "=") {
            decimalAdded = false;
            console.log("b) opValue = " + opValue);
            switch(opValue) {
            case "+":
                displayOutput = (inputValue1 + inputValue2);
                totalDiv.innerHTML = displayOutput;
                break;
            case "-":
                displayOutput = (inputValue1 - inputValue2);
                totalDiv.innerHTML = displayOutput;
                break;
            case "*":
                displayOutput = (inputValue1 * inputValue2);
                totalDiv.innerHTML = displayOutput;
                break;
            case "/":
                displayOutput = (inputValue1 / inputValue2);
                totalDiv.innerHTML = displayOutput;
                break;
            default:
                console.log("switch end");
            }
        } else if(btnValue === ".") {
			if(!decimalAdded) {
				input.innerHTML += btnValue;
				decimalAdded = true;
			}
        } else {
            input.innerHTML += btnValue;

            if (!isNaN(input.innerHTML)) {
                if (operatorSelected === true) {
                    inputValue2 = parseFloat(input.innerHTML);
                } else {
                    inputValue1 = parseFloat(input.innerHTML);
                }
            }
            console.log("inputValue1 = " + inputValue1);
            console.log("inputValue2 = " + inputValue2);
		}
        event.preventDefault();
    }
};
