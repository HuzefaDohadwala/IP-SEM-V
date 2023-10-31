// Addition function
function add(a, b) {
    return a + b;
}

// Subtraction function
function subtract(a, b) {
    return a - b;
}

// Multiplication function
function multiply(a, b) {
    return a * b;
}

// Division function
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

//Factorial function
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Sum of array function
function sumArray(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

//Simple interest function
function calculateSimpleInterest(principal, rate, time) {
    // Ensure rate is in decimal form (e.g., 5% as 0.05)
    rate = rate / 100;

    const interest = principal * rate * time;
    const amount = principal + interest;

    return {
        principal,
        rate,
        time,
        interest,
        amount,
    };
}

//Compound interest function
function calculateCompoundInterest(principal, rate, time, n) {
    // Ensure rate is in decimal form (e.g., 5% as 0.05)
    rate = rate / 100;

    const amount = principal * Math.pow(1 + rate / n, n * time);
    const interest = amount - principal;

    return {
        principal,
        rate,
        time,
        n,
        interest,
        amount,
    };
}

