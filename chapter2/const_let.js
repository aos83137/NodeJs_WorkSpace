if(true){
    var x = 3;
}
console.log(x);
//var 는 함수 스코프

if(true){
    const y =3;     
}
// console.log(y); // error -- y is not defined
// const 는 블록 스코프

const a = 0;
// a = 1; //error -- a는 constant(상수)라서 변경불가

let b = 0;
b = 1; // b는 let(변수와 같음 그러나 블록 스코프다)이다.

// const c; // error -- Missing ~~~~ const는 상수니까 선언할때 초기화 필수임!!.