function calculateLog() {
    const number = parseFloat(document.getElementById('number').value);
    const base = parseFloat(document.getElementById('base').value);
    const resultElement = document.getElementById('result');

    if (isNaN(number) || isNaN(base) || base <= 0 || base === 1 || number <= 0) {
        resultElement.textContent = 'Please enter valid positive numbers and a base greater than 0 and not equal to 1.';
        return;
    }

    const result = Math.log(number) / Math.log(base);
    resultElement.innerHTML = `log<sub>${base}</sub>(${number}) = ${result}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
});
