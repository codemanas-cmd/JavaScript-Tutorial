const myDate = new Date(1990,0,1,5,3,45)
//syntax : () ;- provides current date
// (string : - can use mm-dd-yyyy or yyyy-mm-dd)
//seperated by comman can use yyyy,mm,dd,hours,minutes,seconds(month 0 indexed)
// console.log(myDate)
// console.log(typeof myDate)
console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())

const newDate = Date.now()
console.log('now :' , newDate)
console.log(myDate.getTime())//gets time in ms