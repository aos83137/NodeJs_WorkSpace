const{odd, even} = require('./moduleJ');

const checkOddorEven = function(num){
    if(num % 2 == 1)   
        return odd;
    else 
        return even;
}

module.exports = checkOddorEven;