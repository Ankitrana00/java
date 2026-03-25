//const name = "ankit"
//const repoCount = 50

//console.log(`i am ${name} and this is my ${repoCount}`);

const gameName = new String("rana");
console.log(gameName);

console.log(gameName[3]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,1);
console.log(newString);

const anotherString = gameName.slice(-3,0);
console.log(anotherString);

const newStringOne = "  ankit rana  "
console.log(newStringOne.trim());

const url = "http://www.ankit.com/ankit%50ramna"
console.log(url.replace('%50',"-"));

console.log(gameName.split('-'));
 
