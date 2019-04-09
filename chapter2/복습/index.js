const{odd, even} = require('./moduleJ');
const checkNumber = require('./func');

function checkStringOddorEven(str){
    if(str.length % 2 == 1){ // 0면 false 그 이외는 true
        return odd;
    }else
    return even;
}

console.log(checkNumber(101));
console.log(checkStringOddorEven('hello1'));
