//String
const name = "pavan"
const repoCount=3
//console.log(name+repoCount+"Value");\
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('pavanworld')
console.log(gameName);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));
const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-8,4);
console.log(anotherString);