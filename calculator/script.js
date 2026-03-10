function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}   

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

function operate(num1, num2, op) {
    switch (op) {
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
        default:
            throw new Error("Invalid operator");
    }
}

// Calculator UI logic
const display = document.getElementById("display");
const expressionEl = document.getElementById("expression");
let currentInput = "0";
let previousInput = null;
let currentOp = null;
let resetNext = false;

const opSymbols = { add: "+", subtract: "−", multiply: "×", divide: "÷" };

function updateDisplay(value) {
    display.textContent = value;
}

function updateExpression() {
    if (previousInput !== null && currentOp) {
        expressionEl.textContent = previousInput + " " + opSymbols[currentOp];
    } else {
        expressionEl.textContent = "";
    }
}

document.querySelectorAll("[data-digit]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const digit = btn.getAttribute("data-digit");
        if (digit === "." && currentInput.includes(".")) return;
        if (resetNext) {
            currentInput = digit === "." ? "0." : digit;
            resetNext = false;
        } else {
            currentInput = currentInput === "0" && digit !== "." ? digit : currentInput + digit;
        }
        updateDisplay(currentInput);
    });
});

document.querySelectorAll("[data-op]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const op = btn.getAttribute("data-op");
        if (op === "backspace") {
            currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
            updateDisplay(currentInput);
            return;
        }
        if (previousInput !== null && !resetNext) {
            calculate();
        }
        previousInput = currentInput;
        currentOp = op;
        resetNext = true;
        updateExpression();
    });
});

document.getElementById("btn-equals").addEventListener("click", calculate);

document.getElementById("btn-clear").addEventListener("click", () => {
    currentInput = "0";
    previousInput = null;
    currentOp = null;
    resetNext = false;
    updateDisplay("0");
    updateExpression();
});

function calculate() {
    if (previousInput === null || currentOp === null) return;
    try {
        const result = operate(parseFloat(previousInput), parseFloat(currentInput), currentOp);
        currentInput = String(parseFloat(result.toFixed(10)));
        updateDisplay(currentInput);
    } catch (e) {
        updateDisplay("Error");
        currentInput = "0";
    }
    previousInput = null;
    currentOp = null;
    resetNext = true;
    updateExpression();
}
