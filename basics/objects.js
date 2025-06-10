const JsUser={
    name:"pavan",
    full_name:"gude pavan naren",
    age:20,
    email:"pavannarengude@gmail.com",
    isLoggedIn:false
}
console.log(JsUser.name);
console.log(JsUser.age);
console.log(JsUser.email);
console.log(JsUser.full_name);
console.log(JsUser["email"]);
console.log(JsUser["full_name"]);

JsUser.email="2203031240445@paruluniversity.ac.in";
//Object.freeze(JsUser);
//freezes the key so no manuplation is allowed
JsUser.email="2203031240445@pu.ac.in";
console.log(JsUser.email);

JsUser.greeting= function(){
   console.log("hello js user"); 
}
console.log(JsUser.greeting)
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
    console.log("Hello js USer,${this.name}");
}
console.log(JsUser.greetingTwo());
//When you freeze the object you get undefined function