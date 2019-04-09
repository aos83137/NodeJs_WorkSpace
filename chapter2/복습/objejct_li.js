var sayNode = function(){
    console.log("say:node");
};

var  es = "ES";

// var oldObject = { // JSON   
//     sayJS : function(){
//         console.log('js');
//     },
//     sayNode,
// }

// oldObject[es+6] = 'Fantastic';

// oldObject.sayNode();
// oldObject.sayJS();
// console.log(oldObject.ES6);

const newObject = { //json
    sayJs(){ // java처럼 함수 선언함
        console.log('"new js"'); // 쌍따움표 안먹히네 ㄷㄷ;;
    },
    sayNode, // key와 value 이름이 같으면 한번만 쓰면된다.
    [es+6]: 'new Fantastic'
}
newObject.sayNode();
newObject.sayJs();
console.log(newObject.ES6);