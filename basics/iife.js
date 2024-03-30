const name = 'manas';//using semicolon here is necessary

//named IIFE-immediately invoked fn
(function print1() {
    console.log('hello user')
})();

(() => {
    console.log('hello user 2')
})();

//try to access outer scope value
(() => {
    console.log(`hello ${name}`)//can access
})()

//Note :- dont forget to use semicolon before ded