// const number = 10
const num = new Number(10)
// console.log(number,num)
// console.log(typeof number,typeof num)

// console.log(Math.random())
// console.log(Math.random()*10)//
// console.log(Math.floor(Math.random()*10))//values : [0,9] integers
// console.log(Math.floor(Math.random()*(10+11)))//values: [0,10] integers


//""""""""""""""""""""""""""""""""""" generallzed formula for obtaining[min,max]"""""""""""""""""

const min = 10
const max = 20
console.log((Math.floor(Math.random()*(max-min+1)))+min)

//====================== some features with number

const newNumber = 1000000000
console.log(newNumber.toString())