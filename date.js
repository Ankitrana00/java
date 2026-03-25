//const myDATE = new Date()
//console.log(myDATE);

//console.log(typeof myDATE);

//console.log(myDATE.toString());
//console.log(myDATE.toDateString());
//console.log(myDATE.toLocaleDateString());

//let date1 = new Date(2026, 0, 1, 10, 5 );
//console.log(date1.toLocaleString());

//let myTimeStamp = Date.now();
//console.log(myTimeStamp);

//console.log(date1.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//console.log`${newDate.getDay()} and ${newDate.getMonth() + 1}`

newDate.toLocaleDateString('default',{
    weekday: 'long',
    
})