// const multiplyArrow = factor => x => x * factor;

// function multiplyFunction(factor) {
//     return function f(x) {
//         console.log(arguments);
//         return x * factor;
//     }
// }

// const multiplyByThree = multiplyFunction(3);

// const heavyDuty = length => {
//     const dataArray = [];
//     for (i = 0; i < length; i++) {
//         dataArray.push(i);
//     }
//     return (index) => dataArray[index];
// }

// const findData = heavyDuty(1000);

let view;

function initialize() {
    view = "READY";
    console.log("View has been set!")
    return () => console.log(view);
};

const initialize = setView();