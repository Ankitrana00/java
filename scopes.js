// nested scope

// function one(){
//     const username = "ank";

//       function two(){
//             const web = "bbc";
//             console.log(username);
//             console.log(web);
//         }
//         console.log(web);
        
//         two()
        
    
// }
// one()

// if  loop
 if (true){
    const a = "ankit"
    if (a === "ankit"){
        const b = " raan"
    console.log(a+b);

        }
        // console.log(b); 
        
 }
//  console.log(a); 

//  hoisting 

console.log(addNum(5));
function addNum(num){
    return num +1 
}
// console.log(addNum(5));

// =>> we do declaration and hold the value at the same time 

// console.log(addNum2(5));
const addNum2 = function(num){
    return num + 1
}
console.log(addNum2(5));

