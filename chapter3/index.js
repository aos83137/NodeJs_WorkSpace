// import {odd, even} from './var';
const checkNumber = require('./func');
const {odd, even} = require('./var');

function checkStringOddOrEven(str){
    if(str.length%2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));

