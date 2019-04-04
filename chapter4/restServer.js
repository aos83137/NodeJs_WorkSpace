const http = require('http');
const fs = require('fs');

const users = {}; // 등록되는 사용자 정보를 저장하는 객체

http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      return fs.readFile('./restFront.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/about') {
      return fs.readFile('./about.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    } else if (req.url === '/users') { 
      //  fetch('/users', { method: 'GET' })  이게 일로옴
      return res.end(JSON.stringify(users));
    }
    return fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, 'NOT FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });
  } else if (req.method === 'POST') {
    if (req.url === '/users') {
      let body = '';
      req.on('data', (fromClientData) => {
        body += fromClientData;
      });
      return req.on('end', () => {
        console.log('POST 본문(Body):', body);
        const { name } = JSON.parse(body);
        const id = +new Date();
        users[id] = name;
        res.writeHead(201);
        res.end('등록 성공');
      });
    }
  } else if (req.method === 'PUT') {
    if (req.url.startsWith('/users/')) { // /users/로 시작한다.
      const key = req.url.split('/')[2]; //split 은 배열로 되고 [2]는 /user/다음이부분의 값임 이걸 key에 저장함
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('PUT 본문(Body):', body);
        users[key] = JSON.parse(body).name;
        //body ==> {name:'사용자수정값'}
        return res.end(JSON.stringify(users));
      });
    }
  } else if (req.method === 'DELETE') {
    if (req.url.startsWith('/users/')) {
      const key = req.url.split('/')[2];
      delete users[key]; //삭제하는 명령어 delete
      return res.end(JSON.stringify(users));
    }
  }
  res.writeHead(404, 'NOT FOUND'); //if를 다 빠져나옴 그럼 error
  return res.end('NOT FOUND');
})
  .listen(8085, () => {// 대기 성공하면 실행하는 콜백함수
    console.log('8085번 포트에서 서버 대기중입니다');
  });
