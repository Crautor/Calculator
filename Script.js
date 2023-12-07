let input = '';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').value = input;
}

function clickou(number) {
    input += number;
    updateDisplay();
}

function limpar() {
    input = '';
    operator = '';
    firstOperand = null;
    document.getElementById('display').value = '';

}

function setOperator(op) {
    if (input !== '') {
        if (firstOperand === null) {
            firstOperand = parseFloat(input);
            input = '';
            operator = op;
        } else {
            result();
            operator = op;
        }
    }
}

function result() {
    if (operator !== '' && input !== '') {
        const secondOperand = parseFloat(input);
        switch (operator) {
            case '+':
                document.getElementById('display').value = firstOperand + secondOperand;
                break;
            case '-':
                document.getElementById('display').value = firstOperand - secondOperand;
                break;
            case 'x':
                document.getElementById('display').value = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand !== 0) {
                    document.getElementById('display').value = firstOperand / secondOperand;
                } else {
                    document.getElementById('display').value = 'Não é possível dividir por 0';
                }
                break;
        }
    if (secondOperand !== 0) {
        input = (firstOperand + secondOperand).toString();
    } else {
        input = 'Não é possível dividir por 0';
    }
    }
}
