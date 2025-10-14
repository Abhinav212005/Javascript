// singleton => agar constructor se object banega tab singleton hoga
// Object.create

// object literals => jab literal se banega tab multipe instances create honge

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//You can't access it with JsUser.full name
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) => hitesh@google.com
// console.log(JsUser["email"]) => hitesh@google.com
// console.log(JsUser["full name"]) => Hitesh Choudhary
// console.log(JsUser[mySym]) => mykey1 //here it is used like symbol

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) => no changes can be made now
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); => hitesh@chatgpt.com // value did not changed as the object is freezed

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
//if you want to refer same object then you can use "this" keyword
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());