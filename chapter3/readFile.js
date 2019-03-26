const fs = require('fs');

fs.readFile('./readme.txt',(err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});
// 파일읽기!!

fs.writeFile('./writeme.txt', '글이 입력됩니다.', (err) => { //파일 쓰기!!
    if(err){
        throw err;
    }
    fs.readFile('./writeme.txt',(err,data) => {
        if(err){
            throw err;      
        }
        console.log(data.toString());     
    });
});

