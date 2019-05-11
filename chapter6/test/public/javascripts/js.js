var solution = 53;
function test() {
try {
var x = document.getElementById("number").value;
if (x == "") throw "입력없음";
if (isNaN(x)) throw "숫자가 아님";
if (x > solution) throw "너무 큼";
if (x < solution) throw "너무 작음";
if (x == solution) throw "성공";
}
catch (error) {
var y = document.getElementById("message");
y.innerHTML = "힌트: " + error;
}
}
