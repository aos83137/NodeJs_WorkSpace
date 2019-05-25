const mongoose = require('mongoose');

module.exports = ()=>{ // require()함수를 사용한곳에 이 내용을 준다
                        //즉 다른js파일에서 require('index')를 하면 반환값으로 이 함수가 반환됨
    const connect = () =>{
        if(process.env.NODE_ENV !== 'production'){
            mongoose.set('debug', true); // 개발 환경이 몽구스가 아닐경우를 확인할 수 있는 부분
        }
        mongoose.connect('mongodb://node:1234@localhost:27017/admin', //connect첫번째 인수 uri
        { // options 접속을 시도하는 주소의 db는 admin인데 실제사용할 db는 yongoose라서 옵션입력
            dbName: 'yongoose',
        },(error) =>{
            if(error){
                console.log('yongoose접속 에러...', error);
            }else{
                console.log("yongoose접속 완려");
            }
        });
    };
    connect(); //위에 만든 함수 실행
    mongoose.connection.on('error',(error)=>{ // 이벤트리스너
        console.error('몽고디비 connection.on부분 에러');
    });
    mongoose.connection.on('disconnected', () => {        // 이벤트리스너
        console.error('몽고디비 connection.on부분 에러 연결 끊김 -> 재시도');
        connect();
    });
    require('./usr'); // 정의된 스키마 연결
    require('./cmnt'); // 정의된 스키마 연결
};

