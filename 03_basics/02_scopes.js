//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); => 10
    
}



// console.log(a); => 300
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);  // hitesh
    }
    // console.log(website); => website is not defined as it is out of scope

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); => hitesh youtube
    }
    // console.log(website); => error as it is out of scope
}

// console.log(username); => error as it is out of scope


// ++++++++++++++++++ interesting ++++++++++++++++++
// 2 ways to declare a function

console.log(addone(5))  // 6 no error

function addone(num){
    return num + 1
}



addTwo(5)  // error because you cannot access 'addTwo' before initialization  in this thype of declaration of function
const addTwo = function(num){
    return num + 2
}