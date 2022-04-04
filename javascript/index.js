const lenghtEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const resultEl = document.getElementById('result');
const copyEl = document.getElementById('clipboard');
const generateEl = document.getElementById('generate');

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%¨&*()_+=-"

function getupperCaseLetters() {
    return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function getlowerCaseLetters() {
    return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword() {
    // Clean last password string
    resultEl.innerText = '';

    const len = lenghtEl.value;
    let password = '';

    if (uppercaseEl.checked) {
        password += getupperCaseLetters();
    }
    if (lowercaseEl.checked) {
        password += getlowerCaseLetters();
    }
    if (numbersEl.checked) {
        password += getNumbers();
    }
    if (symbolsEl.checked) {
        password += getSymbols();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x
    }

    resultEl.appendChild(document.createTextNode(password));
}

function generateX() {

    const xs = [];

    if (uppercaseEl.checked) {
        xs.push(getupperCaseLetters());
    }
    if (lowercaseEl.checked) {
        xs.push(getlowerCaseLetters());
    }
    if (numbersEl.checked) {
        xs.push(getNumbers());
    }
    if (symbolsEl.checked) {
        xs.push(getSymbols());
    }

    if (xs.length === 0) return '';
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = resultEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("The password was copied to clipboard!")

});