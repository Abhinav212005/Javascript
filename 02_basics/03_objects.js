// singleton => agar constructor se object banega tab singleton hoga
// Object.create

// object literals => jab literal se banega tab multipe instances create honge

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
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
// console.log(JsUser[mySym]) => mykey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) => now changes can be made
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); => hitesh@chatgpt.com

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());