const http = require('http');
//createServer하고 req하면 콜백함수를 실행 해준다.
const server = http.createServer((req, res) => {
    //화살표함수로 콜백함수를 정의
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8089, () => {
    console.log('8089번 포트에서 서버 대기 중입니다.');
});
server.on('error',(error) => {
    console.log(error);
});

