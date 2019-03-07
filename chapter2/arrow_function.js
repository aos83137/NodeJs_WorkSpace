function add1(x, y){
    return x + y;
}

const add2 = (x, y) => {
    return x + y;
}

const add3 = (x, y) => x + y;

const add4 = (x, y) => (x + y);

// add1,2,3,4 는 다 같은 함수임

const a = 1;
const b = 2;

console.log(add4(a,b));
