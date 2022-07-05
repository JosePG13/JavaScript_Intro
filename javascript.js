//Very Easy
var num1 = 6;
var num2 = 2;
console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);

//Easy
var character1 = "Thomas";
var character2 = "John";
if (character1.length > character2.length){
    console.log(`The name ${character1} is longer than ${character2} by ${character1.length - character2.length}`);
}
else{
    console.log(`The name ${character2} is longer than ${character1} by ${character2.length - character1.length}`); 
}

//Medium
var shout = prompt("WHO IS SHOUTING?");
var whisper = prompt("who is whispering?");
var normal = prompt("Who is talking normally?");
var perShout = shout.toUpperCase();
var perwhisper = whisper.toLowerCase();
console.log(`${perShout} IS SHOUTING!`);
console.log(`${perwhisper} is whispering`);
console.log(`${normal} is talking normally.`);

//Hard
function add(){
    var num1 = prompt("Pick a number!");
    var num2 = prompt("Pick another number!");
    console.log(`Your two numbers added together is ${num1 + num2}`);
}
function sub(){
    var num1 = prompt("Pick a number!");
    var num2 = prompt("Pick another number!");
    console.log(`Your first number subtracted by your second number is ${num1 - num2}`);
}
function mult(){
    var num1 = prompt("Pick a number!");
    var num2 = prompt("Pick another number!");
    console.log(`Your numbers multiplied together is ${num1 * num2}`);
}
function div(){
    var num1 = prompt("Pick a number!");
    var num2 = prompt("Pick another number!");
    console.log(`Your first number divided by your second number is ${num1 / num2}`);
}

//Very Hard
var operator = prompt("Choose an operator to use!");
if (operator = "+"){
    add();
}
else if (operator = "-"){
    sub();
}
else if (operator = "*"){
    mult();
}
else{
    div();
}