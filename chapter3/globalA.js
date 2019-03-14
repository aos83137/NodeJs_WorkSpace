module.exports = () => global.message; // 화살표 함수 p59참고
//global은 window와 비슷하게 사용
//window : BOM 객체 (Browser Object Model)의 최고 조상, root객체
//window.alert(), window.prompt() -> alert(), prompt()
//window.console.log(); --> console.log():
//global.console.log(); --> console.log();
//global.require() --> require();

//function() {return global.message;};
