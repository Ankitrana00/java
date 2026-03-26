// // // singleton object through constructor 
// // // ex - object literals 
// // // object.create

// const mySymbol = Symbol("key1")

// const user = {
//     "name" : "ankit",
//     "age" : 32,
//     "email" : "ankit@google.com",
//     "location" : "moj",
//     [mySymbol] : "key1",

// }

// // console.log(user["name"])
// // console.log(user[mySymbol])


// // user.age = 33

// // // Object.freeze(user)
// // user.age = 21
// // console.log(user);

// // //function

// // user.greeting = function(){
// //     console.log("hello user");
// // }

// user.greetingTwo = function(){
//     console.log(`hello users ${this.name}`);

// // }

// // console.log(user.greeting());
// // console.log(user.greetingTwo);

// // //SINGLETON

// //const user = new Object();

// const user = {}

// user.id = 1
// user.name = "ankit" 
// user.place = "rajasthan"
// user.isLoggedIn = false

// // console.log(user);

// // const regularUser = {
// //     id : 1,
// //     email : "ankit@1",
// //     userName : {
// //         fullName : {
// //             firstName : "ankit",
// //             secondName : "rana",

// //         }
// //     }
// // }

// // console.log(regularUser.userName?.fullName.secondName);


// // const obj1 = { 1 : "a" , 2: "b" }
// // const obj2 = { 2 : "c" , 3: "d" }
// // const obj3 = { 4 : "v" , 5: "g" }

// // // const obj4 = { obj1, obj2,obj3};

// // // const obj4 = Object.assign({}, obj1, obj2, obj3);

// // const obj4 = ({ ...obj1, ...obj2, ...obj3 })
// // console.log(obj4);

// // const users = [
// //     {
// //          id : 1,
// //     email : "ankit",
// //     },
// //     {
// //          id : 2,
// //     email : "ankit",
// //     },
// // ]
// // users[0].email
// console.log(user);

// // console.log(Object.keys(user));
// // console.log(typeof (user));
// // console.log(Object.values(user));
// // console.log(Object.entries(user));

// console.log(user.hasOwnProperty('id'));

// object de-structure now

const course = {
    course : ("ankkk"),
    id : 232,
    courseInstructor : "ankit",
}
// course.courseInstructor optional

const {courseInstructor: instructor}= course
console.log(instructor);



