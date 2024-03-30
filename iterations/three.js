//++++++++++++++ for of loop ++++++++++++++++++++++++++++++++++

// const arr = [1,2,3,4,5]
// for(const num of arr){
//     console.log(num)
// }
// //on strings

// const str = "hey user!"
// for(const char of str){
//     console.log(char,typeof char)//string type element
// }

//maps

const map = new Map();
map.set('IN',91)
map.set('pak',92)
map.set('IN',30)//changes the existing key 'IN' and value of it as 30
// console.log(map)

//iterating in form of array of key val
// for(const element of map){
//     console.log(element,typeof element)
// }

//destucturing of array
for(const [key,val] of map){
    ///now you can access key and val in two variables
    console.log(`key:- ${key} , val :- ${val}`)
}

//Note :- Objects are not iterable by for-of loop
const myObj = {
    'name' : 'manas',
    'age' : 20,
    'gender':'M',
}

for(const element of myObj){
    console.log(element)//throws error that myObj is not iterable
}

for(const [key , val] of myObj){
    //will also throw same error
}