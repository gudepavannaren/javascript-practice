//Primitive
//7 types: String,Number,boolean,null,undefined,Symbol,,BigInt

const score=100
const scoreValue=1000.3
const isLoggedin=false
const outsidetemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)
const bigNumber=342345673456n

//Refernce(Non primitive)
//Array,Objects,Functions,
const heros=["chiru","nani","pavan"];
let myObj={
    name:"pavan",
    age:20,
}
const myFunction=function(){
    console.log("hello world");
}
console.log(typeof outsidetemp);
console.log(typeof anotherId);
console.log(myObj);