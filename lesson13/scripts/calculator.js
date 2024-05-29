var num1 = parseFloat(prompt("Enter first number: ")); // example "20" => 20
var operator = prompt("Enter operator (+, -, *, /): ");
var num2 = parseFloat(prompt("Enter second number: ")); // example "15" => 15
var result; // ცვლადი მნიშვნელობის გარეშე

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error! Division by zero.";
    }
} else {
    result = "Invalid operator";
}

alert("Result: " + result);

