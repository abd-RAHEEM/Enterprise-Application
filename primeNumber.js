function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

document.getElementById("primeForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const inp = document.getElementById("numberinp").value;
    const num = parseInt(inp);
    const resultDiv = document.querySelector(".result"); // ✅ Correct way to select the result div

    if (isNaN(num)) {
        window.alert("Enter a valid Number");
        resultDiv.innerHTML = "❌ Please enter a valid number.";
    } else {
        if (isPrime(num)) {
            window.alert("Prime Number");
            resultDiv.innerHTML = "✅ " + num + " is a Prime Number.";
        } else {
            window.alert("Not a Prime Number");
            resultDiv.innerHTML = "❌ " + num + " is NOT a Prime Number.";
        }
    }
});
