//Hunter Keasey
//4/19/24
//JS Simple Calculator

//input
const num1 = parseInt(prompt("Type in a number."));
const num2 = parseInt(prompt("Type in another number."));

//process
const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;

//output

document.getElementById("ans1").innerHTML = `${num1} + ${num2} = ${add}`;
document.getElementById("ans2").innerHTML = `${num1} - ${num2} = ${sub}`;
document.getElementById("ans3").innerHTML = `${num1} * ${num2} = ${mult}`;
document.getElementById("ans4").innerHTML = `${num1} / ${num2} = ${div}`;