const subtractTwo = (num) => {
    return num - 2;
}

const calculate = (num1, num2) => {
    return num1 + subtractTwo(num2);
}

debugger;

calculate(4, 5);