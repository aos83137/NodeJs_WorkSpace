const mongoos = require('mongoose');

module.exports = () =>{
    const connect = () =>{
        if(process.env.NODE_ENV !== 'production'){
            mongoostser.set('debug', true);
        }
        mongoos.connect(
            // 몽고디비 연결을 위한 url를 지정
            'mongodb://node:1234@localhost:27017/admin'
            ,{dbName : 'node'}
            ,(err)=>{
                if(err){
                    console.log('몽고디비 연결 에러',err);
                }else{
                    console.log('몽고디비 연결 성공');
                }
            }
        );
    };
    connect();

    mongoose.connection.on('error',(error)=>{
        console.error('몽고 디비 연결 에러', err); 
    });
    mongoose.connection.on('disconnected',()=>{
        console.error('몽고디비 연길이 끊겼습니ㅣ다. 연결을 재시도합니다.'); 
        connect();
    });

    require('./user');  // 스키마 연결한다.
    require('./comment');// 스키마 연결한다.
};


