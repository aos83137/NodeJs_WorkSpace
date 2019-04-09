console.log('---------------old Object----------------------');
var sayNode = function(){
    console.log('Node');
};

var es = "ES";
// var oldObject = {
//     sayJS: function(){
//         console.log("js");
//     },
//     sayNode:sayNode,
// };
// oldObject[es+6] = 'Fantastic';


// oldObject.sayNode();
// oldObject.sayJS();
// console.log(oldObject.ES6);

//--------위는 원래 쓰던 형식 아래는 객체 리터럴
console.log('---------------new Object----------------------');
const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es+6]:'Fantastic',
};
newObject.sayJS();
newObject.sayNode();
console.log(newObject.ES6);