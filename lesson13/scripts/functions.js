// function sayHello() {
//     return "Hello, World";
// }   

// alert(sayHello());


function calculator() {
    var num1 = parseFloat(prompt("Enter first number: ")); // example "20" => 20
    var operator = prompt("Enter operator (+, -, *, /): ");
    var num2 = parseFloat(prompt("Enter second number: ")); // example "15" => 15
    
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error! Division by zero.";
        }
    } else {
        return "Invalid operator";
    }
}    

alert("Result: " + calculator());
alert("Result: " + calculator());

