// //  this => refer current context 

// const user = {
//     username : "ankit",
//     class : "tenth",

//     message : function() {
//         console.log( `${this.username} , welcome`);
//         console.log(this);
        
//     }
// }
    
// user.message()
// user.username = "bhalla"
// user.message()

//  in browser (this) => window is global object

// dbtw this in simple function and in arrow function 
// in simple this refers to the global object 
// while in arrow this refers to the parents context

// function chai(){
//     let name = "ankit"
//     console.log(this.name);
    
// }
// chai()

// const chai = () => {
//     let name = "ankit"
//     console.log(this.name);
    
// }
// console.log(chai())

// explicit arrow function

// const chai = (num1, num2) => {
//     return num1 + num2 

// }
//  console.log(chai(2 , 3));

// implicit arrow function 
//  const chai = (num1, num2) => (num1 + num2 )

//  console.log(chai(2 , 3));

//   for objects 

//  const chai = (num1, num2) => ( { name : "ankit"})

// console.log(chai());


