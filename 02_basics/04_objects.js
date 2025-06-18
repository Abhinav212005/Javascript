// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); => like this also we can use it ? for existence


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } => { obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"} }
// const obj3 = Object.assign({}, obj1, obj2, obj4) =>{ '1': "a", '2': "b", '3': "a", '4': "b", '5': "a", '6': "b" }

const obj3 = {...obj1, ...obj2} // => { '1': "a", '2': "b", '3': "a", '4': "b" }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); [all keys will come in this array]
// console.log(Object.values(tinderUser)); [all values will come in this array]
// console.log(Object.entries(tinderUser)); [ [key value pair will come here], [], [] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); => true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor} = course
//// console.log(courseInstructor); => hitesh

const {courseInstructor: instructor} = course // now we can call courseInstructor by calling instructor
console.log(instructor); // hitesh

//Object destructuring

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
