function calculator(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "sub":
            return a - b;
        case "div":
            return b !== 0 ? a / b : "Error: Division by zero";
        case "mul":
            return a * b;
        case "mod":
            return b !== 0 ? a % b : "Error: Division by zero";
        default:
            return "Invalid operation";
    }
}
console.log(calculator(10, 5, "add"));      
console.log(calculator(10, 5, "sub")); 
console.log(calculator(10, 5, "mul"));
console.log(calculator(10, 5, "div"));  
console.log(calculator(10, 5, "mod"));      
console.log(calculator(10, 0, "div"))