const fs = require('fs');
const http = require('http');

http.createServer((req, res) => {
    fs.readFile('../server4.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
}).listen(8081,()=>{
    console.log('8081 대기');
    
})