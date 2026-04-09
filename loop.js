// //   for

// for (let i = 0 ; i<= 10 ; i++){
//     const element = i ;
//         if(element >= 5){
//         console.log("5 how are you ");
//     }
//     console.log(element);
    
// }

//  
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop value : ${i}`);

// for (let j= 0; j <= 10; j++) {
//     // console.log(`inner loop value ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + " = " + i*j );
    
// }
// }

// let myArray = [1, 2, 3, 4, 5]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }
// break and continue 
// for (let index = 1; index <= 20; index++) {
//     if (index ==5) {
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
    
// }

//  for of loop
// const  arr = [1, 2, 3]
// for (const num of arr) {
//     console.log(num);
    
// };

// const greeting = ("hello")
// for (const greet of greeting) {
//     console.log(greet);
    
// }

// map 
//  map object are collections of key - value pairs 
// a key in the map may only occur once ; it is unique in the map's collection 
// map object can hold values of any type whether primitive values or object references
// map have unique keys and values can be duplicated and in the order of insertion is preserved


// const map = new Map()
// map.set('IN','India')
// map.set('US','united states')
// map.set('FR','France')
// map.set('IN','India')

// // console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ':' , value);
    
// }

// for in loop for object 

// const myObject = {
//     js : "javascript",
//     py : "python",
//     rb : "ruby",
// } 
// for (const key in myObject) {
//   console.log(`${key} shortcut is ${myObject[key]}`);
    
// for in array

// const prog = ["js","rb","cpp"]

// for (const key in prog) {
//    console.log(prog[key]);
       
// }

// for in map

// const map = new Map()
// map.set('IN','India')
// map.set('US','united states')
// map.set('FR','France')
// map.set('IN','India')

// for (const key in map) {
//    console.log(key);
   
// }

// 
// const coding = ["js", "rb", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

//  function printMe(item){
//     console.log(item);
    
//  }
// coding.forEach(printMe)

const coding = [
    { language: "js", name: "JavaScript" },
    { language: "py", name: "Python" },
    { language: "rb", name: "Ruby" },
]

coding.forEach( (item) =>{
    console.log(item.name);
    
})