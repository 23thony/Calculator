    // Anthony Granston
    // 23010824
    // 23010824@kcc.edu.jm 

    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDisplay = document.getElementById('result');
    
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    
    addButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 + num2;
        resultDisplay.textContent = `Result: ${result}`;
    });
    
    subtractButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 - num2;
        resultDisplay.textContent = `Result: ${result}`;
    });
    
    multiplyButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 * num2;
        resultDisplay.textContent = `Result: ${result}`;
    });
    
    divideButton.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const result = num1 / num2;
        resultDisplay.textContent = `Result: ${result}`;
    
        if (num2 === 0) {
            resultDisplay.textContent = `Error: Division by zero`;
        } else {
            const result = num1 / num2;
            resultDisplay.textContent = `Result: ${result}`;
    }});
    