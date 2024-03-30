const mySym = Symbol("key1")//symbol decl
const dog = {
    name: 'tommy',
    // 'name': true, //this declaration will override the previous name
    age : 35,
    isVaccinated: true,
    "string key" : 34,//can only be accessed by []
    [mySym]:"hello",//correct way of using symbol as a key
    greeting : function(){
        console.log('hello doggy')
        return 'greeting called'
    }
}
console.log(dog)

dog.age = 23//will change the age to 23

// console.log(dog)//prints all key value pairs
// console.log(dog.name)
// console.log(dog["name"])//both are same

// console.log(dog["string key"])

// Object.freeze(dog.isVaccinated)//cant freeze individual properties like that
//wont throw any error but value will change
// Object.freeze(dog)//freezes all properties of dog 
//any further modification wont throw erros but also wont make any change
// dog.age = 12//no change
// dog.isVaccinated=false;//no change
// console.log(dog)


// console.log(dog.mySym)//wrong syntax throw undefined coz searching for a normal key
// console.log(dog[mySym])//right syntax

// console.log(dog.greeting())//also can do dog.greeting=function() .... for decl

// dog.greeting2 = function(){
//     console.log(`hello ${this.name}`)//this refers to the reference of current object
// }
// dog.greeting2()


//object assign 

const obj1 = {1:'c',2:'b'}
const obj2 = {1:'a',3:'d'}
const obj3 = {1:'d'}

// const obj3= Object.assign(obj1/*target*/,obj2/*source*/)//target acquires all the properties from sources
// //so basically returned object and target will be same
// console.log(obj3)
// console.log('obj1',obj1)//obj3===obj1

//alternative syntax
// const obj4 = Object.assign({}/*target*/,obj1,obj2,obj3)//now target is a new empty object so we saved intial
// //objects from changing
// console.log(obj4===obj1)
// console.log(obj4)//in case of two sources have same key in the resulting object key will have the value of last
// //source passed in the assign

// obj5={obj1,obj2}//object nesting

// obj6 = {...obj1,...obj2}//spread operator

// console.log(Object.keys(dog))//returns an array of keys
// console.log(Object.values(dog))//returns an array of values
// console.log(Object.entries(dog))//returns an array of arrays of key value element

// const arrKey = Object.keys(dog)
// console.log(dog[arrKey[0]])