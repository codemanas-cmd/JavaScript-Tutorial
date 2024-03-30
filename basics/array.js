// let myFunc = function(){
//     console.log('hello')
// }
// const myArr = [myFunc,function(){
//     console.log('manas')
// }]
// myArr[0]()
// myArr[1]()

//conclusion :- you can even funcs as thr element of an Array
//array create shallow copies
//arrays are mutable unlikes strings

//slice and splice

//slice doesnt change the oringinal array
//syntax : myArr.slice(startIndex,endIndex)(end is exclusive)
const newArr = [0,1,2,3,4,5];
console.log('newArr: ' , newArr)
// const sliced = newArr.slice(1,3);
// console.log('sliced " ' , sliced)
// console.log('newArr after slice : ' ,newArr)

//spliced changes the content of original array
//can be used for only removing the contents and also adding new content
//syntax: myArr.splice(startIndex,removingCount,itemTOinsert1,2.......)

// const spliced = newArr.splice(1,3)
// console.log('spliced " ' , spliced)
// console.log('newArr after splice : ' ,newArr)


//adding items

// const spliced = newArr.splice(1,3,69,true,'killall')
// console.log('spliced " ' , spliced)
// console.log('newArr after splice : ' ,newArr)

//more variations
// const spliced = newArr.splice(3)
// console.log('spliced " ' , spliced)
// console.log('newArr after splice : ' ,newArr)

//more funcs
//push : elements insert at the last
//pop() ;_ remove from last
//unshift: insert at front
//shift: remove from front
//both of above take O(N) time 
//includes(num) returns bool
//indexOf(num) returns index if present or -1

//concat method concatenates two arrays and returns the new array it doesnt change
//the original array

// let arr1 = ['hi','ehllo']
// const arr2 = ['shaym']

// arr1 = arr1.concat(arr2)
// console.log(arr1)

// arr1 = arr1.concat(arr2,arr1,arr1)
// console.log(arr1)
//you can pass multiple args in concat()

// spread operator
// const boys = ['ram','shyam']
// const girls = ['riya','sita']

// const all = [...boys,...girls]
// console.log(all)

//flat() function flattens the array and requires depth as parameter
// you can pass infinity for flattening till end
//also returns a new flattened array

const temp = [12,[232,2],[2,3,2,[2,true ,5,4],[4,3,[2,3]]]]
const flattened = temp.flat(Infinity)
console.log(flattened)



