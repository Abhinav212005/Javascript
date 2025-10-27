const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )  // firstly the numbers are multiplied with 10 and then 1 is added to it and then filtered
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) //chaining is done here

console.log(newNums);