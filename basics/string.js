const message = "Hello, my name is Manas";
// console.log(message.length)
// console.log(message.at(-1))
// console.log(message.toUpperCase())
// message[0]='a';//  does not work
console.log(message);
// console.log()

//extracting string parts
// slice(start,end)
//substring(start,end)
//substr(start,length)
// console.log(message.slice(10,13))
// console.log(message.substring(6))
// console.log(message.substr(10,3))

//concat

// console.log(message.concat(4))

//Note : All strings method return  a new string as the strings are immutatble 
//cannot be change but replaced only

//trim removes whitespaces from behind and front doesnt work on newline character but only one whitespaces
// const trimString = " manas  "
// console.log(trimString.trim())

//padStart and padENd
//add some string at start to make the length as provided
// console.log(message.padStart(34,"123"))

//repeat()
// const text ="hello ji "
// console.log(text.repeat(5))

//replace some content
//replace one string aka part by another string
//(only replaces the first occurence)

// console.log(message.replace("Manas","Hero"))
// console.log(message.replaceAll(" ","-"))
// console.log(message.replace(/ /g,"-"))//global flag

//++++++++++++++++++++++ split method +++++++++++++++++
//provide a parameter for where to split
console.table(message.split(" "))
console.log(message.split(" "))
console.table(message.split(""))
console.table(message.split())