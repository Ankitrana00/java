// // function addition(number1, number2){
// //     console.log(number1+number2);
// // }
 
// // addition(4,6);
// // another type

// function addition(number1, number2){
//     // 1. console.log(number1+number2);
//     // 2. let  result = number1 + number2;
//     //    return result;
// }

// const result = addition(4,6);
// console.log(result);

// function loginMessage(username){
//     return `${username} welcome`
// }
 
// console.log(loginMessage("ankit"));



// function message(username){
//     if (username === undefined) or (!username) 
//         console.log("please enter a valid name");
//     return
        
// }

// console.log(message("ankit"));

// // split operator
// function cart(...num1){
//     return num1
// }
// console.log(cart(10, 2, 3, 4));

// function into object 

const user = {
    product : "kkk",
    price : 123,
}

function handleObject(anyobject){
    console.log(`product is ${anyobject.product} and price is ${anyobject.price}`);
    
}
 
// handleObject(user)
// or
// handleObject({
//     product : "ksjldv",
//     price : 34,
// })

// // array with function 
const array = [1, 2, 4, 6]

function secondValue(getArray){
       return getArray[1]
}
// console.log(secondValue(array));

console.log(secondValue([1, 3, 2, 4]));
