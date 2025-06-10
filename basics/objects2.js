const User={}
User.id="123456"
User.name="Pavan"
User.isLoggedIn=false

console.log(User);

const regularUser={
    email:"pavan@gmail.com",
    fullname:{
        userfullname:{
            firstname:"pavan",
            lastname:"naren"
        }
    }
}
//console.log(regularUser);
console.log(regularUser.fullname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3=Object.assign(obj1,obj2);
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(Object.keys(User));
console.log(Object.values(User));
console.log(Object.entries(User));
console.log(User.hasOwnProperty('isLoggedIn'));