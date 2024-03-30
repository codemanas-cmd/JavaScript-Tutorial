//+++++++++++++++ for in loop +++++++++++++++++++++//

//++++++++++++++++++++++++++++++++++++++++++++++Can iterate on objects

// const myObj = {
//     'js':'javascript',
//     'cpp':'c++',
//     'py': 'python',
//     'exe':'executable'
// }

// // iterates over all the key in an object

// for (const key in myObj) {
//     console.log(key)
// }

// //for accessing values
// for(const key in myObj){
//     console.log(myObj[key])
// }

// //destucturing wont work
// for(const [key,val] in myObj){
// //gives not expected output on printing key and val
//     console.log(key,val)
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//++++++++++++++++++++++++++++++++++++++++++++++Can iterate on arrays

// const arr= ['cpp',"rb","swift"]
// for(const key in arr){
//     console.log(key)//0 1 2 
//     console.log(arr[key])//elements
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++Cant be used on maps

// const map = new Map();
// map.set(1,'manas')
// map.set(2,'mahi')
// map.set(3,'ma')

// for(const key in map){
//     console.log(key)//no output
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++