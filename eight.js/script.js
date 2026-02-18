// let food = prompt("enter a fast food")

// const { use } = require("react")




// switch (true) {
//     case food === "burger" :
//         console.log("a burger is packing ...");
        
//         break;
//     case food === "drink" :
//         console.log("a drink is packing ...");
        
//         break;
//     case food === "pizza" :
//         console.log(" a pizza packing ...");
        
//         break;
//     case food === "fries" :
//         console.log(" a fries is packing ...");
        
//         break;

//     default:
//         console.log("food is not available");
        
//         break;
// }

let mail = prompt("Enter gmail");
let password = prompt("enter password")
let User = {
    email : "ah@gmail.com",
    Password : "ali hussain"
}
// if(User.email == mail && User.Password == password){
//     console.log("you are wellcome");
    
// }
// else if (User.password != password && User.email != User.Password ) {
//     console.log("you are wrong ");
  

// }

// else if (User.email !== mail) {
//     console.log("wrong email");
    
    
// }
// else if (User.password !== password) {
//     console.log("wrong password");
    
    
// }
switch (true) {
    case User.email === mail && User.Password === password:
        console.log("you are wellcome");
        break;
  case User.email !== mail && User.Password !== password :
    console.log("you are wrong");
        break;
    case User.Password !== password && User.email === mail:
    console.log("wrong password");
        break;
   

  case User.email !== mail && User.Password === password :
    console.log("wrong email");
        break;
    default:
        console.log("INVALID");
        
        break;
}
    
    
