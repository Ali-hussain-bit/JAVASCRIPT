let totalBalance = 5000;
let widraw = prompt();
if (totalBalance <= 5000 && widraw <= 5000 ) {
console.log("successfull");
console.log(totalBalance - widraw , "is total amount left");




}
else{
    console.log("amount insufficient");
    
}


let num1 = Number(prompt("first digit"))
let num2 = Number(prompt("first digit"))
let operator = prompt("add operator to operate")



switch (operator) {
    case "+":
        console.log(num1 + num2 );
        
        break;
        
    case "-":
 console.log(num1 - num2 );
    break;
    case "/":
 console.log(num1 / num2 );
    break;
    case "*":
 console.log(num1 * num2 );
    break;

    default:
        break;
}